import React from 'react'
import { Text, Flex, Grid, Box } from '@chakra-ui/core'
import Logo from './logo'
import { FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa'

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Grid as="footer" templateColumns="repeat(5, 1fr)" mt={['12', '14', '16']} mb={['12', '14', '16']} px={['4', '6', '0']} bg="#F9F9F9" py={['10', '12', '14']}>
      {/* Company Info */}
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 3', '1 / 3']}
        pl={['4', '6', '8', '24', '20']}
        pr={['4', '6', '8', '0', '0']}
      >
        <Logo />
        <Text fontSize={['xs', 'sm', 'sm']} mt={['3', '4']} textAlign="left" lineHeight={['1.5', '1.6', '22px']} color="#666">
          The Barcode Studio is a multidisciplinary architecture practice in Delhi, 
          specializing in residential and commercial interior design. We create sophisticated, 
          functional spaces that reflect your unique personality and style.
        </Text>
        <Flex
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          mt={['6', '7', '8']}
        >
          <a 
            href="https://in.linkedin.com/company/the-barcode-studio" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit our LinkedIn page"
            style={{ marginRight: '12px', transition: 'transform 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Box as={FaLinkedin} size={['20px', '22px', '24px']} color="#C9A961" />
          </a>
          <a 
            href="https://www.instagram.com/the_barcodestudio/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            style={{ marginRight: '12px', transition: 'transform 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Box as={FaInstagram} size={['20px', '22px', '24px']} color="#C9A961" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Subscribe to our YouTube channel"
            style={{ marginRight: '12px', transition: 'transform 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Box as={FaYoutube} size={['20px', '22px', '24px']} color="#C9A961" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Like us on Facebook"
            style={{ transition: 'transform 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Box as={FaFacebookF} size={['20px', '22px', '24px']} color="#C9A961" />
          </a>
        </Flex>
      </Flex>

      {/* Quick Links */}
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '3 / 4', '3 / 4']}
        paddingX={['4', '6', '8']}
        mt={['10', '12', '12', '0', '0']}
      >
        <Text color="#C9A961" fontWeight="bold" fontSize={['lg', 'lg', '20px']} mb={['6px', '8px']}>
          Quick Links
        </Text>
        <Text 
          mb="6px" 
          fontSize={['sm', 'sm', 'md']} 
          color="#666" 
          cursor="pointer"
          transition="color 0.2s"
          onClick={() => scrollToSection('#home')}
          onMouseEnter={(e) => e.currentTarget.style.color = '#C9A961'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
        >
          Home
        </Text>
        <Text 
          mb="6px" 
          fontSize={['sm', 'sm', 'md']} 
          color="#666"
          cursor="pointer"
          transition="color 0.2s"
          onClick={() => scrollToSection('#about')}
          onMouseEnter={(e) => e.currentTarget.style.color = '#C9A961'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
        >
          About Us
        </Text>
        <Text 
          mb="6px" 
          fontSize={['sm', 'sm', 'md']} 
          color="#666"
          cursor="pointer"
          transition="color 0.2s"
          onClick={() => scrollToSection('#services')}
          onMouseEnter={(e) => e.currentTarget.style.color = '#C9A961'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
        >
          Services
        </Text>
        <Text 
          mb="6px" 
          fontSize={['sm', 'sm', 'md']} 
          color="#666"
          cursor="pointer"
          transition="color 0.2s"
          onClick={() => scrollToSection('#gallery')}
          onMouseEnter={(e) => e.currentTarget.style.color = '#C9A961'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
        >
          Gallery
        </Text>
        <a href="/services" style={{ textDecoration: 'none' }}>
          <Text 
            mb="6px" 
            fontSize={['sm', 'sm', 'md']} 
            color="#666"
            transition="color 0.2s"
            onMouseEnter={(e) => e.currentTarget.style.color = '#C9A961'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
          >
            Our Services
          </Text>
        </a>
        <a href="/consultation" style={{ textDecoration: 'none' }}>
          <Text 
            fontSize={['sm', 'sm', 'md']} 
            color="#666"
            transition="color 0.2s"
            onMouseEnter={(e) => e.currentTarget.style.color = '#C9A961'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
          >
            Book Consultation
          </Text>
        </a>
      </Flex>

      {/* Contact Info */}
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 5', '4 / 5']}
        paddingX={['4', '6', '8', '2', '2']}
        mt={['10', '12', '12', '0', '0']}
      >
        <Text color="#C9A961" fontWeight="bold" fontSize={['lg', 'lg', '20px']} mb={['6px', '8px']}>
          Contact Us
        </Text>
        <Text mb="8px" fontSize={['xs', 'sm', 'sm']} lineHeight={['1.5', '1.6']} color="#666">
          <strong>Address:</strong><br/>
          Ground floor, F1-22, Kotla Rd,<br/>
          Pocket 1, Sector 11F, Rohini,<br/>
          Delhi, 110085, India
        </Text>
        <Text mb="8px" fontSize={['xs', 'sm', 'sm']} lineHeight={['1.5', '1.6']} color="#666">
          <strong>Whatsapp:</strong><br/>
          <a
            href="https://wa.me/918448023979?text=Hello%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20services%21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#25D366', textDecoration: 'none' }}
          >
            <Box as={FaWhatsapp} size={['16px', '18px', '20px']} color="#25D366" />
            <span style={{ fontSize: 14 }}>+91 8448023979</span>
          </a>
        </Text>
        <Text mb="6px" fontSize={['xs', 'sm', 'sm']} color="#666">
          <strong>Phone:</strong> <a href="tel:+918448023979" style={{ color: '#C9A961', textDecoration: 'none' }}>+91 8448023979</a>
        </Text>
        <Text fontSize={['xs', 'sm', 'sm']} color="#666">
          <strong>Email:</strong> <a href="mailto:thebarcodestudioofficial@gmail.com" style={{ color: '#C9A961', textDecoration: 'none' }}>thebarcodestudioofficial@gmail.com</a>
        </Text>
      </Flex>

      {/* Business Hours & Copyright */}
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '5 / 6', ' 5 / 6']}
        paddingX={['4', '6', '8', '2', '5']}
        mt={['10', '12', '12', '0', '0']}
        ml={['0', '0', '0', '20']}
      >
        <Text color="#C9A961" fontWeight="bold" fontSize={['lg', 'lg', '20px']} mb={['6px', '8px']}>
          Business Hours
        </Text>
        <Text mb="4px" fontSize={['xs', 'sm', 'sm']} color="#666">
          Monday - Saturday
        </Text>
        <Text mb="8px" fontSize={['xs', 'sm', 'sm']} color="#666">
          10:00 AM - 7:00 PM
        </Text>
        <Text mb="4px" fontSize={['xs', 'sm', 'sm']} color="#666">
          Sunday: Closed
        </Text>
        <Text mt="8" fontSize={['xs', 'xs', 'sm']} color="#888">
          ©️ {new Date().getFullYear()} The Barcode Studio.<br/>All Rights Reserved.
        </Text>
        <Text fontSize={['xs', 'xs', 'sm']} color="#888" mt="2">
          Designed & Developed by<br/><strong>The Barcode Studio</strong>
        </Text>
      </Flex>
    </Grid>
  )
}

export default Footer