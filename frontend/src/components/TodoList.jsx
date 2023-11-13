import Todo from "./Todo";
import { Accordion, Center, Card } from "@chakra-ui/react";
const TodoList = ({ todos, completeTodo, removeTodo, edit }) => {
  return (
    <Center mt='10px'>
      <Card >
        <Accordion w="lg">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              edit={edit}
            />
          ))}
        </Accordion>
      </Card>
    </Center>
  );
};
export default TodoList;
