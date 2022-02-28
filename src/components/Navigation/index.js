import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  import AshleyPic from '../../assets/images/ashley-photo.jpg'
  
  const Links = ['About', 'Portfolio', 'Resume', 'Contact'];
  
  const NavLink = ({ children, src }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={src}>
      {children}
    </Link>
  );
  
  export default function Navigation() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={1} justify={{base: 'center', md: 'space-between'}}alignItems={'center'}>
              
              <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
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
                </MenuButton>
                <MenuList>
                  <MenuItem>About</MenuItem>
                  <MenuItem>Portfolio</MenuItem>
                  <MenuItem>Resume</MenuItem>
                  <MenuItem>Contact</MenuItem>
                </MenuList>
              </Menu>
            </Flex>

              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link} src={`/${link.toLocaleLowerCase()}`}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>

          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  }