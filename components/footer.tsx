import React from 'react'
import { Text, Flex, Grid, Box } from '@chakra-ui/core'
import Logo from './logo'
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <Grid as="footer" templateColumns="repeat(5, 1fr)" mt={['12', '14', '16']} mb={['12', '14', '16']} px={['4', '6', '0']}>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 3', '1 / 3']}
        pl={['4', '6', '8', '24', '20']}
        pr={['4', '6', '8', '0', '0']}
      >
        <Logo />
        <Text fontSize={['xs', 'sm', 'sm']} mt={['3', '4']} textAlign="left" lineHeight={['1.5', '1.6', '22px']}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Text>
        <Flex
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          mt={['6', '7', '8']}
        >
          <Box as={FaFacebookF} size={['18px', '20px', '22px']} color="#A9957B" mr={['8px', '10px', '12px']} />
          <Box as={FaTwitter} size={['18px', '20px', '22px']} color="orange.500" mr={['8px', '10px', '12px']} />
          <Box as={FaGoogle} size={['18px', '20px', '22px']} color="orange.500" mr={['8px', '10px', '12px']} />
          <Box as={FaInstagram} size={['18px', '20px', '22px']} color="orange.500" mr={['8px', '10px', '12px']} />
          <Box as={FaYoutube} size={['18px', '20px', '22px']} color="orange.500" />
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '3 / 4', '3 / 4']}
        paddingX={['4', '6', '8']}
        mt={['10', '12', '12', '0', '0']}
      >
        <Text color="orange.500" fontWeight="bold" fontSize={['lg', 'lg', '20px']} mb={['6px', '8px']}>
          Projects
        </Text>
        <Text mb="6px" fontSize={['sm', 'sm', 'md']}>Lorem</Text>
        <Text mb="6px" fontSize={['sm', 'sm', 'md']}>Lorem</Text>
        <Text mb="6px" fontSize={['sm', 'sm', 'md']}>Lorem</Text>
        <Text mb="6px" fontSize={['sm', 'sm', 'md']}>Lorem</Text>
        
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 5', '4 / 5']}
        paddingX={['4', '6', '8', '2', '2']}
        mt={['10', '12', '12', '0', '0']}
      >
        <Text color="orange.500" fontWeight="bold" fontSize={['lg', 'lg', '20px']} mb={['6px', '8px']}>
          Contact Us
        </Text>
        <Text mb="6px" fontSize={['xs', 'sm', 'sm']} lineHeight={['1.5', '1.6']}>Address: Ground floor,F1-22, Kotla Rd, Pocket 1, Sector 11F, Rohini, Delhi, 110085</Text>
        <Text mb="6px" fontSize={['xs', 'sm', 'sm']}>Phone: +91 8448023979</Text>
        <Text fontSize={['xs', 'sm', 'sm']}>Email: thebarcodestudioofficial@gmail.com</Text>
      </Flex>

      <Flex
    
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '5 / 6', ' 5 / 6']}
        paddingX={['4', '6', '8', '2', '5']}
        mt={['10', '12', '12', '0', '0']}
        ml={['0', '0', '0', '20']}
      >
        <Text color="orange.500" fontWeight="bold" fontSize={['lg', 'lg', '20px']} mb={['6px', '8px']}>
        Website Designed by
        </Text>
        <Text fontWeight="bold" mb="6px" fontSize={['sm', 'sm', 'md']}>
          The BarCodeStudio
        </Text>
        <Text mb="6px" fontSize={['xs', 'sm', 'sm']}>
        Copyright © 2023. All Rights Reserved
        </Text>
      </Flex>
    </Grid>
  )
}

export default Footer