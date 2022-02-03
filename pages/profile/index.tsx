import { Avatar, Badge, Box, Button, Center, Checkbox, Divider, Flex, Grid, Heading, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import { BiUser, BiBookmark } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'
import { MdPayment } from 'react-icons/md'
import Footer from '../../components/Footer';

const index = () => {
  return <div>
    <Navbar />
    <Flex ml="165px" mr="165px" mt={36} >
      <Stack mr="24px" width="350px" height="324px">
        <Heading>Mon compte</Heading>
        <Flex pl="16px" alignItems="center" width="350px" height="72px" mb={2} border='2px' borderColor='brand.100' rounded='lg'>
          <Center height="40px" width="40px" color='white' bgColor='brand.100' rounded='lg'><BiUser /></Center>
          <Box ml='3'>
            <Text fontWeight='bold'>
              Parametres
            </Text>
            <Text fontSize='sm'>Information Personelle</Text>
          </Box>
        </Flex>
        <Flex pl="16px" alignItems="center"  width="350px" height="72px" mb={2} border='2px' borderColor='brand.100' rounded='lg'>
          <Center height="40px" width="40px" color='white' bgColor='brand.100' rounded='lg'><GrLocation /></Center>
          <Box ml='3'>
            <Text fontWeight='bold'>
              Adresse
            </Text>
            <Text fontSize='sm'>Adresse de livraison</Text>
          </Box>
        </Flex>
        <Flex pl="16px" alignItems="center"  width="350px" height="72px" mb={2} border='2px' borderColor='brand.100' rounded='lg'>
          <Center height="40px" width="40px" color='white' bgColor='brand.100' rounded='lg'><MdPayment /></Center>
          <Box ml='3'>
            <Text fontWeight='bold'>
              Methode de paiement
            </Text>
            <Text fontSize='sm'>Paiement à la livraison</Text>
          </Box>
        </Flex>
        <Flex pl="16px" alignItems="center"  width="350px" height="72px" mb={2} border='2px' borderColor='brand.100' rounded='lg'>
          <Center height="40px" width="40px" color='white' bgColor='brand.100' rounded='lg'><BiBookmark /></Center>
          <Box ml='3'>
            <Text fontWeight='bold'>
              Mes ordres
            </Text>
            <Text fontSize='sm'>Consulter tous l’historique de vos ordres</Text>
          </Box>
        </Flex>
      </Stack>
      <Stack>
        <Heading>Parametres</Heading>
        <Center>
        <Stack width="730px" height="754px" pl="16px" pr="16px" border='1px' rounded='lg'>
            <Text mt="24px" fontSize="18px" fontWeight="bold">Information personelle</Text>
            <Text mt="12px" fontSize="12px">Nom Prénom</Text>
            <Input width="341px" variant="filled" placeholder='large size' size='lg' />
            <Text mt="12px" fontSize="12px">Email</Text>
            <Input width="341px" variant="filled" placeholder='large size' size='lg' />
            <Text mt="12px" fontSize="12px">Téléphone</Text>
            <Input width="341px" variant="filled" placeholder='large size' size='lg' />
            <Text mt="12px" fontSize="18px" fontWeight="bold">Changer le mot de passe</Text>
            <Text mt="12px" fontSize="12px">Mot de passe actuel</Text>
            <Input width="341px" variant="filled" placeholder='large size' size='lg' />
            <Flex>
              <Stack mr="16px">
                <Text fontSize="12px">Nouveau mot de passe</Text>
                <Input width="341px" variant="filled" placeholder='large size' size='lg' />
              </Stack>
              <Stack>
                <Text fontSize="12px">Confirmer le nouveau mot de passe</Text>
                <Input width="341px" variant="filled" placeholder='large size' size='lg' />
              </Stack>
            </Flex>
            <Text mt="24px" fontSize="18px" fontWeight="bold">Email notifications</Text>
            <Grid templateColumns='repeat(2, 1fr)' gap={4} mb="24px">
              <Checkbox fontSize="14px" defaultIsChecked>Nouvelles offres</Checkbox>
              <Checkbox fontSize="14px" defaultIsChecked>Nouvelles marques</Checkbox>
              <Checkbox fontSize="14px" defaultIsChecked>Status des ordres</Checkbox>
              <Checkbox fontSize="14px" defaultIsChecked>Changement de mot de passe</Checkbox>
              <Checkbox fontSize="14px" defaultIsChecked>Offres spécial et code discount</Checkbox>
              <Checkbox fontSize="14px" defaultIsChecked>Newsletter</Checkbox>
            </Grid>
            <Divider mt="20px" />
            <Flex alignItems="center" justifyContent="space-between">
            <Button size='md' height='44px' bgColor="white" color='red' width='120px' border='2px' borderColor='red' mr='20'>Deconnexion</Button>
            <Center>
              <Button width="87px" height='44px' colorScheme='gray' variant='outline' mr={2}>Annuler</Button>
              <Button width="118px" height='44px' bgColor="brand.100" color="white" variant='solid'>Sauvegarder</Button>
            </Center>
            </Flex>
          </Stack>
        </Center>
          
      </Stack>
    </Flex>
    <Footer />
  </div>;
};

export default index;
