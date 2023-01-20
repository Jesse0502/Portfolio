import { Box, Heading, Text } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Box p={5} id="about">
      <Heading as="h2" size="lg" mb={5}>
        About Me
      </Heading>
      <Text mb={5}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
        magna eget congue malesuada, velit magna blandit velit, vel placerat
        nibh velit euismod augue. Sed at turpis velit. Sed id tellus congue,
        bibendum mauris id, bibendum ipsum. Sed at massa eget sapien dapibus
        commodo. Sed auctor, magna eget congue malesuada, velit magna blandit
        velit, vel placerat nibh velit euismod augue. Sed at turpis velit. Sed
        id tellus congue, bibendum mauris id, bibendum ipsum. Sed at massa eget
        sapien dapibus commodo.
      </Text>
    </Box>
  );
};
export default AboutMe;
