'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['(908) 428-6253'],
    link: 'tel:9084286253',
    color: 'bg-primary-100 text-primary',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['falconmedsolutions@gmail.com'],
    link: 'mailto:falconmedsolutions@gmail.com',
    color: 'bg-accent-100 text-accent',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['668 Rt-206, Suite-D', 'Hillsborough, NJ'],
    link: 'https://maps.google.com/?q=668+Rt-206+Suite-D+Hillsborough+NJ',
    color: 'bg-primary-100 text-primary',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Monday - Friday: 10 AM - 4 PM', 'Closed on Weekends & Holidays'],
    color: 'bg-accent-100 text-accent',
  },
]

export default function ContactPage() {
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
              Get in Touch
            </h1>
            <p className="text-xl text-primary-200">
              Have questions about our products or services? We&apos;re here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-accent rounded-full"></div>
                <h2 className="font-display text-3xl font-bold text-gray-900">Send Us a Message</h2>
              </div>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault() }}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto rounded-full">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-primary rounded-full"></div>
                <h2 className="font-display text-3xl font-bold text-gray-900">Contact Information</h2>
              </div>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center`}>
                          <info.icon className="h-6 w-6" />
                        </div>
                        <span>{info.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.icon === MapPin ? '_blank' : undefined}
                          rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          {info.details.map((detail, i) => (
                            <div key={i}>{detail}</div>
                          ))}
                        </a>
                      ) : (
                        <div className="text-gray-600">
                          {info.details.map((detail, i) => (
                            <div key={i}>{detail}</div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.8!2d-74.6!3d40.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDMwJzAwLjAiTiA3NMKwMzYnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  )
}
