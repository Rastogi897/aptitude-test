require('dotenv').config()
const { GoogleSpreadsheet } = require('google-spreadsheet');
const fetch = require("node-fetch");

var categories = {
  verbal: {
    title: "Verbal Reasoning Test",
    logo: "Verbal",
    description:
      "Verbal reasoning test assess a candidate's ability to analyze written information, critical thinking and problem-solving skills.",
    commentsSlug: "verbal",
    sublink: "vr-test",
    list: [
      {
        slug: "vr-test",
        title: "AWS Certified Solutions Architect - Associate certification",
        description:
          "Practice for AWS Certified Solutions Architect - Associate certification exams with this 100% Free AWS Certified Solutions Architect - Associate certification dumps. It contains free real exam questions from the actual AWS Certified Solutions Architect - Associate certification tests.",
        sheetId: "1yO_PrMcx5FwlCwYmkh02utgya9fz-h5k7h-zPN_6VsA",
        gId: "0",
        baseGId: "0",
        commentsSlug: "vr-test",
        metadata: {
          examName: "AWS Certified Solutions Architect - Associate",
          examCode: "SAA-C02",
          about:
            "AWS Certified Solutions Architect - Associate showcases knowledge and skills in AWS technology, across a wide range of AWS services. The focus of this certification is on the design of cost and performance optimized solutions, demonstrating a strong understanding of the AWS Well-Architected Framework. This certification can enhance the career profile and earnings of certified individuals and increase your credibility and confidence in stakeholder and customer interactions.",
          testimonial:
            "I just took and passed the AWS Certified Solutions Architect - Associate exam recently, and I can tell you that the free certification dumps provided by Free Certification Dumps were extremely helpful in my preparation. The dumps were comprehensive, up-to-date, and full of relevant questions that covered all the areas needed to pass the exam. I am now a proud holder of the AWS certification, and I owe it to FCD dumps! Thanks.",
          testimonialFrom: "Linda Jonson, AWS Architect at Prima Solutions",
          whyCertification: [
            "AWS Certified Solutions Architect - Associate certification exam dumps can be a great way for students to prepare for their AWS Certified Solutions Architect - Associate certification exam. These dumps provide students with a comprehensive understanding of the topics that are covered in the exam and allow them to gain the necessary knowledge and skills needed to pass the exam. With AWS Certified Solutions Architect - Associate certification exam dumps, students can practice their knowledge and skills in a safe and controlled environment, ensuring that they are ready for the real exam.",
            "Using AWS Certified Solutions Architect - Associate certification exam dumps can help students save time and money by reducing the amount of time it takes to study for the exam. These dumps are designed to provide comprehensive information about the various topics covered in the exam and can help students become familiar with the exam format. This ensures that students are able to pass the exam on their first attempt.",
            "AWS Certified Solutions Architect - Associate certification exam dumps are also a great way for students to get feedback on their performance. This feedback can be used to identify areas of improvement, allowing students to focus on the areas where they need to improve the most. This reduces the amount of time it takes to study and can help students become confident in their ability to pass the exam.",
          ],
        },
      },
    ],
    faqsData: [
      {
        q: "What is AWS certification?",
        a: "AWS certification is a recognition provided by Amazon Web Services for individuals who demonstrate expertise with specific AWS technologies. Individuals who complete the certification process successfully will receive an AWS certification badge that can be displayed on their CV or resume and a digital badge that can be displayed on websites or other digital mediums.",
      },
      {
        q: "How do I get started with AWS certification?",
        a: "You can get started with AWS certification by signing up for an AWS account, exploring the various AWS services and products, and then taking the complimentary AWS certification course. After successfully completing the course, you will be eligible to take the certification exam.",
      },
      {
        q: "What is AWS free certification dumps?",
        a: "AWS free certification dumps are practice tests that help you prepare for the AWS certification exam. The practice questions are designed to simulate real exam scenarios and help you gauge your readiness for the actual certification exam.",
      },
      {
        q: "Who should use AWS free certification dumps?",
        a: "AWS free certification dumps are designed for individuals who are interested in taking AWS certification exams. They are also a great way for anyone taking the certification exam to gain experience in working with AWS technologies.",
      },
    ],
    features: [
      {
        f: "Detailed Explanations",
        d: "The AWS free certification dumps provide detailed explanations of all the topics relating to the AWS certification exam. The explanations are comprehensive and cover a wide range of topics to help the learner understand the concepts and the exam structure.",
      },
      {
        f: "Practice Exams",
        d: "The AWS free certification dumps include practice exams to help the learner prepare for the certification exam. These practice exams are designed to help the learner understand and master the topics related to the exam. ",
      },
      {
        f: "Test Taking Tips",
        d: "The AWS free certification dumps also include test taking tips to help the learner understand the best approaches for taking the exam. These tips will help the learner maximize their performance and increase their chances of passing the exam.",
      },
      {
        f: "Online Support",
        d: "The AWS free certification dumps provide online support to help the learner with queries or assistance. The online support team is available 24/7 to help the learner with any questions or issues.",
      },
    ],
  },
  spatial: {
    title: "Spatial Reasoning Test",
    logo: "Spatial",
    description:
      "Spatial reasoning test assess a candidate's ability to manipulate 2D and 3D shapes and figures, and ability to visualize.",
    commentsSlug: "spatial",
    sublink: "sr-test",
    list: [
      {
        slug: "sr-test",
        title: "Exam AZ-900: Microsoft Azure Fundamentals",
        description:
          "Practice for AZ-900: Microsoft Azure Fundamentals certification exams with this 100% Free AZ-900: Microsoft Azure Fundamentals dumps. It contains free real exam questions from the actual AZ-900: Microsoft Azure Fundamentals certification tests.",
        sheetId: "1gPvKOv_YkMthVf9LuzV51zMjWaTbDHZG_VtiEJQORjg",
        gId: "612179746",
        baseGId: "0",
        commentsSlug: "sr-test",
        metadata: {
          examName: "Microsoft Azure Fundamentals",
          examCode: "AZ-900",
          about:
            "Exam AZ-900: Microsoft Azure Fundamentals is an introductory-level certification exam designed to validate knowledge of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, and Azure pricing and support. This exam is great for those new to cloud computing who want to demonstrate their knowledge of Azure. It covers a broad range of topics, including cloud concepts, Azure services, security, privacy, pricing, and support. It is a great first step in preparing for more advanced Azure-related certifications. As an introductory level certification, it is strongly recommended to those new to cloud computing who want to demonstrate their knowledge of Azure.",
          testimonial:
            "I recently used Free Certification Dumps' AZ-900: Microsoft Azure Fundamentals exam dumps to help me prepare for my Microsoft Azure certification exam. The exam dumps were comprehensive and up to date, containing all the information I needed to be successful. I found the practice tests to be very helpful in familiarizing myself with the exam structure and understanding the types of questions I was likely to encounter. The explanations for each answer were also extremely helpful and provided a deeper understanding of the material. All in all, I was very pleased with Free Certification Dumps and would highly recommend their exam dumps to anyone looking to get certified in Microsoft Azure.",
          testimonialFrom: "John Smith, Senior Developer, Acme Corporation",
          whyCertification: [
            "The Microsoft Azure Fundamentals AZ-900 exam is one of the most popular tests that aspiring cloud professionals must take in order to demonstrate their knowledge and understanding of the Azure platform. As such, it is important for students to have access to reliable and up-to-date AZ-900 exam dumps to help them prepare for the exam.",
            "Free AZ-900 exam dumps are an excellent way for students to get an understanding of the topics that the exam covers, as well as to familiarize themselves with the exam format and question types. Exam dumps provide students with practice questions that help them understand the material better and become more comfortable with the test environment. Additionally, exam dumps allow students to practice their time management skills and ensure they can complete the test in the allotted time. Since the AZ-900 exam is a multiple-choice test, being able to quickly and accurately answer questions is essential for getting a good score.",
            "Using free AZ-900 exam dumps also helps students become more familiar with the exam topics. Exam dumps typically contain questions on topics such as Azure services, Azure resource manager, Azure storage, and Azure networking. These topics are all important for students to understand in order to pass the exam.",
          ],
        },
      },
    ],
    features: [
      {
        f: "Detailed coverage of all the main topics",
        d: "Azure free certification dumps provides detailed coverage of all the topics required to pass the exam, making it easier to understand the concepts.",
      },
      {
        f: "Step-by-step explanation of the topic",
        d: "The step-by-step explanation of the topics gives the candidates a better understanding of the various procedures and methods used in Azure.",
      },
      {
        f: "Practice tests and assessment tools",
        d: "Azure free certification dumps also provides practice tests and assessment tools to ensure that the candidates are well-prepared for the exams",
      },
      {
        f: "Free updates",
        d: "The free updates offered by the dumps make sure that the candidates are always up to date with the latest information.",
      },
    ],
    faqsData: [
      {
        q: "What are the most popular Azure free certification dumps?",
        a: "The most popular Azure free certification dumps include: AZ-900 Microsoft Azure Fundamentals, AZ-104 Microsoft Azure Administrator, AI-900 Microsoft Azure AI Fundamentals and DP-100 Designing and Implementing a Data Science Solution on Azure.",
      },
      {
        q: "How do I know if an Azure free certification dump is reliable?",
        a: "A reliable Azure free certification dump should be from a trusted source such as Microsoft Learning and should include detailed and up-to-date content. It is also important to note that some dumps may contain incorrect information, so it is best to double-check any answers against the most recent Microsoft documentation.",
      },
      {
        q: "Do I need to pay for Azure free certification dumps?",
        a: "No, most Azure free certification dumps are completely free. However, some websites may charge a one-time fee for access to their dumps.",
      },
    ],
  },
  logical: {
    title: "Logical Reasoning Test",
    logo: "Logical",
    description:
      "Logical reasoning test assess a candidate's ability to think critically and solve problems by analyzing information and arguments.",
    commentsSlug: "logical",
    sublink: "lr-test",
    list: [
      {
        slug: "lr-test",
        title: "Tableau Certified Data Analyst Exam (TDS-C01)",
        description:
          "Practice for Tableau Certified Data Analyst Exam (TDS-C01) with this 100% Free Tableau Certified Data Analyst Exam dumps. It contains free real exam questions from the actual Tableau Certified Data Analyst Exam (TDS-C01) tests.",
        sheetId: "1gPvKOv_YkMthVf9LuzV51zMjWaTbDHZG_VtiEJQORjg",
        gId: "128086106",
        baseGId: "0",
        commentsSlug: "lr-test",
        metadata: {
          examName: "Tableau Certified Data Analyst Exam",
          examCode: "TDS-C01",
          about:
            "The Tableau Certified Data Analyst Exam (TDS-C01) is a rigorous examination that tests the knowledge and skills of professionals in data analysis and visualization. The exam covers a wide range of topics, such as data manipulation, data analysis, and data visualization. The exam is based on the Tableau Desktop Professional product, so having experience in working with Tableau is a huge advantage. The exam consists of 50 multiple-choice questions that must be completed in two hours. Passing the exam will demonstrate the candidate's expertise in data analysis and visualization, and will give them the credentials they need to further their career.",
          testimonial:
            "I recently used Free Certification Dumps' Tableau Certified Data Analyst Exam (TDS-C01) dumps to help me pass the exam and it was an amazing experience. The questions were accurate and up to date with the most recent exam versions. Also, the content was well organized and easy to understand. I was able to increase my knowledge and skills with the help of the TDS-C01 dumps and I am now a certified Tableau Data Analyst. My name is Ibabew, and I am the Senior Data Analyst for Zeineth Company. Thank you Free Certification Dumps for helping me to pass my exam!",
          testimonialFrom: "Ibabew, Senior Data Analyst, Zeineth Company",
          whyCertification: [
            "Tableau Certified Data Analyst Exam (TDS-C01) dumps are a great way for students to prepare for their real exam. These dumps provide students with a comprehensive review of the topics covered on the exam and allow students to practice and ensure that they have a thorough understanding of the material. The dumps also allow students to familiarize themselves with the format of the exam and the types of questions that they may be asked.",
            "The dumps are designed to provide students with a comprehensive overview of the topics on the exam and to provide practice questions that help them hone their skills. The practice questions allow students to test their knowledge and understanding of the material and to gauge their readiness for the real exam. The dumps also provide students with a comprehensive review of the topics and an understanding of the format of the exam.",
            "The use of Tableau Certified Data Analyst Exam (TDS-C01) dumps is an effective way for students to prepare for their real exam. The dumps provide students with a comprehensive review of the topics and an understanding of the format of the exam. The practice questions allow students to hone their skills and become better prepared for the real exam.",
          ],
        },
      },
    ],
    faqsData: [
      {
        q: "What types of Tableau Certifications are available?",
        a: "Tableau offers two different certifications: the Tableau Desktop Specialist certification and the Tableau Server Specialist certification. The Tableau Desktop certification is designed to validate proficiency with Tableau Desktop, while the Tableau Server certification is designed to demonstrate proficiency in the server-side components of Tableau.",
      },
      {
        q: "How do I validate my Tableau certification?",
        a: "Tableau certification exams are proctored online, meaning that all tests are monitored electronically by a certified proctor. After the candidate completes the exam, the results are automatically tracked in the Tableau Certification system. Candidates will receive an email confirming their results within a few days.",
      },
      {
        q: "What is Tableau free certification dumps?",
        a: "ableau free certification dumps is a set of practice questions and study resources intended to help individuals prepare for their Tableau certification exam. It usually consists of practice questions, example tasks, and other study material related to the topics covered in the certification exam.",
      },
    ],
    features: [
      {
        f: "Comprehensive Practice Tests",
        d: "Comprehensive practice tests help the user to become familiar with the format and layout of the Tableau Certification tests. Tests are available in multiple formats, such as multiple choice, drag and drop, true/false, and essay.",
      },
      {
        f: "Detailed Answer Explanations",
        d: "Detailed answer explanations help users to understand the logic behind the questions, so they can apply the same logic in the actual Tableau Certification test.",
      },
      {
        f: "Easy to Understand Question Formatting",
        d: "The free certification dumps are designed to make the questions easy to read and understand. They are written in plain English, utilizing simple verbal constructs and vocabulary.",
      },
      {
        f: "Self-Paced Learning",
        d: "The dumps allow users to learn at their own pace. There is no time limit to complete the practice tests, which allows users to answer questions when they are most comfortable.",
      },
    ],
  },
  abstract: {
    title: "Abstract Reasoning Test",
    logo: "Abstract",
    description:
      "Abstract reasoning test assess a candidate's ability to think and identify patterns and relationships between concepts.",
    commentsSlug: "abstract",
    sublink: "ar-test",
    list: [
      {
        slug: "ar-test",
        title: "Splunk SOAR Certified Automation Developer Exam",
        description:
          "Practice for Splunk SOAR Certified Automation Developer Certification Exam with this 100% Free Splunk SOAR Certified Automation Developer Exam dumps. It contains free real exam questions from the actual Splunk SOAR Certified Automation Developer Exam tests.",
        sheetId: "1gPvKOv_YkMthVf9LuzV51zMjWaTbDHZG_VtiEJQORjg",
        gId: "612241630",
        baseGId: "0",
        commentsSlug: "ar-test",
        metadata: {
          examName: "Splunk SOAR Certified Automation Developer Exam",
          examCode: "SPLK-2003",
          about:
            "The Splunk SOAR Certified Automation Developer Exam is a certification exam designed to test a candidate's knowledge of Splunk's Security Orchestration, Automation, and Response (SOAR) platform. The exam is designed to assess a candidate's ability to create and deploy Splunk SOAR applications, integrate with other security and IT operations products, and understand the Splunk SOAR architecture. The certification is designed to validate an individual's skills and expertise in deploying, configuring, and managing Splunk SOAR applications. The Splunk SOAR Certified Automation Developer Exam is a great way for companies to ensure that their security teams are knowledgeable and proficient in their use of Splunk SOAR.",
          testimonial:
            "I used Free Certification Dumps' Splunk SOAR Certified Automation Developer Exam dumps to help me prepare for my exam and I can confidently say that they made a huge difference. The questions were very similar to the ones I encountered on the exam and the explanations were invaluable in helping me understand the material. I was able to pass the exam with flying colors and I'm grateful to Free Certification Dumps for their help.",
          testimonialFrom: "John, Automation Developer, Sprints Technologies",
          whyCertification: [
            "Free Certification Dumps' Splunk SOAR Certified Automation Developer Exam dumps are an essential tool for any student looking to become a certified Splunk SOAR automation developer. These dumps provide students with a comprehensive overview of the Splunk SOAR platform, as well as detailed guidance on how to develop and deploy automated SOAR solutions. By using these dumps, students can gain an in-depth understanding of the Splunk SOAR platform, its features, and its capabilities. This understanding is essential for successfully passing the Splunk SOAR Certified Automation Developer Exam.",
            "Furthermore, Free Certification Dumps' Splunk SOAR Certified Automation Developer Exam dumps also provide students with a comprehensive review of the exam topics. This includes a review of the exam objectives, as well as detailed guidance on how to properly answer the exam questions. Through the use of these dumps, students can gain a better understanding of the exam content, allowing them to confidently answer the exam questions.",
            "Finally, Free Certification Dumps' Splunk SOAR Certified Automation Developer Exam dumps are designed to be easy to use and understand. The dumps are written in simple language, and they include a number of helpful illustrations to help students better understand the concepts being tested. ",
          ],
        },
      },
    ],
    faqsData: [
      {
        q: "Is there any Splunk free certification dumps available?",
        a: "Yes, there are a few Splunk free certification dumps available online. However, these dumps are not always reliable, as they may contain outdated information or incorrect answers. We strongly recommend using Splunk official study guides and practice tests instead of relying solely on these dumps.",
      },
      {
        q: "How can I get Splunk certified?",
        a: "To become Splunk certified, you need to pass the corresponding certification and lab exam. You should first check the Splunk official website to find out what type of Splunk certification is available and determine which one would best fit your career goals. After that, you should get familiar with the topics listed in the exam objectives and prepare for the exam by taking practice tests and studying the material provided in the official study guides.",
      },
      {
        q: "Is there any practice test I can take?",
        a: "Yes, you can take practice tests for each certification.",
      },
    ],
    features: [
      {
        f: "Splunk Administration",
        d: "This certification includes knowledge and skills on the basics of Splunk, including a deep dive into Splunk administration, advanced search commands, security, performance tuning, and more.",
      },
      {
        f: "Splunk Core Certified User",
        d: "This certification verifies your understanding of Splunk's core functionality and the platform's basic components, including search, report, and dashboard.",
      },
      {
        f: "Splunk Core Certified Power User",
        d: "This certification verifies your ability to create and manage Splunk dashboards, reports, and visualizations, as as well as troubleshooting and performance tuning queries.",
      },
      {
        f: "Splunk Core Certified Developer",
        d: "This certification verifies your ability to develop Splunk applications, tailored searches, and other custom solutions.",
      },
    ],
  },
  numerical: {
    title: "Numerical Reasoning Test",
    logo: "Numerical",
    description:
      "Numerical reasoning test assess a candidate's ability to work with numbers and perform basic mathematical operation.",
    commentsSlug: "numerical",
    sublink: "nr-test",
    list: [
      {
        slug: "nr-test",
        title: "Splunk SOAR Certified Automation Developer Exam",
        description:
          "Practice for Splunk SOAR Certified Automation Developer Certification Exam with this 100% Free Splunk SOAR Certified Automation Developer Exam dumps. It contains free real exam questions from the actual Splunk SOAR Certified Automation Developer Exam tests.",
        sheetId: "1gPvKOv_YkMthVf9LuzV51zMjWaTbDHZG_VtiEJQORjg",
        gId: "612241630",
        baseGId: "0",
        commentsSlug: "nr-test",
        metadata: {
          examName: "Splunk SOAR Certified Automation Developer Exam",
          examCode: "SPLK-2003",
          about:
            "The Splunk SOAR Certified Automation Developer Exam is a certification exam designed to test a candidate's knowledge of Splunk's Security Orchestration, Automation, and Response (SOAR) platform. The exam is designed to assess a candidate's ability to create and deploy Splunk SOAR applications, integrate with other security and IT operations products, and understand the Splunk SOAR architecture. The certification is designed to validate an individual's skills and expertise in deploying, configuring, and managing Splunk SOAR applications. The Splunk SOAR Certified Automation Developer Exam is a great way for companies to ensure that their security teams are knowledgeable and proficient in their use of Splunk SOAR.",
          testimonial:
            "I used Free Certification Dumps' Splunk SOAR Certified Automation Developer Exam dumps to help me prepare for my exam and I can confidently say that they made a huge difference. The questions were very similar to the ones I encountered on the exam and the explanations were invaluable in helping me understand the material. I was able to pass the exam with flying colors and I'm grateful to Free Certification Dumps for their help.",
          testimonialFrom: "John, Automation Developer, Sprints Technologies",
          whyCertification: [
            "Free Certification Dumps' Splunk SOAR Certified Automation Developer Exam dumps are an essential tool for any student looking to become a certified Splunk SOAR automation developer. These dumps provide students with a comprehensive overview of the Splunk SOAR platform, as well as detailed guidance on how to develop and deploy automated SOAR solutions. By using these dumps, students can gain an in-depth understanding of the Splunk SOAR platform, its features, and its capabilities. This understanding is essential for successfully passing the Splunk SOAR Certified Automation Developer Exam.",
            "Furthermore, Free Certification Dumps' Splunk SOAR Certified Automation Developer Exam dumps also provide students with a comprehensive review of the exam topics. This includes a review of the exam objectives, as well as detailed guidance on how to properly answer the exam questions. Through the use of these dumps, students can gain a better understanding of the exam content, allowing them to confidently answer the exam questions.",
            "Finally, Free Certification Dumps' Splunk SOAR Certified Automation Developer Exam dumps are designed to be easy to use and understand. The dumps are written in simple language, and they include a number of helpful illustrations to help students better understand the concepts being tested. ",
          ],
        },
      },
    ],
    faqsData: [
      {
        q: "Is there any Splunk free certification dumps available?",
        a: "Yes, there are a few Splunk free certification dumps available online. However, these dumps are not always reliable, as they may contain outdated information or incorrect answers. We strongly recommend using Splunk official study guides and practice tests instead of relying solely on these dumps.",
      },
      {
        q: "How can I get Splunk certified?",
        a: "To become Splunk certified, you need to pass the corresponding certification and lab exam. You should first check the Splunk official website to find out what type of Splunk certification is available and determine which one would best fit your career goals. After that, you should get familiar with the topics listed in the exam objectives and prepare for the exam by taking practice tests and studying the material provided in the official study guides.",
      },
      {
        q: "Is there any practice test I can take?",
        a: "Yes, you can take practice tests for each certification.",
      },
    ],
    features: [
      {
        f: "Splunk Administration",
        d: "This certification includes knowledge and skills on the basics of Splunk, including a deep dive into Splunk administration, advanced search commands, security, performance tuning, and more.",
      },
      {
        f: "Splunk Core Certified User",
        d: "This certification verifies your understanding of Splunk's core functionality and the platform's basic components, including search, report, and dashboard.",
      },
      {
        f: "Splunk Core Certified Power User",
        d: "This certification verifies your ability to create and manage Splunk dashboards, reports, and visualizations, as as well as troubleshooting and performance tuning queries.",
      },
      {
        f: "Splunk Core Certified Developer",
        d: "This certification verifies your ability to develop Splunk applications, tailored searches, and other custom solutions.",
      },
    ],
  },
};

