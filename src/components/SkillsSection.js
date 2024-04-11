import React from 'react';
import { Box, SimpleGrid, Stack, Flex, Image, Text } from '@chakra-ui/react';
import image1 from '../images/dns.svg'

const Feature = ({ imageUrl }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        mb={1}>
        <Image src={imageUrl} boxSize="100%" objectFit="cover" rounded="full" />
      </Flex>
    </Stack>
  )
}

export default function SkillsSection() {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Minhas habilidades</Text>
      <SimpleGrid columns={{ base: 2, md: 6 }} spacing={4}>
        {/* Linha 1 */}
        <Feature imageUrl= {image1}/>
        <Feature imageUrl= {image1} />
        <Feature imageUrl= {image1} />
        <Feature imageUrl= {image1} />
        <Feature imageUrl= {image1} />
        <Feature imageUrl= {image1} />
        {/* Linha 2 */}
        <Feature imageUrl={image1} />
        <Feature imageUrl={image1} />
        <Feature imageUrl={image1} />
        <Feature imageUrl={image1} />
        <Feature imageUrl={image1} />
        <Feature imageUrl={image1} />
      </SimpleGrid>
    </Box>
  )
}
