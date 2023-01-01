const fetch = require("node-fetch");

function sendSuccessDiscord({ message, data }) {
    if (message && process.env.DISCORD_SUCCESS_WEBHOOK) {
        return fetch(process.env.DISCORD_SUCCESS_WEBHOOK, {
            method: "POST",
            body: JSON.stringify({
                content: `✔️ ${message}`,
                ...(data
                    ? {
                          embeds: [
                              {
                                  description: JSON.stringify(data, null, 4),
                              },
                          ],
                      }
                    : {}),
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

function sendErrorDiscord({ message, data }) {
    if (process.env.DISCORD_ERRORS_WEBHOOK) {
        return fetch(process.env.DISCORD_ERRORS_WEBHOOK, {
            method: "POST",
            body: JSON.stringify({
                content: `🛑️ ${message}`,
                ...(data
                    ? {
                          embeds: [
                              {
                                  description:
                                      "```json\n" +
                                      JSON.stringify(data, null, 4) +
                                      "\n```",
                              },
                          ],
                      }
                    : {}),
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

function sendDigestDiscord({ message, data }) {
    if (message && process.env.DISCORD_DIGEST_WEBHOOK) {
        return fetch(process.env.DISCORD_DIGEST_WEBHOOK, {
            method: "POST",
            body: JSON.stringify({
                content: `📓 ${message}`,
                ...(data
                    ? {
                          embeds: [
                              {
                                  description: JSON.stringify(data, null, 4),
                              },
                          ],
                      }
                    : {}),
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

function sendAlertDiscord({ message, data }) {
    if (message && process.env.DISCORD_ALERTS_WEBHOOK) {
        return fetch(process.env.DISCORD_ALERTS_WEBHOOK, {
            method: "POST",
            body: JSON.stringify({
                content: `⚠ ${message}`,
                ...(data
                    ? {
                          embeds: [
                              {
                                  description: JSON.stringify(data, null, 4),
                              },
                          ],
                      }
                    : {}),
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

module.exports = {
    sendSuccessDiscord,
    sendErrorDiscord,
    sendDigestDiscord,
    sendAlertDiscord,
};
