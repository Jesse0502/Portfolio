import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Heading,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { themeColor } from "./constants";

const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      import.meta.env.VITE_SERVER_API + "/extras/portfolio-contact",
      {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: new Headers({ "content-type": "application/json" }),
      }
    );

    if (response.status === 200) {
      toast({
        title: "Thanks for reaching out!",
        description:
          "I will get back to you on your email as soon as possible :)",
        variant: "solid",
        position: "bottom-right",
        status: "success",
      });
      setName("");
      setEmail("");
      setMessage("");
    } else {
      toast({
        title: "Please try again later!",
        description: "Some unexpected error occured!",
        variant: "solid",
        position: "bottom-right",
        status: "error",
      });
    }
    setLoading(false);
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
          isLoading={loading}
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
