'use client';
import React from 'react'
import { Formik, Field } from "formik";
import {Auth} from '../api/auth';
import { useRouter } from "next/navigation";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack
} from "@chakra-ui/react";

const Form = () => {
  const authController = new Auth();
  const router = useRouter();
  return (
    <Formik
    initialValues={{ email: '', password: '', username: '' }}
    validate={values => {
      const errors = {};
      if (!values.password || !values.email) {
        errors.password = 'Required';
      } else if (!values.email) {
       errors.email = 'Required';
      } else if (!values.username) {
        errors.username = 'Required';
      }
      return errors;
    }}
    onSubmit={async (values, { setSubmitting }) => {
      try {
       setSubmitting(true);
       const response = authController.signUp(values);
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
             <FormControl isInvalid={!!errors.password && touched.password}>
               <FormLabel htmlFor="username">Username</FormLabel>
               <Field
                 as={Input}
                 id="username"
                 name="username"
                 onChange={handleChange}
                 type="username"
                 variant="filled"
                 value={values.username}
                 onError={errors.username}
               />
               <FormErrorMessage>{errors.username}</FormErrorMessage>
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
  )
}

export default Form;
