import React from 'react';

import {
    Box,
    Heading,
    Stack,
    Text,
    CircularProgress,
    CircularProgressLabel,
    useColorModeValue
} from '@chakra-ui/react';

import { DiJavascript1, DiReact, DiMysql, DiMongodb } from 'react-icons/di';

import Layout from '../Layout';
import ResumeDoc from './ChoResume.pdf'



function Skills() {
    return (
        <Layout>
            <section>
                <Heading m={5}>Skills</Heading>
                <hr></hr>

                <Box>
                    <Stack align={'center'} m={5}>
                        <Box border={'solid'} borderColor={'gray.300'} w={900} bg={useColorModeValue('pink', 'gray.800')}>
                            <Text fontSize='2xl' mt={3} fontWeight={'semibold'}>Technical Skills</Text>
                            <Text mb={3}>Visual representation of my proficiency in various skills</Text>
                            <hr></hr>
                            <Stack direction={'row'} justifyContent={'space-evenly'} m={5}>
                                <Stack direction={'column'} alignItems={'center'}>
                                    <CircularProgress value={70} color='green.400'>
                                        <CircularProgressLabel>60%</CircularProgressLabel>
                                    </CircularProgress>
                                    <DiJavascript1 />
                                </Stack>
                                <Stack direction={'column'} alignItems={'center'}>
                                    <CircularProgress value={75} color='green.400'>
                                        <CircularProgressLabel>75%</CircularProgressLabel>
                                    </CircularProgress>
                                    <DiReact />
                                </Stack>
                                <Stack direction={'column'} alignItems={'center'}>
                                    <CircularProgress value={70} color='green.400'>
                                        <CircularProgressLabel>70%</CircularProgressLabel>
                                    </CircularProgress>
                                    <DiMysql />
                                </Stack>
                                <Stack direction={'column'} alignItems={'center'}>
                                    <CircularProgress value={65} color='green.400'>
                                        <CircularProgressLabel>65%</CircularProgressLabel>
                                    </CircularProgress>
                                    <DiMongodb />
                                </Stack>
                            </Stack>
                        </Box>

                        <Stack align={'center'}>
                            <Text fontSize='2xl' fontWeight={'semibold'}>My Proficiencies:</Text>
                            <Text>HTML</Text>
                            <Text>CSS</Text>
                            <Text>JavaScript</Text>
                            <Text>MySQL</Text>
                            <Text>MongoDB</Text>
                            <Text>Express.js</Text>
                            <Text>React</Text>
                            <Text>Node.js</Text>
                        </Stack>

                        <Text m={6} color={'purple'}><a href={ResumeDoc} download>Download Resume</a></Text>
                    </Stack>
                </Box>
            </section>
        </Layout>
    )
}

export default Skills;