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

-- Seed all image slots with current placeholder URLs

-- General
INSERT INTO site_images (slot_key, image_url, label, section) VALUES
('site_logo', '/logo.svg', 'Site Logo', 'General');

-- Homepage Hero
INSERT INTO site_images (slot_key, image_url, label, section) VALUES
('hero_main_image', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80', 'Hero Background Image', 'Homepage Hero');

-- About Page
INSERT INTO site_images (slot_key, image_url, label, section) VALUES
('about_story_image', 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80', 'Our Story Image', 'About Page');

-- Featured Products (Homepage)
INSERT INTO site_images (slot_key, image_url, label, section) VALUES
('featured_wheelchairs', 'https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030?w=600&q=80', 'Premium Wheelchairs', 'Featured Products'),
('featured_cgm', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80', 'Continuous Glucose Monitors', 'Featured Products'),
('featured_braces', 'https://images.unsplash.com/photo-1620331925087-4a13be250c5d?w=600&q=80', 'Orthopedic Braces', 'Featured Products'),
('featured_walkers', 'https://images.unsplash.com/photo-1610349907345-19bf89ce8e3e?w=600&q=80', 'Walkers & Rollators', 'Featured Products');

-- Products Page
INSERT INTO site_images (slot_key, image_url, label, section) VALUES
('product_manual_wheelchair', 'https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030?w=600&q=80', 'Manual Wheelchair - Standard', 'Products Page'),
('product_transport_wheelchair', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&q=80', 'Transport Wheelchair', 'Products Page'),
('product_folding_walker', 'https://images.unsplash.com/photo-1610349907345-19bf89ce8e3e?w=600&q=80', 'Folding Walker with Wheels', 'Products Page'),
('product_walking_cane', 'https://images.unsplash.com/photo-1584613132429-a50a3b5c0e86?w=600&q=80', 'Aluminum Walking Cane', 'Products Page'),
('product_cgm', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80', 'Continuous Glucose Monitor (CGM)', 'Products Page'),
('product_glucose_meter', 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', 'Blood Glucose Meter Kit', 'Products Page'),
('product_knee_brace', 'https://images.unsplash.com/photo-1620331925087-4a13be250c5d?w=600&q=80', 'Knee Support Brace', 'Products Page'),
('product_lumbar_support', 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80', 'Lumbar Back Support', 'Products Page');