var questionsData = {};

async function getQuestionsOfCert({
  category,
  cert,
  page = 1,
  limit = 5,
  force = false,
}) {
  console.log(page);
  var catData = categories[category];
  if (!catData) {
    return {
      success: false,
      error: "Not found",
    };
  }
  var certData = catData.list.find((x) => x.slug === cert);
  if (!certData) {
    return {
      success: false,
      error: "Not found",
    };
  }

  // check if questions data already exists in memory
  if (!((questionsData[category] || {})[cert] || {}).questions || force) {
    // get sheetId, gId and baseGId
    var { sheetId, gId, baseGId } = certData;
    // do a get api call to https://tasks.adaface.com/sheets/fetch
    // with sheetId, gId and baseGId
    // and get the questions data
    // and store it in certData.questions
    try {

      const doc = new GoogleSpreadsheet(sheetId);

      // Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
      await doc.useServiceAccountAuth({
        // env var values are copied from service account credentials generated by google
        // see "Authentication" section in docs for more info
        client_email: process.env.client_email,
        private_key: process.env.private_key.replace(/\\n/gm, "\n"),
      });

      await doc.loadInfo();

      const sheet = doc.sheetsById[gId];
            const rows = await sheet.getRows(); // can pass in { limit, offset }
            
            let questions = [];
            let i = 0;
            for(let row of rows) {
                let question = row;
                questions.push({
                    name: question["Name"] || `Question ${i+1}`,
                    question: [
                        question.Question,
                        question.Question2,
                        question.Question3
                    ].filter((x) => x),
                    options: [
                        question["Option 1"],
                        question["Option 2"],
                        question["Option 3"],
                        question["Option 4"],
                        question["Option 5"],
                    ].filter((x) => x),
                    correctAnswer: ("" + (question["Correct answer"] || ""))
                            .split(",")
                            .filter((x) => x)
                            .map((x) => x.trim())
                            .filter((x) => x),
                    hint: question["Hint"] || "",
                    explanation: question["Explanation"] || "",
                    topics: (question["Topics"] || "")
                            .split(",")
                            .filter((x) => x)
                            .map((x) => x.trim())
                            .filter((x) => x),
                    time: Number(question["Time"] || "") || 3,
                });
                i++;
            }
        questionsData[category] = questionsData[category] || {};
        questionsData[category][cert] = {
          questions,
        };
    } catch (err) {
      console.log(err);

      return {
        success: false,
        error: err,
      };
    }
  }

  // get the questions data from certData.questions
  var questions = questionsData[category][cert].questions;
  // get the total number of questions
  var total = questions.length;
  // get the start index of the questions to be returned
  var start = (page - 1) * limit;
  // get the end index of the questions to be returned
  var end = start + limit;
  // get the questions to be returned
  var data = questions.slice(start, end);

  return {
    success: true,
    data: {
      data,
      total,
      page,
      limit,
    },
  };
}

