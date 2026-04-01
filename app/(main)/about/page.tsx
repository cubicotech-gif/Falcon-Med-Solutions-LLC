'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check, Users, Award, HeartPulse, Truck } from 'lucide-react'
import { useSiteImage } from '@/hooks/use-site-image'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  )
}

const milestones = [
  { year: '2009', title: 'Founded', text: 'Started as a small medical supply store in Edison, NJ.' },
  { year: '2014', title: 'Expansion', text: 'Grew our product line to 500+ items across 8 categories.' },
  { year: '2019', title: 'Recognition', text: 'Named top medical equipment supplier in the Tri-State area.' },
  { year: '2024', title: 'Today', text: 'Serving 500+ customers with 1,000+ products delivered annually.' },
]

const values = [
  { icon: HeartPulse, title: 'Patient First', text: 'Every decision starts with the patient\'s comfort and wellbeing.' },
  { icon: Award, title: 'Quality Assured', text: 'Rigorous FDA compliance and testing on every single product.' },
  { icon: Users, title: 'Expert Team', text: 'Medical specialists providing personalized support and fitting.' },
  { icon: Truck, title: 'Fast Delivery', text: 'Reliable delivery to your door with careful handling guaranteed.' },
]

export default function AboutPage() {
  const storyImg = useSiteImage(
    'about-story',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80'
  )
  const heroImg = useSiteImage(
    'about-hero',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1400&q=80'
  )

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image src={heroImg} alt="Medical professionals" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-secondary-900/80" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-tag text-primary-300 mb-4">About Us</span>
            <h1 className="font-display text-white tracking-tight leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              A Legacy of<br />
              <span className="italic text-primary-300">Compassionate Care</span>
            </h1>
            <div className="breadcrumb-pill mt-6">
              <Link href="/" className="text-secondary-500 hover:text-primary-600 transition-colors">Home</Link>
              <ArrowRight className="w-3 h-3 text-secondary-300" />
              <span className="text-secondary-800 font-medium">About</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro + Image */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Image with number overlay */}
            <Reveal>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
                  <Image src={storyImg} alt="Our team" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-primary-600 rounded-2xl px-8 py-6 shadow-xl">
                  <p className="font-display text-5xl md:text-6xl text-white leading-none">15+</p>
                  <p className="text-xs text-primary-200 uppercase tracking-wider mt-1">Years of Service</p>
                </div>
              </div>
            </Reveal>

            {/* Text */}
            <Reveal delay={0.15}>
              <span className="section-tag mb-4">Our Story</span>
              <h2 className="font-display text-4xl md:text-5xl text-secondary-900 tracking-tight leading-[1.1] mt-3">
                From a Small Supplier to a{' '}
                <span className="text-primary-600 italic">Trusted Name</span>
              </h2>
              <p className="mt-6 text-secondary-500 leading-relaxed drop-cap">
                Founded with a simple mission — to make premium medical equipment
                accessible to everyone who needs it. FalconMed Solutions has grown
                from a small local supplier to a trusted name in healthcare across
                the Tri-State area.
              </p>
              <p className="text-secondary-400 leading-relaxed mt-4">
                We work directly with patients, caregivers, and healthcare
                facilities to understand unique challenges and provide tailored
                solutions that genuinely improve quality of life.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {['FDA-certified equipment', 'Personalized fitting', 'Insurance & billing support', 'Ongoing maintenance'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium text-secondary-700">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-secondary-900">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="section-tag text-primary-300 mb-4">Our Journey</span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight leading-[1.1] mt-3">
              Key <span className="text-primary-300 italic">Milestones</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.1}>
                <div className="service-card filled-dark min-h-[220px] flex flex-col justify-between">
                  <div>
                    <span className="font-display text-5xl text-white/10 block mb-3">{m.year}</span>
                    <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{m.text}</p>
                  </div>
                  <div className="num-badge mt-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-tint">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-tag justify-center mb-3">Our Values</span>
            <h2 className="font-display text-4xl md:text-5xl text-secondary-900 tracking-tight leading-[1.1] mt-3">
              What Drives Everything{' '}
              <span className="text-primary-600 italic">We Do</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="showcase-card p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <h3 className="font-display text-xl text-secondary-900 mb-2">{v.title}</h3>
                    <p className="text-sm text-secondary-500 leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-primary-600">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { num: '15+', label: 'Years' },
            { num: '500+', label: 'Customers' },
            { num: '1,000+', label: 'Products' },
            { num: '100%', label: 'Quality' },
          ].map((s) => (
            <div key={s.label} className="px-8 py-12 text-center border-r border-white/10 last:border-0">
              <p className="font-display text-4xl md:text-5xl text-white">{s.num}</p>
              <p className="text-xs text-primary-200/60 uppercase tracking-wider mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-tag justify-center mb-3">Get Started</span>
            <h2 className="font-display text-4xl md:text-5xl text-secondary-900 tracking-tight mt-3">
              Let&apos;s Work <span className="text-primary-600 italic">Together</span>
            </h2>
            <p className="mt-4 text-secondary-500 text-lg max-w-lg mx-auto">
              Ready to experience the FalconMed difference?
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Link href="/contact" className="pill-btn">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-secondary-200 text-sm font-semibold text-secondary-700 hover:border-primary-600 hover:text-primary-600 transition-all">
                View Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
