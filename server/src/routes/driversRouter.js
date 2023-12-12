const { Router } = require("express");
const {
  getDriversHandler,
  getDetailHandler,
  getNameHandler,
  postDriverHandler,
} = require("../handlers/driversHandlers");

const driversRouter = Router();

driversRouter.get("/", getNameHandler, getDriversHandler);
driversRouter.get("/:id", getDetailHandler);
driversRouter.post("/", postDriverHandler);

module.exports = driversRouter;
