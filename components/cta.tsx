'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950"></div>
      <div className="absolute inset-0 bg-stripe-pattern opacity-20"></div>

      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent-300 rounded-full text-sm font-medium mb-8 border border-accent/20">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Accepting New Patients
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Improve Your Quality of Life?
          </h2>
          <p className="text-xl text-primary-200 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation with our medical equipment specialists today. We&apos;re here to help you find the perfect solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-700 text-white shadow-xl rounded-full"
            >
              <Link href="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full"
            >
              <a href="tel:9084286253">
                <Phone className="mr-2 h-5 w-5" />
                Call (908) 428-6253
              </a>
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-12 text-white/90">
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm text-primary-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-primary-300">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm text-primary-300">Products Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-primary-300">Quality Guaranteed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
