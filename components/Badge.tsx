import React from 'react';
import { Box, Text, Tag, Heading } from '@chakra-ui/react'
import { Tagsinfo } from './Data/BadgeData'

const Badge = () => {
  return <div>
    <Box ml="28" mb="16">
      <Box>
        <Text fontSize="4xl" fontWeight="bold" mb={6}>Nos categories</Text>
      </Box>
      <Box >
        {Tagsinfo.map((item) => {
         return <Tag mr={4} _hover={{ background: "brand.100", color: "white" }} size="lg" cursor="pointer" shadow="md">{item}</Tag>
        })}
      </Box>
    </Box>
  </div>;
};

export default Badge;
