const messages = require("../models/messagesData");

async function getAllMessages(req, res) {
  if (messages.length <= 0) {
    res.status(404).send("There are no messages");
  }

  res.render("index", { messages: messages });
}

async function getMessage(req, res) {
  const { messageID } = req.params;

  if (messageID >= messages.length) {
    res.status(404).send(`There is no message with id ${messageID}`);
  }

  res.render("index", { messages: [messages[messageID]] });
}

module.exports = { getAllMessages, getMessage };
