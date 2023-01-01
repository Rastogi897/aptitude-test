const Queue = require("bull");

let submissionQueue;

// try {
//     submissionQueue = new Queue(
//         "submission-queue",
//         `${process.env.REDIS_URL}2`
//     );
// } catch (err) {
//     console.log(err);
// }

module.exports = {
    submissionQueue,
};
