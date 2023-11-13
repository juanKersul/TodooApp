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
    <AccordionItem >
      <AccordionButton bg='#EDF2F7'>
        <Heading
          size="md"
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
          {todo.title}
        </Heading>
        <Tag ml="auto">{todo.category}</Tag>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4} bg='#FFFAF0'>
        <Card bg='#EDF2F7'>
          <CardBody>
            <Text>{todo.description}</Text>
          </CardBody>
          <CardFooter>
            <Button variant='outline' onClick={() => completeTodo(todo.id)}>{buttonText}</Button>
            <Button variant='outline' onClick={() => removeTodo(todo.id)}>Delete</Button>
            <Button variant='outline' onClick={() => edit(todo.id)}>Edit</Button>
          </CardFooter>
        </Card>
      </AccordionPanel>
    </AccordionItem>
  );
}
export default Todo;
