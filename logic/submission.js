const db = require("../services/db");
require("isomorphic-fetch");
require("es6-promise").polyfill();
var allSettled = require("promise.allsettled");
const { sendErrorDiscord } = require("../services/alerts");
const { sendResultToWebhook } = require("../services/webhook");
const { getProblem } = require("./problem");
const runnerUrls = process.env.RUNNER_URLS.split(",").map(
    (url) => `https://${url}`
);
const sleep = require("util").promisify(setTimeout);

function getRunners(number_of_runners) {
    // Shuffle array
    const runnerUrlsshuffled = [...runnerUrls].sort(() => 0.5 - Math.random());

    var selected = [];
    while (number_of_runners > 0) {
        selected = selected.concat(
            runnerUrlsshuffled.slice(
                0,
                Math.min(number_of_runners, runnerUrls.length)
            )
        );
        number_of_runners -= Math.min(number_of_runners, runnerUrls.length);
    }
    return selected;
}

async function getStatus({ status, stdout, expected_output }) {
    if (status.description !== "Accepted") {
        return {
            code: status.id,
            name: status.description,
        };
    } else {
        if ((stdout || "").trim() === (expected_output || "").trim()) {
            return {
                code: status.id,
                name: "Accepted",
            };
        } else {
            return {
                code: 4,
                name: "Wrong Answer",
            };
        }
    }
}

async function addTokenRequest({ source, compilerId, problem, i, runners }) {
    // Pass testcase ka input, Time it however we are doing it, Compare with output - Trim compare
    try {
        let res = await fetch(`${runners[i]}/submissions/`, {
            method: "post",
            body: JSON.stringify({
                source_code: source,
                language_id: compilerId,
                stdin: problem.testcases[i].input,
                cpu_time_limit: problem.testcases[i].timeLimit,
            }),
            headers: { "Content-Type": "application/json" },
        });
        let { token } = await res.json();
        return {
            token,
            testId: i,
            expected_output: problem.testcases[i].output,
        };
    } catch (err) {
        console.log("Error in fetching token internal", err);
        return {
            error: err,
        };
    }
}

async function addSubmissionRequest({ submissionTokens, i, runners }) {
    try {
        let res;
        let attempts = 20;
        let interval = 500;
        while (attempts--) {
            let response = await fetch(
                `${runners[i]}/submissions/${submissionTokens[i].token}`
            );
            res = await response.json();
            if (res.status && res.status.id > 3) {
                break;
            } else {
                await sleep(interval);
            }
        }
        if (
            !((res || {}).status || {}).id ||
            ((res || {}).status || {}).id < 3
        ) {
            console.log("Timeout error while fetching submissions");
            return {
                error: "timeout",
            };
        } else {
            return {
                number: submissionTokens[i].testId,
                status: await getStatus({
                    status: res.status,
                    stdout: res.stdout,
                    expected_output: submissionTokens[i].expected_output,
                }),
                time: res.time,
                memory: res.memory,
            };
        }
    } catch (err) {
        console.log("Error while fetching submission internal", err);
        return {
            error: err,
        };
    }
}

async function processSubmission({ jobId, problemCode, source, compilerId }) {
    const pool = await db.get();
    try {
        // Update submission status for other executors to avoid
        pool.query(
            "UPDATE compilers.submissions SET result=$1::json WHERE job_id=$2",
            [
                JSON.stringify({
                    status: { code: 1, name: "processing" },
                }),
                jobId,
            ]
        );

        // Fetch all details from DB of that problem id
        const { problem, error } = await getProblem({ code: problemCode });
        if (error) {
            console.log("Error in fetching problem", error);
            throw new Error("problem not found");
        }

        const runners = getRunners(problem.testcases.length);

        // For each testcase, hit runners concurrently
        let submissionTokens = [];
        let tokenPromises = [];
        problem.testcases.forEach((_, i) => {
            tokenPromises.push(
                addTokenRequest({ source, compilerId, problem, i, runners })
            );
        });
        let tokenPromisesResponses = await allSettled(tokenPromises);
        submissionTokens = tokenPromisesResponses.map((el) => el.value);
        if (submissionTokens.filter((el) => el.error).length > 0) {
            console.log(
                "Error in fetching tokens ",
                submissionTokens.filter((el) => el.error)
            );
            throw new Error("token fetching failed");
        }

        // Collate the results
        let finalResults = [];
        let submissionPromises = [];
        submissionTokens.forEach((_, i) => {
            submissionPromises.push(
                addSubmissionRequest({ submissionTokens, i, runners })
            );
        });
        let submissionPromisesResponses = await allSettled(submissionPromises);
        finalResults = submissionPromisesResponses.map((el) => el.value);
        if (finalResults.filter((el) => el.error).length > 0) {
            console.log(
                "Error in fetching submissions",
                finalResults.filter((el) => el.error)
            );
            throw new Error("submission fetching failed");
        }

        let flag = 0;
        let flagStatus;
        let finalStatus = {};
        for (let i = 0; i < finalResults.length; i++) {
            if (finalResults[i].status.code != 3) {
                flag = 1;
                flagStatus = finalResults[i].status;
                break;
            }
        }

        if (flag) {
            switch (flagStatus.code) {
                case 4:
                    finalStatus = Object.assign({}, finalStatus, {
                        code: 14,
                        name: "wrong answer",
                    });
                    break;
                case 5:
                    finalStatus = Object.assign({}, finalStatus, {
                        code: 13,
                        name: "time limit exceeded",
                    });
                    break;
                case 6:
                    finalStatus = Object.assign({}, finalStatus, {
                        code: 11,
                        name: "compilation error",
                    });
                    break;
                case 13:
                    finalStatus = Object.assign({}, finalStatus, {
                        code: 20,
                        name: "internal error",
                    });
                    break;
                case 14:
                    finalStatus = Object.assign({}, finalStatus, {
                        code: 19,
                        name: "illegal system call",
                    });
                    break;
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    finalStatus = Object.assign({}, finalStatus, {
                        code: 12,
                        name: "runtime error",
                    });
                    break;
            }
        } else {
            finalStatus = Object.assign({}, finalStatus, {
                code: 15,
                name: "accepted",
            });
        }

        // save in DB
        const { rows: subRows } = await pool.query(
            "UPDATE compilers.submissions SET result=$1::json, executing=$2 WHERE job_id=$3 RETURNING *",
            [
                JSON.stringify({
                    status: finalStatus,
                    testcases: finalResults,
                }),
                null,
                jobId,
            ]
        );

        // hit Adaface-sphere webhook to submit the results
        sendResultToWebhook({ body: subRows[0] });

        return {
            isProcessed: true,
            result: subRows[0],
        };
    } catch (err) {
        // timeout the submission, update in db and send to webhook + slack
        let timeoutStatus = {};
        timeoutStatus = Object.assign({}, timeoutStatus, {
            code: 13,
            name: "time limit exceeded",
        });

        const { rows: subRows } = await pool.query(
            "UPDATE compilers.submissions SET result=$1::json, executing=$2 WHERE job_id=$3 RETURNING *",
            [JSON.stringify({ status: timeoutStatus }), null, jobId]
        );

        sendResultToWebhook({ body: subRows[0] });
        sendErrorDiscord({
            message: `Could not execute submission for job id ${jobId}, problem ${problemCode} for language id ${compilerId}`,
            data: {
                source,
                problemCode,
                compilerId,
                jobId,
            },
        });

        console.log("Final Error: ", err);
        return {
            isProcessed: false,
            result: subRows[0],
        };
    }
}

module.exports = {
    processSubmission,
};
