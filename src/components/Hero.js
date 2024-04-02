// Hero.jsx
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box bg="teal.500" color="white" py="10" textAlign="center">
      <Heading as="h1" size="2xl" mb="4">
        Welcome to Our Website
      </Heading>
      <Text fontSize="xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam. Sed nisi.
      </Text>
    </Box>
  );
};

export default Hero;
