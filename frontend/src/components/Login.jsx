import React, { useState } from "react";
import userService from "../services/userService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import {
  Button,
  Center,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Heading,
  Box,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const goto = useNavigate();
  const auth = useAuth();

  const handleLogin = () => {
    userService
      .login({ username, password })
      .then((data) => {
        auth.saveAccessToken(data.token);
        goto("/");
      })
      .catch((error) => {
        console.error(error);
      });
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
          <Card w="lg" bg="#FFFAF0">
            <CardHeader>
              <Center>
                <Heading>Login</Heading>
              </Center>
            </CardHeader>
            <CardBody>
              <Input
                variant="filled"
                placeholder="Username"
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
              <Button type="Button" onClick={handleLogin}>
                Log in
              </Button>
              <Button type="Button" onClick={() => goto("/register")}>
                Sing Up
              </Button>
            </CardFooter>
          </Card>
        </Center>
      </Box>
    </ChakraProvider>
  );
};

export default Login;
