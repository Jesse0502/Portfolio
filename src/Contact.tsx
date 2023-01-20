import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";

const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // send email or store the message
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <Box p={5} id="contact">
      <Heading as="h2" size="lg" mb={5}>
        Contact Me
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Input
            id="message"
            type="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          />
        </FormControl>
        <Button mt={4} type="submit">
          Submit
        </Button>
      </form>
      <Text mt={5}>
        Note: This is just an example form, the submit button is not connected
        to any server-side logic.
      </Text>
    </Box>
  );
};

export default ContactMe;
