import { Input, Center, Card, CardBody } from "@chakra-ui/react";
const Filter = ({ setFilter }) => {
  return (
    <Center>
      <Card w="lg">
        <CardBody>
          <Input
            name="filter"
            placeholder="filter by category"
            variant="filled"
            onChange={(e) => setFilter(e.target.value)}
          />
        </CardBody>
      </Card>
    </Center>
  );
};
export default Filter;
