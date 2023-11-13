import React, { useEffect } from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Filter from "./Filter";
import todooService from "../services/todooService";
import Title from "./Title";
import LogOut from "./LogOut";
import { ChakraProvider, Box, Button } from "@chakra-ui/react";
import { useAuth } from "../auth/AuthProvider";

function TodoApp() {
  const auth = useAuth();
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");
  const [editId, setEditId] = useState(null);
  const [Formvalue, setFormValue] = useState({
    title: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    const token = auth.getAccessToken();
    todooService.getAll(token).then((initialTodos) => {
      setTodos(initialTodos);
    });
  }, []);

  const addTodo = (value) => {
    const newTodoo = {
      title: value.title,
      description: value.description,
      isCompleted: false,
      category: value.category,
    };
    todooService
      .create(auth.getAccessToken(), newTodoo)
      .then((returnedTodoo) => {
        const newTodos = todos.concat(returnedTodoo);
        setTodos(newTodos);
      });
  };

  const completeTodo = (id) => {
    const todoo = todos.find((todo) => todo.id === id);
    todooService
      .change(auth.getAccessToken(), id, {
        isCompleted: !todoo.isCompleted,
      })
      .then((returnedTodoo) => {
        const newTodos = [...todos];
        newTodos.map((todo) => {
          if (todo.id === id) {
            todo.isCompleted = !todo.isCompleted;
          }
        });
        setTodos(newTodos);
      });
  };

  const removeTodo = (id) => {
    todooService.remove(auth.getAccessToken(), id).then((returnedTodoo) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    });
  };

  const editTodo = (id, value) => {
    todooService
      .update(auth.getAccessToken(), id, value)
      .then((returnedTodoo) => {
        const newTodos = [...todos];
        const updatedTodos = newTodos.map((todo) => {
          if (todo.id === id) {
            return returnedTodoo;
          }
          return todo;
        });
        setTodos(updatedTodos);
      });
  };

  let filteredTodos = todos.filter((todo) =>
    todo.category.toLowerCase().startsWith(filter.toLowerCase())
  );

  const edit = (id) => {
    const todoo = todos.find((todo) => todo.id === id);
    setFormValue({
      title: todoo.title,
      description: todoo.description,
      category: todoo.category,
    });
    setEditId(todoo.id);
  };

  const action = (value) => {
    if (editId === null) {
      addTodo(value);
    } else {
      editTodo(editId, value);
      setEditId(null);
    }
  };
  return (
    <ChakraProvider>
      <Box
        bgGradient="linear(orange.100 25%, yellow.100 50%)"
        h="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Title />
        <TodoForm value={Formvalue} setValue={setFormValue} action={action} />
        <TodoList
          todos={filteredTodos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          edit={edit}
        />
        <Filter setFilter={setFilter} category={filter} />
        <LogOut logout={auth.removeAccessToken}/>
      </Box>
    </ChakraProvider>
  );
}

export default TodoApp;
