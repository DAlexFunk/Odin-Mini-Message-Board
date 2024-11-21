const { getAllMessages, getMessageByID } = require("../db/queries");

// async function getAllMessages(req, res) {
//   if (messages.length <= 0) {
//     res.status(404).send("There are no messages");
//   }

//   res.render("index", { messages: messages });
// }

// async function getMessage(req, res) {
//   const { messageID } = req.params;

//   if (messageID >= messages.length) {
//     res.status(404).send(`There is no message with id ${messageID}`);
//   }

//   res.render("singleMessage", { message: messages[messageID] });
// }

async function handleGet(req, res) {
  const { messageID } = req.params;
  if (!messageID) {
    const messages = await getAllMessages();
    res.render("index", { messages });
  } else {
    const message = await getMessageByID(messageID);
    res.render("singleMessage", { message: message[0] })
  }
}

async function handlePost(req, res) {
  if (req.body.goToPage) {
    res.redirect(`/messages/${req.body.goToPage}`);
  } else if (req.body.goToIndex) {
    res.redirect("/messages");
  } else if (req.body.goToNew) {
    res.redirect("/new");
  } else {
    res.status(404).send("BAD REQUEST");
  }
}

module.exports = { handleGet, handlePost };
