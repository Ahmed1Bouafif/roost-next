import { Box, Button, Center, Checkbox, Collapse, Select, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { resto } from './Data/ShopsData'
import FiltersTags from './FiltersTags';


function CollapseEx() {
  const { isOpen, onToggle } = useDisclosure()
}



const Filters = () => {
  const { isOpen, onToggle } = useDisclosure()
  return <div>
    <Stack overflow="auto" border='1px' width="355px" minHeight="490px" mr="24"  rounded='lg'>
      <Center>
        <Select width="304px" height="56px" borderColor="brand.100" textColor="brand.100" mt="4" mb={6}>
            {resto.map(item => {
                return <option  value={item._id}>{item.name}</option>
              })}
          </Select>
      </Center>
        
      <Center>
        <Stack bgColor="gray.200" justify="left" pt="2" pb="2" width="304px" height="275px" rounded="lg"  mb={6}>
            {resto.map(item => {
                  return <FiltersTags key={item._id} item={item} />
                })}
          </Stack>
      </Center>
        
      <Center><Button width="304px" height="40px" mb="4" onClick={onToggle}>filtres</Button></Center>
      <Center>
        <Collapse in={isOpen} animateOpacity>
            <Center width="304px" height="271px" rounded="lg" mb="6" bgColor="gray.200">
              
              <Stack>
                <Text>Expanded Filters</Text>
                <Checkbox >Recently Added</Checkbox>
                <Checkbox >Expiring Soon</Checkbox>
                <Checkbox >Most Rated</Checkbox>
                <Checkbox >Price: Low → High</Checkbox>
                <Checkbox >Price: High → Low</Checkbox>
              </Stack>
            </Center>
              
            </Collapse>
      
      </Center>
        
        
    </Stack>
  </div>;
};

export default Filters;
