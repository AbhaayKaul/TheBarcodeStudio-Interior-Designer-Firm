import React, { useState } from 'react'
import { Flex, Heading, Text, Grid, Box, Input, Button as ChakraButton } from '@chakra-ui/core'
import { useRouter } from 'next/router'

const ConsultationPage: React.FC = () => {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const consultationFee = 2500
  const bookingAmount = 1

  // Generate next 7 days for date selection
  const getNextSevenDays = () => {
    const dates = []
    for (let i = 1; i <= 7; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      dates.push({
        date: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })
      })
    }
    return dates
  }

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM'
  ]

  const handlePayment = async () => {
    if (!selectedDate || !selectedTime || !name || !email || !phone) {
      alert('Please fill all fields and select a time slot')
      return
    }

    // Payment gateway integration will go here
    alert(`Booking Details:\nName: ${name}\nDate: ${selectedDate}\nTime: ${selectedTime}\nAmount: ₹${bookingAmount}`)
  }

  return (
    <Box minHeight="100vh" bg="#FAF9F7">
      {/* Navigation Bar - Simple version */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1.5rem 3%"
        bg="white"
        boxShadow="sm"
      >
        <Flex align="center" cursor="pointer" onClick={() => router.push('/')}>
          <img src="/images/BAR-10.jpg" alt="Logo" style={{ width: '100px' }} />
          <Heading as="h1" size="md" ml="3" color="#261F1A" textTransform="uppercase">
            The Barcode Studio
          </Heading>
        </Flex>
        <ChakraButton
          variant="ghost"
          onClick={() => router.push('/')}
          color="#261F1A"
          fontWeight="600"
        >
          ← Back to Home
        </ChakraButton>
      </Flex>

      {/* Main Content */}
      <Flex
        maxW="1200px"
        mx="auto"
        px={['4', '6', '8']}
        py={['8', '10', '12']}
        flexDirection="column"
        alignItems="center"
      >
        {/* Header */}
        <Heading
          as="h2"
          fontSize={['2xl', '3xl', '4xl']}
          color="#261F1A"
          mb="4"
          textAlign="center"
        >
          Book Your Free Consultation
        </Heading>
        <Text fontSize={['md', 'lg']} color="#666" mb="8" textAlign="center" maxW="600px">
          Connect with our expert designers and bring your vision to life
        </Text>

        {/* Pricing Info */}
        <Flex
          bg="white"
          borderRadius="12px"
          p={['6', '8']}
          mb="8"
          boxShadow="md"
          flexDirection={['column', 'column', 'row']}
          width="100%"
          maxW="800px"
        >
          <Flex flex="1" flexDirection="column" align="center" textAlign="center" mb={['6', '6', '0']}>
            <Text fontSize="sm" color="#666" mb="2" textTransform="uppercase" fontWeight="600">
              Full Consultation Fee
            </Text>
            <Heading as="h3" fontSize="3xl" color="#261F1A" mb="2">
              ₹{consultationFee}
            </Heading>
            <Text fontSize="sm" color="#888">
              One-time consultation
            </Text>
          </Flex>
          
          <Flex align="center" justify="center" mx={['0', '0', '6']} my={['0', '0']}>
            <Box
              width={['100%', '100%', '2px']}
              height={['2px', '2px', '80px']}
              bg="#E5E5E5"
            />
          </Flex>

          <Flex flex="1" flexDirection="column" align="center" textAlign="center" mt={['6', '6', '0']}>
            <Text fontSize="sm" color="#C9A961" mb="2" textTransform="uppercase" fontWeight="700">
              Pay Now (10%)
            </Text>
            <Heading as="h3" fontSize="4xl" color="#C9A961" mb="2">
              ₹{bookingAmount}
            </Heading>
            <Text fontSize="sm" color="#888">
              To confirm your booking
            </Text>
          </Flex>
        </Flex>

        {/* Booking Form */}
        <Grid
          width="100%"
          maxW="800px"
          bg="white"
          borderRadius="12px"
          p={['6', '8']}
          boxShadow="md"
          gap="6"
        >
          {/* Personal Details */}
          <Box>
            <Heading as="h4" fontSize="xl" color="#261F1A" mb="4">
              Your Details
            </Heading>
            <Grid gap="4" templateColumns={['1fr', '1fr 1fr']}>
              <Box>
                <Text fontSize="sm" fontWeight="600" mb="2" color="#261F1A">
                  Full Name *
                </Text>
                <Input
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                  borderColor="#E5E5E5"
                  _focus={{ borderColor: '#C9A961' }}
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="600" mb="2" color="#261F1A">
                  Email *
                </Text>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  borderColor="#E5E5E5"
                  _focus={{ borderColor: '#C9A961' }}
                />
              </Box>
              <Box gridColumn={['1', 'span 2']}>
                <Text fontSize="sm" fontWeight="600" mb="2" color="#261F1A">
                  Phone Number *
                </Text>
                <Input
                  type="tel"
                  placeholder="+91 1234567890"
                  value={phone}
                  onChange={(e: any) => setPhone(e.target.value)}
                  borderColor="#E5E5E5"
                  _focus={{ borderColor: '#C9A961' }}
                />
              </Box>
            </Grid>
          </Box>

          {/* Date Selection */}
          <Box>
            <Heading as="h4" fontSize="xl" color="#261F1A" mb="4">
              Select Date
            </Heading>
            <Grid gap="3" templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(7, 1fr)']}>
              {getNextSevenDays().map((day) => (
                <Box
                  key={day.date}
                  p="4"
                  borderRadius="8px"
                  border="2px solid"
                  borderColor={selectedDate === day.date ? '#C9A961' : '#E5E5E5'}
                  bg={selectedDate === day.date ? '#FDF8F0' : 'white'}
                  cursor="pointer"
                  textAlign="center"
                  transition="all 0.2s"
                  onClick={() => setSelectedDate(day.date)}
                  style={{ willChange: 'transform' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#C9A961'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    if (selectedDate !== day.date) {
                      e.currentTarget.style.borderColor = '#E5E5E5'
                    }
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <Text fontSize="xs" color="#666" mb="1">
                    {day.display.split(' ')[0]}
                  </Text>
                  <Text fontSize="md" fontWeight="600" color="#261F1A">
                    {day.display.split(' ').slice(1).join(' ')}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Box>

          {/* Time Slot Selection */}
          <Box>
            <Heading as="h4" fontSize="xl" color="#261F1A" mb="4">
              Select Time Slot
            </Heading>
            <Grid gap="3" templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}>
              {timeSlots.map((time) => (
                <Box
                  key={time}
                  p="4"
                  borderRadius="8px"
                  border="2px solid"
                  borderColor={selectedTime === time ? '#C9A961' : '#E5E5E5'}
                  bg={selectedTime === time ? '#FDF8F0' : 'white'}
                  cursor="pointer"
                  textAlign="center"
                  transition="all 0.2s"
                  onClick={() => setSelectedTime(time)}
                  style={{ willChange: 'transform' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#C9A961'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTime !== time) {
                      e.currentTarget.style.borderColor = '#E5E5E5'
                    }
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <Text fontSize="md" fontWeight="600" color="#261F1A">
                    {time}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Box>

          {/* Payment Button */}
          <ChakraButton
            bg="#C9A961"
            color="white"
            size="lg"
            height="60px"
            fontSize="lg"
            fontWeight="600"
            _hover={{ bg: '#B8956A', transform: 'scale(1.02)' }}
            transition="all 0.3s"
            onClick={handlePayment}
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Proceed to Payment - ₹{bookingAmount}
          </ChakraButton>

          <Text fontSize="xs" color="#888" textAlign="center">
            By proceeding, you agree to our terms and conditions. 
            Remaining ₹{consultationFee - bookingAmount} will be collected after consultation.
          </Text>
        </Grid>
      </Flex>
    </Box>
  )
}

export default ConsultationPage

