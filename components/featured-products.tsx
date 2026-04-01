'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { useSiteImages } from '@/hooks/use-site-image'

const defaultProducts = [
  {
    id: 1,
    name: 'Premium Wheelchairs',
    category: 'Mobility',
    description: 'Lightweight, durable wheelchairs designed for maximum comfort and independence.',
    imageSlot: 'featured_wheelchairs',
    defaultImage: 'https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030?w=600&q=80',
    features: ['Lightweight aluminum frame', 'Adjustable footrests', 'Foldable design'],
  },
  {
    id: 2,
    name: 'Continuous Glucose Monitors',
    category: 'Diabetic Care',
    description: 'Real-time glucose monitoring with smartphone connectivity for better diabetes management.',
    imageSlot: 'featured_cgm',
    defaultImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    features: ['Real-time monitoring', 'Smartphone app', '14-day sensor life'],
  },
  {
    id: 3,
    name: 'Orthopedic Braces',
    category: 'Support',
    description: 'Medical-grade braces providing stability, pain relief, and enhanced recovery.',
    imageSlot: 'featured_braces',
    defaultImage: 'https://images.unsplash.com/photo-1620331925087-4a13be250c5d?w=600&q=80',
    features: ['Adjustable compression', 'Breathable material', 'Non-slip design'],
  },
  {
    id: 4,
    name: 'Walkers & Rollators',
    category: 'Mobility',
    description: 'Sturdy walking support with ergonomic designs for seniors and recovery patients.',
    imageSlot: 'featured_walkers',
    defaultImage: 'https://images.unsplash.com/photo-1610349907345-19bf89ce8e3e?w=600&q=80',
    features: ['Hand brakes', 'Padded seat', 'Storage basket'],
  },
]

export function FeaturedProducts() {
  const images = useSiteImages(
    defaultProducts.map((p) => ({ key: p.imageSlot, defaultUrl: p.defaultImage }))
  )

  const products = defaultProducts.map((p) => ({
    ...p,
    image: images[p.imageSlot] || p.defaultImage,
  }))

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Medical Equipment You Can Trust
          </h2>
          <p className="text-xl text-gray-600">
            Explore our comprehensive range of certified medical supplies and equipment
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden border-0 shadow-md bg-white">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <ul className="space-y-1.5">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full group/btn text-primary hover:bg-primary-50">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Button asChild size="lg" className="rounded-full">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
