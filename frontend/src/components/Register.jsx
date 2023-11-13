import React, { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import userService from "../services/userService";
import { useNavigate } from "react-router-dom";
import { CardFooter, ChakraProvider } from "@chakra-ui/react";
import LogOut from "./LogOut";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  Button,
  Center,
  Box,
} from "@chakra-ui/react";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const goto = useNavigate();
  const auth = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await userService.register({ username, password });
      goto("/login");
    } catch (error) {
      console.error(error);
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
        <Center>
          <Card w="lg">
            <CardHeader>
              <Center>
                <Heading>Sign Up</Heading>
              </Center>
            </CardHeader>
            <CardBody>
              <Input
                placeholder="Username"
                variant="filled"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="Password"
                variant="filled"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </CardBody>
            <CardFooter>
              <Button type="Button" onClick={handleRegister}>
                Register
              </Button>
              <Button type="Button" onClick={() => goto("/login")}>
                Log In
              </Button>
            </CardFooter>
          </Card>
        </Center>
      </Box>
    </ChakraProvider>
  );
};

export default Register;
