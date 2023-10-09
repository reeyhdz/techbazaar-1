'use client';
import Form from "../components/loginForm";
import { useAuth } from "../hooks";
import {
  Box,
  Flex,
} from "@chakra-ui/react";
import Footer from "../components/footer";
import { useRouter } from "next/navigation";



export default function LoginScreen() {
  const {user} = useAuth();
  const router = useRouter();
  if (user){
    router.push('/');
    return null;
  }
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
