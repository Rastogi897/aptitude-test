/* eslint consistent-return:0 import/order:0 */

require("newrelic");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
// const { submissionQueue } = require("./services/queue");
// const { processSubmission } = require("./logic/submission");
// const { updateProblemsCache } = require("./logic/problem");
// const redis = require("redis");
// const subscriber = redis.createClient({
//     url: process.env.REDIS_URL,
// });
// subscriber.on("error", (err) => console.log("Redis Client Error", err));
// (async () => {
//     await subscriber.connect();
// })();
var exphbs = require("express-handlebars");
var hbsLayout = require("handlebars-layout");
var marked = require("marked");

var indexRouter = require("./routes/index");
var {
    categoryRender: categoryRender,
    certQuestionsPaginationRender: certQuestionsPaginationRender,
    certRender: certRender,
    certQuestionRender: certQuestionsRender,
} = require("./routes/category");

const isDev = process.env.NODE_ENV !== "production";

var app = express();

if (!isDev || !!Number(process.env.ENABLE_NGROK)) {
    // enable this if you run behind a proxy like nginx in production
    app.set("trust proxy", 1);
}

var minifyHTML = require("express-minify-html");

var hbs = exphbs.create({
    extname: ".hbs",
    defaultLayout: "base",
    layoutsDir: path.join(__dirname, "/views/layouts"),
    partialsDir: path.join(__dirname, "/views/partials"),
    helpers: require("handlebars-helpers")(), // make sure to call the returned function
});
hbs.handlebars.registerHelper("raw-helper", function (options) {
    return options.fn(this);
});

hbs.handlebars.registerHelper(hbsLayout(hbs.handlebars));
// register new functions
hbs.handlebars.registerHelper("object", function ({ hash }) {
    return hash;
});
hbs.handlebars.registerHelper("getObjectValues", function (object, options) {
    return JSON.stringify(Object.values(object || {}));
});
hbs.handlebars.registerHelper("array", function () {
    return Array.from(arguments).slice(0, arguments.length - 1);
});

hbs.handlebars.registerHelper("slicer", (str, s, e = null) => str.slice(s, e));
hbs.handlebars.registerHelper("ifDev", (options) => {
    if (process.env.NODE_ENV !== "production") {
        return options.fn(this);
    } else return options.inverse(this);
});
hbs.handlebars.registerHelper("ifIsNthItem", function (a, b, c, options) {
    if (a % b === (c || 0)) return options.fn(this);
    else return options.inverse(this);
});
hbs.handlebars.registerHelper("dateddmmyyy", function (str) {
    const intervals = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
        { label: "second", seconds: 1 },
    ];

    function timeSince(date) {
        const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
        const interval = intervals.find((i) => i.seconds < seconds);
        const count = Math.floor(seconds / interval.seconds);
        return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
    }

    return timeSince(new Date(str));
});
hbs.handlebars.registerHelper("datetimestring", (str) => {
    var d = new Date(str);
    // convert date d to YYYY-MM-DD
    var date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    return date;
});
hbs.handlebars.registerHelper("getIdFromHeading", (str) =>
    "".join(str.split(" "))
);
hbs.handlebars.registerHelper("markdownGet", (str, str2) => {
    return marked((str || {})[str2] || "");
});
hbs.handlebars.registerHelper("markdown", (str) => {
    return marked(str || "");
});
hbs.handlebars.registerHelper("get_item", (obj, index, options) => {
    // check if arguments are passed and if the minimum length is 1
    // first argument is the object. if object is undefined, return undefined
    // loop over the rest of the arguments until the object becomes empty of the arguments are done.
    // return what is left
    return (obj || {})[index] || undefined;
});
hbs.handlebars.registerHelper("lengthGt", (v1, v2, options) => {
    if (v1 && v1.length > v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});
hbs.handlebars.registerHelper("moduloEq", (v1, v2, v3, options) => {
    if (v1 % v2 == v3) {
        return options.fn(this);
    }
    return options.inverse(this);
});
hbs.handlebars.registerHelper("math", function (lvalue, operator, rvalue) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);
    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue,
    }[operator];
});
hbs.handlebars.registerHelper(
    "mathEq",
    function (lValue, operator, rValue, eValue, options) {
        lValue = parseFloat(lValue);
        rValue = parseFloat(rValue);
        return {
            "+": lValue + rValue == eValue ? true : false,
            "-": lValue - rValue == eValue ? true : false,
            "*": lValue * rValue == eValue ? true : false,
            "/": lValue / rValue == eValue ? true : false,
            "%": lValue % rValue == eValue ? true : false,
        }[operator]
            ? options.fn(this)
            : options.inverse(this);
    }
);
hbs.handlebars.registerHelper(
    "nextItemEquals",
    (array, index, innerIndex, text, options) => {
        return (array || []).length >= index + 1 &&
            (array[index + 1] || {})[innerIndex] === text
            ? options.fn(this)
            : options.inverse(this);
    }
);

