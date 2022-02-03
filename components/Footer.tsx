import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return <Flex height='20' bgColor='brand.100' alignItems='center' justifyContent='space-evenly' mt="16">
    <Box>
      <Text fontSize='xl' pr="16" textColor="white">©2022 Roost. All Rights Reserved</Text>
    </Box>
    <Flex>
      <Icon as={BsFacebook} w={12} h={12} color="white" pr="4" />
      <Icon as={BsInstagram} w={12} h={12} color="white" pr="4" />
    </Flex>
    <Flex>
    <Link pr="4" color='white' fontSize='md' href='#'>Comment ça marche?</Link>
    <Link pr="4" color='white' fontSize='md' href='#'>Devenez partenaire Roost !</Link>
    <Link pr="4" color='white' fontSize='md' href='#'>Contactez-Nous</Link>
    </Flex>
  </Flex>;
};

export default Footer;
