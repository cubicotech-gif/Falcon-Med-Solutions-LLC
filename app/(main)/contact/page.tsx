'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay }} className={className}>
      {children}
    </motion.div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: '',
  })

  const handleSubmit = (e: React.FormEvent) => e.preventDefault()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-secondary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-tag text-primary-300 mb-4">Contact Us</span>
            <h1 className="font-display text-white tracking-tight leading-[1.05] mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Let&apos;s Start a<br />
              <span className="italic text-primary-300">Conversation</span>
            </h1>
            <p className="mt-6 text-secondary-400 text-lg max-w-lg leading-relaxed">
              Have a question or need a consultation? We&apos;re here to help
              you find the perfect solution.
            </p>
            <div className="breadcrumb-pill mt-6">
              <Link href="/" className="text-secondary-500 hover:text-primary-600 transition-colors">Home</Link>
              <ArrowRight className="w-3 h-3 text-secondary-300" />
              <span className="text-secondary-800 font-medium">Contact</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 -mt-8 relative z-10">
          {[
            { icon: Phone, label: 'Phone', value: '(908) 428-6253', sub: 'Mon-Fri 9AM-6PM', href: 'tel:+19084286253' },
            { icon: Mail, label: 'Email', value: 'info@falconmedsolutions.com', sub: 'Reply within 24h', href: 'mailto:info@falconmedsolutions.com' },
            { icon: MapPin, label: 'Address', value: '1811 Lincoln Hwy', sub: 'Edison, NJ 08817', href: '#map' },
            { icon: Clock, label: 'Hours', value: 'Mon-Fri: 9AM-6PM', sub: 'Sat: 10AM-4PM', href: undefined },
          ].map((info) => {
            const Icon = info.icon
            const Tag = info.href ? 'a' : 'div'
            return (
              <Tag
                key={info.label}
                {...(info.href ? { href: info.href } : {})}
                className="showcase-card p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-1">{info.label}</p>
                <p className="text-sm font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {info.value}
                </p>
                <p className="text-xs text-secondary-400 mt-0.5">{info.sub}</p>
              </Tag>
            )
          })}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 lg:py-28 bg-tint">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <Reveal className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                <span className="section-tag mb-3">Send a Message</span>
                <h2 className="font-display text-3xl md:text-4xl text-secondary-900 tracking-tight mt-2">
                  How Can We <span className="text-primary-600 italic">Help?</span>
                </h2>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" className="form-input-mednix" required />
                    <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" className="form-input-mednix" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="form-input-mednix" required />
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="form-input-mednix" />
                  </div>
                  <select name="subject" value={form.subject} onChange={handleChange} className="form-input-mednix" required>
                    <option value="">Select a Subject</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="product">Product Inquiry</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us how we can help..." className="form-input-mednix resize-none" required />
                  <button type="submit" className="pill-btn">
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal className="lg:col-span-2" delay={0.15}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-full min-h-[450px]" id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.123456789!2d-74.3456!3d40.5234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1811+Lincoln+Hwy+Edison+NJ+08817!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '100%' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FalconMed Solutions Location"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
