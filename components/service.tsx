import React from 'react'
import { Grid, Text, Flex, Heading, Button, Box, Image } from '@chakra-ui/core'

const Service: React.FC = () => {
  return (
    <Box position="relative">
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
          paddingY="88px"
          gridColumn={['2 / 12', '2 / 12', '2 /12', '7 / 13', '7 / 13']}
          gridRow="1 / 4"
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="extrabold"
            mb="8px"
            alignSelf="flex-start"
          >
            Our Professional Services
          </Heading>
          <Heading
            as="h4"
            fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}
            fontWeight="normal"
            mb="20px"
            alignSelf="flex-start"
          >
            We Will Create Modern And First Class Interior.
          </Heading>
          <Text
            fontSize="sm"
            mb="20px"
            alignSelf="flex-start"
            textAlign="left"
            lineHeight="23px"
            mr={'30px'}
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
          <Button
            alignSelf="flex-start"
            variantColor="white"
            backgroundColor="#fff"
            color="orange.600"
            width="fit-content"
          >
            Learn More
          </Button>
        </Flex>
      </Grid>
    </Box>
  )
}

export default Service
