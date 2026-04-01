'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
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
    title: 'Medical-Grade Quality',
    description: 'Every product meets rigorous FDA standards and healthcare regulations for patient safety.',
    color: 'primary',
    stat: '100%',
    statLabel: 'Certified',
  },
  {
    icon: HeartHandshake,
    title: 'Expert Consultation',
    description: 'Our medical specialists provide personalized guidance for every patient\'s unique needs.',
    color: 'accent',
    stat: '1:1',
    statLabel: 'Personal Care',
  },
  {
    icon: Truck,
    title: 'Rapid Delivery',
    description: 'Same-day and next-day delivery options to ensure patients get care when they need it.',
    color: 'primary',
    stat: '24h',
    statLabel: 'Avg. Delivery',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty Protection',
    description: 'Comprehensive warranty coverage and hassle-free replacements on all equipment.',
    color: 'accent',
    stat: '2yr',
    statLabel: 'Full Coverage',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Round-the-clock customer support from knowledgeable healthcare professionals.',
    color: 'primary',
    stat: '24/7',
    statLabel: 'Available',
  },
  {
    icon: Zap,
    title: 'Quick Setup',
    description: 'Professional installation and training to get patients comfortable and mobile faster.',
    color: 'accent',
    stat: '<1h',
    statLabel: 'Setup Time',
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-secondary-900" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute -top-60 -left-60 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-primary-300 border border-white/10 mb-6"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl tracking-tight text-white"
          >
            Committed to Your{' '}
            <span className="text-primary-400">Health</span> &{' '}
            <span className="text-accent-400">Comfort</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-5 text-secondary-300 text-lg"
          >
            We go beyond supplying equipment — we deliver peace of mind.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group relative rounded-2xl bg-white/[0.04] border border-white/[0.06] p-7 hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      feature.color === 'primary'
                        ? 'bg-primary-500/15 text-primary-400'
                        : 'bg-accent-500/15 text-accent-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className={`text-2xl font-bold ${
                      feature.color === 'primary' ? 'text-primary-400' : 'text-accent-400'
                    }`}>
                      {feature.stat}
                    </span>
                    <p className="text-xs text-secondary-500">{feature.statLabel}</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-secondary-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
