-- Create site_images table for managing all website images from admin
CREATE TABLE IF NOT EXISTS site_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slot_key TEXT UNIQUE NOT NULL,
  image_url TEXT NOT NULL,
  label TEXT NOT NULL,
  section TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add trigger for updated_at
CREATE TRIGGER update_site_images_updated_at BEFORE UPDATE ON site_images
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS
ALTER TABLE site_images ENABLE ROW LEVEL SECURITY;

-- Public read access (images need to load on the website)
CREATE POLICY "Allow public read access on site_images" ON site_images
  FOR SELECT USING (true);

-- Allow all operations (no auth system, admin is open)
CREATE POLICY "Allow all modifications on site_images" ON site_images
  FOR ALL USING (true) WITH CHECK (true);

-- Create storage bucket for uploaded images
INSERT INTO storage.buckets (id, name, public)
VALUES ('site-images', 'site-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies: public read, open write (no auth)
CREATE POLICY "Public read access on site-images bucket"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'site-images');

CREATE POLICY "Allow uploads to site-images bucket"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'site-images');

CREATE POLICY "Allow updates to site-images bucket"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'site-images');

CREATE POLICY "Allow deletes from site-images bucket"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'site-images');

-- Seed all image slots matching the redesigned site components

-- General
INSERT INTO site_images (slot_key, image_url, label, section) VALUES
('site-logo', '/logo.svg', 'Site Logo', 'General');

-- Homepage Hero (hero.tsx uses 'hero-main')
INSERT INTO site_images (slot_key, image_url, label, section) VALUES
('hero-main', 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1400&q=80', 'Hero Background Image', 'Homepage Hero');

-- Homepage Showcase (services-showcase.tsx uses these keys)
INSERT INTO site_images (slot_key, image_url, label, section) VALUES
('featured-wheelchairs', 'https://images.unsplash.com/photo-1619204715997-1e8ed26753b0?w=600&q=80', 'Wheelchairs Showcase', 'Homepage Showcase'),
('featured-mobility', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', 'Mobility Aids Showcase', 'Homepage Showcase'),
('featured-diabetic', 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80', 'Diabetic Care Showcase', 'Homepage Showcase'),
('featured-orthopedic', 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80', 'Orthopedic Braces Showcase', 'Homepage Showcase');

-- About Section on homepage (why-choose-us.tsx uses these keys)
INSERT INTO site_images (slot_key, image_url, label, section) VALUES
('about-main', 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', 'About Main Image', 'About Section'),
('about-secondary', 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80', 'About Secondary Image', 'About Section');

-- CTA Section (cta.tsx uses this key)
INSERT INTO site_images (slot_key, image_url, label, section) VALUES
('cta-background', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80', 'CTA Background Image', 'CTA Section');

-- About Page (about/page.tsx uses these keys)
INSERT INTO site_images (slot_key, image_url, label, section) VALUES
('about-hero', 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1400&q=80', 'About Page Hero', 'About Page'),
('about-story', 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', 'Our Story Image', 'About Page');

-- Products Page (products/page.tsx uses these keys)
INSERT INTO site_images (slot_key, image_url, label, section) VALUES
('product-wheelchair-standard', 'https://images.unsplash.com/photo-1619204715997-1e8ed26753b0?w=600&q=80', 'Standard Wheelchair', 'Products Page'),
('product-wheelchair-transport', 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80', 'Transport Wheelchair', 'Products Page'),
('product-rollator', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', 'Rollator Walker', 'Products Page'),
('product-cane', 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80', 'Walking Cane', 'Products Page'),
('product-glucose', 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80', 'Blood Glucose Monitor', 'Products Page'),
('product-diabetic-kit', 'https://images.unsplash.com/photo-1583912267550-d6c7e3e5f3b2?w=600&q=80', 'Diabetic Supply Kit', 'Products Page'),
('product-knee-brace', 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80', 'Knee Brace', 'Products Page'),
('product-back-support', 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80', 'Back Support Belt', 'Products Page');
