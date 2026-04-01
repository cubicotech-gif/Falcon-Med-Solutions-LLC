-- Migration 003: Update slot keys to match redesigned components
-- Old migration used underscores and different names; new design uses hyphens

-- Delete old slots that no longer match any component
DELETE FROM site_images WHERE slot_key IN (
  'site_logo',
  'hero_main_image',
  'about_story_image',
  'featured_wheelchairs',
  'featured_cgm',
  'featured_braces',
  'featured_walkers',
  'product_manual_wheelchair',
  'product_transport_wheelchair',
  'product_folding_walker',
  'product_walking_cane',
  'product_cgm',
  'product_glucose_meter',
  'product_knee_brace',
  'product_lumbar_support'
);

-- Insert new slots matching the redesigned components
-- Use ON CONFLICT to skip if they already exist (idempotent)

INSERT INTO site_images (slot_key, image_url, label, section) VALUES
  ('site-logo', '/logo.svg', 'Site Logo', 'General')
ON CONFLICT (slot_key) DO NOTHING;

INSERT INTO site_images (slot_key, image_url, label, section) VALUES
  ('hero-main', 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1400&q=80', 'Hero Background Image', 'Homepage Hero')
ON CONFLICT (slot_key) DO NOTHING;

INSERT INTO site_images (slot_key, image_url, label, section) VALUES
  ('featured-wheelchairs', 'https://images.unsplash.com/photo-1619204715997-1e8ed26753b0?w=600&q=80', 'Wheelchairs Showcase', 'Homepage Showcase'),
  ('featured-mobility', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', 'Mobility Aids Showcase', 'Homepage Showcase'),
  ('featured-diabetic', 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80', 'Diabetic Care Showcase', 'Homepage Showcase'),
  ('featured-orthopedic', 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80', 'Orthopedic Braces Showcase', 'Homepage Showcase')
ON CONFLICT (slot_key) DO NOTHING;

INSERT INTO site_images (slot_key, image_url, label, section) VALUES
  ('about-main', 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', 'About Main Image', 'About Section'),
  ('about-secondary', 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80', 'About Secondary Image', 'About Section')
ON CONFLICT (slot_key) DO NOTHING;

INSERT INTO site_images (slot_key, image_url, label, section) VALUES
  ('cta-background', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80', 'CTA Background Image', 'CTA Section')
ON CONFLICT (slot_key) DO NOTHING;

INSERT INTO site_images (slot_key, image_url, label, section) VALUES
  ('about-hero', 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1400&q=80', 'About Page Hero', 'About Page'),
  ('about-story', 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', 'Our Story Image', 'About Page')
ON CONFLICT (slot_key) DO NOTHING;

INSERT INTO site_images (slot_key, image_url, label, section) VALUES
  ('product-wheelchair-standard', 'https://images.unsplash.com/photo-1619204715997-1e8ed26753b0?w=600&q=80', 'Standard Wheelchair', 'Products Page'),
  ('product-wheelchair-transport', 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80', 'Transport Wheelchair', 'Products Page'),
  ('product-rollator', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', 'Rollator Walker', 'Products Page'),
  ('product-cane', 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80', 'Walking Cane', 'Products Page'),
  ('product-glucose', 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80', 'Blood Glucose Monitor', 'Products Page'),
  ('product-diabetic-kit', 'https://images.unsplash.com/photo-1583912267550-d6c7e3e5f3b2?w=600&q=80', 'Diabetic Supply Kit', 'Products Page'),
  ('product-knee-brace', 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80', 'Knee Brace', 'Products Page'),
  ('product-back-support', 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80', 'Back Support Belt', 'Products Page')
ON CONFLICT (slot_key) DO NOTHING;
