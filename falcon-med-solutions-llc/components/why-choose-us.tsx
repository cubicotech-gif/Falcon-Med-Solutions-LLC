'use client'

import { motion } from 'framer-motion'
import { Award, HeartHandshake, Truck, Shield, Phone, Clock } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Medical-Grade Quality',
    description: 'All products meet FDA standards and medical certifications for your safety and peace of mind.',
    color: 'bg-primary-100 text-primary',
  },
  {
    icon: HeartHandshake,
    title: 'Expert Consultation',
    description: 'Our knowledgeable team provides personalized guidance to help you choose the right equipment.',
    color: 'bg-accent-100 text-accent',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day delivery available in New Jersey. We understand urgency in medical needs.',
    color: 'bg-primary-100 text-primary',
  },
  {
    icon: Shield,
    title: 'Warranty Protection',
    description: 'Comprehensive warranty coverage on all equipment for worry-free ownership.',
    color: 'bg-accent-100 text-accent',
  },
  {
    icon: Phone,
    title: 'Dedicated Support',
    description: 'Always here when you need us. Call us during business hours for assistance or questions.',
    color: 'bg-primary-100 text-primary',
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: "Average response time under 2 hours. Your health needs can't wait, and neither do we.",
    color: 'bg-accent-100 text-accent',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent-50/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Committed to Your Health &amp; Comfort
          </h2>
          <p className="text-xl text-gray-600">
            We go beyond providing equipment — we deliver care, support, and peace of mind to every customer
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
