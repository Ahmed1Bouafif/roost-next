import React from 'react';
import { Box, Img, Heading,Text,Input, Stack,Checkbox, Flex, Button, Center, Divider, Link } from '@chakra-ui/react'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'


const index = () => {
  return <div>
       <Box>
      {/* left side */}
      <Box>
        <Img src='/Vector.png' alt='left side vector' position='absolute'  loading='lazy' zIndex={2} boxSize='100vh' right='0' />
      </Box>
      {/* <Img src='/Maskot.png' alt='mascott vector' position='absolute'  loading='lazy' right={80} top={50} /> pic side */}
      
      {/* form side */}
      <Box d="flex" alignItems="center" justifyContent="center" pt="4" mb="10">
      <Img cursor="pointer" src="/logo.png" alt='logo' />
      </Box>
      <Center>
      <Stack bgColor="white"  shadow="xl" zIndex={3} d="flex"  height="3xl" width="3xl" border="1px" borderColor="white" rounded="xl"  pt="10" pl="10" pr="10">
            <Center pb="4"><Heading>Créer un compte</Heading></Center>
          <Flex alignItems="center" justifyContent="space-evenly">
            <Button leftIcon={<FcGoogle />} colorScheme='white' variant='outline'>Continuer avec Google</Button>
            <Button leftIcon={<FaFacebookF />} colorScheme='white' variant='outline'>Continuer aver Facebook</Button>
          </Flex>
          <Center pb="4">
            <Divider orientation='vertical' />
            <Text>Continuer avec Email</Text>
            <Divider orientation='vertical' />
          </Center>
          <Text mb="2">Nom Prénom</Text>
          <Input mb="2" variant="filled" placeholder='large size' size='lg' />
          <Text mb="2">Email</Text>
          <Input mb="2" variant="filled" placeholder='large size' size='lg' />
          <Text mb="2">Numero de telephone</Text>
          <Input mb="2" variant="filled" placeholder='large size' size='lg' />
          <Text mb="2">Mot de passe</Text>
          <Input mb="2" variant="filled" placeholder='large size' size='lg' />
          <Text mb="2">Confirmer le mot de passe</Text>
          <Input mb="2" variant="filled" placeholder='large size' size='lg' />
          <Checkbox mb="2" defaultIsChecked>J'accepte les conditions d'utilisation et la politique de confidentialité</Checkbox>
          <Button mb="2" bgColor='brand.100' size='lg' color="white">S’inscrire</Button>
          <Text>
            Déjà membre? {' '}
            <Link color='brand.100' href='#'>
            S'identifier
            </Link>
          </Text>
        </Stack>
      </Center>
        
      {/* right side */}
      
    </Box>
  </div>;
};

export default index;
