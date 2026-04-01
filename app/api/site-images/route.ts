import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-server'

export const dynamic = 'force-dynamic'

// All image slots the site expects — single source of truth
const EXPECTED_SLOTS = [
  // General
  { slot_key: 'site-logo', image_url: '/logo.svg', label: 'Site Logo', section: 'General' },

  // Homepage Hero
  { slot_key: 'hero-main', image_url: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1400&q=80', label: 'Hero Background Image', section: 'Homepage Hero' },

  // Homepage Showcase
  { slot_key: 'featured-wheelchairs', image_url: 'https://images.unsplash.com/photo-1619204715997-1e8ed26753b0?w=600&q=80', label: 'Wheelchairs Showcase', section: 'Homepage Showcase' },
  { slot_key: 'featured-mobility', image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', label: 'Mobility Aids Showcase', section: 'Homepage Showcase' },
  { slot_key: 'featured-diabetic', image_url: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80', label: 'Diabetic Care Showcase', section: 'Homepage Showcase' },
  { slot_key: 'featured-orthopedic', image_url: 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80', label: 'Orthopedic Braces Showcase', section: 'Homepage Showcase' },

  // About Section (homepage)
  { slot_key: 'about-main', image_url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', label: 'About Main Image', section: 'About Section' },
  { slot_key: 'about-secondary', image_url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80', label: 'About Secondary Image', section: 'About Section' },

  // CTA Section
  { slot_key: 'cta-background', image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80', label: 'CTA Background Image', section: 'CTA Section' },

  // About Page
  { slot_key: 'about-hero', image_url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1400&q=80', label: 'About Page Hero', section: 'About Page' },
  { slot_key: 'about-story', image_url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', label: 'Our Story Image', section: 'About Page' },

  // Products Page
  { slot_key: 'product-wheelchair-standard', image_url: 'https://images.unsplash.com/photo-1619204715997-1e8ed26753b0?w=600&q=80', label: 'Standard Wheelchair', section: 'Products Page' },
  { slot_key: 'product-wheelchair-transport', image_url: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80', label: 'Transport Wheelchair', section: 'Products Page' },
  { slot_key: 'product-rollator', image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', label: 'Rollator Walker', section: 'Products Page' },
  { slot_key: 'product-cane', image_url: 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80', label: 'Walking Cane', section: 'Products Page' },
  { slot_key: 'product-glucose', image_url: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80', label: 'Blood Glucose Monitor', section: 'Products Page' },
  { slot_key: 'product-diabetic-kit', image_url: 'https://images.unsplash.com/photo-1583912267550-d6c7e3e5f3b2?w=600&q=80', label: 'Diabetic Supply Kit', section: 'Products Page' },
  { slot_key: 'product-knee-brace', image_url: 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80', label: 'Knee Brace', section: 'Products Page' },
  { slot_key: 'product-back-support', image_url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80', label: 'Back Support Belt', section: 'Products Page' },
]

async function ensureSlotsExist(supabase: ReturnType<typeof getSupabaseAdmin>) {
  // Get existing slot keys
  const { data: existing } = await supabase
    .from('site_images')
    .select('slot_key')

  const existingKeys = new Set((existing || []).map((r: { slot_key: string }) => r.slot_key))

  // Find missing slots
  const missing = EXPECTED_SLOTS.filter((s) => !existingKeys.has(s.slot_key))

  if (missing.length > 0) {
    await supabase.from('site_images').insert(missing)
  }
}

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()

    // Auto-seed any missing image slots
    await ensureSlotsExist(supabase)

    const { data, error } = await supabase
      .from('site_images')
      .select('*')
      .order('section')

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
