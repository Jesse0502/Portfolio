import { Box, Flex, Heading, Link, Text, Icon, Image } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Box pt="20" px="5" id="about">
      <Heading as="h2" size="lg" mb={5}>
        About Me
      </Heading>
      <Text mb={5}>
        As a final semester Bachelor's in Computer Science Engineering student,
        I am eager to apply my technical skills and knowledge to real-world
        projects. I have 2 years of experience in Javascript, over a year of
        experience in Python and I have worked with several front-end and
        back-end javascript frameworks. My proficiency in React.js and Node.js
        has been honed through my 6 months of full-time experience as a
        full-stack developer at a company and through my freelance projects.
        <br />I am committed to continuously learning and expanding my skill set
        in order to deliver efficient and user-friendly solutions. I am a
        problem solver and a quick learner, and I am confident that my skills
        and experience make me a valuable asset to any team. I look forward to
        the opportunity to contribute to projects and companies that align with
        my values and goals.
      </Text>
      <Flex align="center" mb={5} alignItems="center">
        {[
          {
            link: "https://www.linkedin.com/in/jasmeet-singh-3b5b91185",
            image: "https://img.icons8.com/fluency/512/linkedin.png",
          },
          {
            link: "mailto:jas0502singh@gmail.com",
            image: "https://img.icons8.com/color/512/gmail-new.png",
          },
          {
            link: "https://github.com/Jesse0502",
            image: "https://img.icons8.com/3d-fluency/512/github.png",
          },
        ].map((i) => (
          <Link href={i.link} isExternal>
            <Image h="10" src={i.image} mr={2} />
          </Link>
        ))}
      </Flex>
    </Box>
  );
};
export default AboutMe;
