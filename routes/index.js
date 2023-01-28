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

const { certRender, testRender } = require("./category");

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
                q: "Are employment aptitude tests reliable?",
                a: "Yes. All of the questions and answers on employment aptitude tests are carefully researched and verified to ensure accuracy. This allows for reliable preparation for your exam.",
            },
            {
                q: "Is it free to use employment aptitude test?",
                a: "Yes. all the tests are absolutly free for our users. It requires no Credit card or sign up. Expreience the smooth process and improve our aptitude skills with free and quality problems",
            },
            {
                q: "What type of information are available in employment aptitude tests?",
                a: "Free employment aptitude tests provide you with actual exam questions, detailed explanations, and practice sets. It contains time tracking tools so you can maximize your performance",
            },
            {
                q: "How do I access free aptitude tests?",
                a: "These tests are available to view and read for free on this website unlike many websites where you have to login.",
            },
            {
                q: "What domains are covered in the tests?",
                a: "The tests contains all major domains, including verbal, spatial, abstract, logical, numerical, error detection, data interpretation and english. Each of them conatains 50+ qualily problems and free tests ",
            },
        ],
    });
});

router.get("/:category/online-test", (req, res) => {
    testRender(req.params.category)(req, res);
})

router.get('/:category', (req, res) => {
    certRender(req.params.category)(req, res);
})

module.exports = router;
