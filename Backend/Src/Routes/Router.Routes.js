const express = require("express");
const { Fetch_Data, Add_Resource, Fetch_Pending_Resource } = require("../Controller/Study_Materials.controller");

const Router = express.Router();

Router.route("/fetch").get(Fetch_Data);
Router.route("/resource").post(Add_Resource);
Router.route("/getPending").get(Fetch_Pending_Resource);


module.exports = Router;
