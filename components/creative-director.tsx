import React from 'react'

import { Flex, Text, Heading, Grid, Image, Box } from '@chakra-ui/core'
import { FaLinkedin } from 'react-icons/fa'

const CreativeDirector: React.FC = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" marginY={['12', '16', '20', '24']} alignItems="center">
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 5']}
        alignItems="left"
        
        paddingX={['6', '8', '8', '24', '24']}
        maxW="850px"
        
        mt={['1em', '1.5em', '2em', '2.5em']}
        ml={['.5em', '.5em', '.5em', '.5em']}
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize={['3xl', '4xl', '4xl', '5xl', '5xl']}
          fontWeight="normal"
          mb={['12px', '16px', '20px']}
          alignSelf="flex-start"
        >
          Founder
        </Heading>
        <Text fontSize={['sm', 'sm', 'md', 'md']} mb={['12px', '16px', '20px']} alignSelf="flex-start" textAlign="left">
        Manish Gupta is the Founder and Principal Architect at The BarCode Studio. 
        Born in Delhi, he studied at the renowned University School of Architecture
         and Planning, IPU Delhi. After graduating, he worked with Anagram Architects 
         for a brief stint before founding The BarCode Studio. Manish’s passion for 
         stretching the conceptual possibilities of a project right down to its last
          detail is reflected in his diverse repertoire. With a keen interest in practising
           in a wide variety and scales of projects, his approach takes into account the 
           spatial experience of the user before delving into the details. He practices the
            philosophy of less is more, and firmly believes that design is a collaborative
             effort. 
        </Text>
        {/* <Button>Learn More</Button> */}
      </Flex>
      <Box
          position="relative"
          gridColumn={['1/ 7', '1 / 7', '1/7', '4/7', '5/7']}
          paddingX={['6', '8', '8', '8', '8']}
          mt={['8', '8', '0', '0']}
          display="flex"
          justifyContent={['center', 'center', 'center', 'center', 'flex-start']}
        >
          <Box
            backgroundColor="#F7F5F3"
            borderRadius="8px"
            overflow="hidden"
            height={['320px', '370px', '400px', '450px']}
            width={['100%', '90%', '80%', '85%', '90%']}
            maxWidth={['400px', '450px', '500px', '550px', '600px']}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderColor="#A9957B"
            borderWidth="1px"
            borderStyle="solid"
          >
          <Image 
          style={{pointerEvents:'none'}}
            height="100%"
            width="100%"
            objectFit="cover"
            objectPosition="center top"
            src="/directors/founder1.JPG" />
          </Box>
          <Flex
            position="absolute"
            bottom={['-25px', '-30px', '-35px', '-35px']}
            left={['50%', '50%', '50%', '50%']}
            transform="translateX(-50%)"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY={['4px', '5px', '6px']}
            paddingX={['8px', '10px', '12px']}
            width={['70%', '60%', '50%', '45%']}
            backgroundColor="white"
            borderColor="#A9957B"
            borderWidth={['4px', '5px', '6px']}
          >
            <Text alignItems="center" textAlign='center' textTransform="uppercase" fontWeight="medium" fontSize={['md', 'lg', 'xl', '22px']}>
              Manish Gupta
            </Text>
            <Text textTransform="uppercase" textAlign='center' fontWeight="bold" color="#A9957B" fontSize={['xs', 'sm', 'sm', 'md']}>
              Principal Architect
            </Text>
            <a
              href="https://www.linkedin.com/in/manish-gupta-aa9696212/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#C9A961',
                color: 'white',
                marginTop: '12px',
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
              <FaLinkedin size={18} />
            </a>
          </Flex>
        </Box>
    </Grid>
  )
}

export default CreativeDirector
