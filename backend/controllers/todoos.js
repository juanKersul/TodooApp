const todooRouter = require("express").Router();
const { where } = require("sequelize");
const Todoo = require("../models/todoos");

todooRouter.post("/", async (request, response) => {
  try {
    const todoo = await Todoo.create(request.body);
    return response.json(todoo);
  } catch (error) {
    response.status(400).json({ error });
  }
});

todooRouter.get("/", async (request, response) => {
  const todoos = await Todoo.findAll();
  response.json(todoos);
});

todooRouter.put("/:id", async (request, response) => {
  const id = Number(request.params.id);
  try {
    const todoo = await Todoo.update(request.body, {
      where: { id: id },
      returning: true,
    });
    response.json(todoo[1][0]);
  } catch (error) {
    response.status(400).json({ error });
  }
});

todooRouter.patch("/:id", async (request, response) => {
  const id = Number(request.params.id);
  const todoo = await Todoo.update(request.body, {
    where: { id: id },
    returning: true,
  });
  response.json(todoo[1][0]);
});

todooRouter.delete("/:id", (request, response) => {
  const id = Number(request.params.id);
  try {
    Todoo.destroy({ where: { id: id } });
    response.status(204).end();
  } catch {
    response.status(400).json({ error });
  }
});
module.exports = todooRouter;
