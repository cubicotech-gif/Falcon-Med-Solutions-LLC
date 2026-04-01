'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, Heart, Shield, Users } from 'lucide-react'
import { useSiteImage } from '@/hooks/use-site-image'

const values = [
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'Every decision we make prioritizes your health, comfort, and well-being.',
    color: 'bg-accent-100 text-accent',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'All products meet rigorous medical standards and FDA certifications.',
    color: 'bg-primary-100 text-primary',
  },
  {
    icon: Award,
    title: 'Expert Guidance',
    description: 'Our team brings decades of combined experience in medical equipment.',
    color: 'bg-accent-100 text-accent',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'Proudly serving New Jersey families with personalized local service.',
    color: 'bg-primary-100 text-primary',
  },
]

export default function AboutPage() {
  const aboutImage = useSiteImage('about_story_image', 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80')

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-stripe-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              About FalconMed Solutions
            </h1>
            <p className="text-xl text-primary-200">
              Your trusted partner in quality medical equipment and compassionate care since our founding
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-accent rounded-full"></div>
                <h2 className="font-display text-4xl font-bold text-gray-900">Our Story</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  FalconMed Solutions was founded with a clear vision: to deliver premium medical equipment with the speed, precision, and reliability our name represents.
                </p>
                <p>
                  We understand that medical equipment isn&apos;t just about products — it&apos;s about restoring independence, improving daily life, and providing peace of mind to families across New Jersey.
                </p>
                <p>
                  Based in Hillsborough, NJ, our team of dedicated professionals combines deep expertise in medical equipment with genuine compassion for every customer we serve. We take pride in offering personalized consultations to ensure you get exactly what you need.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={aboutImage}
                alt="Medical professionals"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-stripe-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-300">Years of Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-300">Happy Customers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-primary-300">Products Delivered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-primary-300">Quality Guaranteed</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
