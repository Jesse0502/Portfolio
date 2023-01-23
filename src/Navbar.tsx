import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { backgroundColor, themeColor } from "./constants";

export default function Navbar({ smoothScroll }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box h="20" zIndex={99}>
      <Flex
        p={"4"}
        w="full"
        zIndex={99}
        bg={backgroundColor}
        shadow="lg"
        justify={"space-between"}
        px={["6", "12"]}
        alignItems="center"
        pos="fixed"
      >
        <a href="#home" onClick={smoothScroll}>
          <Heading
            fontFamily={"cursive"}
            color={themeColor}
            fontSize="4xl"
            fontWeight={"bold"}
          >
            folio.
          </Heading>
        </a>
        <Flex alignItems={"center"} display={["none", "flex"]}>
          {["Projects", "Skills", "About", "Contact"].map((i) => (
            <a href={`#${i.toLowerCase()}`} onClick={smoothScroll}>
              <Text
                // onClick={() => setActiveSection(`${i.toLowerCase()}`)}
                className="text-hover"
                fontSize="lg"
                cursor={"pointer"}
                ml="5"
              >
                {i}
              </Text>
            </a>
          ))}
        </Flex>
        <Box
          display={["block", "none"]}
          p="2"
          borderColor="red"
          border="1px"
          onClick={onOpen}
          borderRadius={"lg"}
        >
          <HamburgerIcon fontSize={"2xl"} />
        </Box>
        <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg={backgroundColor} color="white">
            <DrawerHeader>
              <Box pos="absolute" top="6" right={"6"}>
                <CloseIcon onClick={onClose} />
              </Box>
            </DrawerHeader>
            <DrawerBody pt="20">
              {["Projects", "Skills", "About", "Contact"].map((i) => (
                <a href={`#${i.toLowerCase()}`} onClick={smoothScroll}>
                  <Text
                    // onClick={() => setActiveSection(`${i.toLowerCase()}`)}
                    className="text-hover"
                    fontSize="2xl"
                    onClick={onClose}
                    my="2"
                    cursor={"pointer"}
                  >
                    {i}
                  </Text>
                </a>
              ))}
              {/* <Heading>Projects</Heading>
              <Heading py="3">Skills</Heading>
              <Heading>About me</Heading> */}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}
