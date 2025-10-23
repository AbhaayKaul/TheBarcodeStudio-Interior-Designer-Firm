import React, { useState, useEffect } from 'react'
import { Flex, Text, Heading, Box, Image } from '@chakra-ui/core'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

interface GalleryImage {
  id: string
  url: string
  cloudinaryId: string | null
  addedAt: string
}

const OurProject: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/gallery')
        const data = await response.json()
        const imageUrls = data.images.map((img: GalleryImage) => img.url)
        setImages(imageUrls)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching gallery images:', error)
        // Fallback to default images if API fails
        setImages([
          '/grid/01_01.jpg',
          '/grid/01_02t.jpg',
          '/grid/01_02.jpg',
          '/grid/01_03.jpg',
          '/grid/hgrt56.jpg',
          '/grid/study wash.jpg',
        ])
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 3000) // Change slide every 3 seconds

      return () => clearInterval(interval)
    }
  }, [isPaused, images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <Flex 
      id="gallery" 
      flexDirection="column" 
      alignItems="center" 
      mt={['12', '16', '20', '24']} 
      px={['4', '6', '8', '0']}
      pt={['12', '16', '20']}
      pb={['16', '20', '24']}
      position="relative"
      zIndex={1}
      style={{
        background: 'linear-gradient(to bottom, #F5EBE0 0%, #E8DCC7 50%, #F5EBE0 100%)',
      }}
    >
      <Heading 
        as="h3" 
        textTransform="uppercase" 
        mb={['12px', '16px', '20px']}
        fontSize={['2xl', '3xl', '3xl', '4xl']}
        color="#261F1A"
      >
        Gallery
      </Heading>
      <Text 
        fontSize={['14px', '15px', '16px']} 
        mb={['20px', '24px', '32px']} 
        maxW="600px" 
        textAlign="center" 
        px={['4', '6', '0']}
        color="#261F1A"
      >
        Explore our portfolio of stunning interior designs that blend aesthetics with functionality
      </Text>

      {loading ? (
        <Box textAlign="center" py="20">
          <Text color="#261F1A" fontSize="lg">Loading gallery...</Text>
        </Box>
      ) : images.length === 0 ? (
        <Box textAlign="center" py="20">
          <Text color="#261F1A" fontSize="lg">No images in gallery yet</Text>
        </Box>
      ) : (
        <>
      {/* Carousel Container */}
      <Box
        position="relative"
        width="100%"
        maxW="1200px"
        height={['300px', '400px', '500px', '600px']}
        borderRadius="12px"
        boxShadow="0 10px 40px rgba(0, 0, 0, 0.2)"
        overflow="hidden"
        border="6px solid #A9957B"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Inner Container for Images */}
        <Box
          position="relative"
          width="100%"
          height="100%"
        >
          {/* Images */}
          {images.map((src, index) => (
            <Box
              key={index}
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              opacity={index === currentIndex ? 1 : 0}
              transition="opacity 0.8s ease-in-out"
              zIndex={index === currentIndex ? 1 : 0}
            >
              <Image
                src={src}
                width="100%"
                height="100%"
                objectFit="cover"
                alt={`Gallery image ${index + 1}`}
              />
            </Box>
          ))}

          {/* Previous Button */}
          <Flex
            position="absolute"
            left={['8px', '16px']}
            top="50%"
            transform="translateY(-50%)"
            zIndex={10}
            bg="rgba(255, 255, 255, 0.9)"
            borderRadius="50%"
            width={['40px', '50px']}
            height={['40px', '50px']}
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            transition="all 0.3s ease"
            onClick={goToPrevious}
            style={{ willChange: 'transform' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            <Box as={MdChevronLeft} size="30px" color="#C9A961" />
          </Flex>

          {/* Next Button */}
          <Flex
            position="absolute"
            right={['8px', '16px']}
            top="50%"
            transform="translateY(-50%)"
            zIndex={10}
            bg="rgba(255, 255, 255, 0.9)"
            borderRadius="50%"
            width={['40px', '50px']}
            height={['40px', '50px']}
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            transition="all 0.3s ease"
            onClick={goToNext}
            style={{ willChange: 'transform' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            <Box as={MdChevronRight} size="30px" color="#C9A961" />
          </Flex>

          {/* Navigation Dots */}
          <Flex
            position="absolute"
            bottom={['16px', '24px']}
            left="50%"
            transform="translateX(-50%)"
            zIndex={10}
            style={{ gap: '12px' }}
          >
            {images.map((_, index) => (
              <Box
                key={index}
                width={['10px', '12px']}
                height={['10px', '12px']}
                borderRadius="50%"
                bg={index === currentIndex ? '#C9A961' : 'rgba(255, 255, 255, 0.5)'}
                cursor="pointer"
                transition="all 0.3s ease"
                onClick={() => goToSlide(index)}
                style={{ willChange: 'transform' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = index === currentIndex ? '#B8956A' : 'rgba(255, 255, 255, 0.8)'
                  e.currentTarget.style.transform = 'scale(1.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = index === currentIndex ? '#C9A961' : 'rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              />
            ))}
          </Flex>
        </Box>
      </Box>

      {/* Thumbnail Preview (Optional) */}
      <Box
        mt={['20px', '32px']}
        maxW="1200px"
        width="100%"
        px={['4', '6', '8']}
      >
        <style jsx>{`
          .thumbnail-container {
            display: flex;
            gap: 12px;
            overflow-x: auto;
            padding-bottom: 8px;
          }
          .thumbnail-container::-webkit-scrollbar {
            height: 6px;
          }
          .thumbnail-container::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          .thumbnail-container::-webkit-scrollbar-thumb {
            background: #C9A961;
            border-radius: 10px;
          }
          .thumbnail-container::-webkit-scrollbar-thumb:hover {
            background: #B8956A;
          }
        `}</style>
        <div className="thumbnail-container">
          {images.map((src, index) => (
            <Box
              key={index}
              minW={['80px', '100px', '120px']}
              height={['60px', '75px', '90px']}
              borderRadius="6px"
              overflow="hidden"
              cursor="pointer"
              border={index === currentIndex ? '3px solid #C9A961' : '3px solid transparent'}
              transition="all 0.3s ease"
              opacity={index === currentIndex ? 1 : 0.6}
              onClick={() => goToSlide(index)}
              style={{ willChange: 'transform', flexShrink: 0 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.opacity = '1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.opacity = index === currentIndex ? '1' : '0.6'
              }}
            >
              <Image
                src={src}
                width="100%"
                height="100%"
                objectFit="cover"
                alt={`Thumbnail ${index + 1}`}
              />
            </Box>
          ))}
        </div>
      </Box>
        </>
      )}
    </Flex>
  )
}

export default OurProject
