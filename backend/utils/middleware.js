const logger = require("./logger");
const jwt = require("jsonwebtoken");
const config = require("./config");

secretKey = config.SECRET_KEY;

const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  jwt.verify(token, secretKey, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido" });
    }
    const UserId = payload.userId;
    req.UserId = UserId;
    next();
  });
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  authenticateToken,
};
