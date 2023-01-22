import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { themeColor } from "./constants";

const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // send email or store the message
    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Message:", message);
    console.log(import.meta.env.VITE_FIREBASE_API_KEY);
  };

  return (
    <Box px={5} py="20" id="contact">
      <Heading as="h2" size="lg" mb={5}>
        Contact Me
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            isRequired
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
            isRequired
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            isRequired
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          />
        </FormControl>
        <Button
          mt={4}
          type="submit"
          color="white"
          bg={themeColor}
          _hover={{}}
          _active={{}}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactMe;
