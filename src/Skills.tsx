import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Progress,
  Text,
} from "@chakra-ui/react";
import { useEffect, useId, useRef, useState } from "react";
import { themeColor } from "./constants";

export default function Skills() {
  const skillsRef = useRef(null);
  const skills = [
    { name: "HTML", progress: 90, start: 0 },
    { name: "CSS", progress: 85, start: 0 },
    { name: "JavaScript", progress: 90, start: 0 },
    { name: "React.js", progress: 85, start: 0 },
    { name: "Node.js", progress: 85, start: 0 },
    { name: "Python", progress: 85, start: 0 },
    { name: "Django", progress: 70, start: 0 },
    { name: "SQL", progress: 70, start: 0 },
  ];
  const [skillValues, setSkillValues] = useState(skills);
  let timeoutId: any = null;
  const timeout = 5;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSkillValues(skills);
          timeoutId = setTimeout(animate, timeout);
        } else {
          clearTimeout(timeoutId);
          setSkillValues(skills);
        }
      });
    });
    // @ts-ignore
    observer.observe(skillsRef.current);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  const animate = () => {
    setSkillValues((i) => {
      const updatedValues = i.map((u) => {
        if (u.progress > u.start) return { ...u, start: u.start + 1 };

        return u;
      });
      return updatedValues;
    });
    timeoutId = setTimeout(animate, timeout);
  };

  return (
    <Box pt="16" id="skills">
      <Box p={5}>
        <Heading as="h2" size="lg" mb={5}>
          Skills
        </Heading>
        <Flex wrap={"wrap"} ref={skillsRef}>
          {skillValues.map((i) => (
            <Box p={2} key={useId()} w={["full", "full", 1 / 3]}>
              <Heading as="h3" size="md" mb={3}>
                {i.name}
              </Heading>

              <Progress color={themeColor} hasStripe value={i.start} />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
