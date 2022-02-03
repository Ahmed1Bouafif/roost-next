import React from 'react';
import { Box, Img, Text, GridItem } from '@chakra-ui/react'

const FoodList = ({ item }) => {
  return <div>
    <GridItem border="1px" borderColor="gray.200" width="80" height="96" rounded="2xl" mb={10} shadow="md">
      <Img width="100%" src={item.pic} alt='foodpic' mb="4"/>
      <Box d="flex" alignItems="center" justifyContent="start">
        <Text fontWeight="bold" mt={3} ml={5} overflow="none" whiteSpace="nowrap" mr={5} mb={4}>{item.name}</Text>
        
      </Box>
      <Text display="flex" alignItems="center" justifyContent="start" fontWeight="bold" ml={5} pb={4}>{item.price} /1 piéces</Text>
      <Box d="flex" alignItems="center" justifyContent="start" ml={5} mr={2}>
        <Text mb={4} fontSize="sm">{item.desc}</Text>
      </Box>
      <Box d="flex"  border="1px" rounded="lg" alignItems="center" justifyContent="space-around" borderColor="blue.400" color="blue.400" mb={10} ml={5} mr={5} cursor="pointer">
      <Text >Ajouter au panier </Text>
      <Box h={6} w={6} >
        <svg xmlns="http://www.w3.org/2000/svg" className='' fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
    </Box>
    </Box>
    </GridItem>
    
  </div>;
};

export default FoodList;
