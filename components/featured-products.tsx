'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Armchair, Footprints, Activity, Bone } from 'lucide-react'

const services = [
  {
    icon: Armchair,
    title: 'Premium Wheelchairs',
    desc: 'Ergonomic wheelchairs designed for maximum comfort and daily independence.',
    variant: 'default' as const,
  },
  {
    icon: Footprints,
    title: 'Mobility Aids',
    desc: 'Professional-grade walkers, canes, and support systems for confident movement.',
    variant: 'filled-dark' as const,
  },
  {
    icon: Activity,
    title: 'Diabetic Care',
    desc: 'Accurate monitoring equipment and supplies for diabetes management.',
    variant: 'default' as const,
  },
  {
    icon: Bone,
    title: 'Orthopedic Braces',
    desc: 'Medical-grade braces and supports for recovery and pain management.',
    variant: 'filled-accent' as const,
  },
]

export function FeaturedProducts() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon
            const isFilled = s.variant !== 'default'
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`service-card ${s.variant} flex flex-col justify-between ${
                  isFilled ? 'min-h-[280px]' : 'min-h-[260px]'
                }`}
              >
                <div>
                  <h3 className={`font-display text-2xl mb-3 ${isFilled ? 'text-white' : 'text-secondary-900'}`}>
                    {s.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isFilled ? 'text-white/70' : 'text-secondary-500'}`}>
                    {s.desc}
                  </p>
                </div>
                <div className="flex items-end justify-between mt-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isFilled ? 'bg-white/15' : 'bg-primary-50'
                  }`}>
                    <Icon className={`w-6 h-6 ${isFilled ? 'text-white' : 'text-primary-600'}`} />
                  </div>
                  <div className="num-badge">
                    {String(i + 1).padStart(2, '0')}
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
