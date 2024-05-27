import MockLogger from "../classes/MockLogger";
import { iLogger } from "../interaces/iLogger";
import iUser from "../interaces/iUser";
import container from "../inversify.config";
import User from "../models/UserTypeORMDataMapper";
import InvTypes from "../types/inversifyTypes";

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("user with default ElasticLogger");
  const userWithDefaultLogger = container.get<iUser>(InvTypes.User);
  console.log(userWithDefaultLogger.log());

  console.log(
    "unbinding default logger and replaceing with MockLogger at runtime"
  );
  container.unbind(InvTypes.iLogger);
  container.bind<iLogger>(InvTypes.iLogger).to(MockLogger);

  const userWithMockLogger = container.get<iUser>(InvTypes.User);
  console.log(userWithMockLogger.log());

  res.render("index", { title: "Express" });
});

module.exports = router;
