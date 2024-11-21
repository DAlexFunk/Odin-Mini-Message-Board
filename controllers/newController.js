const { addMessageDB } = require("../db/queries");

async function showNew(req, res) {
  res.render("new");
}

async function addMessage(req, res) {
  await addMessageDB(req.body.text, req.body.user);
  res.redirect("/");
}

module.exports = { showNew, addMessage };
