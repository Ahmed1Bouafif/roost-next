import React from 'react';
import { Box, Img, Text, Tag, GridItem, Spacer } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'


const ShopsList = ({ item }) => {
  return <div>
    <GridItem border="1px" borderColor="gray.200" width="96" height="96" shadow="md" rounded="xl" pl='4' pr='4' pt='4' pb='4'>

      {Array(5).fill('').map((_,i) => (
        <StarIcon ml={2} zIndex={2} mb='4' key={i} color={i < item.rate ? 'brand.100' : 'gray.300'} />
      ))}

      <Img width="100%" mb="4" h="40" src={item.pic} alt='foodpic' rounded='lg'/>
      <Box  d="flex" alignItems="center" justifyContent="space-around">
        <Text mt={2} ml={2} fontSize="xl" fontWeight="bold" mb={4} cursor="pointer">{item.name}</Text>
        <Spacer />
        <Box h={6} w={6} mr={2} cursor="pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
      </Box>
      </Box>
      <Box ml={2} mb={3} d="flex" alignItems="center" justifyContent="start">
        <Text>Commande Minimale : {item.min} TND</Text>
      </Box>
      <Box ml={2} d="flex" alignItems="center" justifyContent="start" mb={2}>
      {item.categorie.map(elem => {
        return <Tag mr={2} _hover={{ background: "brand.100", color: "white" }} cursor="pointer" key={elem}>{elem}</Tag>
      })}
    </Box>
    </GridItem>
    
  </div>;
};

export default ShopsList;
