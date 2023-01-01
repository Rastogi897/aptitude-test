require("isomorphic-fetch");
require("es6-promise").polyfill();

function sendResultToWebhook({ body }) {
  if (!process.env.DEBUG) {
    fetch(
      `http${!!Number(process.env.HTTPS_DOMAIN) ? "s" : ""}://${
        process.env.WEBHOOK_URL
      }/api/submission-result-webhook`,
      {
        method: "post",
        body: JSON.stringify({ submission: body }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(() => {
        console.log("sent to webhook");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = {
  sendResultToWebhook,
};
