require("es6-promise").polyfill();
require("isomorphic-fetch");
const slackTimeoutURL =
  "https://hooks.slack.com/services/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";

function sendMajorAlert({ message }) {
  let url = slackTimeoutURL;
  fetch(url, {
    method: "POST",
    body: JSON.stringify({ text: message }),
  })
    .then(() => {
      console.log("sent to slack");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  sendMajorAlert,
};
