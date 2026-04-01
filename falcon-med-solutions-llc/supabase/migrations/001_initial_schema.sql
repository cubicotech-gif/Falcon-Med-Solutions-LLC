-- Create tables for FalconMed Solutions website

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Hero Content table
CREATE TABLE IF NOT EXISTS hero_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  cta_text TEXT NOT NULL,
  cta_link TEXT NOT NULL,
  background_image TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  features TEXT[] DEFAULT '{}',
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  avatar_url TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER update_hero_content_updated_at BEFORE UPDATE ON hero_content
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default hero content
INSERT INTO hero_content (title, subtitle, cta_text, cta_link, background_image)
VALUES (
  'Your Trusted Partner in Medical Care',
  'Premium wheelchairs, mobility aids, diabetic care solutions, and orthopedic supports delivered with care across New Jersey',
  'Get a Quote',
  '/contact',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80'
);

-- Insert sample products
INSERT INTO products (name, category, description, image_url, features, is_featured) VALUES
(
  'Premium Manual Wheelchair',
  'Wheelchairs',
  'Lightweight, durable wheelchair designed for comfort and mobility',
  'https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030?w=800&q=80',
  ARRAY['Lightweight aluminum frame', 'Adjustable footrests', 'Padded armrests', 'Foldable design'],
  TRUE
),
(
  'Continuous Glucose Monitor',
  'Diabetic Care',
  'Real-time glucose monitoring system with smartphone connectivity',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  ARRAY['Real-time monitoring', 'Smartphone app', 'Customizable alerts', '14-day sensor life'],
  TRUE
),
(
  'Knee Support Brace',
  'Orthopedic Braces',
  'Medical-grade knee brace providing stability and pain relief',
  'https://images.unsplash.com/photo-1620331925087-4a13be250c5d?w=800&q=80',
  ARRAY['Adjustable compression', 'Breathable material', 'Dual side stabilizers', 'Non-slip design'],
  TRUE
),
(
  'Aluminum Walking Cane',
  'Mobility Aids',
  'Adjustable height cane with ergonomic grip and anti-slip tip',
  'https://images.unsplash.com/photo-1584613132429-a50a3b5c0e86?w=800&q=80',
  ARRAY['Height adjustable', 'Ergonomic handle', 'Anti-slip rubber tip', 'Lightweight aluminum'],
  FALSE
),
(
  'Folding Walker with Wheels',
  'Mobility Aids',
  'Sturdy walker with smooth-rolling wheels and hand brakes',
  'https://images.unsplash.com/photo-1610349907345-19bf89ce8e3e?w=800&q=80',
  ARRAY['Folds for storage', 'Hand brakes', 'Padded seat', 'Storage basket'],
  TRUE
),
(
  'Blood Glucose Meter Kit',
  'Diabetic Care',
  'Accurate and easy-to-use blood glucose monitoring system',
  'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
  ARRAY['Large display', 'Fast results', 'Memory storage', 'Lancing device included'],
  FALSE
);

-- Insert sample testimonials
INSERT INTO testimonials (name, role, content, rating) VALUES
(
  'Sarah Johnson',
  'Home Patient',
  'FalconMed Solutions provided exceptional service. The team helped me find the perfect wheelchair that has truly improved my daily life.',
  5
),
(
  'Dr. Michael Chen',
  'Physical Therapist',
  'I recommend FalconMed Solutions to all my patients. Their orthopedic braces are top-quality and their customer service is outstanding.',
  5
),
(
  'Robert Williams',
  'Family Caregiver',
  'The continuous glucose monitor we purchased has been a game-changer for managing my mother''s diabetes. Highly recommend FalconMed!',
  5
);

-- Enable Row Level Security (Optional)
ALTER TABLE hero_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on hero_content" ON hero_content FOR SELECT USING (true);
CREATE POLICY "Allow public read access on products" ON products FOR SELECT USING (true);
CREATE POLICY "Allow public read access on testimonials" ON testimonials FOR SELECT USING (true);