async function getSingleQuestionOfCert({ category, cert, questionId, force }) {
  var catData = categories[category];
  if (!catData) {
    return {
      success: false,
      error: "Not found",
    };
  }
  var certData = catData.list.find((x) => x.slug === cert);
  if (!certData) {
    return {
      success: false,
      error: "Not found",
    };
  }

  // check if questions data already exists in memory
  if (
    !(((questionsData[category] || {})[cert] || {}).questions || [])[
    questionId - 1
    ] ||
    force
  ) {
    // get sheetId, gId and baseGId
    var { sheetId, gId, baseGId } = certData;
    // do a get api call to https://tasks.adaface.com/sheets/fetch
    // with sheetId, gId and baseGId
    // and get the questions data
    // and store it in certData.questions
    try {
      let response = await fetch(
        `https://tasks.adaface.com/sheets/fetch?sheetId=${sheetId}&gId=${gId}&baseGId=${baseGId}&processedResult=true`
      );
      let data = await response.json();

      if (data.success) {
        var json = (data.data || {}).processed_json;
        // get keys length of json.
        var rows = Object.keys(json).length;
        var questions = [];
        for (var i = 2; i <= rows; i++) {
          var question = json[i];
          questions.push({
            name: question["1"] || `Question ${i - 1}`,
            question: [question["2"], question["3"], question["4"]].filter(
              (x) => x
            ),
            options: [
              question["5"],
              question["6"],
              question["7"],
              question["8"],
              question["9"],
            ].filter((x) => x),
            correctAnswer: ("" + (question["10"] || ""))
              .split(",")
              .filter((x) => x)
              .map((x) => x.trim())
              .filter((x) => x),
            hint: question["11"] || "",
            explanation: question["12"] || "",
            topics: (question["13"] || "")
              .split(",")
              .filter((x) => x)
              .map((x) => x.trim())
              .filter((x) => x),
            time: Number(question["14"] || "") || 3,
          });
        }
        questionsData[category] = questionsData[category] || {};
        questionsData[category][cert] = {
          questions,
        };
      }
    } catch (err) {
      console.log(err);

      return {
        success: false,
        error: err,
      };
    }
  }

  // get the questions data from certData.questions
  var question = (questionsData[category][cert].questions || [])[
    questionId - 1
  ];
  var total = (questionsData[category][cert].questions || []).length;

  return {
    success: true,
    data: {
      question,
      total,
    },
  };
}

module.exports = {
  categories,
  getQuestionsOfCert,
  getSingleQuestionOfCert,
};
