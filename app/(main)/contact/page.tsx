'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    detail: '(908) 428-6253',
    sub: 'Mon-Fri 9AM-6PM',
    href: 'tel:+19084286253',
    color: 'primary',
  },
  {
    icon: Mail,
    title: 'Email',
    detail: 'info@falconmedsolutions.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:info@falconmedsolutions.com',
    color: 'accent',
  },
  {
    icon: MapPin,
    title: 'Address',
    detail: '1811 Lincoln Hwy',
    sub: 'Edison, NJ 08817',
    href: '#map',
    color: 'primary',
  },
  {
    icon: Clock,
    title: 'Hours',
    detail: 'Mon - Fri: 9AM - 6PM',
    sub: 'Sat: 10AM - 4PM',
    href: undefined,
    color: 'accent',
  },
]

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900" />
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-primary-300 border border-white/10 mb-6">
              Contact Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-white">
              Get in <span className="text-primary-400">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-secondary-300 max-w-2xl leading-relaxed">
              Have a question or need a consultation? We&apos;re here to help you find
              the perfect medical equipment solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-8 z-10 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              const Wrapper = info.href ? 'a' : 'div'
              const wrapperProps = info.href ? { href: info.href } : {}
              return (
                <AnimatedSection key={info.title} delay={i * 0.08}>
                  <Wrapper
                    {...wrapperProps}
                    className="bento-card p-6 h-full block group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        info.color === 'primary'
                          ? 'bg-primary-50 text-primary-600'
                          : 'bg-accent-50 text-accent-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-secondary-400 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-base font-semibold text-secondary-800 group-hover:text-primary-600 transition-colors">
                      {info.detail}
                    </p>
                    <p className="text-sm text-secondary-400 mt-0.5">{info.sub}</p>
                  </Wrapper>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="bento-card p-8 md:p-10">
                <h2 className="font-display text-3xl md:text-4xl tracking-tight text-secondary-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-secondary-500 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-secondary-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-secondary-800 placeholder-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-secondary-800 placeholder-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-secondary-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-secondary-800 placeholder-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-secondary-800 placeholder-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-secondary-800 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="product">Product Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="support">Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-secondary-800 placeholder-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-500/20"
                  >
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection className="lg:col-span-2" delay={0.2}>
              <div className="bento-card overflow-hidden h-full min-h-[400px]" id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.123456789!2d-74.3456!3d40.5234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1811+Lincoln+Hwy+Edison+NJ+08817!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '100%' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FalconMed Solutions Location"
                  className="rounded-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
