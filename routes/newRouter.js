const { Router } = require("express");
const { showNew, addMessage } = require("../controllers/newController");

const newRouter = Router();

newRouter.get("/", showNew);
newRouter.post("/", addMessage);

module.exports = newRouter;
