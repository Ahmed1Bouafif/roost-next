import React from 'react';
import { Flex, Box, Img, Input, Text, Divider, Center, Menu, MenuButton, Button, MenuList, MenuItem, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { BiUser } from 'react-icons/bi'
import { BsCart2 } from 'react-icons/bs'


function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      
        <IconButton variant='outline' bgColor="brand.100" color="white" aria-label='Send email' icon={<BsCart2 />} ref={btnRef} onClick={onOpen} mr="4"/>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            
          </DrawerBody>

          <DrawerFooter>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}


const Navbar = () => {
  return <>
  <Flex pos="fixed" width="100%" alignItems="center" justifyContent="space-around" top={0} pt={4} boxShadow='xl' bg="white" pb={4}>
    <Box>
      <Img cursor="pointer" src="/logo.png" alt='logo' />
    </Box>
    <Box d="flex" alignItems="center" justifyContent="center" bgColor="gray.300" width="xl" rounded={12}>
      <Input variant='' bgColor="gray.300" placeholder='Search' />
      <SearchIcon mr={3} cursor="pointer" />
    </Box>
    <Box d="flex">
      <Box d="flex">
        <Text fontSize="xl" mr={3} cursor="pointer">Shops</Text>
        <Text fontSize="xl" mr={3} cursor="pointer">Promos</Text>
        <Divider orientation='vertical' mr={3}/>
        <Text fontSize="xl" mr={3} cursor="pointer">Mes Ordres</Text>
      </Box>
      <Box display="flex" alignItems='center' justifyContent="center">
        <DrawerExample />
            <Menu >
            <MenuButton
    as={IconButton}
    bgColor="brand.100"
    color="white"
    aria-label='Options'
    icon={<BiUser />}
    variant='outline'
    
  />

        <MenuList>
          <MenuItem _hover={{ background: "brand.100", color: "white" }} minH='48px'>
            <Text  fontSize="lg" >Login</Text>
          </MenuItem>
          <MenuItem _hover={{ background: "brand.100", color: "white" }} minH='40px'>
            <Text fontSize="lg">Signup</Text>
          </MenuItem>
        </MenuList>
      </Menu>
      </Box>
    </Box>
  </Flex>
  </>;
};

export default Navbar;
