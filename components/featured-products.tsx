'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { useSiteImages } from '@/hooks/use-site-image'

const defaultProducts = [
  {
    name: 'Premium Wheelchairs',
    category: 'Mobility',
    description: 'Ergonomically designed for maximum comfort and independence in daily activities.',
    features: ['Lightweight Frame', 'Adjustable Support', 'Easy Fold'],
    imageKey: 'featured-wheelchairs',
    defaultImage: 'https://images.unsplash.com/photo-1619204715997-1e8ed26753b0?w=600&q=80',
    accent: 'primary',
  },
  {
    name: 'Mobility Aids',
    category: 'Support',
    description: 'Professional-grade walkers, canes, and support systems for confident movement.',
    features: ['Anti-Slip Grip', 'Height Adjustable', 'Portable'],
    imageKey: 'featured-mobility',
    defaultImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    accent: 'accent',
  },
  {
    name: 'Diabetic Care',
    category: 'Health Monitoring',
    description: 'Accurate monitoring equipment and supplies for comprehensive diabetes management.',
    features: ['FDA Approved', 'Digital Display', 'Auto-Tracking'],
    imageKey: 'featured-diabetic',
    defaultImage: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80',
    accent: 'primary',
  },
  {
    name: 'Orthopedic Braces',
    category: 'Recovery',
    description: 'Medical-grade braces and supports for effective recovery and pain management.',
    features: ['Custom Fit', 'Breathable', 'Medical Grade'],
    imageKey: 'featured-orthopedic',
    defaultImage: 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80',
    accent: 'accent',
  },
]

export function FeaturedProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const images = useSiteImages(
    defaultProducts.map((p) => ({ key: p.imageKey, defaultUrl: p.defaultImage }))
  )

  return (
    <section ref={ref} className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
      <div className="orb orb-blue w-[400px] h-[400px] top-0 right-0 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="pill-badge mb-4">Our Products</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-secondary-900">
              Equipment You Can<br />
              <span className="text-gradient-blue">Trust & Rely On</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Bento Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {defaultProducts.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bento-card group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images[product.imageKey] || product.defaultImage}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                    product.accent === 'primary'
                      ? 'bg-primary-500 text-white'
                      : 'bg-accent-500 text-white'
                  }`}>
                    {product.category}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-secondary-800" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-secondary-500 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1 text-xs font-medium text-secondary-500 bg-gray-50 px-2.5 py-1 rounded-full"
                    >
                      <Check className="w-3 h-3 text-primary-500" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
