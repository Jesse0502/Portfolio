import { Box, Center, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PFP from "./assets/pfp.jpg";
import "./index.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

function App() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }, []);
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
