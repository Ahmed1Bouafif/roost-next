import React from 'react';
import { Box, Flex, Heading, SkeletonCircle , Text} from '@chakra-ui/react'

const AdminBox = ({ topText, bottomText, colorCircle }) => {
  return <div>
    <Box border='1px'>
      <Heading>{topText}</Heading>
      <Flex justifyContent='space-between' alignItems='center'>
        <Text>{bottomText}</Text>
        <SkeletonCircle size='20' bgColor={colorCircle} />
      </Flex>
    </Box>
  </div>;
};

export default AdminBox;
