const express = require("express");
const { Fetch_Data, Add_Resource } = require("../Controller/Study_Materials.controller");

const Router = express.Router();

Router.route("/fetch").get(Fetch_Data);
Router.route("/resource").post(Add_Resource);


module.exports = Router;
