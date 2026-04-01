'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import { useSiteImages } from '@/hooks/use-site-image'

const defaultCategories = [
  {
    id: 'wheelchairs',
    name: 'Wheelchairs',
    description: 'Premium manual and electric wheelchairs for enhanced mobility and comfort',
    products: [
      {
        name: 'Manual Wheelchair - Standard',
        description: 'Lightweight aluminum frame with adjustable footrests and padded armrests',
        imageSlot: 'product_manual_wheelchair',
        defaultImage: 'https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030?w=600&q=80',
        features: ['Foldable design', 'Weight capacity: 250 lbs', 'Adjustable height'],
      },
      {
        name: 'Transport Wheelchair',
        description: 'Compact and portable for easy transportation and storage',
        imageSlot: 'product_transport_wheelchair',
        defaultImage: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&q=80',
        features: ['Ultra-lightweight', 'Easy to fold', 'Comfortable seat'],
      },
    ],
  },
  {
    id: 'mobility-aids',
    name: 'Mobility Aids',
    description: 'Walkers, canes, and crutches to support safe and confident movement',
    products: [
      {
        name: 'Folding Walker with Wheels',
        description: 'Sturdy walker with smooth-rolling wheels and hand brakes',
        imageSlot: 'product_folding_walker',
        defaultImage: 'https://images.unsplash.com/photo-1610349907345-19bf89ce8e3e?w=600&q=80',
        features: ['Padded seat', 'Storage basket', 'Adjustable height'],
      },
      {
        name: 'Aluminum Walking Cane',
        description: 'Lightweight, adjustable cane with ergonomic grip',
        imageSlot: 'product_walking_cane',
        defaultImage: 'https://images.unsplash.com/photo-1584613132429-a50a3b5c0e86?w=600&q=80',
        features: ['Height adjustable', 'Anti-slip tip', 'Ergonomic handle'],
      },
    ],
  },
  {
    id: 'diabetic-care',
    name: 'Diabetic Care',
    description: 'Advanced glucose monitoring systems and diabetic supplies',
    products: [
      {
        name: 'Continuous Glucose Monitor (CGM)',
        description: 'Real-time monitoring with smartphone connectivity',
        imageSlot: 'product_cgm',
        defaultImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
        features: ['14-day sensor', 'Customizable alerts', 'Data tracking app'],
      },
      {
        name: 'Blood Glucose Meter Kit',
        description: 'Accurate testing with fast results and large display',
        imageSlot: 'product_glucose_meter',
        defaultImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
        features: ['Large display', 'Memory storage', 'Lancing device included'],
      },
    ],
  },
  {
    id: 'orthopedic',
    name: 'Orthopedic Braces',
    description: 'Medical-grade supports for knees, back, ankles, and wrists',
    products: [
      {
        name: 'Knee Support Brace',
        description: 'Adjustable compression brace for pain relief and stability',
        imageSlot: 'product_knee_brace',
        defaultImage: 'https://images.unsplash.com/photo-1620331925087-4a13be250c5d?w=600&q=80',
        features: ['Dual stabilizers', 'Breathable material', 'Non-slip design'],
      },
      {
        name: 'Lumbar Back Support',
        description: 'Lower back brace for posture correction and pain relief',
        imageSlot: 'product_lumbar_support',
        defaultImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
        features: ['Adjustable compression', 'Moisture-wicking', 'Fits under clothing'],
      },
    ],
  },
]

// Collect all image slots for batch fetching
const allProductSlots = defaultCategories.flatMap((cat) =>
  cat.products.map((p) => ({ key: p.imageSlot, defaultUrl: p.defaultImage }))
)

export default function ProductsPage() {
  const images = useSiteImages(allProductSlots)

  const categories = defaultCategories.map((cat) => ({
    ...cat,
    products: cat.products.map((p) => ({
      ...p,
      image: images[p.imageSlot] || p.defaultImage,
    })),
  }))

  return (
    <div className="pt-24">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-stripe-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-primary-200 mb-8">
              Comprehensive range of certified medical equipment to support your health and mobility needs
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent-700 rounded-full">
              <a href="tel:9084286253">
                <Phone className="mr-2 h-5 w-5" />
                Call for Expert Guidance
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Products by category */}
      {categories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-accent rounded-full"></div>
                <h2 className="font-display text-4xl font-bold text-gray-900">
                  {category.name}
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl ml-5">
                {category.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {category.products.map((product, productIndex) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: productIndex * 0.1, duration: 0.6 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-md">
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">{product.name}</CardTitle>
                      <CardDescription className="text-base">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-sm text-gray-700 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full mt-6 rounded-full">
                        Request Quote
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-stripe-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-xl mb-8 text-primary-200">
            Our experts are ready to assist you in finding the perfect medical equipment for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-700 rounded-full">
              <a href="tel:9084286253">
                <Phone className="mr-2 h-5 w-5" />
                (908) 428-6253
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full">
              <a href="/contact">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
