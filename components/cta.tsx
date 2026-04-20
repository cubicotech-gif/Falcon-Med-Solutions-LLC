'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Clock, Send } from 'lucide-react'
import { useSiteImage } from '@/hooks/use-site-image'

export function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const bgImg = useSiteImage(
    'cta-background',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80'
  )

  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  }
  const handleSubmit = (e: React.FormEvent) => e.preventDefault()

  return (
    <section ref={ref} className="relative">
      <div className="grid lg:grid-cols-2">
        {/* Left - Image + Hours */}
        <div className="relative min-h-[400px] lg:min-h-0 bg-primary-800">
          {bgImg && <Image src={bgImg} alt="Healthcare" fill className="object-cover" />}
          <div className="absolute inset-0 bg-primary-900/50" />

          {/* Hours overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-accent-600" />
              </div>
              <div className="flex-1 space-y-0">
                <div className="hours-row">
                  <span className="text-secondary-600 font-medium">Mon - Fri</span>
                  <span className="font-bold text-primary-800">10:00 - 16:00</span>
                </div>
                <div className="hours-row">
                  <span className="text-secondary-600 font-medium">Weekends</span>
                  <span className="font-bold text-accent-600">Closed</span>
                </div>
                <div className="hours-row">
                  <span className="text-secondary-600 font-medium">Holidays</span>
                  <span className="font-bold text-accent-600">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Appointment form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-12 lg:p-14"
        >
          <span className="section-tag mb-3">Get in Touch</span>
          <h2 className="font-display text-3xl md:text-4xl text-primary-900 tracking-tight mt-2">
            Book a <span className="text-accent-600 italic">Consultation</span>
          </h2>
          <div className="line-accent mt-4" />

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="form-input-mednix" required />
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="form-input-mednix" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="form-input-mednix" />
              <select name="subject" value={form.subject} onChange={handleChange} className="form-input-mednix" required>
                <option value="">Select Subject</option>
                <option value="wheelchair">Wheelchairs</option>
                <option value="mobility">Mobility Aids</option>
                <option value="diabetic">Diabetic Care</option>
                <option value="orthopedic">Orthopedic Braces</option>
                <option value="other">Other</option>
              </select>
            </div>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Type Your Message" className="form-input-mednix resize-none" required />
            <button type="submit" className="pill-btn-accent">
              Book Consultation
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
