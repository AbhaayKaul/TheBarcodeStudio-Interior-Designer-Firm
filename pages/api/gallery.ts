import { NextApiRequest, NextApiResponse } from 'next'
import { kv } from '@vercel/kv'

const GALLERY_KEY = 'gallery:images'

// Default images for initial setup
const DEFAULT_IMAGES = [
  {
    id: '1',
    url: '/grid/01_01.jpg',
    cloudinaryId: null,
    addedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '2',
    url: '/grid/01_02t.jpg',
    cloudinaryId: null,
    addedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '3',
    url: '/grid/01_02.jpg',
    cloudinaryId: null,
    addedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '4',
    url: '/grid/01_03.jpg',
    cloudinaryId: null,
    addedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '5',
    url: '/grid/hgrt56.jpg',
    cloudinaryId: null,
    addedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '6',
    url: '/grid/study wash.jpg',
    cloudinaryId: null,
    addedAt: '2024-01-01T00:00:00.000Z'
  }
]

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      // Get images from KV store
      let images = await kv.get(GALLERY_KEY)
      
      // If no images exist, initialize with defaults
      if (!images || (Array.isArray(images) && images.length === 0)) {
        images = DEFAULT_IMAGES
        await kv.set(GALLERY_KEY, images)
      }

      return res.status(200).json({ images })
    }

    if (req.method === 'POST') {
      // Add new image
      const { url, cloudinaryId } = req.body

      if (!url) {
        return res.status(400).json({ error: 'URL is required' })
      }

      // Get current images
      let images: any = await kv.get(GALLERY_KEY)
      
      if (!images) {
        images = []
      }

      const newImage = {
        id: Date.now().toString(),
        url,
        cloudinaryId: cloudinaryId || null,
        addedAt: new Date().toISOString(),
      }

      images.push(newImage)

      // Save updated images to KV
      await kv.set(GALLERY_KEY, images)

      return res.status(201).json({ message: 'Image added successfully', image: newImage })
    }

    if (req.method === 'DELETE') {
      // Delete image
      const { id } = req.body

      if (!id) {
        return res.status(400).json({ error: 'Image ID is required' })
      }

      // Get current images
      let images: any = await kv.get(GALLERY_KEY)

      if (!images || images.length === 0) {
        return res.status(404).json({ error: 'No images found' })
      }

      const imageToDelete = images.find((img: any) => img.id === id)

      if (!imageToDelete) {
        return res.status(404).json({ error: 'Image not found' })
      }

      // Remove image from array
      images = images.filter((img: any) => img.id !== id)

      // Save updated images to KV
      await kv.set(GALLERY_KEY, images)

      return res.status(200).json({ 
        message: 'Image deleted successfully', 
        deletedImage: imageToDelete 
      })
    }

    return res.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    console.error('Gallery API error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

