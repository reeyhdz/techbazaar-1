'use client';
import Form from "../components/signUpForm";

import {
  Box,
  Flex,
} from "@chakra-ui/react";
import Footer from "../components/footer";



export default function LoginScreen() {

  return (
    <><Flex bg="gray.100" align="center" justify="center" h="70vh">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Form />
      </Box>
    </Flex>
    <Flex align="center" justify="center" h="30vh">
        <Footer />
      </Flex></>
  );
}
