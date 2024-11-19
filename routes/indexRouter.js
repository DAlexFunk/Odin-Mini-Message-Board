const { Router } = require("express");
const { getAllMessages, getMessage } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getAllMessages);
indexRouter.get("/:messageID", getMessage)

module.exports = indexRouter;
