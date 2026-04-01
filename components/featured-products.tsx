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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="section-tag justify-center mb-3">What We Offer</span>
          <h2 className="font-display text-4xl md:text-5xl text-secondary-900 tracking-tight leading-[1.1] mt-3">
            Our Core <span className="text-accent-600 italic">Services</span>
          </h2>
        </motion.div>

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
                className={`service-card ${s.variant} flex flex-col justify-between min-h-[280px]`}
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
                    s.variant === 'filled-accent'
                      ? 'bg-white/20'
                      : s.variant === 'filled-dark'
                        ? 'bg-white/10'
                        : i % 2 === 0 ? 'bg-primary-50' : 'bg-accent-50'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      isFilled ? 'text-white' : i % 2 === 0 ? 'text-primary-600' : 'text-accent-600'
                    }`} />
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