hbs.handlebars.registerHelper("ifOfObj", (obj, key, options) => {
    return obj[key] ? options.fn(this) : options.inverse(this);
});

hbs.handlebars.registerHelper("getIdFromObj", (obj, index, options) => {
    return (((obj || {})[index] || "").split(" ") || []).join("");
});

hbs.handlebars.registerHelper("textAdjust", (text) => {
    const ijlPresent = text ? text.match(/[i,j,l,t]/g) : [];
    const upperCase = text ? text.match(/[A-Z][A-Z]/g) : [];
    var width = (text || "").length * 10 + 2;
    // if contains i,l,j,t : minus 2px each
    if ((ijlPresent || []).length > 0) {
        width = width - (ijlPresent || []).length * 2;
    }
    // if contains double uppercase : add 7px each
    if ((upperCase || []).length > 0) {
        width = width + (upperCase || []).length * 7;
    }

    return width;
});

hbs.handlebars.registerHelper("endsWith", (str, chars, options) => {
    return (str || "").endsWith(chars)
        ? options.fn(this)
        : options.inverse(this);
});
// Minifier setup
app.use(
    minifyHTML({
        override: process.env.NODE_ENV === "production",
        // override: true,
        exception_url: false,
        htmlMinifier: {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true,
            minifyJS: true,
            minifyCSS: true,
        },
    })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

console.log("So Long, Thanks for all the fish");

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

var port = normalizePort(process.env.PORT || "5200");
app.set("port", port);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   if (req.session.email) {
//     console.log("A", req.session.email);
//   }
//   next();
// });

app.use("/exam/:category/:cert/view/question/:questionId", (req, res) => {
    certQuestionsRender(
        req.params.category,
        req.params.cert,
        Number(req.params.questionId) || 1
    )(req, res);
});
app.use("/:category/:cert/view/page/:page", (req, res) => {
    certQuestionsPaginationRender(
        req.params.category,
        req.params.cert,
        Number(req.params.page) || 1
    )(req, res);
});
app.use("/exam/:category/:cert", (req, res) => {
    certRender(req.params.category, req.params.cert)(req, res);
});
// app.use("/exam/:category", (req, res) => {
//     categoryRender(req.params.category)(req, res);
// });

app.use("/", indexRouter);

app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

// subscriber.subscribe("upsert-judge-problem", () =>
//     console.log("Subscribed to Redis topic: upsert-judge-problem")
// );

// subscriber.on("message", (channel, problem) => {
//     if (channel === "upsert-judge-problem") {
//         updateProblemsCache({ problem: JSON.parse(problem) });
//     }
// });

// submissionQueue.process("judge0-submission", async (job, done) => {
//     const { id: jobId } = job || {};
//     const { problemCode, source, compilerId } = job.data || {};
//     // console.log("A ", jobId, problemCode, source, compilerId);
//     const { isProcessed, result } = await processSubmission({
//         jobId,
//         problemCode,
//         source,
//         compilerId,
//     });
//     if (isProcessed) {
//         job.progress(100);
//         done(null, result);
//     } else {
//         job.progress(100);
//         done(new Error("could not evaluate submission"), result);
//     }
// });

module.exports = app;
