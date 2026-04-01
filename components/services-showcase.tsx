'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Armchair, Footprints, Activity, Bone } from 'lucide-react'
import { useSiteImages } from '@/hooks/use-site-image'

const items = [
  { title: 'Wheelchairs', desc: 'Premium wheelchairs for comfort, mobility, and independence in daily life.', icon: Armchair, imageKey: 'featured-wheelchairs', defaultImage: 'https://images.unsplash.com/photo-1619204715997-1e8ed26753b0?w=600&q=80', badgeColor: 'blue' as const },
  { title: 'Mobility Aids', desc: 'Walkers, canes, and support systems for confident movement.', icon: Footprints, imageKey: 'featured-mobility', defaultImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', badgeColor: 'red' as const },
  { title: 'Diabetic Care', desc: 'Monitoring equipment and supplies for diabetes management.', icon: Activity, imageKey: 'featured-diabetic', defaultImage: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80', badgeColor: 'blue' as const },
  { title: 'Orthopedic Braces', desc: 'Medical-grade braces for recovery and pain management.', icon: Bone, imageKey: 'featured-orthopedic', defaultImage: 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?w=600&q=80', badgeColor: 'red' as const },
]

export function ServicesShowcase() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { images, ready } = useSiteImages(items.map((i) => ({ key: i.imageKey, defaultUrl: i.defaultImage })))

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-tag justify-center mb-3">Our Products</span>
          <h2 className="font-display text-4xl md:text-5xl text-primary-900 tracking-tight leading-[1.1] mt-3">
            Quality Medical Equipment to{' '}
            <span className="text-primary-600 italic">Empower You</span>
          </h2>
          <div className="line-accent mx-auto mt-5" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon
            const isRed = item.badgeColor === 'red'
            const imgSrc = ready ? images[item.imageKey] : ''
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href="/products" className="showcase-card block group">
                  {/* Image with floating icon */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-primary-100">
                    {imgSrc && (
                      <Image
                        src={imgSrc}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    {/* Floating icon badge */}
                    <div className={`absolute bottom-4 left-4 ${isRed ? 'icon-badge-red' : 'icon-badge'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display text-xl text-primary-900 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-secondary-500 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className={`text-sm font-bold ${isRed ? 'text-accent-600' : 'text-primary-600'} group-hover:underline`}>
                        Explore Products
                      </span>
                      <div className="circle-arrow w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full ${
              i === 0 ? 'bg-accent-600' : i === 1 ? 'bg-primary-600' : 'bg-gray-200'
            }`} />
          ))}
        </div>
      </div>
    </section>
  )
}
