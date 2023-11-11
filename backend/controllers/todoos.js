const todooRouter = require("express").Router();

let todoos = [
  {
    title: "First todo",
    description: "sex",
    isCompleted: false,
    category: "Personal",
    id: 0,
  },
];
const generateId = () => {
  const maxId =
    todoos.length > 0 ? Math.max(...todoos.map((todoo) => todoo.id)) : 0;
  return maxId + 1;
};

todooRouter.post("/", (request, response) => {
  console.log("request.body", request.body);
  const todoo = {
    title: request.body.title,
    description: request.body.description,
    isCompleted: request.body.isCompleted,
    category: request.body.category,
    id: generateId(),
  };
  todoos.push(todoo);
  response.json(todoo);
});

todooRouter.get("/", (request, response) => {
  response.json(todoos);
});

todooRouter.put("/:id", (request, response) => {
  console.log("ENTRO");
  const id = Number(request.params.id);
  const updatedTodo = {
    title: request.body.title,
    description: request.body.description,
    isCompleted: request.body.isCompleted,
    category: request.body.category,
    id: id,
  };
  todoos = todoos.map((todoo) => (todoo.id !== id ? todoo : updatedTodo));
  response.json(updatedTodo);
});

todooRouter.patch("/:id", (request, response) => {
  const id = Number(request.params.id);
  const todoo = todoos.find((todoo) => todoo.id === id);
  todoo.isCompleted = request.body.isCompleted;
  response.json(todoo);
});

todooRouter.delete("/:id", (request, response) => {
  const id = Number(request.params.id);
  todoos = todoos.filter((todoo) => todoo.id !== id);
  response.status(204).end();
});
module.exports = todooRouter;
