import React from 'react';
import { VStack, Box, Img, Stack, Button, HStack, Flex } from '@chakra-ui/react'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import AdminNavbar from '../../components/AdminNavbar';
import AdminRoute from '../../components/AdminRoute';
import DeliveryActivity from '../../components/DeliveryActivity';
import GrossValue from '../../components/GrossValue';
import PerformanceSales from '../../components/PerformanceSales';

const index = () => {
  return <div>
    <HStack>
      <AdminNavbar />
      <VStack>
        <AdminRoute />
        <DeliveryActivity />
        <Flex>
          <GrossValue />
          <PerformanceSales />
        </Flex>
      </VStack>
      
    </HStack>
    
  </div>;
};

export default index;
