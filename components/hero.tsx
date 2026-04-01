'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield, Clock, Award, Star } from 'lucide-react'
import { useSiteImage } from '@/hooks/use-site-image'

export function Hero() {
  const heroImage = useSiteImage(
    'hero-main',
    'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=900&q=80'
  )

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      {/* Background elements */}
      <div className="orb orb-blue w-[500px] h-[500px] -top-40 -right-40 opacity-60" />
      <div className="orb orb-red w-[300px] h-[300px] bottom-20 -left-20 opacity-40" />
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="pill-badge mb-8">
                <span className="pulse-dot" />
                Premium Medical Equipment
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl xl:text-7xl tracking-tight text-secondary-900 leading-[1.05]"
            >
              Elevating{' '}
              <span className="text-gradient-blue">Patient Care</span>{' '}
              with Precision
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg text-secondary-500 max-w-lg leading-relaxed"
            >
              Trusted by healthcare professionals across the nation. We deliver
              medical-grade equipment with expert guidance, ensuring comfort and
              quality for every patient.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-500/20"
              >
                Free Consultation
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white text-secondary-700 font-semibold rounded-full border border-gray-200 hover:border-primary-200 hover:text-primary-600 hover:shadow-lg transition-all"
              >
                Browse Products
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-14 flex items-center gap-8"
            >
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center"
                  >
                    <Star className="w-4 h-4 text-primary-600" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-secondary-500 mt-0.5">
                  Trusted by <span className="font-semibold text-secondary-700">500+</span> healthcare providers
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-primary-900/10">
              <Image
                src={heroImage}
                alt="Medical equipment"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating card - top right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary-800">FDA Certified</p>
                  <p className="text-xs text-secondary-400">Medical Grade</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card - bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent-500 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary-800">15+ Years</p>
                  <p className="text-xs text-secondary-400">Industry Experience</p>
                </div>
              </div>
            </motion.div>

            {/* Award badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: 'spring' }}
              className="absolute top-1/2 -left-8 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center"
            >
              <Award className="w-8 h-8 text-primary-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="overflow-hidden py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-12 mx-6">
                {['FDA Certified Equipment', 'Expert Medical Guidance', 'Same-Day Delivery Available', 'Patient-First Approach', '24/7 Support Available', 'Quality Guaranteed'].map((text, i) => (
                  <span key={i} className="flex items-center gap-2 text-sm text-secondary-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
