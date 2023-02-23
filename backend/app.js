const express = require("express");
// const dotenv = require("dotenv");
const app = express();

require("dotenv").config({ path: "backend/config/config.env" });
module.exports = app;
