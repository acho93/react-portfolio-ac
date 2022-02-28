import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

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

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>© 2022 Ashley Cho.</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Email'} href={'mailto:ashleycho.slp@gmail.com'}>
                        <HiOutlineMail />
                    </SocialButton>
                    <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/ashley-cho-54518991/'}>
                        <AiOutlineLinkedin />
                    </SocialButton>
                    <SocialButton label={'GitHub'} href={'https://github.com/acho93'}>
                        <FiGithub />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}