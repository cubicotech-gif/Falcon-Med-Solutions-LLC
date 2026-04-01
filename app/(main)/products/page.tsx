'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowUpRight, Phone, ArrowRight } from 'lucide-react'
import { useSiteImages } from '@/hooks/use-site-image'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  )
}

const categories = [
  {
    name: 'Wheelchairs',
    desc: 'Premium wheelchairs designed for comfort, mobility, and independence.',
    products: [
      { name: 'Standard Wheelchair', desc: 'Durable, lightweight wheelchair with adjustable footrests and armrests for daily use.', features: ['Lightweight aluminum frame', 'Adjustable footrests', 'Foldable design', 'Padded armrests'], imageKey: 'product-wheelchair-standard', defaultImage: 'https://images.unsplash.com/photo-1619204715997-1e8ed26753b0?w=600&q=80' },
      { name: 'Transport Wheelchair', desc: 'Compact transport wheelchair ideal for travel and quick mobility needs.', features: ['Ultra-lightweight', 'Compact fold', 'Swing-away footrests', 'Push handles'], imageKey: 'product-wheelchair-transport', defaultImage: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80' },
    ],
  },
  {
    name: 'Mobility Aids',
    desc: 'Professional-grade support equipment for confident, safe movement.',
    products: [
      { name: 'Rollator Walker', desc: 'Four-wheel rollator with built-in seat, basket, and ergonomic hand brakes.', features: ['Built-in seat', 'Storage basket', 'Hand brakes', 'Height adjustable'], imageKey: 'product-rollator', defaultImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
      { name: 'Walking Cane', desc: 'Ergonomic walking cane with anti-slip base and comfortable grip handle.', features: ['Ergonomic grip', 'Anti-slip base', 'Adjustable height', 'Lightweight'], imageKey: 'product-cane', defaultImage: 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80' },
    ],
  },
  {
    name: 'Diabetic Care',
    desc: 'Comprehensive diabetes management equipment and monitoring supplies.',
    products: [
      { name: 'Blood Glucose Monitor', desc: 'Accurate, easy-to-use monitoring system with digital display.', features: ['Fast results', 'Large display', 'Memory storage', 'Auto-coding'], imageKey: 'product-glucose', defaultImage: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80' },
      { name: 'Diabetic Supply Kit', desc: 'Complete care kit with testing strips, lancets, and carrying case.', features: ['Complete kit', 'Travel case', 'Test strips', 'Lancet device'], imageKey: 'product-diabetic-kit', defaultImage: 'https://images.unsplash.com/photo-1583912267550-d6c7e3e5f3b2?w=600&q=80' },
    ],
  },
  {
    name: 'Orthopedic Braces',
    desc: 'Medical-grade braces and supports for recovery and pain management.',
    products: [
      { name: 'Knee Brace', desc: 'Adjustable knee brace with hinged support for stability during recovery.', features: ['Hinged support', 'Adjustable straps', 'Breathable material', 'Comfortable fit'], imageKey: 'product-knee-brace', defaultImage: 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80' },
      { name: 'Back Support Belt', desc: 'Lumbar support belt designed for comfort and effective back pain relief.', features: ['Lumbar support', 'Compression fit', 'Breathable mesh', 'Adjustable'], imageKey: 'product-back-support', defaultImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80' },
    ],
  },
]

export default function ProductsPage() {
  const allSlots = categories.flatMap((c) => c.products.map((p) => ({ key: p.imageKey, defaultUrl: p.defaultImage })))
  const images = useSiteImages(allSlots)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-[var(--ink)]">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="label-sm text-primary-400 mb-4 block">Our Products</span>
            <h1
              className="font-display text-white tracking-tight leading-[0.95]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              Medical Equipment<br />
              <span className="italic text-primary-300">Catalog</span>
            </h1>
            <p className="mt-6 text-secondary-400 text-lg max-w-lg leading-relaxed">
              Browse our comprehensive selection of FDA-certified equipment,
              backed by expert guidance and quality assurance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, catIdx) => (
        <section key={cat.name} className={`py-20 lg:py-28 ${catIdx % 2 === 1 ? 'bg-white' : ''}`}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            {/* Category header */}
            <Reveal className="mb-14">
              <div className="flex items-start gap-6">
                <span className="font-display text-7xl md:text-8xl text-secondary-100 leading-none shrink-0 -mt-2">
                  {String(catIdx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl text-secondary-900 tracking-tight">
                    {cat.name}
                  </h2>
                  <p className="text-secondary-400 mt-1 max-w-md">{cat.desc}</p>
                </div>
              </div>
            </Reveal>

            {/* Products - alternating image left/right */}
            <div className="space-y-12">
              {cat.products.map((product, pIdx) => (
                <Reveal key={product.name} delay={pIdx * 0.1}>
                  <div className={`grid md:grid-cols-2 gap-0 bg-white border border-secondary-200/30 overflow-hidden ${pIdx % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                    {/* Image */}
                    <div className={`relative aspect-[4/3] md:aspect-auto overflow-hidden ${pIdx % 2 === 1 ? 'md:order-2' : ''}`}>
                      <Image
                        src={images[product.imageKey] || product.defaultImage}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Content */}
                    <div className={`p-8 md:p-10 lg:p-12 flex flex-col justify-center ${pIdx % 2 === 1 ? 'md:order-1' : ''}`} style={{ direction: 'ltr' }}>
                      <h3 className="font-display text-2xl md:text-3xl text-secondary-900 tracking-tight">
                        {product.name}
                      </h3>
                      <div className="hr-accent mt-4 mb-4" />
                      <p className="text-secondary-500 leading-relaxed">
                        {product.desc}
                      </p>
                      <ul className="mt-6 grid grid-cols-2 gap-3">
                        {product.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-secondary-600">
                            <Check className="w-3.5 h-3.5 text-primary-600 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-primary-600 hover:text-primary-700 transition-colors self-start group"
                      >
                        Request Quote
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-primary-600">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-[1.05]">
                  Can&apos;t Find What You Need?
                </h2>
                <p className="mt-3 text-primary-100/70 text-lg max-w-lg">
                  We carry a wide range of equipment. Contact us for a personalized recommendation.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5 shrink-0">
                <a href="tel:+19084286253" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary-700 text-sm font-bold uppercase tracking-wide hover:bg-gray-50 transition-colors">
                  <Phone className="w-4 h-4" />
                  (908) 428-6253
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/80 hover:text-white border-b border-white/40 hover:border-white pb-1 transition-all">
                  Free Consultation
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
