'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, Phone, Armchair, Footprints, Activity, Bone } from 'lucide-react'
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
    icon: Armchair,
    desc: 'Premium wheelchairs designed for comfort, mobility, and independence.',
    products: [
      { name: 'Standard Wheelchair', desc: 'Durable, lightweight wheelchair with adjustable footrests and armrests for daily use.', features: ['Lightweight aluminum frame', 'Adjustable footrests', 'Foldable design', 'Padded armrests'], imageKey: 'product-wheelchair-standard', defaultImage: 'https://images.unsplash.com/photo-1619204715997-1e8ed26753b0?w=600&q=80' },
      { name: 'Transport Wheelchair', desc: 'Compact transport wheelchair ideal for travel and quick mobility needs.', features: ['Ultra-lightweight', 'Compact fold', 'Swing-away footrests', 'Push handles'], imageKey: 'product-wheelchair-transport', defaultImage: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80' },
    ],
  },
  {
    name: 'Mobility Aids',
    icon: Footprints,
    desc: 'Professional-grade support equipment for confident, safe movement.',
    products: [
      { name: 'Rollator Walker', desc: 'Four-wheel rollator with built-in seat, basket, and ergonomic hand brakes.', features: ['Built-in seat', 'Storage basket', 'Hand brakes', 'Height adjustable'], imageKey: 'product-rollator', defaultImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
      { name: 'Walking Cane', desc: 'Ergonomic walking cane with anti-slip base and comfortable grip handle.', features: ['Ergonomic grip', 'Anti-slip base', 'Adjustable height', 'Lightweight'], imageKey: 'product-cane', defaultImage: 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80' },
    ],
  },
  {
    name: 'Diabetic Care',
    icon: Activity,
    desc: 'Comprehensive diabetes management equipment and monitoring supplies.',
    products: [
      { name: 'Blood Glucose Monitor', desc: 'Accurate, easy-to-use monitoring system with digital display.', features: ['Fast results', 'Large display', 'Memory storage', 'Auto-coding'], imageKey: 'product-glucose', defaultImage: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80' },
      { name: 'Diabetic Supply Kit', desc: 'Complete care kit with testing strips, lancets, and carrying case.', features: ['Complete kit', 'Travel case', 'Test strips', 'Lancet device'], imageKey: 'product-diabetic-kit', defaultImage: 'https://images.unsplash.com/photo-1583912267550-d6c7e3e5f3b2?w=600&q=80' },
    ],
  },
  {
    name: 'Orthopedic Braces',
    icon: Bone,
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
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-secondary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-tag text-primary-300 mb-4">Our Products</span>
            <h1 className="font-display text-white tracking-tight leading-[1.05] mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Medical Equipment<br />
              <span className="italic text-primary-300">Catalog</span>
            </h1>
            <p className="mt-6 text-secondary-400 text-lg max-w-lg leading-relaxed">
              Browse our comprehensive selection of FDA-certified equipment,
              backed by expert guidance and quality assurance.
            </p>
            <div className="breadcrumb-pill mt-6">
              <Link href="/" className="text-secondary-500 hover:text-primary-600 transition-colors">Home</Link>
              <ArrowRight className="w-3 h-3 text-secondary-300" />
              <span className="text-secondary-800 font-medium">Products</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, catIdx) => {
        const CatIcon = cat.icon
        return (
          <section key={cat.name} className={`py-20 lg:py-28 ${catIdx % 2 === 1 ? 'bg-tint' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-6">
              {/* Category header */}
              <Reveal className="mb-14">
                <div className="flex items-center gap-5">
                  <div className="icon-badge">
                    <CatIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl text-secondary-900 tracking-tight">
                      {cat.name}
                    </h2>
                    <p className="text-secondary-500 mt-1 max-w-md">{cat.desc}</p>
                  </div>
                </div>
              </Reveal>

              {/* Products grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {cat.products.map((product, pIdx) => (
                  <Reveal key={product.name} delay={pIdx * 0.1}>
                    <div className="showcase-card overflow-hidden">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={images[product.imageKey] || product.defaultImage}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8">
                        <h3 className="font-display text-2xl text-secondary-900 tracking-tight">
                          {product.name}
                        </h3>
                        <p className="text-secondary-500 leading-relaxed mt-2">
                          {product.desc}
                        </p>
                        <ul className="mt-5 grid grid-cols-2 gap-2.5">
                          {product.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-sm text-secondary-600">
                              <div className="w-4 h-4 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                                <Check className="w-2.5 h-2.5 text-white" />
                              </div>
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/contact"
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group"
                        >
                          Request Quote
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Bottom CTA */}
      <section className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-white tracking-tight leading-[1.1]">
                  Can&apos;t Find What You Need?
                </h2>
                <p className="mt-3 text-primary-100/70 text-lg max-w-lg">
                  We carry a wide range of equipment. Contact us for a personalized recommendation.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5 shrink-0">
                <a href="tel:+19084286253" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white rounded-full text-primary-700 text-sm font-bold hover:bg-gray-50 transition-colors">
                  <Phone className="w-4 h-4" />
                  (908) 428-6253
                </a>
                <Link href="/contact" className="pill-btn bg-white/10 border border-white/30 hover:bg-white/20">
                  Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
