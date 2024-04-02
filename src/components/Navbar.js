// Navbar.jsx
import React from 'react';
import { Box, Flex, Heading, Spacer, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box py="4" bg="blue.500" color="white">
      <Flex maxW="container.xl" mx="auto" alignItems="center">
        <Heading as="h1" size="lg">
          My Website
        </Heading>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/" mr="4">
            Home
          </Link>
          <Link as={RouterLink} to="/" mr="4">
          {/* <Link as={RouterLink} to="/about" mr="4"> */}
            About
          </Link>
          <Link as={RouterLink} to="/">
            Contact
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
