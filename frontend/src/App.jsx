import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import todooService from "./services/todooService";

function App() {
  const [todos, setTodos] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    todooService.getAll().then((initialTodos) => {
      setTodos(initialTodos);
    });
  }, []);

  const addTodo = ({ title, category, description }) => {
    const newTodoo = { title, category, isCompleted: "false", description };
    todooService.create(newTodoo).then((returnedTodoo) => {
      const newTodos = todos.concat({ title, category, description });
      setTodos(newTodos);
    });
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
