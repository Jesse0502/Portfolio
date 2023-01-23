import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import PFP from "./assets/pfp.jpg";
import { backgroundColor, themeColor } from "./constants";
import "./index.css";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Skills from "./Skills";
import AboutMe from "./About";
import ContactMe from "./Contact";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

function App() {
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  const smoothScroll = (e: any) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box
      color="white"
      className="root"
      scrollBehavior={"smooth"}
      minH="100vh"
      id="home"
      bg={backgroundColor}
    >
      <Navbar smoothScroll={smoothScroll} />
      <Center alignItems="center" flexDir="column" textAlign="center" py="3">
        <Image
          borderRadius={"full"}
          src={PFP}
          mt={["10", 0]}
          width={["52", "72"]}
          height={["52", "72"]}
          alt="avatar bigheads"
          placeholder="blur"
        />
        <Box>
          <Heading as="h1" fontSize="2xl" fontWeight="500" py="4">
            Hi, I'm Jasmeet{" "}
            <span role="img" aria-label="hand">
              👋🏻
            </span>
          </Heading>

          <Heading
            fontSize={["3xl", "4xl"]}
            w={["90%", "60%"]}
            py=""
            m="auto"
            fontWeight="700"
          >
            <Text as="span" color={themeColor}>
              Building
            </Text>{" "}
            seamless solutions from front-end to back-end, one line of code at a
            time.
          </Heading>
          <Text py="4" w="80%" m="auto">
            A{" "}
            <Text as="span" fontWeight="600">
              Full Stack Developer,
            </Text>{" "}
            building scalable and efficient web solutions, with a keen interest
            in <b> Artificial Intelligence</b> and its applications.
          </Text>
          <a href="/Resume.pdf" target={"_blank"}>
            <Button
              variant="solid"
              bg={"yellow.600"}
              color="white"
              _hover={{}}
              size="lg"
              fontSize="20px"
            >
              View Resume
            </Button>
          </a>
        </Box>
      </Center>

      <Projects />
      <Skills />
      <AboutMe />
      <ContactMe />
    </Box>
  );
}

export default App;
