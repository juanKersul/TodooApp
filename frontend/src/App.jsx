import React, { useEffect } from "react";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import todooService from "./services/todooService";
import Title from "./components/Title";
import { ChakraProvider, Box } from "@chakra-ui/react";
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");
  const [editId, setEditId] = useState(null);
  const [Formvalue, setFormValue] = useState({
    title: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    todooService.getAll().then((initialTodos) => {
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
    todooService.create(newTodoo).then((returnedTodoo) => {
      const newTodos = todos.concat(returnedTodoo);
      setTodos(newTodos);
    });
  };

  const completeTodo = (id) => {
    const todoo = todos.find((todo) => todo.id === id);
    todooService
      .change(id, {
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
    todooService.remove(id).then((returnedTodoo) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    });
  };

  const editTodo = (id, value) => {
    todooService.update(id, value).then((returnedTodoo) => {
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
      <Box  bgGradient='linear(orange.100 25%, yellow.100 50%)' h='100vh' display='flex' flexDirection='column' justifyContent='center'>
        <Title />
        <TodoForm value={Formvalue} setValue={setFormValue} action={action} />
        <TodoList
          todos={filteredTodos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          edit={edit}
        />
        <Filter setFilter={setFilter} category={filter} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
