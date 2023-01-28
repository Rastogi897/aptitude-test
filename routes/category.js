var express = require("express");
var router = express.Router({ mergeParams: true });
const path = require("path");
const fetch = require("node-fetch");
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

const categoryRender = (category) => async (req, res) => {
    var catData = categories[category];
    if (!catData) {
        res.status(404).send("Not found");
        return;
    }

    res.render("category", {
        catData,
        title: catData.title,
        description: catData.description,
        canonicalUrl: `https://www.freecertificationdumps.com/exam/${category}`,
        faqsData: catData.faqsData,
    });
};

const certRender = (category, cert) => async (req, res) => {
    console.log("certRender", category, cert);
    var catData = categories[category];
    if (!catData) {
        res.status(404).send("Not found");
        return;
    }

    console.log("catData: ", catData.list[0].metadata)
    var certData = catData.list[0];
    // var certData = catData.list.find((x) => x.slug === "vr-test");
    // console.log("certData: ", certData)
    // if (!certData) {
    //     res.status(404).send("Not found");
    //     return;
    // }

    res.render("certification", {
        catData,
        certData,
        title: catData.list[0].title,
        description: catData.list[0].description,
        canonicalUrl: `https://www.freecertificationdumps.com/exam/${category}}`,
    });
};

const testRender = (category) => async (req, res) => {
    console.log("testRender", category);
    var catData = categories[category];
    if (!catData) {
        res.status(404).send("Not found");
        return;
    }

    var cert = catData.list[0].slug;
    var certData = catData.list.find((x) => x.slug === cert);
    if (!certData) {
        res.status(404).send("Not found");
        return;
    }

    // check if the req query has nocache param
    var force = !!req.query.nocache;

    var { success, error, data } = await getQuestionsOfCert({
        category,
        cert,
        page: 1,
        limit: 20,
        force,
    });

    var { data: questions, total, limit } = data || {};

    console.log("questions: ", questions)

    if (!success) {
        res.status(404).send(error);
        return;
    }

    let correctAnswers = new Array(20);
    correctAnswers.fill(0);

    res.render("test", {
        catData,
        certData,
        questions,
        correctAnswers
    }
)};

const certQuestionsPaginationRender =
    (category, cert, page = 1) =>
    async (req, res) => {
        console.log(page);
        var catData = categories[category];
        if (!catData) {
            res.status(404).send("Not found");
            return;
        }
        
        var certData = catData.list.find((x) => x.slug === cert);
        if (!certData) {
            res.status(404).send("Not found");
            return;
        }

        // check if the req query has nocache param
        var force = !!req.query.nocache;

        var { success, error, data } = await getQuestionsOfCert({
            category,
            cert,
            page,
            limit: 10,
            force,
        });

        var { data: questions, total, limit } = data || {};

        if (!success) {
            res.status(404).send(error);
            return;
        }

        res.render("questions", {
            catData,
            certData,
            questions,
            total,
            page,
            from: (page - 1) * 10 + 1,
            to: ((page * 10) <= total ? (page * 10) : total),
            allPages: Math.ceil(total / limit),
            limit,
            title: `${certData.title} Questions: Page ${page}`,
            description: `${certData.description}: Page ${page}`,
            canonicalUrl: `https://www.freecertificationdumps.com/exam/${category}/${cert}/view/page/${page}`,
            nextUrl:
                page < Math.ceil(total / limit)
                    ? `/${category}/${cert}/view/page/${page + 1}`
                    : null,
            prevUrl:
                page > 1
                    ? `/${category}/${cert}/view/page/${page - 1}`
                    : null,
        });
    };

const certQuestionRender = (category, cert, qId) => async (req, res) => {
    var catData = categories[category];
    if (!catData) {
        res.status(404).send("Not found");
        return;
    }
    var certData = catData.list.find((x) => x.slug === cert);
    if (!certData) {
        res.status(404).send("Not found");
        return;
    }

    // check if the req query has nocache param
    var force = !!req.query.nocache;

    var { success, error, data } = await getSingleQuestionOfCert({
        category,
        cert,
        force,
        questionId: qId,
    });

    var { question } = data || {};

    if (!success) {
        res.send(404).send(error);
        return;
    }

    res.render("question", {
        catData,
        certData,
        questions: [question],
    });
};

module.exports = {
    categoryRender: categoryRender,
    certQuestionsPaginationRender: certQuestionsPaginationRender,
    certRender: certRender,
    certQuestionRender: certQuestionRender,
    testRender: testRender,
};
