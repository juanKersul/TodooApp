import React from "react";
import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Learn about React",
      description: "blablabla",
      isCompleted: false,
      category: "learn",
    },
    {
      title: "Meet friend for lunch",
      description: "blablabla",
      isCompleted: false,
      category: "learn",
    },
    {
      title: "Build really cool todo app",
      description: "blablabla",
      isCompleted: false,
      category: "learn",
    },
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [filter, setFilter] = useState("");
  const addTodo = ({ title, category, description }) => {
    const newTodos = todos.concat({ title, category, description });
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const editTodo = (index, value) => {
    const newTodos = [...todos];
    newTodos[index] = value;
    setTodos(newTodos);
  };
  let filteredTodos = todos.filter((todo) =>
    todo.category.toLowerCase().startsWith(filter.toLowerCase())
  );
  return (
    <div className="app">
      <h1>TODO APP</h1>
      <Filter setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
      {!isAdding ? (
        <button onClick={() => setIsAdding(!isAdding)}>Add</button>
      ) : (
        <TodoForm
          action={addTodo}
          type={"add"}
          cancel={() => setIsAdding(!isAdding)}
        />
      )}
    </div>
  );
}

export default App;
