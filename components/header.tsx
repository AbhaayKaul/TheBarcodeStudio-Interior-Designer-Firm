import React from 'react'
import { Flex, Grid, Heading } from '@chakra-ui/core'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Box from '@chakra-ui/core'


const Header: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  
  return (
    <Grid
      id="home"
      data-aos="fade-right"
      data-aos-easing="ease-out"
     data-aos-duration="1000"
      backgroundImage="url(/images/tyuii.jpg)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height={['50vh', '60vh', '70vh', '100vh']}
      templateRows="1fr 1fr 1fr"
      style={{ position: 'relative', zIndex: 1 }}
    >
      <Flex
        flexDirection="column"
        gridRow="2 / 4"
        paddingX={['1.5em', '1.5em', '1.5em', '9%']}
      > 
      {/* <Box sx={outerBoxStyles}>
      <Box sx={innerBoxStyles} backdropFilter='invert(100%)'> */}
        <Heading
          as="h3"
          fontSize={['2xl', '3xl', '4xl', '5xl', '6xl']}
          fontFamily={'Gill Sans'}
          color="rgb(250,230,170)"
          bg=""
          mb="2"
          width="fit-content"
          paddingX={['8px', '12px', '12px', '16px', '16px']}
          paddingY={['6px', '8px', '12px', '12px', '16px']}
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="250"
          textTransform={'uppercase'}
          lineHeight={['1.2', '1.2', '1.2', '1.2', '1.2']}

        >
          Your Space is Our Canvas.
        </Heading>
        {/* </Box>
      </Box> */}
        <Heading
          as="h3"
          fontSize={['sm', 'md', 'lg', 'xl', '2xl']}
          fontFamily={'Gill Sans'}
          textTransform="uppercase"
          color="261F1A"
          bg="rgb(220,210,198)"
          width="fit-content"
          paddingX={['16px', '20px', '24px', '28px', '30px']}
          paddingY={['6px', '8px', '10px', '12px', '14px']}
          data-aos="zoom-left"
          data-aos-easing="ease-in-out"
          data-aos-delay="550"
        >
          Creating Interiors that Reflect You
        </Heading>
      </Flex>
    </Grid>
  )
}

export default Header
