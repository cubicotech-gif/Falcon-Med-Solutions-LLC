'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'
import { useSiteImage } from '@/hooks/use-site-image'

export function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const mainImg = useSiteImage(
    'about-main',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80'
  )
  const secondaryImg = useSiteImage(
    'about-secondary',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80'
  )

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-tint">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag mb-4">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl text-primary-900 tracking-tight leading-[1.1] mt-3">
              A Trusted Partner in{' '}
              <span className="text-accent-600 italic">Medical Equipment</span>
            </h2>
            <div className="line-accent mt-5" />

            <p className="mt-6 text-secondary-500 leading-relaxed drop-cap">
              We are a dedicated team of medical equipment specialists with over 15 years
              of experience in providing quality, FDA-certified products. Our mission is to
              help patients, families, and healthcare facilities find comfort and independence.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                'Premium Wheelchair Solutions',
                'Expert Consultation & Fitting',
                'FDA-Certified Equipment',
                'Insurance & Billing Support',
              ].map((item, i) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                    i % 2 === 0 ? 'bg-accent-500' : 'bg-primary-500'
                  }`}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-secondary-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Overlapping images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl bg-primary-100">
              {mainImg && <Image src={mainImg} alt="Medical equipment specialist" fill className="object-cover" />}
            </div>

            {/* Overlapping smaller image */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 w-44 h-52 lg:w-52 lg:h-60 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-primary-100">
              {secondaryImg && <Image src={secondaryImg} alt="Patient care" fill className="object-cover" />}
            </div>

            {/* Experience badge */}
            <div className="absolute -top-4 -left-4 bg-accent-600 text-white rounded-2xl px-5 py-4 shadow-lg">
              <p className="font-display text-3xl font-bold leading-none">15+</p>
              <p className="text-[10px] uppercase tracking-wider mt-1 text-accent-100">Years</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
