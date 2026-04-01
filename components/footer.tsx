'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react'
import { useSiteImage } from '@/hooks/use-site-image'

export function Footer() {
  const logo = useSiteImage('site-logo', '/logo.svg')
  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-14 h-14">
                <Image src={logo} alt="FalconMed" fill className="object-contain" />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white block leading-none">
                  Falcon<span className="text-accent-400">Med</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-secondary-500 mt-0.5 block">Solutions LLC</span>
              </div>
            </Link>
            <p className="text-secondary-400 text-sm leading-relaxed mb-6">
              Premium medical equipment and supplies, delivered with expert care
              and personalized guidance for every patient.
            </p>
            <div className="flex gap-2">
              {[
                { Icon: Facebook, color: 'hover:bg-primary-600' },
                { Icon: Twitter, color: 'hover:bg-accent-600' },
                { Icon: Linkedin, color: 'hover:bg-primary-600' },
              ].map(({ Icon, color }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary-400 ${color} hover:border-transparent hover:text-white transition-all`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5">Quick Links</h4>
            <div className="w-8 h-0.5 bg-accent-600 mb-5" />
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Products', href: '/products' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Get a Quote', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="flex items-center gap-2 text-sm text-secondary-400 hover:text-accent-400 transition-colors group">
                    <ArrowRight className="w-3 h-3 text-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5">Products</h4>
            <div className="w-8 h-0.5 bg-primary-600 mb-5" />
            <ul className="space-y-3">
              {['Wheelchairs', 'Mobility Aids', 'Diabetic Care', 'Orthopedic Braces'].map((item) => (
                <li key={item}>
                  <Link href="/products" className="flex items-center gap-2 text-sm text-secondary-400 hover:text-primary-400 transition-colors group">
                    <ArrowRight className="w-3 h-3 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5">Contact Info</h4>
            <div className="w-8 h-0.5 bg-accent-600 mb-5" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-600/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-accent-400" />
                </div>
                <span className="text-sm text-secondary-400">1811 Lincoln Hwy,<br />Edison, NJ 08817</span>
              </li>
              <li>
                <a href="tel:+19084286253" className="flex items-center gap-3 hover:text-accent-400 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-primary-600/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary-400" />
                  </div>
                  <span className="text-sm text-secondary-400">(908) 428-6253</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@falconmedsolutions.com" className="flex items-center gap-3 hover:text-primary-400 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-accent-600/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-accent-400" />
                  </div>
                  <span className="text-sm text-secondary-400">info@falconmedsolutions.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-600/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-sm text-secondary-400">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Red accent line */}
      <div className="h-1 bg-gradient-to-r from-accent-600 via-primary-600 to-accent-600" />

      {/* Bottom bar */}
      <div className="bg-secondary-950">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-secondary-500">
            &copy; {new Date().getFullYear()} FalconMed Solutions LLC. All rights reserved.
          </p>
          <p className="text-xs text-secondary-600">
            Developed by{' '}
            <a href="https://cubicotechnologies.com" target="_blank" rel="noopener noreferrer" className="text-accent-400/80 hover:text-accent-400 transition-colors">
              Cubico Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
