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
  { icon: HeartPulse, title: 'Patient First', text: 'Every decision starts with the patient\'s comfort and wellbeing.', color: 'accent' as const },
  { icon: Award, title: 'Quality Assured', text: 'Rigorous FDA compliance and testing on every single product.', color: 'primary' as const },
  { icon: Users, title: 'Expert Team', text: 'Medical specialists providing personalized support and fitting.', color: 'accent' as const },
  { icon: Truck, title: 'Fast Delivery', text: 'Reliable delivery to your door with careful handling guaranteed.', color: 'primary' as const },
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
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-600 via-primary-600 to-accent-600" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-tag text-primary-300 mb-4">About Us</span>
            <h1 className="font-display text-white tracking-tight leading-[1.05] mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              A Legacy of<br />
              <span className="italic text-accent-400">Compassionate Care</span>
            </h1>
            <div className="breadcrumb-pill mt-6">
              <Link href="/" className="text-secondary-500 hover:text-primary-600 transition-colors">Home</Link>
              <ArrowRight className="w-3 h-3 text-secondary-300" />
              <span className="text-secondary-800 font-semibold">About</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro + Image */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <Reveal>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
                  <Image src={storyImg} alt="Our team" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-accent-600 rounded-2xl px-8 py-6 shadow-xl">
                  <p className="font-display text-5xl md:text-6xl text-white leading-none font-bold">15+</p>
                  <p className="text-xs text-accent-100 uppercase tracking-wider mt-1">Years of Service</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <span className="section-tag mb-4">Our Story</span>
              <h2 className="font-display text-4xl md:text-5xl text-secondary-900 tracking-tight leading-[1.1] mt-3">
                From a Small Supplier to a{' '}
                <span className="text-accent-600 italic">Trusted Name</span>
              </h2>
              <div className="line-accent mt-5" />
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
                {['FDA-certified equipment', 'Personalized fitting', 'Insurance & billing support', 'Ongoing maintenance'].map((item, i) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      i % 2 === 0 ? 'bg-accent-500' : 'bg-primary-500'
                    }`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-secondary-700">{item}</span>
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
              Key <span className="text-accent-400 italic">Milestones</span>
            </h2>
            <div className="w-12 h-1 bg-accent-600 rounded-full mt-5" />
          </Reveal>

          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.1}>
                <div className={`service-card ${i % 2 === 0 ? 'filled-dark' : 'filled-accent'} min-h-[220px] flex flex-col justify-between`}>
                  <div>
                    <span className="font-display text-5xl text-white/10 block mb-3 font-bold">{m.year}</span>
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
            <div className="line-accent mx-auto mt-5" />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              const isRed = v.color === 'accent'
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="showcase-card p-6 text-center">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 ${
                      isRed ? 'bg-accent-50' : 'bg-primary-50'
                    }`}>
                      <Icon className={`w-7 h-7 ${isRed ? 'text-accent-600' : 'text-primary-600'}`} />
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
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { num: '15+', label: 'Years', bg: 'bg-primary-600' },
            { num: '500+', label: 'Customers', bg: 'bg-accent-600' },
            { num: '1,000+', label: 'Products', bg: 'bg-primary-700' },
            { num: '100%', label: 'Quality', bg: 'bg-accent-700' },
          ].map((s) => (
            <div key={s.label} className={`${s.bg} px-8 py-12 text-center`}>
              <p className="font-display text-4xl md:text-5xl text-white font-bold">{s.num}</p>
              <p className="text-xs text-white/60 uppercase tracking-wider mt-2 font-semibold">{s.label}</p>
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
              Let&apos;s Work <span className="text-accent-600 italic">Together</span>
            </h2>
            <div className="line-accent mx-auto mt-5" />
            <p className="mt-4 text-secondary-500 text-lg max-w-lg mx-auto">
              Ready to experience the FalconMed difference?
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Link href="/contact" className="pill-btn-accent">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-secondary-200 text-sm font-bold uppercase tracking-wider text-secondary-700 hover:border-primary-600 hover:text-primary-600 transition-all">
                View Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
