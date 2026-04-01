'use client'

import { useEffect, useState } from 'react'

type ImageMap = Record<string, string>

// Shared in-memory cache across all hook instances
const imageCache: ImageMap = {}
let fetchPromise: Promise<ImageMap> | null = null
let fetched = false

async function fetchAllImages(): Promise<ImageMap> {
  try {
    const res = await fetch('/api/site-images')
    if (!res.ok) return {}
    const data = await res.json()
    if (!Array.isArray(data)) return {}

    const map: ImageMap = {}
    for (const row of data) {
      if (row.slot_key && row.image_url) {
        map[row.slot_key] = row.image_url
        imageCache[row.slot_key] = row.image_url
      }
    }
    fetched = true
    return map
  } catch {
    return {}
  }
}

function ensureFetch(): Promise<ImageMap> {
  if (!fetchPromise) {
    fetchPromise = fetchAllImages()
  }
  return fetchPromise
}

export function useSiteImage(slotKey: string, defaultUrl: string): string {
  const [imageUrl, setImageUrl] = useState(imageCache[slotKey] || defaultUrl)

  useEffect(() => {
    if (imageCache[slotKey]) {
      setImageUrl(imageCache[slotKey])
      return
    }

    ensureFetch().then((all) => {
      if (all[slotKey]) {
        setImageUrl(all[slotKey])
      }
    })
  }, [slotKey, defaultUrl])

  return imageUrl
}

export function useSiteImages(
  slots: { key: string; defaultUrl: string }[]
): ImageMap {
  const defaults: ImageMap = {}
  for (const slot of slots) {
    defaults[slot.key] = imageCache[slot.key] || slot.defaultUrl
  }

  const [images, setImages] = useState<ImageMap>(defaults)

  useEffect(() => {
    const allCached = slots.every((s) => imageCache[s.key])
    if (allCached) {
      const cached: ImageMap = {}
      for (const slot of slots) {
        cached[slot.key] = imageCache[slot.key]
      }
      setImages(cached)
      return
    }

    ensureFetch().then((all) => {
      const result: ImageMap = {}
      for (const slot of slots) {
        result[slot.key] = all[slot.key] || slot.defaultUrl
      }
      setImages(result)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return images
}
