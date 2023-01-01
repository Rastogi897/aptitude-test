var express = require("express");
var router = express.Router({ mergeParams: true });
const path = require("path");
var {
    getHTMLFromPage,
    getHTMLFromPageWithDepth,
    getDatabase,
} = require("../logic/notion");

var {
    categories,
    getQuestionsOfCert,
    getSingleQuestionOfCert,
} = require("../logic/mappings");

router.get(["/test-notion-page"], async (req, res) => {
    console.log("AAA");

    const renderHTML = await getHTMLFromPage({
        id: "fa35e8ea-81e6-4009-9055-0ae11fec9dc7",
    });

    res.render("notionSimplePage", {
        renderHTML,
    });
});

router.get("/test-notion-structured-page", async (req, res) => {
    const renderHTML = await getHTMLFromPageWithDepth({
        id: "fa35e8ea-81e6-4009-9055-0ae11fec9dc7",
    });

    res.render("notionSimplePage", {
        renderHTML: renderHTML
            .filter((x) => x.title === "HTML")
            .map((x) => x.html)
            .join(""),
    });
});

router.get("/test-notion-database", async (req, res) => {
    res.send(await getDatabase({ id: "38007be7-574d-492d-95a9-b6c697ae3276" }));
});

// Landing page the very end
// Landing Page
router.get(["/"], (req, res) => {
    res.render("index", {
        originalUrl: "https://www.freecertificationdumps.com",
        canonicalUrl: "https://www.freecertificationdumps.com",
        fullWidth: true,
        categories,
        title: "Free certification dumps",
        description:
            "This website provides free certification dumps to help you prepare for your IT certification exams. Get the latest questions and answers for the most popular IT certification exams and instantly download the files you need to succeed.",
        faqsData: [
            {
                q: "Are free certification dumps reliable?",
                a: "Yes. All of the questions and answers on free certification dumps are carefully researched and verified to ensure accuracy. This allows for reliable preparation for your exam.",
            },
            {
                q: "Is it safe to use free certification dumps?",
                a: "Yes. Free certification dumps are kept securely in an encrypted platform and are 100% safe to use.",
            },
            {
                q: "What type of information should I expect to find in free certification dumps?",
                a: "Free certification dumps provide you with actual exam questions, detailed explanations, and practice sets. They also have community discussion boards and time tracking tools so you can maximize your performance on the exam.",
            },
            {
                q: "How do I access free certification dumps?",
                a: "Free certification dumps are available to view and read for free on this website unlike many websites where you have to login.",
            },
        ],
    });
});

module.exports = router;
