import React from 'react';
import { Box, Img, Heading,Text,Input, Stack,Checkbox, Flex, Button, Center } from '@chakra-ui/react'
import Link from 'next/link';

const Login = () => {
  return <div>
    <Box>
      {/* left side */}
      <Box>
        <Img src='/Vector.png' alt='left side vector' position='absolute'  loading='lazy' zIndex={2} boxSize='100vh' right='0' />
      </Box>
      {/* <Img src='/Maskot.png' alt='mascott vector' position='absolute'  loading='lazy' right={80} top={50} />pic side */}
      
      {/* form side */}
      <Box d="flex" alignItems="center" justifyContent="center" pt="4" mb="14">
      <Img cursor="pointer" src="/logo.png" alt='logo' />
      </Box>
      <Center >
        <Stack bgColor="white"  shadow="xl" zIndex={3} d="flex"  height="3xl" width="3xl" border="1px" borderColor="white" rounded="xl"  pt="10" pl="10" pr="10">
            <Text fontSize="8xl" fontWeight="bold">Connexion</Text>
            <Text mb="6" mt="6">Email</Text>
            <Input mb="6" mt="6" variant="filled" placeholder='name@example.com' size='lg' />
            <Text mb="6" mt="6">Mot de passe</Text>
            <Input mb="6" mt="6" variant="filled" placeholder='min. 8 characters' size='lg' />
            <Checkbox mb="6" mt="6" defaultIsChecked>Rester connecté</Checkbox>
            <Button mb="6" mt="6" bgColor='brand.100' color="white" variant="solid">Connexion</Button>
            <Button mb="6" mt="6" colorScheme='brand.100' variant='ghost'>Mot de passe oublié ?</Button>
            <Button mb="6" mt="6" textColor="brand.100" borderColor="brand.100" variant='outline'>Vous n'avez pas de compte ? {' '} <Text textColor="Background.100">S’inscrire</Text></Button>
          </Stack>
      </Center>
        
      {/* right side */}
      
    </Box>
  </div>;
};

export default Login;
