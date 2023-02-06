require('dotenv').config()
const { GoogleSpreadsheet } = require('google-spreadsheet');
const fetch = require("node-fetch");

var categories = {
  "verbal-reasoning": {
    title: "Verbal Reasoning Test",
    logo: "Verbal",
    scorecard: "/images/VR_test.pdf",
    description:
      "Verbal reasoning test assess a candidate's ability to analyze written information, critical thinking and problem-solving skills.",
    commentsSlug: "verbal-reasoning",
    sublink: "vr-test",
    list: [
      {
        slug: "vr-test",
        title: "Verbal Reasoning Test",
        description:
          "Practice for AWS Certified Solutions Architect - Associate certification exams with this 100% Free AWS Certified Solutions Architect - Associate certification dumps. It contains free real exam questions from the actual AWS Certified Solutions Architect - Associate certification tests.",
        sheetId: "1yO_PrMcx5FwlCwYmkh02utgya9fz-h5k7h-zPN_6VsA",
        gId: "0",
        baseGId: "0",
        commentsSlug: "vr-test",
        metadata: {
          info1:"A verbal reasoning test is a type of aptitude test that is often used as part of the recruitment process for jobs that require strong communication skills and the ability to understand and interpret written information. The test typically consists of a series of passages of text, followed by a number of multiple-choice questions designed to assess the test taker's ability to understand and interpret the information",

          info2:"Verbal reasoning tests are designed to measure a range of skills, including reading comprehension, critical thinking, and the ability to analyze and interpret written information. These tests may also include questions on vocabulary and the ability to identify relationships between words and concepts. Verbal reasoning tests are commonly used in the selection process for jobs in a variety of industries, including finance, law, marketing, and education. They are often used in conjunction with other aptitude tests, such as numerical reasoning tests and abstract reasoning tests, to provide a more comprehensive assessment of a candidate's abilities.",

          examName: "AWS Certified Solutions Architect - Associate",
          examCode: "SAA-C02",
          about:
            "AWS Certified Solutions Architect - Associate showcases knowledge and skills in AWS technology, across a wide range of AWS services. The focus of this certification is on the design of cost and performance optimized solutions, demonstrating a strong understanding of the AWS Well-Architected Framework. This certification can enhance the career profile and earnings of certified individuals and increase your credibility and confidence in stakeholder and customer interactions.",
          testimonial:
            ["I was extremely impressed with the level of difficulty. The test really tested and improved my ability to think critically.", 
            "I was pleasantly surprised by how well-structured and well-explained the test was. Test include every variety of problems.",
            "The verbal reasoning test I took was very well-designed and provided 50+ good quality and straightforward questions."],
          whyCertification: [
            "Using our free verbal reasoning test can help you gain a better understanding of your verbal reasoning skills and identify areas where you may need to improve. Taking test can help you feel more confident and prepared if you need to take one as part of a job application or other assessment.",
            "Our test is designed by experienced professionals and experts in the field of aptitude testing, ensuring that it provides an accurate and reliable assessment of your verbal reasoning skills. The test is also unbiased and fair.",
          ],
          format1: "Discover your ability to understand and analyze written information with our in-depth verbal reasoning tests. Our tests include a diverse range of passages and question types, designed to challenge and assess your understanding of written materials.",
          format2:"With quality online tests and immediate scoring and results, our verbal reasoning assessments are a reliable and efficient way for organizations to evaluate candidates' verbal reasoning abilities. Join us today and test your knowledge with our challenging and informative tests!",
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
  "spatial-reasoning": {
    title: "Spatial Reasoning Test",
    logo: "Spatial",
    scorecard: "/images/SR_test.pdf",
    description:
      "Spatial reasoning test assess a candidate's ability to manipulate 2D and 3D shapes and figures, and ability to visualize.",
    commentsSlug: "spatial-reasoning",
    sublink: "sr-test",
    list: [
      {
        slug: "sr-test",
        title: "Spatial Reasoning Test",
        description:
          "Practice for AZ-900: Microsoft Azure Fundamentals certification exams with this 100% Free AZ-900: Microsoft Azure Fundamentals dumps. It contains free real exam questions from the actual AZ-900: Microsoft Azure Fundamentals certification tests.",
        sheetId: "1yO_PrMcx5FwlCwYmkh02utgya9fz-h5k7h-zPN_6VsA",
        gId: "1313423269",
        baseGId: "0",
        commentsSlug: "sr-test",
        metadata: {

          info1:"A spatial reasoning test is a type of aptitude test that is designed to measure an individual's ability to think in three dimensions and to manipulate and transform 2D and 3D shapes in their mind. These tests are often used as part of the recruitment process for jobs that require strong spatial awareness and the ability to understand and work with spatial relationships, such as engineering, architecture, and design.",

          info2:"Spatial reasoning tests typically consist of a series of visual puzzles or problems that require the test taker to manipulate or transform 2D or 3D shapes or patterns in order to solve them. The test may also include questions on spatial awareness, such as the ability to understand how objects fit together or how to navigate in a 3D environment. Spatial reasoning tests are designed to measure a range of skills, including the ability to visualize and manipulate objects in 3D space, the ability to understand and interpret spatial relationships, and the ability to solve problems using spatial reasoning.",

          examName: "Microsoft Azure Fundamentals",
          examCode: "AZ-900",
          about:
            "Exam AZ-900: Microsoft Azure Fundamentals is an introductory-level certification exam designed to validate knowledge of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, and Azure pricing and support. This exam is great for those new to cloud computing who want to demonstrate their knowledge of Azure. It covers a broad range of topics, including cloud concepts, Azure services, security, privacy, pricing, and support. It is a great first step in preparing for more advanced Azure-related certifications. As an introductory level certification, it is strongly recommended to those new to cloud computing who want to demonstrate their knowledge of Azure.",
          testimonial:
            ["I am impressed with the level of problems. I felt like the test really helped me improve my spatial reasoning skills", 
            "The spatial reasoning test was very well designed and strutured which provided a great balance of easy and difficult questions.",
            "I found that the spatial reasoning test challenged me to think outside of the box and consider different spatial perspectives."],
          testimonialFrom: "John Smith, Senior Developer, Acme Corporation",
          whyCertification: [
            "Using our free spatial reasoning test can help you gain a better understanding of your spatial reasoning skills and identify areas where you may need to improve. Taking test can help you feel more confident and prepared if you need to take one as part of a job application or other assessment.",
            "Our free test can also help you identify your strengths and weaknesses in spatial reasoning, which can help you focus your study and preparation efforts if you plan to take a more formal test in the future.",
          ],
          format1: "Unlock your potential for understanding spatial relationships and visual information with our comprehensive spatial reasoning tests. Our tests include a wide range of visual and 3-dimensional problem-solving exercises, designed to evaluate your ability to visualize and manipulate objects, understand plans and maps and see how they relate to each other.",
          format2:"The tests are taken online and are prepared by a aptitude masters, and are scored automatically and results are provided immediately after the completion. Come and try it now, test your spatial intelligence with our challenging and enlightening assessments.",
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
  "logical-reasoning": {
    title: "Logical Reasoning Test",
    logo: "Logical",
    scorecard: "/images/LR_test.pdf",
    description:
      "Logical reasoning test assess a candidate's ability to think critically and solve problems by analyzing information and arguments.",
    commentsSlug: "logical-reasoning",
    sublink: "lr-test",
    list: [
      {
        slug: "lr-test",
        title: "Logical Reasoning Test",
        description:
          "Practice for Tableau Certified Data Analyst Exam (TDS-C01) with this 100% Free Tableau Certified Data Analyst Exam dumps. It contains free real exam questions from the actual Tableau Certified Data Analyst Exam (TDS-C01) tests.",
        sheetId: "1yO_PrMcx5FwlCwYmkh02utgya9fz-h5k7h-zPN_6VsA",
        gId: "712223402",
        baseGId: "0",
        commentsSlug: "lr-test",
        metadata: {

          info1:"A logical reasoning test is a type of aptitude test that is designed to measure an individual's ability to reason and think logically. These tests are often used as part of the recruitment process for jobs that require strong problem-solving skills and the ability to analyze information, such as in fields like law, finance, engineering and computer programming.",

          info2:"Logical reasoning tests typically consist of a series of problems or puzzles that require the test taker to analyze information and make logical inferences in order to solve them. The test may also include questions on logical deduction, such as the ability to understand and work with logical arguments, and on logical identification, such as the ability to understand patterns in information and identify logical connections between pieces of information. Logical reasoning tests are designed to measure a range of skills, including the ability to think critically, analyze information and make logical inferences.",

          examName: "Tableau Certified Data Analyst Exam",
          examCode: "TDS-C01",
          about:
            "The Tableau Certified Data Analyst Exam (TDS-C01) is a rigorous examination that tests the knowledge and skills of professionals in data analysis and visualization. The exam covers a wide range of topics, such as data manipulation, data analysis, and data visualization. The exam is based on the Tableau Desktop Professional product, so having experience in working with Tableau is a huge advantage. The exam consists of 50 multiple-choice questions that must be completed in two hours. Passing the exam will demonstrate the candidate's expertise in data analysis and visualization, and will give them the credentials they need to further their career.",
          testimonial:
            ["I am impressed with the level of logical difficulties. The test really improved thinking and logical reasoning skills", 
            "I appreciate the explanations provided for each question, which helped me understand mistakes and improved my performance",
            "I found that the logical reasoning test challenged me to think more logically and provided a good variety of problems."],
          whyCertification: [
            "Using our free logical reasoning test can help you gain a better understanding of your logical reasoning skills and identify areas where you may need to improve. Taking test can help you feel more confident and prepared if you need to take one as part of a job application or other assessment.",
            "Our free test can also help you identify your strengths and weaknesses in logical reasoning, which can help you focus your study and preparation efforts if you plan to take a more formal test in the future.",
          ],
          format1:"Our tests offer a challenging and comprehensive format that will put your critical thinking, problem-solving, and analytical abilities to the test. Our tests are designed to assess your ability to make sound decisions, evaluate arguments, and identify patterns in complex information. ",
          format2:"The tests are suitable for individuals looking to boost their performance in college or graduate school, preparing for a professional certification or even enhancing your career opportunities. Our logical reasoning tests are a perfect fit for students, job seekers looking to impress potential employers, and professionals looking to advance their careers.",
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
  "abstract-reasoning": {
    title: "Abstract Reasoning Test",
    logo: "Abstract",
    scorecard: "/images/AR_test.pdf",
    description:
      "Abstract reasoning test assess a candidate's ability to think and identify patterns and relationships between concepts.",
    commentsSlug: "abstract-reasoning",
    sublink: "ar-test",
    list: [
      {
        slug: "ar-test",
        title: "Abstract Reasoning Test",
        description:
          "Practice for Splunk SOAR Certified Automation Developer Certification Exam with this 100% Free Splunk SOAR Certified Automation Developer Exam dumps. It contains free real exam questions from the actual Splunk SOAR Certified Automation Developer Exam tests.",
        sheetId: "1yO_PrMcx5FwlCwYmkh02utgya9fz-h5k7h-zPN_6VsA",
        gId: "1955242603",
        baseGId: "0",
        commentsSlug: "ar-test",
        metadata: {

          info1:"An abstract reasoning test is designed to measure an individual's ability to think abstractly and understand complex concepts. These tests are often used as part of the recruitment process for jobs that require strong problem-solving skills and the ability to think creatively, such as in fields like technology, research and development, and management.",
          info2:"Abstract reasoning tests typically consist of a series of problems or puzzles that require the test taker to identify patterns and relationships in abstract information, such as shapes, symbols, or diagrams. The test may also include questions on mental flexibility, such as the ability to switch between different types of information and the ability to think creatively and generate new ideas. Abstract reasoning tests are designed to measure a range of skills, including the ability to think abstractly, identify patterns and relationships in abstract information, the ability to think creatively and generate new ideas.",

          examName: "Splunk SOAR Certified Automation Developer Exam",
          examCode: "SPLK-2003",
          about:
            "The Splunk SOAR Certified Automation Developer Exam is a certification exam designed to test a candidate's knowledge of Splunk's Security Orchestration, Automation, and Response (SOAR) platform. The exam is designed to assess a candidate's ability to create and deploy Splunk SOAR applications, integrate with other security and IT operations products, and understand the Splunk SOAR architecture. The certification is designed to validate an individual's skills and expertise in deploying, configuring, and managing Splunk SOAR applications. The Splunk SOAR Certified Automation Developer Exam is a great way for companies to ensure that their security teams are knowledgeable and proficient in their use of Splunk SOAR.",
          testimonial:
            ["I found that this abstract reasoning test is one of the excellent tool which improved my abstract reasoning skills. ", 
            "The abstract reasoning test was an outstanding experience. The questions were challenging and required a good understanding.",
            "The abstract reasoning test contains some really engaging and quality problems which helped me a lot to improve my skills"],
          whyCertification: [
            "Using our free abstract reasoning test can help you gain a better understanding of your abstract reasoning skills and identify areas where you may need to improve. Taking test can help you feel more confident and prepared if you need to take one as part of a job application or other assessment.",
            "Our free test can also help you identify your strengths and weaknesses in abstract reasoning, which can help you focus your study and preparation efforts if you plan to take a more formal test in the future.",
          ],
          format1:"Our abstract reasoning test is a type of psychological assessment that measures a person's ability to understand and analyze abstract concepts and relationships. The format of these tests can vary depending on the specific test being administered, but typically they involve a series of visual or verbal problems.",
          format2:"The tests are designed to measure a person's ability to think abstractly, analyze patterns, and identify relationships. In a typical abstract reasoning test, the test taker is presented with a series of abstract figures or shapes, and is asked to identify the next figure in a logical sequence or pattern. ",
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
  "numerical-reasoning": {
    title: "Numerical Reasoning Test",
    logo: "Numerical",
    scorecard: "/images/NR_test.pdf",
    description:
      "Numerical reasoning test assess a candidate's ability to work with numbers and perform basic mathematical operation.",
    commentsSlug: "numerical-reasoning",
    sublink: "nr-test",
    list: [
      {
        slug: "nr-test",
        title: "Numerical Reasoning Test",
        description:
          "Practice for Splunk SOAR Certified Automation Developer Certification Exam with this 100% Free Splunk SOAR Certified Automation Developer Exam dumps. It contains free real exam questions from the actual Splunk SOAR Certified Automation Developer Exam tests.",
        sheetId: "1yO_PrMcx5FwlCwYmkh02utgya9fz-h5k7h-zPN_6VsA",
        gId: "730868487",
        baseGId: "0",
        commentsSlug: "nr-test",
        metadata: {

          info1:"A numerical reasoning test is a type of aptitude test that is designed to measure an individual's ability to understand and work with numerical information, such as mathematical concepts and calculations. These tests are often used as part of the recruitment process for jobs that require strong mathematical skills and the ability to work with numerical data, such as in fields like finance, accounting, and engineering.",

          info2:"Numerical reasoning tests typically consist of a series of problems or questions that require the test taker to analyze numerical information and make calculations, such as mathematical equations or simple arithmetic. The test may also include questions on data interpretation, such as the ability to understand and interpret charts and graphs, and on numerical estimation, such as the ability to make approximate calculations based on incomplete information. Numerical reasoning tests are designed to measure a range of skills, including the ability to understand and work with numerical information and the ability to analyze and interpret data.",

          examName: "Splunk SOAR Certified Automation Developer Exam",
          examCode: "SPLK-2003",
          about:
            "The Splunk SOAR Certified Automation Developer Exam is a certification exam designed to test a candidate's knowledge of Splunk's Security Orchestration, Automation, and Response (SOAR) platform. The exam is designed to assess a candidate's ability to create and deploy Splunk SOAR applications, integrate with other security and IT operations products, and understand the Splunk SOAR architecture. The certification is designed to validate an individual's skills and expertise in deploying, configuring, and managing Splunk SOAR applications. The Splunk SOAR Certified Automation Developer Exam is a great way for companies to ensure that their security teams are knowledgeable and proficient in their use of Splunk SOAR.",
          testimonial:
            ["The numerical reasoning test was very beneficial & informative. The questions required a good understanding of numerical concepts.", 
            "This numerical reasoning test really helped me understand my strengths and weaknesses in terms of numerical reasoning.",
            "I am pleasantly surprised by how well-structured the test was. The questions were quite challenging but not impossible,"],
          whyCertification: [
            "Using our free numerical reasoning test can help you gain a better understanding of your numerical reasoning skills and identify areas where you may need to improve. Taking test can help you feel more confident and prepared if you need to take one as part of a job application or other assessment.",
            "Our free test can also help you identify your strengths and weaknesses in numerical reasoning, which can help you focus your study and preparation efforts if you plan to take a more formal test in the future.",
          ],
          format1:"Numerical reasoning tests are a type of assessment that are designed to measure an individual's ability to understand and interpret numerical data. These tests typically consist of a set of multiple-choice questions that involve mathematical concepts such as arithmetic and basic statistics.",
          format2:"The format of these tests can vary depending on the company or organization administering the test. These tests are usually used as a part of the recruitment process for jobs that require strong numerical skills, such as finance, accounting, engineering, and data analysis.",
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

  "situational-judgement": {
    title: "Situational Judgement Test",
    logo: "Situational Judgement",
    scorecard: "/images/NR_test.pdf",
    description:
      "Situational Judgemen test evaluate a candidate's decision-making skills in realistic and hypothetical scenarios.",
    commentsSlug: "situational-judgement",
    sublink: "sj-test",
    list: [
      {
        slug: "sj-test",
        title: "Situational Judgement Test",
        description:
          "Practice for Splunk SOAR Certified Automation Developer Certification Exam with this 100% Free Splunk SOAR Certified Automation Developer Exam dumps. It contains free real exam questions from the actual Splunk SOAR Certified Automation Developer Exam tests.",
        sheetId: "1yO_PrMcx5FwlCwYmkh02utgya9fz-h5k7h-zPN_6VsA",
        gId: "2072618751",
        baseGId: "0",
        commentsSlug: "sj-test",
        metadata: {

          info1:"A numerical reasoning test is a type of aptitude test that is designed to measure an individual's ability to understand and work with numerical information, such as mathematical concepts and calculations. These tests are often used as part of the recruitment process for jobs that require strong mathematical skills and the ability to work with numerical data, such as in fields like finance, accounting, and engineering.",

          info2:"Numerical reasoning tests typically consist of a series of problems or questions that require the test taker to analyze numerical information and make calculations, such as mathematical equations or simple arithmetic. The test may also include questions on data interpretation, such as the ability to understand and interpret charts and graphs, and on numerical estimation, such as the ability to make approximate calculations based on incomplete information. Numerical reasoning tests are designed to measure a range of skills, including the ability to understand and work with numerical information and the ability to analyze and interpret data.",

          examName: "Splunk SOAR Certified Automation Developer Exam",
          examCode: "SPLK-2003",
          about:
            "The Splunk SOAR Certified Automation Developer Exam is a certification exam designed to test a candidate's knowledge of Splunk's Security Orchestration, Automation, and Response (SOAR) platform. The exam is designed to assess a candidate's ability to create and deploy Splunk SOAR applications, integrate with other security and IT operations products, and understand the Splunk SOAR architecture. The certification is designed to validate an individual's skills and expertise in deploying, configuring, and managing Splunk SOAR applications. The Splunk SOAR Certified Automation Developer Exam is a great way for companies to ensure that their security teams are knowledgeable and proficient in their use of Splunk SOAR.",
          testimonial:
            ["The numerical reasoning test was very beneficial & informative. The questions required a good understanding of numerical concepts.", 
            "This numerical reasoning test really helped me understand my strengths and weaknesses in terms of numerical reasoning.",
            "I am pleasantly surprised by how well-structured the test was. The questions were quite challenging but not impossible,"],
          whyCertification: [
            "Using our Error checking tests benefit candidates by preparing them for real-world scenarios and by demonstrating their understanding in error detection. The test helps the candidate to enhance their ability to identify and fix errors, and enhance their attention to detail and problem-solving skills.",
            "Our free test can also help you identify your strengths and weaknesses in error checking skills, which can help you focus your study and preparation efforts if you plan to take a more formal test in the future.",
          ],
          format1:"Numerical reasoning tests are a type of assessment that are designed to measure an individual's ability to understand and interpret numerical data. These tests typically consist of a set of multiple-choice questions that involve mathematical concepts such as arithmetic and basic statistics.",
          format2:"The format of these tests can vary depending on the company or organization administering the test. These tests are usually used as a part of the recruitment process for jobs that require strong numerical skills, such as finance, accounting, engineering, and data analysis.",
        },
      },
    ],
  },
  "data-interpretation": {
    title: "Data Interpretation Test",
    logo: "Data Interpretation",
    scorecard: "/images/NR_test.pdf",
    description:
      "Data interpretation test analyses the given information and interpret the given data according to the context and purpose.",
    commentsSlug: "data-interpretation",
    sublink: "di-test",
    list: [
      {
        slug: "di-test",
        title: "Data Interpretation Test",
        description:
          "Practice for Splunk SOAR Certified Automation Developer Certification Exam with this 100% Free Splunk SOAR Certified Automation Developer Exam dumps. It contains free real exam questions from the actual Splunk SOAR Certified Automation Developer Exam tests.",
        sheetId: "1yO_PrMcx5FwlCwYmkh02utgya9fz-h5k7h-zPN_6VsA",
        gId: "545781081",
        baseGId: "0",
        commentsSlug: "di-test",
        metadata: {

          info1:"A numerical reasoning test is a type of aptitude test that is designed to measure an individual's ability to understand and work with numerical information, such as mathematical concepts and calculations. These tests are often used as part of the recruitment process for jobs that require strong mathematical skills and the ability to work with numerical data, such as in fields like finance, accounting, and engineering.",

          info2:"Numerical reasoning tests typically consist of a series of problems or questions that require the test taker to analyze numerical information and make calculations, such as mathematical equations or simple arithmetic. The test may also include questions on data interpretation, such as the ability to understand and interpret charts and graphs, and on numerical estimation, such as the ability to make approximate calculations based on incomplete information. Numerical reasoning tests are designed to measure a range of skills, including the ability to understand and work with numerical information and the ability to analyze and interpret data.",

          examName: "Splunk SOAR Certified Automation Developer Exam",
          examCode: "SPLK-2003",
          about:
            "The Splunk SOAR Certified Automation Developer Exam is a certification exam designed to test a candidate's knowledge of Splunk's Security Orchestration, Automation, and Response (SOAR) platform. The exam is designed to assess a candidate's ability to create and deploy Splunk SOAR applications, integrate with other security and IT operations products, and understand the Splunk SOAR architecture. The certification is designed to validate an individual's skills and expertise in deploying, configuring, and managing Splunk SOAR applications. The Splunk SOAR Certified Automation Developer Exam is a great way for companies to ensure that their security teams are knowledgeable and proficient in their use of Splunk SOAR.",
          testimonial:
            ["The numerical reasoning test was very beneficial & informative. The questions required a good understanding of numerical concepts.", 
            "This numerical reasoning test really helped me understand my strengths and weaknesses in terms of numerical reasoning.",
            "I am pleasantly surprised by how well-structured the test was. The questions were quite challenging but not impossible,"],
          whyCertification: [
            "Using our free numerical reasoning test can help you gain a better understanding of your numerical reasoning skills and identify areas where you may need to improve. Taking test can help you feel more confident and prepared if you need to take one as part of a job application or other assessment.",
            "Our free test can also help you identify your strengths and weaknesses in numerical reasoning, which can help you focus your study and preparation efforts if you plan to take a more formal test in the future.",
          ],
          format1:"Numerical reasoning tests are a type of assessment that are designed to measure an individual's ability to understand and interpret numerical data. These tests typically consist of a set of multiple-choice questions that involve mathematical concepts such as arithmetic and basic statistics.",
          format2:"The format of these tests can vary depending on the company or organization administering the test. These tests are usually used as a part of the recruitment process for jobs that require strong numerical skills, such as finance, accounting, engineering, and data analysis.",
        },
      },
    ],
  },
  "english": {
    title: "English Test",
    logo: "English",
    scorecard: "/images/NR_test.pdf",
    description:
      "The English test accesses an individual's knowledge and proficiency of the English language, including grammar.",
    commentsSlug: "english",
    sublink: "e-test",
    list: [
      {
        slug: "e-test",
        title: "English Test",
        description:
          "Practice for Splunk SOAR Certified Automation Developer Certification Exam with this 100% Free Splunk SOAR Certified Automation Developer Exam dumps. It contains free real exam questions from the actual Splunk SOAR Certified Automation Developer Exam tests.",
        sheetId: "1yO_PrMcx5FwlCwYmkh02utgya9fz-h5k7h-zPN_6VsA",
        gId: "678788395",
        baseGId: "0",
        commentsSlug: "e-test",
        metadata: {

          info1:"A numerical reasoning test is a type of aptitude test that is designed to measure an individual's ability to understand and work with numerical information, such as mathematical concepts and calculations. These tests are often used as part of the recruitment process for jobs that require strong mathematical skills and the ability to work with numerical data, such as in fields like finance, accounting, and engineering.",

          info2:"Numerical reasoning tests typically consist of a series of problems or questions that require the test taker to analyze numerical information and make calculations, such as mathematical equations or simple arithmetic. The test may also include questions on data interpretation, such as the ability to understand and interpret charts and graphs, and on numerical estimation, such as the ability to make approximate calculations based on incomplete information. Numerical reasoning tests are designed to measure a range of skills, including the ability to understand and work with numerical information and the ability to analyze and interpret data.",

          examName: "Splunk SOAR Certified Automation Developer Exam",
          examCode: "SPLK-2003",
          about:
            "The Splunk SOAR Certified Automation Developer Exam is a certification exam designed to test a candidate's knowledge of Splunk's Security Orchestration, Automation, and Response (SOAR) platform. The exam is designed to assess a candidate's ability to create and deploy Splunk SOAR applications, integrate with other security and IT operations products, and understand the Splunk SOAR architecture. The certification is designed to validate an individual's skills and expertise in deploying, configuring, and managing Splunk SOAR applications. The Splunk SOAR Certified Automation Developer Exam is a great way for companies to ensure that their security teams are knowledgeable and proficient in their use of Splunk SOAR.",
          testimonial:
            ["The numerical reasoning test was very beneficial & informative. The questions required a good understanding of numerical concepts.", 
            "This numerical reasoning test really helped me understand my strengths and weaknesses in terms of numerical reasoning.",
            "I am pleasantly surprised by how well-structured the test was. The questions were quite challenging but not impossible,"],
          whyCertification: [
            "Using our free numerical reasoning test can help you gain a better understanding of your numerical reasoning skills and identify areas where you may need to improve. Taking test can help you feel more confident and prepared if you need to take one as part of a job application or other assessment.",
            "Our free test can also help you identify your strengths and weaknesses in numerical reasoning, which can help you focus your study and preparation efforts if you plan to take a more formal test in the future.",
          ],
          format1:"Numerical reasoning tests are a type of assessment that are designed to measure an individual's ability to understand and interpret numerical data. These tests typically consist of a set of multiple-choice questions that involve mathematical concepts such as arithmetic and basic statistics.",
          format2:"The format of these tests can vary depending on the company or organization administering the test. These tests are usually used as a part of the recruitment process for jobs that require strong numerical skills, such as finance, accounting, engineering, and data analysis.",
        },
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

  var certData = catData.list[0];
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
      let response = await fetch(
        `https://tasks.adaface.com/sheets/force-run/update-db?sheetId=${sheetId}&gId=${gId}&baseGId=${baseGId}&processedResult=true`
      );
      let data = await response.json();

      if (data.success) {
        var json = (data.data || {}).processed_json;
        // get keys length of json.
        var rows = Object.keys(json).length;
        var questions = [];
        for (var i = 2; i <= rows; i++) {
          var question = json[i];
          // console.log(question["10"]);
          // console.log(question["10"].split(","));
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