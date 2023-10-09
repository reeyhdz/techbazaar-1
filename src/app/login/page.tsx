'use client';
import { Formik, Field } from "formik";
import {Auth} from '../api/auth';
import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack
} from "@chakra-ui/react";

const authController = new Auth();

export default function LoginScreen() {
  const router = useRouter();
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
          if (!values.password || !values.email) {
            errors.password = 'Required';
          }
         return errors;
       }}
       onSubmit={async (values, { setSubmitting }) => {
         try {
          setSubmitting(true);
          const response = authController.login(values);
          console.log(response);
          router.push('/');
         } catch (error) {
          throw new Error(error);
         } finally {
          setSubmitting(false);
         }
       }}
     >
          {({ values, handleSubmit, errors, touched, isSubmitting, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    onChange={handleChange}
                    value={values.email}
                    onError={errors.email}
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    variant="filled"
                    value={values.password}
                    onError={errors.password}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button type="submit"
                 colorScheme="purple"
                 width="full"
                 isLoading={isSubmitting}
                 loadingText='Login in...'
                 isDisabled={!values.email || !values.password}
                 >
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
