import {
  Button,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
  Heading,
} from "@chakra-ui/react";
function TodoForm({ value, setValue, action }) {
  const handleSubmit = (e) => {
    action(value);
    setValue({ title: "", description: "", category: "" });
  };
  return (
    <Center mt="10px">
      <Card w="lg" bg="#FFFAF0">
        <Center>
          <CardHeader
            bg="#EDF2F7"
            w="md"
            border="1px"
            borderStyle="groove"
            borderRadius="6px"
            mt="10px"
          >
            <Center>
              <Heading size="md">Add or edit tasks</Heading>
            </Center>
          </CardHeader>
        </Center>
        <CardBody>
          <Input
            type="text"
            name="title"
            variant="filled"
            placeholder="title"
            value={value.title}
            onChange={(e) => setValue({ ...value, title: e.target.value })}
          />
          <Input
            type="text"
            name="category"
            variant="filled"
            value={value.category}
            placeholder="category"
            onChange={(e) => setValue({ ...value, category: e.target.value })}
          />
          <Input
            type="text"
            name="description"
            variant="filled"
            value={value.description}
            placeholder="description"
            onChange={(e) =>
              setValue({ ...value, description: e.target.value })
            }
          />
        </CardBody>
        <Button variant='outline' bg="#EDF2F7" onClick={handleSubmit}>OK</Button>
      </Card>
    </Center>
  );
}
export default TodoForm;
