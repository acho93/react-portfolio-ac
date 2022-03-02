// import React, { useState } from 'react';
//import { validateEmail } from '../../utils/helpers';

import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  Button,
  Center,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';

import Layout from '../Layout';

function ContactForm() {
  // const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  // const [errorMessage, setErrorMessage] = useState('');
  // const { name, email, message } = formState;

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    // if (!errorMessage) {
    //   console.log('Submit Form', formState);
    // }
  };

  // const handleChange = (e) => {
  //   if (e.target.name === 'email') {
  //     const isValid = validateEmail(e.target.value);
  //     if (!isValid) {
  //       setErrorMessage('Your email is invalid.');
  //     } else {
  //       setErrorMessage('');
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage('');
  //     }
  //   }
  //   if (!errorMessage) {
  //     setFormState({ ...formState, [e.target.name]: e.target.value });
  //     console.log('Handle Form', formState);
  //   }
  // };

  return (
    <Layout>
      <section>
        <Heading m={5}>Contact me</Heading>
        <Center m={3}>
        <Box borderRadius={10} borderWidth={1} p={3} w="80%" mb={10}>
          <form id="contact-form" onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <Input id='name' type='text' />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor='email'>Email address</FormLabel>
              <Input id='email' type='email' />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel htmlFor='message'>Message</FormLabel>
              <Textarea placeholder='Type your message here...' />
            </FormControl>

            <Button type="submit" bg={useColorModeValue('pink', 'gray.800')}>Submit</Button>
          </form>

        </Box>

        </Center>
      

      </section>
    </Layout>
  );
}

export default ContactForm;