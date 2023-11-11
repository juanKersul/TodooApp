const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const todooRouter = require("./controllers/todoos");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use("/api/todoo", todooRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
