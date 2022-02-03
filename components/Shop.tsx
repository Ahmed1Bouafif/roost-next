import React from 'react';
import { Box, Text, Tag, Heading, Grid } from '@chakra-ui/react'
import { resto } from './Data/ShopsData'
import ShopsList from './ShopsList';


const Shop = () => {
  
  return <div>
    <Box>
      <Box>
        <Text fontSize="4xl" fontWeight="bold" mb={6}>Shops</Text>
      </Box>
      <Grid templateColumns='repeat(4,1fr)' gap={6}>
        {resto.map(item => {
          return <ShopsList key={item._id} item={item} />
        })}
        
      </Grid>
    </Box>
  </div>;
};

export default Shop;
