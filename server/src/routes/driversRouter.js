const { Router } = require("express");
const {
  getDetailHandler,
  postDriverHandler,
  getHandler,
} = require("../handlers/driversHandlers");

const driversRouter = Router();

driversRouter.get("/", getHandler);
driversRouter.get("/:id", getDetailHandler);
driversRouter.post("/", postDriverHandler);

module.exports = driversRouter;
