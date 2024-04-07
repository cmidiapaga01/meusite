import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Switch,
  FormLabel,
  FormControl,
  Stack,
  Heading
} from '@chakra-ui/react';

// Simula a checagem do estado de consentimento armazenado
const getConsentStatus = () => {
  const consent = localStorage.getItem('cookieConsent');
  return consent ? JSON.parse(consent) : { essential: true, analytics: false, marketing: false };
};

// Simula a ativação do Google Tag Manager
const activateGoogleTagManager = () => {
  console.log('Google Tag Manager Ativado');
  // Aqui você implementaria a ativação real do GTM
};

// Simula a ativação do Facebook Pixel
const activateFacebookPixel = () => {
  console.log('Facebook Pixel Ativado');
  // Aqui você implementaria a ativação real do Facebook Pixel
};

const CookieConsent = () => {
  const [consent, setConsent] = useState(getConsentStatus);

  useEffect(() => {
    // Ativa funcionalidades com base no consentimento já dado
    if (consent.analytics) activateGoogleTagManager();
    if (consent.marketing) activateFacebookPixel();
  }, []); // Executa apenas na montagem do componente

  const handleToggle = (type) => {
    const newConsent = { ...consent, [type]: !consent[type] };
    setConsent(newConsent);
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
    
    // Ativa as funcionalidades com base no tipo de consentimento dado
    if (type === 'analytics' && newConsent[type]) activateGoogleTagManager();
    if (type === 'marketing' && newConsent[type]) activateFacebookPixel();
  };

  return (
    <Box position="fixed" bottom="0" width="100%" p="5" bg="white" zIndex="1000">
      <Heading size="md" mb="4">Preferências de Cookies</Heading>
      <Stack spacing={4}>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="essential-cookies" mb="0">
            Cookies Essenciais
          </FormLabel>
          <Switch id="essential-cookies" isChecked={consent.essential} isDisabled={true} />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="analytics-cookies" mb="0">
            Cookies Analíticos
          </FormLabel>
          <Switch id="analytics-cookies" isChecked={consent.analytics} onChange={() => handleToggle('analytics')} />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="marketing-cookies" mb="0">
            Cookies de Marketing
          </FormLabel>
          <Switch id="marketing-cookies" isChecked={consent.marketing} onChange={() => handleToggle('marketing')} />
        </FormControl>
      </Stack>
      <Button mt="4" onClick={() => window.location.reload()}>
        Salvar Preferências
      </Button>
    </Box>
  );
};

export default CookieConsent;
