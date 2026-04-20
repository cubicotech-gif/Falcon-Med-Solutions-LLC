'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, MapPin, Mail, Clock, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useSiteImage } from '@/hooks/use-site-image'

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
  const logo = useSiteImage('site-logo', '/logo.svg')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Top info strip */}
      <div className="bg-primary-900 text-white text-xs hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent-400" />
              Daily: 10:00 AM - 4:00 PM (Closed Weekends & Holidays)
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent-400" />
              668 US-208 Unit D, Hillsborough, NJ 008844
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:info@falconmedsolutions.com" className="flex items-center gap-1.5 hover:text-primary-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-primary-300" />
              info@falconmedsolutions.com
            </a>
            <a href="tel:+16093569212" className="flex items-center gap-1.5 hover:text-accent-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-accent-300" />
              (609) 356-9212
            </a>
          </div>
        </div>
      </div>

      {/* Logo bar — large, prominent, separate from nav */}
      <div className={`bg-white border-b border-gray-100 transition-all duration-300 ${scrolled ? 'hidden' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              {logo ? (
                <Image src={logo} alt="FalconMed Solutions" fill className="object-contain" />
              ) : (
                <div className="w-full h-full rounded-xl bg-primary-100 animate-pulse" />
              )}
            </div>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-primary-900 leading-none">
                Falcon<span className="text-accent-600">Med</span>
              </h1>
              <p className="text-[11px] md:text-xs text-secondary-400 font-medium uppercase tracking-widest mt-0.5">
                Medical Equipment Solutions
              </p>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-accent-50 flex items-center justify-center">
                <Phone className="w-5 h-5 text-accent-600" />
              </div>
              <div>
                <p className="text-[10px] text-secondary-400 uppercase tracking-wider font-semibold">Call Us Now</p>
                <a href="tel:+16093569212" className="text-base font-bold text-primary-800 hover:text-accent-600 transition-colors">
                  (609) 356-9212
                </a>
              </div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary-50 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <p className="text-[10px] text-secondary-400 uppercase tracking-wider font-semibold">Email Us</p>
                <a href="mailto:info@falconmedsolutions.com" className="text-sm font-bold text-primary-800 hover:text-primary-600 transition-colors">
                  info@falconmedsolutions.com
                </a>
              </div>
            </div>
          </div>
          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden w-12 h-12 rounded-xl bg-primary-800 text-white flex items-center justify-center" aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Floating pill navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg'
          : 'bg-primary-700'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            {/* Collapsed logo — only visible when scrolled */}
            <Link href="/" className={`flex items-center gap-2.5 transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
              <div className="relative w-9 h-9 shrink-0">
                {logo && <Image src={logo} alt="FalconMed" fill className="object-contain" />}
              </div>
              <span className="font-display text-lg font-bold text-primary-900 whitespace-nowrap">
                Falcon<span className="text-accent-600">Med</span>
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className={`hidden lg:flex items-center gap-1 ${scrolled ? '' : 'mx-auto'}`}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                      scrolled
                        ? isActive
                          ? 'bg-primary-600 text-white'
                          : 'text-primary-800 hover:text-primary-600 hover:bg-primary-50'
                        : isActive
                          ? 'bg-white text-primary-700'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link href="/contact" className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all ${
                scrolled
                  ? 'bg-accent-600 text-white hover:bg-accent-700'
                  : 'bg-white text-primary-700 hover:bg-accent-600 hover:text-white'
              }`}>
                Get a Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile toggle for scrolled state */}
            {scrolled && (
              <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 rounded-xl bg-primary-800 text-white flex items-center justify-center" aria-label="Menu">
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-0 bottom-0 bg-white z-[60] lg:hidden overflow-y-auto"
          >
            <div className="px-6 py-6">
              {/* Mobile header */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    {logo && <Image src={logo} alt="FalconMed" fill className="object-contain" />}
                  </div>
                  <span className="font-display text-xl font-bold text-primary-900">
                    Falcon<span className="text-accent-600">Med</span>
                  </span>
                </Link>
                <button onClick={() => setOpen(false)} className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block py-4 px-5 text-lg font-semibold rounded-xl transition-colors ${
                        isActive
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-primary-800 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="pill-btn-accent w-full justify-center"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+16093569212" className="flex items-center justify-center gap-3 py-3 text-primary-700 font-semibold">
                  <Phone className="w-5 h-5 text-accent-600" />
                  (609) 356-9212
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
