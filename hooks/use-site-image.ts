'use client'

import { useEffect, useState } from 'react'

type ImageMap = Record<string, string>

// Shared in-memory cache across all hook instances
const imageCache: ImageMap = {}
let fetchPromise: Promise<ImageMap> | null = null

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

/**
 * Returns the DB image URL for a slot key.
 * Returns '' while loading — components should show a placeholder/skeleton.
 * Once cached, returns immediately with no flash.
 */
export function useSiteImage(slotKey: string, _defaultUrl: string): string {
  // If already cached from a previous render, use it immediately
  const [imageUrl, setImageUrl] = useState(imageCache[slotKey] || '')
  const [ready, setReady] = useState(!!imageCache[slotKey])

  useEffect(() => {
    if (imageCache[slotKey]) {
      setImageUrl(imageCache[slotKey])
      setReady(true)
      return
    }

    ensureFetch().then((all) => {
      setImageUrl(all[slotKey] || _defaultUrl)
      setReady(true)
    })
  }, [slotKey, _defaultUrl])

  if (!ready) return ''
  return imageUrl
}

export function useSiteImages(
  slots: { key: string; defaultUrl: string }[]
): { images: ImageMap; ready: boolean } {
  const allCachedAlready = slots.every((s) => imageCache[s.key])

  const initial: ImageMap = {}
  if (allCachedAlready) {
    for (const slot of slots) {
      initial[slot.key] = imageCache[slot.key]
    }
  }

  const [images, setImages] = useState<ImageMap>(initial)
  const [ready, setReady] = useState(allCachedAlready)

  useEffect(() => {
    if (allCachedAlready) {
      return
    }

    ensureFetch().then((all) => {
      const result: ImageMap = {}
      for (const slot of slots) {
        result[slot.key] = all[slot.key] || slot.defaultUrl
      }
      setImages(result)
      setReady(true)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { images, ready }
}
