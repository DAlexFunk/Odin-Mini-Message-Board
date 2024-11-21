const { Router } = require("express");
const { handleGet, handlePost } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", handleGet);
indexRouter.post("/", handlePost);
indexRouter.get("/:messageID", handleGet);
indexRouter.post("/:messageID", handlePost);

module.exports = indexRouter;
