import React from 'react';
import { Flex, Box, Img, Text, Container } from '@chakra-ui/react'

const Hero = () => {
  return <div>
    <Box display="flex" mt={44} mr={20} ml={20} mb={10}>
      <Container width={900} height={124}>
        <Text fontSize='40px' fontWeight='bold'>Composez votre panier et recevez le tout, à partir du lendemain, en une seule livraison.</Text>
        <Text fontSize='xl'>Les meilleurs délices et créations de nos enseignes tunisiennes partenaires livrés soigneusement sur le Grand Tunis.</Text>
      </Container>
      <Box  width={700} height={400}>
        <Img  src='/slide.png' alt='slide'/>
      </Box>
    </Box>
  </div>;
};

export default Hero;
