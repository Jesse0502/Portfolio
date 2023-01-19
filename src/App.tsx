import { Box, Center, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import PFP from "./assets/pfp.jpg";
import "./index.css";

function App() {
  return (
    <>
      <Center
        className="root"
        bg="#212324"
        justifyContent={"space-around"}
        alignItems="center"
        flexDir={"column-reverse"}
        color="white"
      >
        <Box textAlign={"center"}>
          <Text fontSize="md" letterSpacing="widest">
            FULL STACK DEVELOPER
          </Text>
          <Text
            fontSize="3xl"
            w="80vh"
            fontWeight={"bold"}
            mt="10"
            letterSpacing="wider"
          >
            Building seamless solutions from front-end to back-end, one line of
            code at a time.
          </Text>
        </Box>
        <Image borderRadius={"200vh"} mt="20" mb="5" height="50vh" src={PFP} />
      </Center>
    </>
  );
}

export default App;