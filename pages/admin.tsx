import React, { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Button as ChakraButton,
  Grid,
  Image,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/core'
import Head from 'next/head'

interface GalleryImage {
  id: string
  url: string
  cloudinaryId: string | null
  addedAt: string
}

const AdminPage: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  // Simple password protection (change this password!)
  const ADMIN_PASSWORD = 'barcode2024'

  useEffect(() => {
    if (authenticated) {
      fetchImages()
    }
  }, [authenticated])

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/gallery')
      const data = await response.json()
      setImages(data.images || [])
      setLoading(false)
    } catch (error) {
      console.error('Error fetching images:', error)
      setMessage('Error loading images')
      setLoading(false)
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setMessage('')
    } else {
      setMessage('Invalid password')
    }
  }

  const handleUpload = () => {
    // Open Cloudinary upload widget
    if (typeof window !== 'undefined' && (window as any).cloudinary) {
      setUploading(true)
      
      const widget = (window as any).cloudinary.createUploadWidget(
        {
          cloudName: 'dfns48j6j', // Your Cloudinary cloud name
          uploadPreset: 'thebarcodestudio', // Your upload preset
          sources: ['local', 'url', 'camera'],
          multiple: false,
          maxFileSize: 10000000, // 10MB
          clientAllowedFormats: ['jpg', 'jpeg', 'png', 'webp'],
          maxImageWidth: 2000,
          maxImageHeight: 2000,
        },
        async (error: any, result: any) => {
          if (error) {
            console.error('Upload error:', error)
            setMessage('Upload failed')
            setUploading(false)
            return
          }

          if (result.event === 'success') {
            // Image uploaded successfully
            const imageUrl = result.info.secure_url
            const cloudinaryId = result.info.public_id

            try {
              // Save to our API
              const response = await fetch('/api/gallery', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  url: imageUrl,
                  cloudinaryId: cloudinaryId,
                }),
              })

              if (response.ok) {
                setMessage('Image uploaded successfully!')
                fetchImages() // Refresh the list
              } else {
                setMessage('Failed to save image')
              }
            } catch (err) {
              console.error('Error saving image:', err)
              setMessage('Error saving image')
            }

            setUploading(false)
            widget.close()
          }
        }
      )

      widget.open()
    } else {
      setMessage('Cloudinary not loaded. Please refresh the page.')
    }
  }

  const handleDelete = async (imageId: string) => {
    if (!confirm('Are you sure you want to delete this image?')) {
      return
    }

    try {
      const response = await fetch('/api/gallery', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: imageId }),
      })

      if (response.ok) {
        setMessage('Image deleted successfully!')
        fetchImages() // Refresh the list
      } else {
        setMessage('Failed to delete image')
      }
    } catch (error) {
      console.error('Error deleting image:', error)
      setMessage('Error deleting image')
    }
  }

  if (!authenticated) {
    return (
      <Box minHeight="100vh" bg="#F9F9F9" display="flex" alignItems="center" justifyContent="center">
        <Head>
          <title>Admin Login - The Barcode Studio</title>
        </Head>

        <Box bg="white" p="10" borderRadius="12px" boxShadow="lg" maxW="400px" width="100%">
          <Heading as="h1" fontSize="2xl" mb="6" textAlign="center" color="#261F1A">
            Admin Login
          </Heading>

          <form onSubmit={handleLogin}>
            <FormControl mb="6">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                borderColor="#E5E5E5"
                style={{ border: '1px solid #E5E5E5' }}
              />
            </FormControl>

            {message && (
              <Text color="red" mb="4" fontSize="sm">
                {message}
              </Text>
            )}

            <ChakraButton
              type="submit"
              bg="#C9A961"
              color="white"
              width="100%"
              _hover={{ bg: '#B8956A' }}
            >
              Login
            </ChakraButton>
          </form>
        </Box>
      </Box>
    )
  }

  return (
    <Box minHeight="100vh" bg="#F9F9F9">
      <Head>
        <title>Gallery Admin - The Barcode Studio</title>
        <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript" />
      </Head>

      {/* Header */}
      <Box bg="white" boxShadow="sm" py="4" px={['4', '6', '8']}>
        <Flex maxW="1400px" mx="auto" justify="space-between" align="center">
          <Heading as="h1" fontSize={['xl', '2xl']} color="#261F1A">
            Gallery Admin
          </Heading>
          <ChakraButton
            onClick={() => window.location.href = '/'}
            size="sm"
            bg="#C9A961"
            color="white"
            _hover={{ bg: '#B8956A' }}
          >
            Back to Website
          </ChakraButton>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box maxW="1400px" mx="auto" p={['4', '6', '8']}>
        {/* Upload Section */}
        <Box bg="white" p={['6', '8']} borderRadius="12px" boxShadow="md" mb="8">
          <Heading as="h2" fontSize="xl" mb="4" color="#261F1A">
            Upload New Image
          </Heading>
          <Text fontSize="sm" color="#666" mb="6">
            Click the button below to upload a new image to the gallery carousel
          </Text>

          <ChakraButton
            onClick={handleUpload}
            bg="#C9A961"
            color="white"
            size="lg"
            _hover={{ bg: '#B8956A' }}
            isDisabled={uploading}
          >
            {uploading ? 'Uploading...' : 'Upload Image'}
          </ChakraButton>

          {message && (
            <Text mt="4" color={message.includes('success') ? 'green' : 'red'} fontWeight="600">
              {message}
            </Text>
          )}
        </Box>

        {/* Current Images */}
        <Box bg="white" p={['6', '8']} borderRadius="12px" boxShadow="md">
          <Heading as="h2" fontSize="xl" mb="6" color="#261F1A">
            Current Gallery Images ({images.length})
          </Heading>

          {loading ? (
            <Text>Loading images...</Text>
          ) : images.length === 0 ? (
            <Text color="#666">No images found</Text>
          ) : (
            <Grid
              templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
              gap="6"
            >
              {images.map((image) => (
                <Box
                  key={image.id}
                  borderRadius="8px"
                  overflow="hidden"
                  border="2px solid #E5E5E5"
                  transition="all 0.3s"
                  style={{ cursor: 'default' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#C9A961'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E5E5E5'
                  }}
                >
                  <Box height="200px" overflow="hidden" bg="#F5F5F5">
                    <Image
                      src={image.url}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      alt="Gallery image"
                    />
                  </Box>
                  <Box p="4">
                    <Text fontSize="xs" color="#666" mb="2">
                      Added: {new Date(image.addedAt).toLocaleDateString()}
                    </Text>
                    <Text fontSize="xs" color="#666" mb="3" style={{ wordBreak: 'break-all' }}>
                      ID: {image.id}
                    </Text>
                    <ChakraButton
                      size="sm"
                      bg="red"
                      color="white"
                      width="100%"
                      _hover={{ bg: '#C53030' }}
                      onClick={() => handleDelete(image.id)}
                    >
                      Delete
                    </ChakraButton>
                  </Box>
                </Box>
              ))}
            </Grid>
          )}
        </Box>

        {/* Instructions */}
        <Box bg="#FFF9E6" p="6" borderRadius="12px" mt="8" border="2px solid #C9A961">
          <Heading as="h3" fontSize="lg" mb="4" color="#261F1A">
            📝 Instructions
          </Heading>
          <Text fontSize="sm" color="#666" mb="2">
            <strong>1. Setup Cloudinary:</strong> Create a free account at <a href="https://cloudinary.com" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A961', textDecoration: 'underline' }}>cloudinary.com</a>
          </Text>
          <Text fontSize="sm" color="#666" mb="2">
            <strong>2. Get Credentials:</strong> Find your Cloud Name and create an Upload Preset (unsigned)
          </Text>
          <Text fontSize="sm" color="#666" mb="2">
            <strong>3. Update Code:</strong> Replace 'YOUR_CLOUD_NAME' and 'YOUR_UPLOAD_PRESET' in this file
          </Text>
          <Text fontSize="sm" color="#666" mb="2">
            <strong>4. Upload:</strong> Click "Upload Image" to add new images to the carousel
          </Text>
          <Text fontSize="sm" color="#666">
            <strong>5. Delete:</strong> Click the delete button on any image to remove it
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default AdminPage

