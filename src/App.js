import React from 'react';
import { ChakraProvider, Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { MdInfoOutline, MdWork } from 'react-icons/md'; // Importando ícones do Material Design
import { BiInfoCircle, BiBriefcase } from 'react-icons/bi'; // Importando ícones do Chakra UI
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box p="4">
          <Box bg="gray.100" p="6" borderRadius="md" mb="4">
            <Heading as="h1" size="xl" mb="2">
              Bem-vindo à HomePage
            </Heading>
            <Text fontSize="lg">Este é um exemplo de página inicial estilizada com Chakra UI.</Text>
          </Box>

          <Routes>
            <Route exact path="/">
              <Flex justify="space-between" align="center" mb="4">
                <Box flex="1" mr="4">
                  <Heading as="h2" size="lg" mb="2">
                    Sobre nós
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
                    cursus ante dapibus diam. Sed nisi.
                  </Text>
                </Box>
                <Button leftIcon={<BiInfoCircle />} colorScheme="blue">
                  Saiba mais
                </Button>
              </Flex>

              <Flex justify="space-between" align="center">
                <Box flex="1" mr="4">
                  <Heading as="h2" size="lg" mb="2">
                    Nossos Serviços
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
                    cursus ante dapibus diam. Sed nisi.
                  </Text>
                </Box>
                <Button leftIcon={<BiBriefcase />} colorScheme="green">
                  Veja mais
                </Button>
              </Flex>
            </Route>
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
