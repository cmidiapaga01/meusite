// Tag1.js
import React, { useState } from 'react';
import { Box, Button, Modal, ModalOverlay, useDisclosure } from '@chakra-ui/react'; // Importe useDisclosure
import ModalContent from './ModalContent'; // Importando o componente ModalContent
import image1 from '../images/cat_no_bg.png';

const Tag1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Corrija a importação de useDisclosure
  const [currentTag, setCurrentTag] = useState(null);

  const openModal = (tag) => {
    setCurrentTag(tag);
    onOpen();
  };

  const handleModalClose = () => {
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
            Open Modal
          </Button>
        </Box>
      </Box>
      <Modal isCentered onClose={handleModalClose} isOpen={isOpen} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent
          currentTag={currentTag}
          handleModalClose={handleModalClose}
        />
      </Modal>
    </Box>
  );
};

export default Tag1;
