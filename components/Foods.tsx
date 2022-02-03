import React from 'react';
import { Box, Text, Tag, Heading, Grid } from '@chakra-ui/react'
import { Plats } from './Data/PlatData'
import FoodList from './FoodList';

const Foods = () => {
  
  return <div>
    <Box  mb="14">
      <Box>
        <Text fontSize="4xl" fontWeight="bold" mb={6}>Nos plats</Text>
      </Box>
      <Grid  templateColumns='repeat(3,1fr)' gap={6}  >
        {Plats.map(item => {
          return <FoodList key={item._id} item={item} />
        })}
        
      </Grid>
    </Box>
  </div>;
};

export default Foods;
