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

  res.render("singleMessage", { message: messages[messageID] });
}

async function goToMessagePage(req, res) {
  res.redirect(`/messages/${req.body.goToPage}`)
}

async function goToIndex(req, res) {
  res.redirect("/messages")
}

async function handlePost(req, res) {
  if (req.body.goToPage) {
    res.redirect(`/messages/${req.body.goToPage}`);
  } else if (req.body.goToIndex) {
   res.redirect("/messages");
  } else if (req.body.goToNew) {
    res.redirect("/new");
  } else {
    res.send("BAD REQUEST")
  }
}

module.exports = { getAllMessages, getMessage, handlePost };
