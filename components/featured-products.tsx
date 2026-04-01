'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { useSiteImages } from '@/hooks/use-site-image'

const products = [
  {
    name: 'Premium Wheelchairs',
    tag: 'Mobility',
    desc: 'Ergonomically designed for maximum comfort and daily independence.',
    imageKey: 'featured-wheelchairs',
    defaultImage: 'https://images.unsplash.com/photo-1619204715997-1e8ed26753b0?w=700&q=80',
  },
  {
    name: 'Mobility Aids',
    tag: 'Support',
    desc: 'Professional-grade walkers, canes, and support systems.',
    imageKey: 'featured-mobility',
    defaultImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80',
  },
  {
    name: 'Diabetic Care',
    tag: 'Monitoring',
    desc: 'Accurate monitoring equipment for diabetes management.',
    imageKey: 'featured-diabetic',
    defaultImage: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=700&q=80',
  },
  {
    name: 'Orthopedic Braces',
    tag: 'Recovery',
    desc: 'Medical-grade braces for effective pain management.',
    imageKey: 'featured-orthopedic',
    defaultImage: 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=700&q=80',
  },
]

export function FeaturedProducts() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const images = useSiteImages(
    products.map((p) => ({ key: p.imageKey, defaultUrl: p.defaultImage }))
  )

  return (
    <section ref={ref} className="py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <span className="label-sm text-primary-600 mb-3 block">What We Offer</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-secondary-900 tracking-tight leading-[1]">
              Our Product<br />Categories
            </h2>
          </div>
          <Link
            href="/products"
            className="btn-ring text-secondary-700 text-[11px] tracking-[0.15em] py-2.5 px-5 self-start md:self-auto"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </motion.div>

        {/* Horizontal scroll rail */}
        <div className="product-rail">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="w-[80vw] sm:w-[45vw] lg:w-[calc(25%-1.125rem)] group"
            >
              <Link href="/products" className="block">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary-100">
                  <Image
                    src={images[product.imageKey] || product.defaultImage}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Duotone overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/60 via-transparent to-transparent" />

                  {/* Number */}
                  <span className="absolute top-5 left-5 font-display text-6xl text-white/20 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Arrow on hover */}
                  <div className="absolute bottom-5 right-5 w-11 h-11 rounded-full bg-white flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-secondary-900" />
                  </div>
                </div>

                {/* Info */}
                <div className="mt-5">
                  <span className="label-sm text-primary-600">{product.tag}</span>
                  <h3 className="font-display text-2xl text-secondary-900 mt-1 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-secondary-400 mt-2 leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
