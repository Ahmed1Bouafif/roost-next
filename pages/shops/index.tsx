import { Flex } from '@chakra-ui/react';
import React from 'react';
import Filters from '../../components/Filters';
import Navbar from '../../components/Navbar';
import Food from '../../components/Food';
import Foods from '../../components/Foods';
import Footer from '../../components/Footer';

const index = () => {
  return <div>
    <Navbar />
    <Flex ml="20" mr="20" mt={36}>
      <Filters />
      <Foods />
    </Flex>
    <Footer />
  </div>;
};

export default index;
