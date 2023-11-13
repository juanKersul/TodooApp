import { Button, Center, Card } from "@chakra-ui/react";
const LogOut = ({ logout }) => {
  return (
    <Center mt='10px'>
      <Card w="lg">
        <Center>
          <Button
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </Button>
        </Center>
      </Card>
    </Center>
  );
};
export default LogOut;
