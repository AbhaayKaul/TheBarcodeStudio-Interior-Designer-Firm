import { Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/core'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

const Service: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true })
  }, [])
  
  return (
    <Box id="services" position="relative" mt={['12', '16', '20', '24']}>
      <Image
        width={['0%', '0%', '0%', '40%', '40%']}
        maxW="660px"
        position="absolute"
        top="40%"
        left="5%"
        src="/study (3).jpg"
        display={['none', 'none', 'none', 'block', 'block']}
        borderColor="white"
        borderWidth="10px"
        borderStyle="solid"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-delay="200"
      />
      <Grid
        backgroundColor="#A9957B"
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(3, 1fr)"
      >
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          alignItems="center"
          maxW="850px"
          color="white"
          paddingY={['44px', '60px', '72px', '88px']}
          paddingX={['6', '8', '8', '0']}
          gridColumn={['1 / 13', '1 / 13', '1 / 13', '7 / 13', '7 / 13']}
          gridRow="1 / 4"
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize={['2xl', '3xl', '3xl', '4xl', '5xl']}
            fontWeight="extrabold"
            mb={['6px', '8px', '8px']}
            alignSelf="flex-start"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
          >
            Our Professional Services
          </Heading>
          <Heading
            as="h4"
            fontSize={['md', 'lg', 'lg', 'xl', 'xl']}
            fontWeight="normal"
            mb={['12px', '16px', '20px']}
            alignSelf="flex-start"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="200"
          >
            We Will Create Modern And First Class Interior.
          </Heading>
          <Text
            fontSize={['xs', 'sm', 'sm', 'sm']}
            mb={['12px', '16px', '20px']}
            alignSelf="flex-start"
            textAlign="left"
            lineHeight={['1.5', '1.6', '1.6', '23px']}
            mr={['0', '0', '0', '30px']}
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            Barcode Studio, an interior and architectural 
            design firm, offers a diverse range of professional 
            services aimed at transforming spaces into functional 
            and aesthetically pleasing environments. Specializing 
            in both residential and commercial projects, they excel 
            in conceptualizing innovative designs that align with 
            clients' visions. Their services encompass detailed space 
            planning, interior décor, and architectural solutions, 
            ensuring a harmonious integration of form and function. 
            Barcode Studio is committed to delivering comprehensive 
            design packages, guiding clients from the initial ideation 
            phase through project management and construction oversight.
             With a focus on creativity, functionality, and attention 
             to detail, Barcode Studio elevates interior and 
             architectural design, creating spaces that reflect
              both style and practicality.
          </Text>
          <a href="/services" style={{ textDecoration: 'none' }}>
            <Button
              alignSelf="flex-start"
              variantColor="white"
              backgroundColor="#fff"
              color="orange.600"
              width="fit-content"
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-delay="400"
            >
              Learn More
            </Button>
          </a>
        </Flex>
      </Grid>
    </Box>
  )
}

export default Service
