'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Stethoscope, Truck, HeartPulse } from 'lucide-react'
import { useSiteImage } from '@/hooks/use-site-image'

const badges = [
  { icon: Shield, label: 'FDA Certified' },
  { icon: Stethoscope, label: 'Expert Guidance' },
  { icon: Truck, label: 'Fast Delivery' },
  { icon: HeartPulse, label: 'Patient First' },
]

export function Hero() {
  const heroImage = useSiteImage('hero_main_image', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80')

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900"></div>
      <div className="absolute inset-0 bg-stripe-pattern opacity-30"></div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary-400/10 rounded-full filter blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Premium Medical Equipment Supplier
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
            >
              Your Trusted Partner in
              <span className="text-accent-400"> Medical Care</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-primary-200 leading-relaxed max-w-lg"
            >
              Premium wheelchairs, mobility aids, diabetic care solutions, and orthopedic supports — delivered with care across New Jersey.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent-700 rounded-full group">
                <Link href="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full">
                <Link href="/products">
                  Browse Products
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-white/10"
            >
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-primary-300">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-primary-300">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-primary-300">Quality Assured</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[580px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src={heroImage}
                alt="Medical professional providing care"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>

              {/* Bottom card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Certified Quality</div>
                    <div className="text-sm text-gray-600">All products meet FDA standards</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-5 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Same-Day Delivery</div>
                  <div className="text-xs text-gray-600">Available in NJ</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom badges bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex items-center gap-3 text-white/80"
              >
                <badge.icon className="h-5 w-5 text-accent-400" />
                <span className="text-sm font-medium">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
