import React, { useState } from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Flex, Text, Spacer, Input, Textarea } from '@chakra-ui/react';
import StatusIndicator from './StatusIndicator'; // Importando o componente StatusIndicator

// Importando imagens
import image1 from '../images/cat_no_bg.png';
import checkCircleIcon from '../images/dns.svg'; // Importe a imagem do ícone de círculo de verificação
import questionIcon from '../images/md.svg'; // Importe a imagem do ícone de círculo de interrogação

const Tag1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentTag, setCurrentTag] = useState(null);
  const [buttonText, setButtonText] = useState('Open Modal');
  const [showLoadedText, setShowLoadedText] = useState(false);

  const openModal = (tag) => {
    setCurrentTag(tag);
    setButtonText('CARREGADO');
    setShowLoadedText(false); // Garantir que o texto "CARREGADO" não apareça até o modal ser fechado
    onOpen();
  };

  const handleModalClose = () => {
    setShowLoadedText(true); // Mostrar o texto "CARREGADO" quando o modal é fechado
    setTimeout(() => {
      setButtonText('CARREGADO'); // Animar o texto para "CARREGADO"
    }, 50);
    onClose();
  };

  const tag = { imageSrc: image1, description: 'GTM tag was fired bitch!!!!!', category: 'Analytics' };

  return (
    <Box id="tagSection">
      <Box key="tag1" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" m="2">
        <Box textAlign="center">
          <img src={tag.imageSrc} alt="Tag Image" />
        </Box>
        <Box p="4">
          <Button
            onClick={() => openModal(tag)}
            colorScheme="blue"
            width="100%"
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
      <Modal isCentered onClose={handleModalClose} isOpen={isOpen} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex align="center">
              <Box mr={2}><img src={checkCircleIcon} alt="Check Circle" /></Box> {/* Usando a imagem do ícone de círculo de verificação */}
              <Text fontWeight="bold">{currentTag?.category}</Text>
              <Spacer />
              <Box mr={2}><img src={questionIcon} alt="Question Circle" /></Box> {/* Usando a imagem do ícone de círculo de interrogação */}
              <Text>{currentTag?.description}</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box textAlign="center">
              <StatusIndicator /> {/* Reintegrando o StatusIndicator */}
            </Box>
            {/* Informações descritivas sobre a tag */}
            <Flex flexDirection="column" mt="4" alignItems="start">
              <Box>
                <Flex alignItems="center">
                  <Box mr={2}><img src={checkCircleIcon} alt="Check Circle" /></Box> {/* Usando a imagem do ícone de círculo de verificação */}
                  <Text fontWeight="bold" color="green.500">Sucesso:</Text>
                </Flex>
                <Text ml="8" color="green.500">A tag foi disparada com sucesso e está rastreando eventos no site.</Text>
              </Box>
              <Box mt="4">
                <Flex alignItems="center">
                  <Box mr={2}><img src={questionIcon} alt="Question Circle" /></Box> {/* Usando a imagem do ícone de círculo de interrogação */}
                  <Text fontWeight="bold" color="gray.500">Informação adicional:</Text>
                </Flex>
                <Text ml="8" color="gray.500">Você pode integrar esta tag com outras ferramentas de análise para obter mais insights.</Text>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' onClick={handleModalClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Tag1;
