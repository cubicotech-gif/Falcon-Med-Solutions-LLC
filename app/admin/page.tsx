'use client'

import { useEffect, useState, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Upload, Check, AlertCircle, Loader2, ImageIcon, ExternalLink } from 'lucide-react'

interface SiteImage {
  id: string
  slot_key: string
  image_url: string
  label: string
  section: string
  updated_at: string
}

function ImageUploadCard({ image, onUploadSuccess }: { image: SiteImage; onUploadSuccess: (slotKey: string, newUrl: string) => void }) {
  const [uploading, setUploading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setStatus('idle')
    setErrorMsg('')

    const formData = new FormData()
    formData.append('file', file)
    formData.append('slot_key', image.slot_key)

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Upload failed')
      }

      onUploadSuccess(image.slot_key, data.image_url)
      setStatus('success')
      setTimeout(() => setStatus('idle'), 3000)
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Upload failed')
      setStatus('error')
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  const isLogo = image.slot_key === 'site-logo'

  return (
    <Card className="overflow-hidden border-0 shadow-md">
      <div className={`relative ${isLogo ? 'h-32 bg-gray-100' : 'h-48'} flex items-center justify-center`}>
        {image.image_url ? (
          isLogo ? (
            <div className="relative w-24 h-24">
              <Image
                src={image.image_url}
                alt={image.label}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <Image
              src={image.image_url}
              alt={image.label}
              fill
              className="object-cover"
            />
          )
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <ImageIcon className="h-10 w-10" />
            <span className="text-sm">No image</span>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-semibold text-sm text-gray-900">{image.label}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{image.slot_key}</p>
          </div>
          {status === 'success' && (
            <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
              <Check className="h-3 w-3" /> Updated
            </span>
          )}
        </div>

        {status === 'error' && (
          <div className="flex items-start gap-2 text-xs text-red-600 bg-red-50 p-2 rounded mb-3">
            <AlertCircle className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="flex gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/svg+xml,image/gif"
            onChange={handleUpload}
            className="hidden"
            id={`upload-${image.slot_key}`}
          />
          <Button
            size="sm"
            className="w-full"
            disabled={uploading}
            onClick={() => fileInputRef.current?.click()}
          >
            {uploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload Image
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AdminPage() {
  const [images, setImages] = useState<SiteImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/site-images')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setImages(data)
        } else {
          setError(data.error || 'Failed to load images')
        }
      })
      .catch(() => setError('Failed to connect to server'))
      .finally(() => setLoading(false))
  }, [])

  const handleUploadSuccess = (slotKey: string, newUrl: string) => {
    setImages((prev) =>
      prev.map((img) => (img.slot_key === slotKey ? { ...img, image_url: newUrl } : img))
    )
  }

  // Group images by section
  const sections = images.reduce<Record<string, SiteImage[]>>((acc, img) => {
    if (!acc[img.section]) acc[img.section] = []
    acc[img.section].push(img)
    return acc
  }, {})

  const sectionMeta: Record<string, { description: string; pageLink?: string }> = {
    'General': { description: 'Logo and branding assets used across the site' },
    'Homepage Hero': { description: 'Main banner image on the homepage', pageLink: '/' },
    'Homepage Showcase': { description: 'Product showcase images on the homepage', pageLink: '/' },
    'About Section': { description: 'Images in the About Us section on homepage', pageLink: '/' },
    'CTA Section': { description: 'Background image for the consultation section', pageLink: '/' },
    'About Page': { description: 'Images on the About Us page', pageLink: '/about' },
    'Products Page': { description: 'Product images on the dedicated products page', pageLink: '/products' },
  }

  const sectionOrder = [
    'General',
    'Homepage Hero',
    'Homepage Showcase',
    'About Section',
    'CTA Section',
    'About Page',
    'Products Page',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.svg"
                alt="FalconMed Solutions"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Image Manager</h1>
              <p className="text-sm text-gray-500">Upload and manage website images</p>
            </div>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm" className="rounded-full">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Website
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Info Banner */}
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 mb-8">
          <p className="text-sm text-primary-800">
            Upload images for each section of your website. Supported formats: JPEG, PNG, WebP, SVG, GIF (max 5MB).
            Images update on the live site immediately after upload.
          </p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-3 text-gray-600">Loading image slots...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <p className="text-red-800 font-medium">{error}</p>
            <p className="text-red-600 text-sm mt-1">
              Make sure Supabase is configured and the site_images table exists.
              Run the migration: supabase/migrations/002_site_images.sql
            </p>
          </div>
        )}

        {!loading && !error && sectionOrder.map((sectionName) => {
          const sectionImages = sections[sectionName]
          if (!sectionImages) return null
          const meta = sectionMeta[sectionName] || { description: '' }

          return (
            <section key={sectionName} className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{sectionName}</h2>
                  <p className="text-sm text-gray-500">{meta.description}</p>
                </div>
                {meta.pageLink && (
                  <Link
                    href={meta.pageLink}
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    View page <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
              <div className={`grid gap-6 ${
                sectionName === 'General' || sectionName === 'Homepage Hero' || sectionName === 'CTA Section'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              }`}>
                {sectionImages.map((img) => (
                  <ImageUploadCard
                    key={img.slot_key}
                    image={img}
                    onUploadSuccess={handleUploadSuccess}
                  />
                ))}
              </div>
            </section>
          )
        })}
      </main>
    </div>
  )
}
