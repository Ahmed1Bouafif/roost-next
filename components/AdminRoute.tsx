import { Box, Flex, Grid, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai'
import AdminBox from './AdminBox';

const AdminRoute = () => {
  return <div>
    <VStack>
      <Flex>
        <Heading>TABLEAU DE BORD</Heading>
        <Box>
          <AiOutlineUser/>
          <Heading>Admin</Heading>
        </Box>

      </Flex>
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        <AdminBox topText="ORDERS (30 JOURS)" bottomText="137" colorCircle="red" />
        <AdminBox topText="VOLUME DES VENTES(30 JOURS)" bottomText="9,5632.6 DT" colorCircle="brand.100" />
        <AdminBox topText="NOMBRES DE RESTAURANTS" bottomText="16 restautants" colorCircle="orange" />
        <AdminBox topText="VUES" bottomText="52 Vues" colorCircle="blue" />
        <AdminBox topText="FRAIS DE LIVRAISON (30 JOURS)" bottomText="1,030.6 DT" colorCircle="yellow" />
        <AdminBox topText="FRAIS STATIQUES (30 JOURS)" bottomText="0.00 DT" colorCircle="red" />
        <AdminBox topText="FRAIS DYNAMIQUES (30 JOURS)" bottomText="0.00 DT" colorCircle="brand.100" />
        <AdminBox topText="MONTANT TOTAL (30 JOURS)" bottomText="137" colorCircle="blue" />
      </Grid>
      

    </VStack>
  </div>;
};

export default AdminRoute;
