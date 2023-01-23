import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Image,
  Button,
  Center,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import Superbee1 from "./assets/Superbee1.png";
import Superbee2 from "./assets/Superbee2.png";
import Superbee3 from "./assets/Superbee3.png";
import Artbot1 from "./assets/Artbot1.png";
import Artbot2 from "./assets/Artbot2.png";
import Strike1 from "./assets/Strike1.png";
import Strike2 from "./assets/Strike2.png";
import Strike3 from "./assets/Strike3.png";
import Strike4 from "./assets/Strike4.png";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Projects = () => {
  return (
    <Box p={5} pt="24" id="projects">
      <Heading as="h2" size="lg" mb={5}>
        Projects
      </Heading>
      <Flex wrap="wrap" w="full" justify={"space-around"}>
        {[
          {
            link: "https://www.strikeapp.co/",
            images: [Strike1, Strike2, Strike3, Strike4],
            description:
              "I was part of a development team that created a full-stack web application using Nest.js and React.js. My role focused on the front-end and back-end development, utilizing Nest.js for the server-side and React.js for the client-side. The project was a success, delivering a functional and user-friendly web application that met the client's needs.",
            title: "Strikeapp.co",
          },
          {
            link: "https://superbeetradings.com",
            images: [Superbee1, Superbee2, Superbee3],
            description:
              "I developed a data analysis platform for stock market prices using Next.js and Nest.js, building it from scratch. The platform fetches the latest stock market prices via Zerodha's WebSocket and has a pricing feature that allows users to make payments through Razorpay. The project was a success, and it was deployed on Digital Ocean. It provides valuable insights and real-time data to its users, making it an efficient tool for keeping track of the stock market.",
            title: "Superbee Tradings",
          },
          {
            link: "https://art-bot.netlify.com",
            images: [Artbot2, Artbot1],
            description:
              "I developed an AI assistant using React and Flask, which includes real-time speech recognition, natural language processing using Spacy, and integration with Gmail. The assistant can check unread emails, tell jokes, and provide interesting facts, and many more. The assistant was built from the ground up, and it can be used to perform various tasks by just using voice commands. It is a powerful tool that makes it easy to use and navigate through different tasks, making it a great addition to any user's digital life.",
            title: "Artbot",
          },
        ].map((i) => (
          <Card project={i} />
        ))}
      </Flex>
    </Box>
  );
};

const Card = ({
  project,
}: {
  project: {
    images: any[];
    title: string;
    description: string;
    link: string;
  };
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [noOfLines, setnoOfLines] = useState(3);
  const viewRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const IncreaseLines = () => {
    if (noOfLines === Infinity) {
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
      setnoOfLines(3);
    } else {
      setScrollPosition(window.pageYOffset);
      setnoOfLines(Infinity);
      // @ts-ignore
      viewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Flex
      flexDir={"column"}
      shadow={"md"}
      mt="5"
      rounded="lg"
      bg="#2D3748"
      ref={viewRef}
      overflow="auto"
      //   m="auto"
      h={"max"}
    >
      <Box position="relative" overflow={"hidden"} h="30vh" w="full">
        <AnimatePresence>
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              // exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
              style={{
                display: index === currentImageIndex ? "block" : "none",
              }}
            >
              <Link href={project.link} isExternal>
                <Image
                  h="30vh"
                  objectFit={"contain"}
                  transform="scale(1)"
                  src={image}
                  transition="all 0.2s ease-in-out"
                  //   opacity={0}
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                  alt={project.title}
                />
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
        <Flex
          justify="space-between"
          textAlign="center"
          position="absolute"
          w="full"
          // left={0}
          // right={0}
          // top="40"
        >
          <Center
            pos="absolute"
            left="0"
            bottom="0"
            h="30vh"
            onClick={() => {
              if (currentImageIndex === project.images.length - 1) {
                setCurrentImageIndex(0);
              } else {
                setCurrentImageIndex(currentImageIndex + 1);
              }
            }}
          >
            <ChevronLeftIcon
              fontSize="2xl"
              mx="2"
              bg="whiteAlpha.500"
              _hover={{
                bg: "whiteAlpha.800",
                transition: "all 0.2s ease-in-out 0.1s",
              }}
              color="black"
              borderRadius={"full"}
            />
          </Center>
          <Center
            pos="absolute"
            right="0"
            bottom="0"
            px=""
            h="30vh"
            onClick={() => {
              if (currentImageIndex === project.images.length - 1) {
                setCurrentImageIndex(0);
              } else {
                setCurrentImageIndex(currentImageIndex + 1);
              }
            }}
          >
            <ChevronRightIcon
              fontSize="2xl"
              mx="2"
              bg="whiteAlpha.500"
              _hover={{
                bg: "whiteAlpha.800",
                transition: "all 0.2s ease-in-out 0.1s",
              }}
              color="black"
              borderRadius={"full"}
            />
          </Center>
        </Flex>
      </Box>
      <Box p={5} w={["full", "96", "96"]}>
        <Heading as="h3" w="full" size="md" mb={3}>
          <Link href={project.link} isExternal>
            {project.title}
          </Link>
        </Heading>
        <Text>
          <Text mb={4} noOfLines={noOfLines}>
            {project.description}
          </Text>
          <Button
            _hover={{ color: "white" }}
            color="whiteAlpha.400"
            variant={"link"}
            onClick={IncreaseLines}
          >
            Read more
          </Button>
        </Text>
      </Box>
    </Flex>
  );
};

export default Projects;
