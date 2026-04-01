'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Shield, Award, Users, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { useSiteImage } from '@/hooks/use-site-image'

const values = [
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'Every decision we make starts and ends with the patient\'s wellbeing and comfort.',
    color: 'accent',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing and FDA compliance ensure only the best reaches our customers.',
    color: 'primary',
  },
  {
    icon: Award,
    title: 'Expert Guidance',
    description: 'Our team of medical specialists provides personalized support for every need.',
    color: 'accent',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'We serve as a trusted healthcare partner to families and facilities across the region.',
    color: 'primary',
  },
]

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '500+', label: 'Happy Customers' },
  { value: '1,000+', label: 'Products Delivered' },
  { value: '100%', label: 'Quality Commitment' },
]

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  const storyImage = useSiteImage(
    'about-story',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80'
  )

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900" />
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-primary-300 border border-white/10 mb-6">
              About Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-white">
              About <span className="text-primary-400">FalconMed</span> Solutions
            </h1>
            <p className="mt-6 text-lg text-secondary-300 max-w-2xl leading-relaxed">
              For over 15 years, we&apos;ve been committed to improving lives through
              premium medical equipment and compassionate service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Split layout */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-primary-900/10">
                  <Image
                    src={storyImage}
                    alt="FalconMed team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />
                </div>

                {/* Floating stat card */}
                <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 shadow-xl">
                  <p className="font-display text-4xl text-primary-600">15+</p>
                  <p className="text-sm text-secondary-500 mt-1">Years Serving<br />Our Community</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <span className="pill-badge mb-6">Our Story</span>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight text-secondary-900">
                A Legacy of<br />
                <span className="text-gradient-blue">Compassionate Care</span>
              </h2>
              <p className="mt-6 text-secondary-500 leading-relaxed text-lg">
                Founded with a simple mission — to make premium medical equipment
                accessible to everyone who needs it. FalconMed Solutions has grown
                from a small local supplier to a trusted name in healthcare.
              </p>
              <p className="mt-4 text-secondary-500 leading-relaxed">
                We work directly with patients, caregivers, and healthcare
                facilities to understand their unique challenges and provide
                tailored solutions that improve quality of life.
              </p>

              <ul className="mt-8 space-y-3">
                {['FDA-certified medical equipment', 'Personalized fitting and consultation', 'Insurance and billing assistance', 'Ongoing support and maintenance'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary-600" />
                    </span>
                    <span className="text-secondary-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values - Bento Grid */}
      <section className="py-24 lg:py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="pill-badge mb-4">Our Values</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-secondary-900">
              What Drives <span className="text-gradient-blue">Everything</span> We Do
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <AnimatedSection key={value.title}>
                  <div className="bento-card p-8 h-full">
                    <div className="flex items-start gap-5">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                          value.color === 'primary'
                            ? 'bg-primary-50 text-primary-600'
                            : 'bg-accent-50 text-accent-600'
                        }`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary-900">{value.title}</h3>
                        <p className="mt-2 text-secondary-500 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800" />
        <div className="absolute inset-0 dot-grid opacity-10" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl text-white">{stat.value}</p>
                <p className="text-sm text-primary-200/70 mt-2">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-secondary-900">
              Let&apos;s Work Together
            </h2>
            <p className="mt-6 text-lg text-secondary-500">
              Ready to experience the FalconMed difference? Reach out to us today.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-500/20"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white text-secondary-700 font-semibold rounded-full border border-gray-200 hover:border-primary-200 hover:text-primary-600 transition-all"
              >
                View Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
