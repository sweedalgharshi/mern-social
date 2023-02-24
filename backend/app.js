const express = require("express");
const postRouter = require("./routes/post.routes");

const app = express();

// using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use("/api/v1", postRouter);

module.exports = app;
