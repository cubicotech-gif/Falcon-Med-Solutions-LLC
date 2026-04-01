'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, Phone, ArrowUpRight } from 'lucide-react'
import { useSiteImages } from '@/hooks/use-site-image'

const categories = [
  {
    name: 'Wheelchairs',
    description: 'Premium wheelchairs designed for comfort, mobility, and independence.',
    products: [
      {
        name: 'Standard Wheelchair',
        description: 'Durable, lightweight wheelchair with adjustable footrests and armrests for daily use.',
        features: ['Lightweight aluminum frame', 'Adjustable footrests', 'Foldable design', 'Padded armrests'],
        imageKey: 'product-wheelchair-standard',
        defaultImage: 'https://images.unsplash.com/photo-1619204715997-1e8ed26753b0?w=600&q=80',
      },
      {
        name: 'Transport Wheelchair',
        description: 'Compact transport wheelchair ideal for travel and quick mobility needs.',
        features: ['Ultra-lightweight', 'Compact fold', 'Swing-away footrests', 'Push handles'],
        imageKey: 'product-wheelchair-transport',
        defaultImage: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80',
      },
    ],
  },
  {
    name: 'Mobility Aids',
    description: 'Professional-grade support equipment for confident, safe movement.',
    products: [
      {
        name: 'Rollator Walker',
        description: 'Four-wheel rollator with built-in seat, basket, and ergonomic hand brakes.',
        features: ['Built-in seat', 'Storage basket', 'Hand brakes', 'Height adjustable'],
        imageKey: 'product-rollator',
        defaultImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      },
      {
        name: 'Walking Cane',
        description: 'Ergonomic walking cane with anti-slip base and comfortable grip handle.',
        features: ['Ergonomic grip', 'Anti-slip base', 'Adjustable height', 'Lightweight'],
        imageKey: 'product-cane',
        defaultImage: 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80',
      },
    ],
  },
  {
    name: 'Diabetic Care',
    description: 'Comprehensive diabetes management equipment and monitoring supplies.',
    products: [
      {
        name: 'Blood Glucose Monitor',
        description: 'Accurate, easy-to-use blood glucose monitoring system with digital display.',
        features: ['Fast results', 'Large display', 'Memory storage', 'Auto-coding'],
        imageKey: 'product-glucose',
        defaultImage: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80',
      },
      {
        name: 'Diabetic Supply Kit',
        description: 'Complete diabetic care kit with testing strips, lancets, and carrying case.',
        features: ['Complete kit', 'Travel case', 'Test strips', 'Lancet device'],
        imageKey: 'product-diabetic-kit',
        defaultImage: 'https://images.unsplash.com/photo-1583912267550-d6c7e3e5f3b2?w=600&q=80',
      },
    ],
  },
  {
    name: 'Orthopedic Braces',
    description: 'Medical-grade braces and supports for recovery and pain management.',
    products: [
      {
        name: 'Knee Brace',
        description: 'Adjustable knee brace with hinged support for stability during recovery.',
        features: ['Hinged support', 'Adjustable straps', 'Breathable material', 'Comfortable fit'],
        imageKey: 'product-knee-brace',
        defaultImage: 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80',
      },
      {
        name: 'Back Support Belt',
        description: 'Lumbar support belt designed for comfort and effective back pain relief.',
        features: ['Lumbar support', 'Compression fit', 'Breathable mesh', 'Adjustable'],
        imageKey: 'product-back-support',
        defaultImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
      },
    ],
  },
]

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ProductsPage() {
  const allImageSlots = categories.flatMap((cat) =>
    cat.products.map((p) => ({ key: p.imageKey, defaultUrl: p.defaultImage }))
  )
  const images = useSiteImages(allImageSlots)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900" />
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-primary-300 border border-white/10 mb-6">
              Our Products
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-white">
              Medical <span className="text-primary-400">Equipment</span> Catalog
            </h1>
            <p className="mt-6 text-lg text-secondary-300 max-w-2xl leading-relaxed">
              Browse our comprehensive selection of FDA-certified medical equipment,
              each backed by expert guidance and quality assurance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, catIdx) => (
        <section
          key={category.name}
          className={`py-20 lg:py-28 ${catIdx % 2 === 1 ? 'bg-gray-50/50' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Category Header */}
            <AnimatedSection className="mb-14">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="section-divider" />
                    <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                      Category {String(catIdx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl tracking-tight text-secondary-900">
                    {category.name}
                  </h2>
                  <p className="mt-2 text-secondary-500 max-w-lg">{category.description}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {category.products.map((product, i) => (
                <AnimatedSection key={product.name}>
                  <div className="bento-card group h-full">
                    <div className="grid sm:grid-cols-2 h-full">
                      {/* Image */}
                      <div className="relative aspect-square sm:aspect-auto overflow-hidden">
                        <Image
                          src={images[product.imageKey] || product.defaultImage}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col">
                        <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="mt-2 text-sm text-secondary-500 leading-relaxed flex-grow">
                          {product.description}
                        </p>

                        <ul className="mt-4 space-y-2">
                          {product.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-sm text-secondary-600">
                              <Check className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>

                        <Link
                          href="/contact"
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group/btn"
                        >
                          Request Quote
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800" />
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-400/15 rounded-full blur-[100px]" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-white">
              Can&apos;t Find What You Need?
            </h2>
            <p className="mt-6 text-lg text-primary-100/80 max-w-xl mx-auto">
              We carry a wide range of medical equipment. Contact us for a personalized
              recommendation or to request a specific product.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+19084286253"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-700 font-bold rounded-full hover:bg-gray-50 transition-all hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call (908) 428-6253
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
