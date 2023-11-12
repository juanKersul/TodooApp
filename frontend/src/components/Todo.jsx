import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Button,
  Text,
  Tag,
  Card,
  CardBody,
  CardFooter,
  Center,
} from "@chakra-ui/react";
function Todo({ todo, completeTodo, removeTodo, edit }) {
  const buttonText = todo.isCompleted ? "unmark" : "mark";
  return (
    <AccordionItem>
      <AccordionButton>
        <Heading
          size="md"
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
          {todo.title}
        </Heading>
        <Tag ml="auto">{todo.category}</Tag>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Card>
          <CardBody>
            <Text>{todo.description}</Text>
          </CardBody>
          <CardFooter>
            <Button onClick={() => completeTodo(todo.id)}>{buttonText}</Button>
            <Button onClick={() => removeTodo(todo.id)}>Delete</Button>
            <Button onClick={() => edit(todo.id)}>Edit</Button>
          </CardFooter>
        </Card>
      </AccordionPanel>
    </AccordionItem>
  );
}
export default Todo;
