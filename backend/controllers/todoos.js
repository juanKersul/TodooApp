const todooRouter = require("express").Router();
const { Todoo } = require("../models/index");
const middleware = require("../utils/middleware");

todooRouter.use(middleware.authenticateToken);

todooRouter.post("/", async (request, response) => {
  const title = request.body.title;
  const description = request.body.description;
  const isCompleted = request.body.isCompleted;
  const category = request.body.category;
  const user_id = request.UserId;
  try {
    const todoo = await Todoo.create({
      title,
      description,
      isCompleted,
      category,
      user_id,
    });
    return response.json(todoo);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

todooRouter.get("/", async (request, response) => {
  const UserId = request.UserId;
  const todoos = await Todoo.findAll({
    where: { user_id: UserId },
    attributes: { exclude: ["userId"] },
  });
  response.json(todoos);
});

todooRouter.put("/:id", async (request, response) => {
  const user_id = request.UserId;
  const id = Number(request.params.id);
  try {
    const todoo = await Todoo.update(request.body, {
      where: { id: id, user_id: user_id },
      returning: true,
    });
    response.json(todoo[1][0]);
  } catch (error) {
    response.status(400).json({ error });
  }
});

todooRouter.patch("/:id", async (request, response) => {
  const user_id = request.UserId;
  const id = Number(request.params.id);
  const todoo = await Todoo.update(request.body, {
    where: { id: id, user_id: user_id },
    returning: true,
  });
  response.json(todoo[1][0]);
});

todooRouter.delete("/:id", (request, response) => {
  const id = Number(request.params.id);
  const user_id = request.UserId;
  try {
    Todoo.destroy({ where: { id: id, user_id: user_id } });
    response.status(204).end();
  } catch {
    response.status(400).json({ error });
  }
});
module.exports = todooRouter;
