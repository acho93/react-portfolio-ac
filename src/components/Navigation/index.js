import { Link } from 'react-router-dom';

import {
  Box,
  Button,
  Flex,
  Avatar,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import AshleyPic from '../../assets/images/ashley-photo.jpg';

// const Links = ['About', 'Portfolio', 'Skills', 'Contact'];

// const NavLink = ({ children, src }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={src}>
//     {children}
//   </Link>
// );

export default function Navigation() {
  // const { isOpen } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('pink', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Button
            // as={Link}
            href="/about"
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}>
            <Avatar
              size={'sm'}
              src={
                AshleyPic
              }
            />
          </Button>
          <Flex alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Link to="/about">About</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/contact">Contact</Link>
            </HStack>
          </Flex>
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link to key={link}>{link}</Link>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
    </>
  );
}