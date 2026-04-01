'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Shield,
  HeartHandshake,
  Truck,
  ShieldCheck,
  Headphones,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    num: '01',
    title: 'Medical-Grade Quality',
    description: 'Every product meets rigorous FDA standards and healthcare regulations.',
  },
  {
    icon: HeartHandshake,
    num: '02',
    title: 'Expert Consultation',
    description: 'Personalized guidance from medical specialists for every unique need.',
  },
  {
    icon: Truck,
    num: '03',
    title: 'Rapid Delivery',
    description: 'Same-day and next-day delivery options across the Tri-State area.',
  },
  {
    icon: ShieldCheck,
    num: '04',
    title: 'Warranty Protection',
    description: 'Comprehensive coverage and hassle-free replacements on all equipment.',
  },
  {
    icon: Headphones,
    num: '05',
    title: 'Dedicated Support',
    description: 'Round-the-clock assistance from knowledgeable healthcare professionals.',
  },
  {
    icon: Zap,
    num: '06',
    title: 'Quick Setup',
    description: 'Professional installation and training to get patients mobile faster.',
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-28 lg:py-36 bg-[var(--ink)] overflow-hidden">
      {/* Subtle grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="label-sm text-primary-400 mb-4 block">Why Choose Us</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1]">
              Built on Trust,<br />
              Driven by <span className="italic text-primary-400">Care</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-secondary-400 text-lg leading-relaxed self-end max-w-md"
          >
            We go beyond supplying equipment. From initial consultation to
            aftercare, we&apos;re your dedicated partner in patient wellbeing.
          </motion.p>
        </div>

        {/* Feature grid - 3x2 with left accent borders */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded overflow-hidden">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="bg-[var(--ink)] p-8 lg:p-10 group hover:bg-white/[0.03] transition-colors duration-500"
              >
                <div className="flex items-start gap-5">
                  <span className="font-display text-3xl text-white/10 leading-none shrink-0">
                    {f.num}
                  </span>
                  <div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-4 group-hover:border-primary-500/40 transition-colors">
                      <Icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                    <p className="text-sm text-secondary-500 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
