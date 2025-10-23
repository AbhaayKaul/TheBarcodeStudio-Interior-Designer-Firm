import React from 'react'
import { Flex, Heading, Text, Grid, Box, Button as ChakraButton } from '@chakra-ui/core'
import { useRouter } from 'next/router'
import { MdHome, MdBusiness, MdKitchen, MdColorLens, MdBuild, MdLocationCity, MdHighlight, MdWeekend } from 'react-icons/md'

interface ServiceCardProps {
  icon: any
  title: string
  description: string
  features: string[]
  timeline?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, timeline }) => {
  const router = useRouter()
  
  return (
    <Box
      bg="white"
      borderRadius="12px"
      p={['6', '8']}
      boxShadow="md"
      transition="all 0.3s"
      style={{ cursor: 'default' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      <Flex align="center" mb="4">
        <Box as={icon} size="40px" color="#C9A961" mr="3" />
        <Heading as="h3" fontSize={['xl', '2xl']} color="#261F1A">
          {title}
        </Heading>
      </Flex>
      
      <Text fontSize="md" color="#666" mb="4" lineHeight="1.7">
        {description}
      </Text>
      
      <Box mb="4">
        <Text fontSize="sm" fontWeight="700" color="#261F1A" mb="2">
          What's Included:
        </Text>
        <Grid gap="2">
          {features.map((feature, index) => (
            <Flex key={index} align="flex-start">
              <Text color="#C9A961" mr="2" fontSize="lg">•</Text>
              <Text fontSize="sm" color="#666">{feature}</Text>
            </Flex>
          ))}
        </Grid>
      </Box>
      
      {timeline && (
        <Text fontSize="sm" color="#888" mb="4" fontStyle="italic">
          Typical Timeline: {timeline}
        </Text>
      )}
      
      <ChakraButton
        size="sm"
        bg="#C9A961"
        color="white"
        _hover={{ bg: '#B8956A' }}
        onClick={() => router.push('/consultation')}
        width="100%"
      >
        Book Consultation
      </ChakraButton>
    </Box>
  )
}

const ServicesPage: React.FC = () => {
  const router = useRouter()

  const residentialServices = [
    {
      icon: MdHome,
      title: 'Complete Home Interiors',
      description: 'Transform your entire home into a cohesive, stylish living space that reflects your personality and lifestyle.',
      features: [
        'Space planning and layout design',
        'Custom furniture selection',
        'Color scheme and material selection',
        'Lighting design',
        'Décor and styling',
        '3D visualization'
      ],
      timeline: '8-12 weeks'
    },
    {
      icon: MdKitchen,
      title: 'Modular Kitchens',
      description: 'Functional and beautiful kitchen designs with smart storage solutions and premium finishes.',
      features: [
        'Customized modular units',
        'Premium hardware and fittings',
        'Optimized storage solutions',
        'Appliance integration',
        'Counter and backsplash design',
        'Installation and finishing'
      ],
      timeline: '4-6 weeks'
    },
    {
      icon: MdWeekend,
      title: 'Living & Bedroom Design',
      description: 'Create comfortable, elegant spaces for relaxation and rejuvenation.',
      features: [
        'Furniture layout planning',
        'Custom wardrobe design',
        'Bed and seating selection',
        'Lighting and ambiance',
        'Window treatments',
        'Decorative elements'
      ],
      timeline: '6-8 weeks'
    }
  ]

  const commercialServices = [
    {
      icon: MdBusiness,
      title: 'Office Spaces',
      description: 'Professional work environments that boost productivity and reflect your brand identity.',
      features: [
        'Workspace planning',
        'Ergonomic furniture selection',
        'Meeting room design',
        'Reception area styling',
        'Branding integration',
        'Lighting and acoustics'
      ],
      timeline: '10-14 weeks'
    },
    {
      icon: MdBusiness,
      title: 'Retail & Commercial',
      description: 'Eye-catching commercial spaces designed to attract customers and maximize sales.',
      features: [
        'Store layout optimization',
        'Display and fixture design',
        'Customer flow planning',
        'Brand identity integration',
        'Lighting for product showcase',
        'Signage and graphics coordination'
      ],
      timeline: '8-12 weeks'
    }
  ]

  const specializedServices = [
    {
      icon: MdLocationCity,
      title: 'Architectural Planning',
      description: 'Comprehensive architectural solutions from concept to execution.',
      features: [
        'Floor plan design',
        'Structural modifications',
        '3D modeling and renders',
        'Construction drawings',
        'Building code compliance',
        'Site supervision'
      ],
      timeline: '12-16 weeks'
    },
    {
      icon: MdHighlight,
      title: 'Lighting Design',
      description: 'Expert lighting solutions to enhance ambiance and functionality.',
      features: [
        'Ambient lighting planning',
        'Task lighting solutions',
        'Accent and decorative lighting',
        'Smart lighting integration',
        'Energy-efficient options',
        'Fixture selection'
      ],
      timeline: '2-4 weeks'
    },
    {
      icon: MdColorLens,
      title: 'Color Consultation',
      description: 'Professional color schemes that create the perfect mood and atmosphere.',
      features: [
        'Color palette development',
        'Paint and finish selection',
        'Material coordination',
        'Sample boards',
        'Application guidance',
        'Trend insights'
      ],
      timeline: '1-2 weeks'
    },
    {
      icon: MdBuild,
      title: 'Renovation & Remodeling',
      description: 'Complete renovation services to breathe new life into existing spaces.',
      features: [
        'Space assessment',
        'Design and planning',
        'Structural modifications',
        'Material sourcing',
        'Project management',
        'Quality assurance'
      ],
      timeline: '8-16 weeks'
    }
  ]

  return (
    <Box minHeight="100vh" bg="#F9F9F9">
      {/* Navigation Bar */}
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

      {/* Hero Section */}
      <Box
        style={{
          background: 'linear-gradient(to bottom, #A9957B 0%, #E8D5C4 50%, #F5EBE0 100%)',
        }}
        py={['12', '16', '20']}
        px={['4', '6', '8']}
        textAlign="center"
      >
        <Heading
          as="h1"
          fontSize={['3xl', '4xl', '5xl', '6xl']}
          color="#261F1A"
          mb="4"
          textTransform="uppercase"
          fontWeight="800"
        >
          Our Professional Services
        </Heading>
        <Text fontSize={['md', 'lg', 'xl']} color="#261F1A" maxW="800px" mx="auto" mb="8" fontWeight="500">
          We create modern and first-class interiors that transform your vision into reality
        </Text>
        <ChakraButton
          size="lg"
          bg="#261F1A"
          color="white"
          _hover={{ bg: '#3D3630', transform: 'scale(1.05)' }}
          onClick={() => router.push('/consultation')}
          px="8"
          py="6"
          fontSize="lg"
          transition="all 0.3s"
        >
          Book Free Consultation
        </ChakraButton>
      </Box>

      {/* Main Content */}
      <Box maxW="1400px" mx="auto" px={['4', '6', '8']} py={['12', '16']}>
        
        {/* Residential Services */}
        <Box mb="16">
          <Heading
            as="h2"
            fontSize={['2xl', '3xl', '4xl']}
            color="#261F1A"
            mb="2"
            textTransform="uppercase"
          >
            Residential Design
          </Heading>
          <Text fontSize={['md', 'lg']} color="#666" mb="8">
            Create your dream home with our comprehensive residential interior design services
          </Text>
          <Grid
            templateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
            gap={['6', '8']}
          >
            {residentialServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </Grid>
        </Box>

        {/* Commercial Services */}
        <Box mb="16">
          <Heading
            as="h2"
            fontSize={['2xl', '3xl', '4xl']}
            color="#261F1A"
            mb="2"
            textTransform="uppercase"
          >
            Commercial Design
          </Heading>
          <Text fontSize={['md', 'lg']} color="#666" mb="8">
            Professional spaces that elevate your business and impress your clients
          </Text>
          <Grid
            templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']}
            gap={['6', '8']}
          >
            {commercialServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </Grid>
        </Box>

        {/* Specialized Services */}
        <Box mb="16">
          <Heading
            as="h2"
            fontSize={['2xl', '3xl', '4xl']}
            color="#261F1A"
            mb="2"
            textTransform="uppercase"
          >
            Specialized Services
          </Heading>
          <Text fontSize={['md', 'lg']} color="#666" mb="8">
            Expert solutions for specific design needs and requirements
          </Text>
          <Grid
            templateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
            gap={['6', '8']}
          >
            {specializedServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </Grid>
        </Box>

        {/* Our Process */}
        <Box
          bg="white"
          borderRadius="16px"
          p={['8', '12']}
          boxShadow="lg"
          mb="16"
        >
          <Heading
            as="h2"
            fontSize={['2xl', '3xl', '4xl']}
            color="#261F1A"
            mb="8"
            textAlign="center"
            textTransform="uppercase"
          >
            Our Design Process
          </Heading>
          <Grid
            templateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
            gap={['6', '8']}
          >
            {[
              { step: '01', title: 'Consultation', desc: 'Free initial meeting to understand your vision and requirements' },
              { step: '02', title: 'Design Concept', desc: '3D visualization and detailed design proposals' },
              { step: '03', title: 'Execution', desc: 'Professional implementation with quality materials' },
              { step: '04', title: 'Handover', desc: 'Final styling and complete project delivery' }
            ].map((item, index) => (
              <Box key={index} textAlign="center">
                <Text fontSize="4xl" fontWeight="700" color="#C9A961" mb="2">
                  {item.step}
                </Text>
                <Heading as="h4" fontSize="xl" color="#261F1A" mb="2">
                  {item.title}
                </Heading>
                <Text fontSize="sm" color="#666">
                  {item.desc}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          style={{
            background: 'linear-gradient(to bottom, #A9957B 0%, #E8D5C4 50%, #F5EBE0 100%)',
          }}
          borderRadius="16px"
          p={['8', '12']}
          textAlign="center"
        >
          <Heading
            as="h2"
            fontSize={['2xl', '3xl', '4xl']}
            color="#261F1A"
            mb="4"
            fontWeight="700"
          >
            Ready to Transform Your Space?
          </Heading>
          <Text fontSize={['md', 'lg']} color="#261F1A" mb="8" maxW="600px" mx="auto" fontWeight="500">
            Book a free consultation with our expert designers and let's bring your vision to life
          </Text>
          <ChakraButton
            size="lg"
            bg="#261F1A"
            color="white"
            _hover={{ bg: '#3D3630', transform: 'scale(1.05)' }}
            onClick={() => router.push('/consultation')}
            px="10"
            py="7"
            fontSize="lg"
            fontWeight="700"
            textTransform="uppercase"
            transition="all 0.3s"
          >
            Book Free Consultation Now
          </ChakraButton>
        </Box>
      </Box>
    </Box>
  )
}

export default ServicesPage

