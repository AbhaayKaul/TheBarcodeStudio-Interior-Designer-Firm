import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import DreamHome from '../components/dream-home'
import About from '../components/about'
import Service from '../components/service'
import Footer from '../components/footer'
import OurProject from '../components/our-projects'
import CreativeDirector from '../components/creative-director'
import { Divider } from '@chakra-ui/core'
import Headroom from 'react-headroom'
import ContactUs from '../components/contactus'
const Home: React.FC = () => {
  return (
    <>
    <Headroom style={{ zIndex: 10000 }}>
    <Nav />
    </Headroom>
      <Header />
      
      <DreamHome />
      <About />
      <Service />
      <CreativeDirector />
      <OurProject />
      <Divider mt="24" />
      <ContactUs />
      <Footer />

    </>
  )
}

export default Home
