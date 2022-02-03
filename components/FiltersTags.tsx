import { Box, Button, Center, Link } from '@chakra-ui/react';
import React from 'react';

const FiltersTags = ({ item }) => {
  return <div>
      <Box >
      {item.categorie.map(elem => {
        return <Center><Link colorScheme='brand.100' variant='link' key={elem}>{elem}</Link></Center>
        
      })}
      </Box>
  </div>;
};

export default FiltersTags;
