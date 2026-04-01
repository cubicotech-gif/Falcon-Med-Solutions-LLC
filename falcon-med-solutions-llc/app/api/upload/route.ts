import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-server'

export async function POST(request: NextRequest) {
  let supabase
  try {
    supabase = getSupabaseAdmin()
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Server configuration error'
    return NextResponse.json({ error: message }, { status: 500 })
  }

  const formData = await request.formData()
  const file = formData.get('file') as File | null
  const slotKey = formData.get('slot_key') as string | null

  if (!file || !slotKey) {
    return NextResponse.json(
      { error: 'Missing file or slot_key' },
      { status: 400 }
    )
  }

  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'image/gif']
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json(
      { error: 'Invalid file type. Allowed: JPEG, PNG, WebP, SVG, GIF' },
      { status: 400 }
    )
  }

  // Validate file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json(
      { error: 'File too large. Maximum size is 5MB' },
      { status: 400 }
    )
  }

  const fileExt = file.name.split('.').pop()
  const fileName = `${slotKey}-${Date.now()}.${fileExt}`
  const filePath = `${slotKey}/${fileName}`

  // Upload to Supabase Storage
  const { error: uploadError } = await supabase.storage
    .from('site-images')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: true,
    })

  if (uploadError) {
    return NextResponse.json(
      { error: `Upload failed: ${uploadError.message}` },
      { status: 500 }
    )
  }

  // Get public URL
  const { data: urlData } = supabase.storage
    .from('site-images')
    .getPublicUrl(filePath)

  const publicUrl = urlData.publicUrl

  // Update site_images table
  const { error: updateError } = await supabase
    .from('site_images')
    .update({ image_url: publicUrl })
    .eq('slot_key', slotKey)

  if (updateError) {
    return NextResponse.json(
      { error: `Database update failed: ${updateError.message}` },
      { status: 500 }
    )
  }

  return NextResponse.json({ image_url: publicUrl })
}
