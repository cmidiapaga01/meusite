import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero';
import Tag from '../components/Tag/Tag'; // Importing the Tag component from the Tag folder
import Loading from '../components/Loading';
import Container from '../components/Container';
import StatusIndicator from '../components/StatusIndicator';
import TagLoadButton from '../components/Tag/TagLoadButton'; // Importing the TagLoadButton component from the Tag folder

function Contact() {
  return (
    <Box minH="100vh">
      <Box bg="blue.200">
        <Container>
          <Hero />
        </Container>
      </Box>
      <Box bg="green.200">
        <Container>
          <Tag /> {/* Rendering the Tag component */}
          {/* <TagLoadButton /> Rendering the TagLoadButton component */}
        </Container>
        {/* <Container>
          <Loading />
        </Container>
        <Container>
          <StatusIndicator />
        </Container> */}
      </Box>
    </Box>
  );
}

export default Contact;
