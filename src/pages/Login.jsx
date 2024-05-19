import { useState } from "react";
import { Container, VStack, Heading, Input, Button, useToast } from "@chakra-ui/react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    if (username && password) {
      toast({
        title: "Login Successful",
        description: `Welcome, ${username}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setUsername("");
      setPassword("");
    } else {
      toast({
        title: "Error",
        description: "Please enter both username and password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>
          Login
        </Heading>
        <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} size="lg" />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} size="lg" />
        <Button colorScheme="teal" size="lg" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;
