import React from 'react';
import {
    Box,
    Center,
    Divider,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
    chakra,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineCursorClick } from 'react-icons/hi';

import Layout from '../Layout';
import projects from '../../portfolio.json';

const SocialButton = ({
    children,
    label,
    href,
    color,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            target={'_blank'}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}
            color={color}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

function ProjectCard(props) {
    return (
        <Center py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${props.image})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={props.image}
                        alt={props.name}
                    />
                </Box>
                <Stack direction={'column'} pt={10} align={'center'}>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {props.name}
                    </Heading>
                    <Stack direction={'column'} align={'center'}>
                        <Text color={'black'}>
                            {props.description}
                        </Text>
                        <Divider></Divider>
                        <Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'LinkedIn'} href={props.github}>
                                <FiGithub />
                            </SocialButton>
                            <SocialButton label={'GitHub'} href={props.deploy}>
                                <HiOutlineCursorClick />
                            </SocialButton>
                        </Stack>
                        </Text>
                        <Divider></Divider>
                        <Text>
                            {props.languages}
                        </Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    )
}

function Wrapper(props) {
    return <div>{props.children}</div>;
}

function Portfolio() {
    return (
        <Layout>
            <section>
                <Heading m={5}>
                    Portfolio
                </Heading>
                <hr></hr>

                <Wrapper>
                    <SimpleGrid columns={2} spacing={10}>

                        {projects.map((portfolio) => (
                            <Box>
                                <ProjectCard
                                    key={portfolio.id}
                                    name={portfolio.name}
                                    image={portfolio.image}
                                    github={portfolio.github}
                                    deploy={portfolio.deploy}
                                    description={portfolio.description}
                                    languages={portfolio.languages}
                                />
                            </Box>
                        ))}

                    </SimpleGrid>
                </Wrapper>
            </section>
        </Layout>
    );
}

export default Portfolio;