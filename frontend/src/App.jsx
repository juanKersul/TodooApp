import React, { useEffect } from "react";
import { useState } from "react";
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

  const addTodo = (value) => {
    console.log(value);
    const newTodoo = {
      title: value.title,
      description: value.description,
      isCompleted: false,
      category: value.category,
    };
    todooService.create(newTodoo).then((returnedTodoo) => {
      const newTodos = todos.concat(returnedTodoo);
      setTodos(newTodos);
    });
  };

  const completeTodo = (index) => {
    todooService
      .change(todos[index].id, {
        isCompleted: !todos[index].isCompleted,
      })
      .then((returnedTodoo) => {
        const newTodos = [...todos];
        newTodos[index] = returnedTodoo;
        setTodos(newTodos);
      });
  };

  const removeTodo = (index) => {
    todooService.remove(todos[index].id).then((returnedTodoo) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    });
  };

  const editTodo = (index, value) => {
    todooService.update(todos[index].id, value).then((returnedTodoo) => {
      const newTodos = [...todos];
      newTodos[index] = returnedTodoo;
      setTodos(newTodos);
    });
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
