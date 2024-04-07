import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero';
import Tag from '../components/Tag';
import Tag2 from '../components/Tag2';
import Tag3 from '../components/Tag3';
import Loading from '../components/Loading';
import Container from '../components/Container';
import StatusIndicator from '../components/StatusIndicator';
import Tag1 from '../components/Tag1';
import FacebookPixel from '../components/FacebookPixel';
import Parallax from '../components/Parallax'; // Importe o componente Parallax

function AboutPage() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {/* <FacebookPixel /> */}
      <Parallax style={{ flex: 1 }} /> {/* Utilize o componente Parallax aqui e defina flex: 1 para ocupar todo o espaço disponível */}
      <Box bg="blue.200">
        <Container>
          <Hero />
        </Container>
      </Box>
      <Box bg="green.200">
        <Container>
          <Tag1 />
        </Container>
        <Container>
          <Tag2 />
        </Container>
        <Container>
          {/* <Tag3 /> */}
        </Container>
        <Container>
          <Loading />
        </Container>
        <Container>
          <StatusIndicator />
        </Container>
      </Box>
    </Box>
  );
}

export default AboutPage;
