import { Box, Button, Img, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineFundProjectionScreen, AiOutlineShoppingCart, AiOutlineComment, AiOutlineGlobal } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import { GrDeliver } from 'react-icons/gr'
import { BiUser } from 'react-icons/bi'
import { IoRestaurantSharp } from 'react-icons/io5'
import { RiPagesLine } from 'react-icons/ri'
import { MdOutlineVerifiedUser } from 'react-icons/md'
import { FaRegMoneyBillAlt } from 'react-icons/fa'


const AdminNavbar = () => {
  return <div>
    <VStack >
      
        <Img cursor="pointer" src="/logo.png" alt='logo' />
      
      <Stack>
      <Button leftIcon={<AiOutlineFundProjectionScreen />} colorScheme='white' textColor="brand.100" variant='solid'>Tableau de bord</Button>
      <Button leftIcon={<AiOutlineShoppingCart />} colorScheme='white' textColor="brand.100" variant='solid'>Orders</Button>
      <Button leftIcon={<BsBagCheck />} colorScheme='white' textColor="brand.100" variant='solid'>Commandes en direct</Button>
      <Button leftIcon={<GrDeliver />} colorScheme='white' textColor="brand.100" variant='solid'>Conducteurs</Button>
      <Button leftIcon={<BiUser />} colorScheme='white' textColor="brand.100" variant='solid'>Clients</Button>
      <Button leftIcon={<IoRestaurantSharp />} colorScheme='white' textColor="brand.100" variant='solid'>Clients</Button>
      <Button leftIcon={<AiOutlineComment />} colorScheme='white' textColor="brand.100" variant='solid'>Commantaires</Button>
      <Button leftIcon={<RiPagesLine />} colorScheme='white' textColor="brand.100" variant='solid'>Pages</Button>
      <Button leftIcon={<MdOutlineVerifiedUser />} colorScheme='white' textColor="brand.100" variant='solid'>Produits à confirmer</Button>
      <Button leftIcon={<FaRegMoneyBillAlt />} colorScheme='white' textColor="brand.100" variant='solid'>Finances</Button>
      <Button leftIcon={<AiOutlineGlobal />} colorScheme='white' textColor="brand.100" variant='solid'>Paramètres du site</Button>
      </Stack>
    </VStack>
  </div>;
};

export default AdminNavbar;
