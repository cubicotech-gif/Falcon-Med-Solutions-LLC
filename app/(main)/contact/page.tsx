'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

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

  const inputClass = 'w-full px-0 py-3 bg-transparent border-0 border-b-2 border-secondary-200 text-secondary-900 placeholder-secondary-300 focus:outline-none focus:border-primary-500 transition-colors text-sm'

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-[var(--ink)]">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="label-sm text-primary-400 mb-4 block">Contact Us</span>
            <h1
              className="font-display text-white tracking-tight leading-[0.95]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              Let&apos;s Start a<br />
              <span className="italic text-primary-300">Conversation</span>
            </h1>
            <p className="mt-6 text-secondary-400 text-lg max-w-lg leading-relaxed">
              Have a question or need a consultation? We&apos;re here to help
              you find the perfect solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info strip */}
      <section className="bg-white border-b border-secondary-200/30">
        <div className="max-w-[1400px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-secondary-200/30">
          {[
            { icon: Phone, label: 'Phone', value: '(908) 428-6253', sub: 'Mon-Fri 9AM-6PM', href: 'tel:+19084286253' },
            { icon: Mail, label: 'Email', value: 'info@falconmedsolutions.com', sub: 'Reply within 24h', href: 'mailto:info@falconmedsolutions.com' },
            { icon: MapPin, label: 'Address', value: '1811 Lincoln Hwy', sub: 'Edison, NJ 08817', href: '#map' },
            { icon: Clock, label: 'Hours', value: 'Mon-Fri: 9AM-6PM', sub: 'Sat: 10AM-4PM', href: undefined },
          ].map((info, i) => {
            const Icon = info.icon
            const Tag = info.href ? 'a' : 'div'
            return (
              <Tag
                key={info.label}
                {...(info.href ? { href: info.href } : {})}
                className="bg-white px-8 py-8 group hover:bg-gray-50 transition-colors"
              >
                <Icon className="w-5 h-5 text-primary-600 mb-3" />
                <p className="label-sm mb-1">{info.label}</p>
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
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <Reveal className="lg:col-span-3">
              <span className="label-sm text-primary-600 mb-3 block">Send a Message</span>
              <h2 className="font-display text-3xl md:text-4xl text-secondary-900 tracking-tight mb-3">
                How Can We Help?
              </h2>
              <div className="hr-accent mb-10" />

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="label-sm mb-2 block">First Name</label>
                    <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className={inputClass} placeholder="John" required />
                  </div>
                  <div>
                    <label className="label-sm mb-2 block">Last Name</label>
                    <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className={inputClass} placeholder="Doe" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="label-sm mb-2 block">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="label-sm mb-2 block">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} placeholder="(555) 000-0000" />
                  </div>
                </div>
                <div>
                  <label className="label-sm mb-2 block">Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange} className={inputClass} required>
                    <option value="">Select a subject</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="product">Product Inquiry</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="label-sm mb-2 block">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} className={`${inputClass} resize-none`} placeholder="Tell us how we can help..." required />
                </div>
                <button type="submit" className="btn-solid group">
                  Send Message
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            </Reveal>

            {/* Map */}
            <Reveal className="lg:col-span-2" delay={0.15}>
              <div className="bg-secondary-100 h-full min-h-[450px] overflow-hidden" id="map">
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
