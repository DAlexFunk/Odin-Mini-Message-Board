const messages = require("../models/messagesData");

async function showNew(req, res) {
  res.render("new");
}

async function addMessage(req, res) {
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  };

  messages.push(newMessage);

  res.redirect("/");
}

module.exports = { showNew, addMessage };
