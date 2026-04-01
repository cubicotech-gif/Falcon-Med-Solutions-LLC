'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Phone } from 'lucide-react'

export function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative bg-primary-600 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
              <circle cx="300" cy="200" r="300" stroke="white" strokeWidth="0.5" />
              <circle cx="300" cy="200" r="200" stroke="white" strokeWidth="0.5" />
              <circle cx="300" cy="200" r="100" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative px-10 py-16 md:px-16 md:py-20 lg:px-24 lg:py-24">
            <div className="max-w-2xl">
              <span className="label-sm text-primary-200 mb-5 block">Get Started</span>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1]">
                Ready to Improve
                <br />
                Quality of <span className="italic">Life?</span>
              </h2>

              <p className="mt-6 text-primary-100/70 text-lg max-w-lg leading-relaxed">
                Schedule a free consultation with our medical equipment specialists.
                We&apos;ll help you find the perfect solution.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary-700 text-sm font-bold uppercase tracking-wide hover:bg-gray-50 transition-colors"
                >
                  Book Consultation
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+19084286253"
                  className="inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (908) 428-6253
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
