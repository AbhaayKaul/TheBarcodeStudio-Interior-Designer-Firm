import React from 'react'
import { Flex, Heading, Image, Text, Box } from '@chakra-ui/core'
import Button from './button'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { MdVideoCall, MdAccountBalanceWallet, MdCancel } from 'react-icons/md'
const DreamHome: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true })
  }, [])
  return (
    <Flex width="100%" flexDirection="column" alignItems="center" mt={['12', '16', '20', '24']} px={['4', '6', '8', '0']}>
      <Heading
        as="h3"
        mb={['10', '12', '16', '20']}
        fontSize={['xl', '2xl', '2xl', '3xl', '3xl']}
        textAlign="center"
        marginX="auto"
        px={['4', '6', '8', '0']}
        lineHeight={['1.3', '1.3', '1.4', '1.4']}

      >
        All the more reasons to get your dream home interiors now
      </Heading>
      <Flex
        width="90%"
        flexDirection={['column', 'column', 'column', 'row', 'row']}
        justifyContent="space-between"
        alignItems="center"
        maxW="1280px"
        mb="12"
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
          px={['4', '2', '2', '0', '0']}
          
        >
          <Box
            as={MdVideoCall}
            size={['40px', '45px', '50px']}
            color="black"
            mr={['12px', '16px', '18px']}
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            flexShrink={0}
          />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold"data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="80">Free online consultation</Text>
            <Text fontSize="sm"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="100">
              Talk to our designers online and start planning your interiors
              from the comfort of your home.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
          px={['4', '2', '2', '0', '0']}
        >
          <Box
            as={MdAccountBalanceWallet}
            size={['40px', '45px', '50px']}
            color="black"
            mr={['12px', '16px', '18px']}
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="150"
            flexShrink={0}
          />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold"data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="180">Pay just 10% to book</Text>
            <Text fontSize="sm" data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="200">
              We’ve dropped our booking fees. Now book your projects by paying
              just 10% instead 20%.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
          px={['4', '2', '2', '0', '0']}
        >
          <Box
            as={MdCancel}
            size={['40px', '45px', '50px']}
            color="black"
            mr={['12px', '16px', '18px']}
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="250"
            flexShrink={0}
          />
          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold" data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="280">Hassle-free cancellation</Text>
            <Text fontSize="sm"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="300">
              Get 100% refund on cancellations done within 15 days of booking.
              
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <a href="/consultation" style={{ textDecoration: 'none' }}>
        <Button>Consult online now</Button>
      </a>
    </Flex>
  )
}
export default DreamHome
