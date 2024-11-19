const { Router } = require("express");
const { getAllMessages, getMessage, goToMessagePage, goToIndex, handlePost } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getAllMessages);
indexRouter.post("/", handlePost);
indexRouter.get("/:messageID", getMessage);
indexRouter.post("/:messageID", handlePost);

module.exports = indexRouter;
