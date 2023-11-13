const userRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const config = require("../utils/config");
const { User } = require("../models/index");
const secretKey = config.SECRET_KEY;

userRouter.post("/register", async (req, res) => {
  const username = req.body.username;
  const passwordHash = req.body.password;
  console.log(User);
  const user = await User.create({ username, passwordHash });
  res.status(201).json({ message: "Usuario registrado exitosamente" });
});

userRouter.post("/login", async (req, res) => {
  const username = req.body.username;
  const passwordHash = req.body.password;
  const user = await User.findOne({ where: { username, passwordHash } });
  if (!user) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }
  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });
  res.json({ token });
});

module.exports = userRouter;
