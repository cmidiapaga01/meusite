import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero';
import Tag from '../components/Tag';
import Container from '../components/Container';
import CookieConsent from '../components/CookieConsent'; // Importe o componente CookieConsent

function HomePage() {
  return (
    <Box minH="100vh">
      <CookieConsent /> {/* Adicione o componente CookieConsent aqui */}
      <Box bg="blue.200">
        <Container>
          <Hero />
        </Container>
      </Box>
      <Box bg="green.200">
        <Container>
          <Tag />
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
