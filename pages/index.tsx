import Link from 'next/link'
import Badge from '../components/Badge'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Food from '../components/Food'
import Shop from '../components/Shop'
import { Box } from '@chakra-ui/react'
import Footer from '../components/Footer';

const IndexPage = () => (
  <>
    <Navbar />
    <Box pl="28" pr="28">
      
      <Hero />
      <Badge />
      <Food />
      <Shop />
      
    </Box>
    <Footer />
  </>
    
)

export default IndexPage
