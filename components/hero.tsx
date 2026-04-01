'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useSiteImage } from '@/hooks/use-site-image'

export function Hero() {
  const heroImg = useSiteImage(
    'hero-main',
    'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&q=80'
  )

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full bleed hero image */}
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Medical care"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/90 via-[var(--ink)]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-44 pb-32 min-h-screen flex flex-col justify-end">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="label-sm text-primary-300 mb-6 block">
              Premium Medical Equipment Supplier
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-white leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
          >
            Your Trusted Partner
            <br />
            in <span className="italic text-primary-300">Patient Care</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 text-lg text-white/60 max-w-xl leading-relaxed"
          >
            Delivering FDA-certified medical equipment with expert consultation,
            personalized fitting, and dedicated aftercare — for over 15 years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Link href="/contact" className="btn-solid">
              Book Free Consultation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="text-sm font-semibold uppercase tracking-[0.12em] text-white/70 hover:text-white border-b border-white/30 hover:border-white pb-1 transition-all"
            >
              Explore Products
            </Link>
          </motion.div>
        </div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded overflow-hidden"
        >
          {[
            { num: '15+', text: 'Years Experience' },
            { num: '500+', text: 'Customers Served' },
            { num: '1000+', text: 'Products Delivered' },
            { num: '100%', text: 'Quality Assured' },
          ].map((s, i) => (
            <div key={i} className="bg-[var(--ink)]/60 backdrop-blur-sm px-6 py-5">
              <p className="font-display text-3xl md:text-4xl text-white tracking-tight">{s.num}</p>
              <p className="text-xs text-white/40 mt-1 uppercase tracking-wider">{s.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
