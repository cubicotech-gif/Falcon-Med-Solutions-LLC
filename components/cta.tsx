'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Phone, Users, Award, Package, Star } from 'lucide-react'

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Happy Customers' },
  { icon: Package, value: '1,000+', label: 'Products Delivered' },
  { icon: Star, value: '100%', label: 'Quality Assured' },
]

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800" />
      <div className="absolute inset-0 dot-grid opacity-10" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-400/20 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-white/80 border border-white/10 mb-8"
          >
            Get Started Today
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-white"
          >
            Ready to Improve Your Quality of Life?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-primary-100/80 max-w-xl mx-auto"
          >
            Schedule a free consultation with our medical equipment specialists.
            We&apos;ll help you find the perfect solution for your needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-700 font-bold rounded-full hover:bg-gray-50 transition-all hover:shadow-xl"
            >
              Schedule Free Consultation
              <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <ArrowRight className="w-4 h-4 text-primary-700" />
              </span>
            </Link>
            <a
              href="tel:+19084286253"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call (908) 428-6253
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-white/[0.06] border border-white/[0.08]"
              >
                <Icon className="w-6 h-6 text-primary-300 mx-auto mb-3" />
                <p className="font-display text-3xl md:text-4xl text-white">{stat.value}</p>
                <p className="text-sm text-primary-200/60 mt-1">{stat.label}</p>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
