const express = require("express");
const Router = express.Router();
const usercontroller = require("../controllers/usercontroller");

const { body } = require("express-validator");

Router.get("/",usercontroller.userprofileupdate);

module.exports = Router;