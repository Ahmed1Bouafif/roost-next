import { Box, Text, Divider } from '@chakra-ui/react';
import React from 'react';

const GrossValue = () => {
  return <div>
    <Box border='1px' rounded='lg' width='xl'height='xl' >
      <Text>APERÇU</Text>
      <Text>Valeur de ventes</Text>
      <Divider />
    </Box>
  </div>;
};

export default GrossValue;
