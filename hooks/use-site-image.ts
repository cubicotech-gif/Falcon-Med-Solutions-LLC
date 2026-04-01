'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type SiteImageRow = { slot_key: string; image_url: string }

// In-memory cache shared across all hook instances
const imageCache: Record<string, string> = {}
const pendingRequests: Record<string, Promise<string | null>> = {}

async function fetchSingleImage(slotKey: string): Promise<string | null> {
  try {
    const { data } = await supabase
      .from('site_images')
      .select('image_url')
      .eq('slot_key', slotKey)
      .single()
    const row = data as SiteImageRow | null
    return row?.image_url || null
  } catch {
    return null
  } finally {
    delete pendingRequests[slotKey]
  }
}

export function useSiteImage(slotKey: string, defaultUrl: string): string {
  const [imageUrl, setImageUrl] = useState(imageCache[slotKey] || defaultUrl)

  useEffect(() => {
    if (imageCache[slotKey]) {
      setImageUrl(imageCache[slotKey])
      return
    }

    if (!pendingRequests[slotKey]) {
      pendingRequests[slotKey] = fetchSingleImage(slotKey)
    }

    pendingRequests[slotKey].then((url) => {
      if (url) {
        imageCache[slotKey] = url
        setImageUrl(url)
      }
    })
  }, [slotKey, defaultUrl])

  return imageUrl
}

// Batch fetch all site images at once
const allImagesFetched = { done: false }
let allImagesPromise: Promise<Record<string, string>> | null = null

async function fetchAllImages(): Promise<Record<string, string>> {
  try {
    const { data } = await supabase
      .from('site_images')
      .select('slot_key, image_url')
    const map: Record<string, string> = {}
    if (data) {
      for (const item of data as SiteImageRow[]) {
        map[item.slot_key] = item.image_url
        imageCache[item.slot_key] = item.image_url
      }
    }
    allImagesFetched.done = true
    return map
  } catch {
    return {}
  }
}

export function useSiteImages(
  slots: { key: string; defaultUrl: string }[]
): Record<string, string> {
  const defaults: Record<string, string> = {}
  for (const slot of slots) {
    defaults[slot.key] = imageCache[slot.key] || slot.defaultUrl
  }

  const [images, setImages] = useState<Record<string, string>>(defaults)

  useEffect(() => {
    const allCached = slots.every((s) => imageCache[s.key])
    if (allCached) {
      const cached: Record<string, string> = {}
      for (const slot of slots) {
        cached[slot.key] = imageCache[slot.key]
      }
      setImages(cached)
      return
    }

    if (!allImagesPromise || !allImagesFetched.done) {
      allImagesPromise = fetchAllImages()
    }

    allImagesPromise.then((allImages) => {
      const result: Record<string, string> = {}
      for (const slot of slots) {
        result[slot.key] = allImages[slot.key] || slot.defaultUrl
      }
      setImages(result)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return images
}
