'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { useSiteImage } from '@/hooks/use-site-image'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
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
  { title: 'Patient First', text: 'Every decision starts with the patient\'s comfort and wellbeing.' },
  { title: 'Quality Assured', text: 'Rigorous FDA compliance and testing on every single product.' },
  { title: 'Expert Team', text: 'Medical specialists providing personalized support and fitting.' },
  { title: 'Community Driven', text: 'A trusted healthcare partner to families across the region.' },
]

export default function AboutPage() {
  const storyImg = useSiteImage(
    'about-story',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80'
  )

  return (
    <>
      {/* Hero - full-width image with overlay */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1400&q=80"
          alt="Medical professionals"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--ink)]/80" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-[1400px] mx-auto px-6 lg:px-10 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="label-sm text-primary-400 mb-4 block">About Us</span>
            <h1
              className="font-display text-white tracking-tight leading-[0.95]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              A Legacy of<br />
              <span className="italic text-primary-300">Compassionate Care</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro + Image */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image with number overlay */}
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary-100">
                  <Image src={storyImg} alt="Our team" fill className="object-cover" />
                </div>
                {/* Big number overlay */}
                <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-primary-600 px-8 py-6">
                  <p className="font-display text-5xl md:text-6xl text-white leading-none">15+</p>
                  <p className="text-xs text-primary-200 uppercase tracking-wider mt-1">Years of Service</p>
                </div>
              </div>
            </Reveal>

            {/* Text */}
            <Reveal delay={0.15}>
              <span className="label-sm text-primary-600 mb-4 block">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-900 tracking-tight leading-[1.05]">
                From a Small Supplier
                <br />to a Trusted Name
              </h2>
              <div className="hr-accent mt-6 mb-6" />
              <p className="text-secondary-500 leading-relaxed text-lg">
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

              <ul className="mt-8 space-y-3">
                {['FDA-certified medical equipment', 'Personalized fitting & consultation', 'Insurance and billing assistance', 'Ongoing support & maintenance'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-secondary-600">
                    <Check className="w-4 h-4 text-primary-600 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-[var(--ink)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <span className="label-sm text-primary-400 mb-4 block">Our Journey</span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight leading-[1]">
              Key Milestones
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-4 gap-px bg-white/[0.06] overflow-hidden">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.1}>
                <div className="bg-[var(--ink)] p-8 lg:p-10 h-full">
                  <span className="font-display text-5xl text-white/10 block mb-4">{m.year}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-sm text-secondary-500 leading-relaxed">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal className="text-center max-w-xl mx-auto mb-16">
            <span className="label-sm text-primary-600 mb-4 block">Our Values</span>
            <h2 className="font-display text-4xl md:text-5xl text-secondary-900 tracking-tight leading-[1.05]">
              What Drives Everything We Do
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card-accent-left p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-5">
                    <span className="num-badge shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="text-lg font-bold text-secondary-900 mb-1">{v.title}</h3>
                      <p className="text-sm text-secondary-500 leading-relaxed">{v.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-primary-600">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-px">
          {[
            { num: '15+', label: 'Years' },
            { num: '500+', label: 'Customers' },
            { num: '1,000+', label: 'Products' },
            { num: '100%', label: 'Quality' },
          ].map((s) => (
            <div key={s.label} className="bg-primary-600 px-8 py-12 text-center">
              <p className="font-display text-4xl md:text-5xl text-white">{s.num}</p>
              <p className="text-xs text-primary-200/60 uppercase tracking-wider mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-secondary-900 tracking-tight">
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 text-secondary-400 text-lg max-w-lg mx-auto">
              Ready to experience the FalconMed difference?
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Link href="/contact" className="btn-solid">
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/products" className="btn-ring text-secondary-700 text-[11px] tracking-[0.15em] py-3 px-6">
                View Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
