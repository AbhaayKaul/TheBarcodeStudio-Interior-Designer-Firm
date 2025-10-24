import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/core'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const About: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true })
  }, [])
  
  return (
    <Grid id="about" templateColumns="repeat(5, 1fr)" marginY={['12', '16', '20', '20']} alignItems="center"  >
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
        alignItems="center"
        paddingX={['6', '8', '8', '24', '24']}
        marginX="auto"
        maxW="950px"
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize={['3xl', '4xl', '4xl', '5xl', '5xl']}
          fontWeight="semi-bold"
          mb={['8px', '10px', '10px']}
          alignSelf="flex-start"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          About us
        </Heading>
        <Text 
          fontSize={['sm', 'sm', 'md', 'md']} 
          mb="20px" 
          alignSelf="flex-start" 
          textAlign="left"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
        >
        The Barcode Studio is a multidisciplinary architecture practice focussed 
        on delivering the highest quality architecture services to our clients. 
        We focus on crafting and delivering the perfect blend of our 3 main pillars: 
        sophistication, aesthetics and functionality. We offer unique innovative 
        solutions tailored to your specific needs and requirements. The outlook of
        the studio is to align your taste and preferences with our distinctive style
         to produce an output that best reflects your personality and helps you achieve 
         your dream. We at The Barcode Studio celebrate intricate craftsmanship, flawless 
         execution and an inclusive process. 
        </Text>
        
        {/* Social Media Links */}
        <Flex 
          alignSelf="flex-start" 
          mt="4" 
          mb="2"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
        >
          <Text fontSize={['sm', 'md']} fontWeight="600" mr="4" alignSelf="center" color="#261F1A">
            Connect with us:
          </Text>
          <Flex>
            <a
              href="https://in.linkedin.com/company/the-barcode-studio"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#C9A961',
                color: 'white',
                marginRight: '12px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B8956A'
                e.currentTarget.style.transform = 'scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#C9A961'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/the_barcodestudio/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#C9A961',
                color: 'white',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B8956A'
                e.currentTarget.style.transform = 'scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#C9A961'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              <FaInstagram size={20} />
            </a>
          </Flex>
        </Flex>
        {/* <Button>Learn More</Button> */}
      </Flex>
      <Box 
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 6', '4 / 6']}  
        marginY="5" 
        paddingX={['6', '8', '8', '0', '0']}
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-delay="400"
      >
        <Image
          width={['100%', '100%', '100%', '80%', '95%']}
          maxW="690px"
          src="ewrw.jpg"
          display={['block', 'block', 'block', 'block', 'block']}
          borderColor="#A9957B"
          borderWidth={['6px', '8px', '10px', '10px']}
          borderStyle="solid"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.8)"
          mt={['6', '8', '8', '0', '0']}
        />
      </Box>
    </Grid>
  )
}

export default About
