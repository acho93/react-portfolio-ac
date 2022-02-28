import React from 'react';
import {
    SimpleGrid,
    Box,
    OrderedList,
    ListItem,
    Stack,
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
        <OrderedList styleType='none'>
            <ListItem><img alt={props.name} src={props.image} /></ListItem>
            <ListItem><p>{props.name}</p></ListItem>
            <ListItem><p>{props.description}</p></ListItem>
            <ListItem>
            <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'LinkedIn'} href={props.github}>
                        <FiGithub />
                    </SocialButton>
                    <SocialButton label={'GitHub'} href={props.deploy}>
                        <HiOutlineCursorClick />
                    </SocialButton>
                </Stack>
            </ListItem>
            <ListItem><p>{props.languages}</p></ListItem>
        </OrderedList>
    )
}

function Wrapper(props) {
    return <div>{props.children}</div>;
}

function Portfolio() {
    return (
        <Layout>
            <section>
                <div>
                    <h2>Projects</h2>
                    <hr></hr>
                </div>

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