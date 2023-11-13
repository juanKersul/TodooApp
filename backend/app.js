const express = require("express");
const app = express();
const cors = require("cors");
const todooRouter = require("./controllers/todoos");
const middleware = require("./utils/middleware");
const userRouter = require("./controllers/users");

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
app.use(middleware.requestLogger);
app.use("/api/users", userRouter);
app.use("/api/todoo", todooRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
