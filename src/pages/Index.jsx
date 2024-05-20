import React, { useState } from "react";
import { Container, VStack, Heading, Input, Button, Textarea, Text, HStack, IconButton, useToast } from "@chakra-ui/react";
import { FaSms } from "react-icons/fa";

const Index = () => {
  const [fromNumber, setFromNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSendSMS = () => {
    if (fromNumber && phoneNumber && message) {
      toast({
        title: "SMS Sent",
        description: `Message sent from ${fromNumber} to ${phoneNumber}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFromNumber("");
      setPhoneNumber("");
      setMessage("");
    } else {
      toast({
        title: "Error",
        description: "Please enter from number, phone number, and message.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>
          Bulk SMS Service
        </Heading>
        <Input placeholder="Enter from number" value={fromNumber} onChange={(e) => setFromNumber(e.target.value)} size="lg" />
        <Input placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} size="lg" />
        <Textarea placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} size="lg" />
        <HStack spacing={4}>
          <Button colorScheme="teal" size="lg" onClick={handleSendSMS} leftIcon={<FaSms />}>
            Send SMS
          </Button>
          <IconButton aria-label="Send SMS" icon={<FaSms />} size="lg" onClick={handleSendSMS} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
