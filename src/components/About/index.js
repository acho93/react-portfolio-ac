import React from 'react';

import Layout from '../Layout';

import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  import AshleyPic from '../../assets/images/ashley-pic.jpg';
  
  export default function About() {
    return (
      <Layout>
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'gray.800'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('pink', 'gray.800')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              About Me
            </Text>
            <Heading>Ashley Cho</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Originally from New York City, I'm a recent transplant to the Bay Area. 
              I used to work as a school speech-language pathologist working with students between K-12. 
              After moving to San Francisco, I wanted to explore the tech industry and learn a new skill, which is why I enrolled in a coding bootcamp where I learned a lot!
            </Text>
            <Text color={'gray.500'} fontSize={'lg'}>
              In my free time, I like to read, complete the workout rings on my Apple Watch, and explore restaurants and parks in my new neighborgood, as well as venture out farther in the Bay Area with weekend trips to Napa and outdoor hikes.
              I do all of these activities with my best friend, Flynn, who is the little dog in my picture, and my pet ogre, Kevin (not pictured).
            </Text>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                AshleyPic
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      </Layout>
    );
  }