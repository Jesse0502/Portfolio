import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { backgroundColor, themeColor } from "./constants";

export default function Navbar({ smoothScroll }: any) {
  return (
    <Box h="20" zIndex={999}>
      <Flex
        p="4"
        w="full"
        zIndex={9999}
        bg={backgroundColor}
        shadow="lg"
        justify={"space-between"}
        px="12"
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
        <Flex alignItems={"center"}>
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
      </Flex>
    </Box>
  );
}
