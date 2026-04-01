'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useSiteImage } from '@/hooks/use-site-image'

export function Hero() {
  const heroImg = useSiteImage(
    'hero-main',
    'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1400&q=80'
  )

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src={heroImg} alt="Medical care" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/85 via-secondary-900/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="px-2.5 py-0.5 bg-primary-500 text-white text-xs font-bold rounded-full uppercase">FalconMed</span>
              <span className="text-white/90 text-sm font-medium uppercase tracking-wider">Premium Medical Equipment</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-white leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Your Trusted Partner in{' '}
            <span className="text-primary-300 italic">Quality Healthcare</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-white/70 text-lg max-w-lg leading-relaxed"
          >
            Personalized medical equipment solutions to improve your quality of life.
            Get expert consultation for mobility, diabetic care, and orthopedic needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10"
          >
            <Link href="/contact" className="pill-btn-arrow">
              <span className="pill-text">Schedule Consultation</span>
              <span className="pill-arrow"><ArrowRight className="w-4 h-4" /></span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col gap-2">
        <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7-7 7 7" /></svg>
        </button>
        <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
        </button>
      </div>
    </section>
  )
}
