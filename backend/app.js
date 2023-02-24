const express = require("express");
const postRouter = require("./routes/post.routes");
const userRouter = require("./routes/user.routes");

const app = express();

// using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use("/api/v1", postRouter);
app.use("/api/v1", userRouter);

module.exports = app;
