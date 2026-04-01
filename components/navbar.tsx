'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, MapPin, Mail, Clock, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Top info bar */}
      <div className="bg-primary-700 text-white text-xs hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-2.5">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-primary-300" />
              Monday - Friday 9:00 to 6:00
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary-300" />
              1811 Lincoln Hwy, Edison, NJ 08817
            </span>
            <a href="mailto:info@falconmedsolutions.com" className="flex items-center gap-1.5 hover:text-primary-200 transition-colors">
              <Mail className="w-3.5 h-3.5 text-primary-300" />
              info@falconmedsolutions.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            {['Facebook', 'Twitter', 'LinkedIn'].map((s) => (
              <a key={s} href="#" className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="text-[10px] font-bold">{s[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* Logo + Phone */}
          <div className="flex items-center gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-10 h-10">
                <Image src="/logo.svg" alt="FalconMed" fill className="object-contain" />
              </div>
              <span className="font-display text-xl text-secondary-900">
                Falcon<span className="text-accent-600">Med</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-2.5 pl-5 border-l border-gray-200">
              <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 leading-none">Emergency Call:</p>
                <a href="tel:+19084286253" className="text-sm font-bold text-secondary-900 hover:text-primary-600 transition-colors">
                  (908) 428-6253
                </a>
              </div>
            </div>
          </div>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary-600 text-white'
                      : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" className="pill-btn-arrow">
              <span className="pill-text">Get a Quote</span>
              <span className="pill-arrow"><ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 flex items-center justify-center" aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[72px] bottom-0 bg-white z-40 lg:hidden overflow-y-auto"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 px-4 text-lg font-medium text-secondary-800 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="pill-btn w-full justify-center"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="pt-4">
                <a href="tel:+19084286253" className="flex items-center gap-3 text-secondary-600 py-2">
                  <Phone className="w-4 h-4 text-primary-600" />
                  <span className="font-medium">(908) 428-6253</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
