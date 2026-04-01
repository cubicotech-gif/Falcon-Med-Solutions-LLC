'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
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
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-secondary-200/30 shadow-sm'
          : 'bg-transparent border-transparent'
      }`}>
        {/* Thin accent line at very top */}
        <div className="h-[2px] w-full bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Top micro bar */}
          <div className={`flex items-center justify-between py-2 text-xs transition-all duration-300 border-b border-secondary-200/20 ${scrolled ? 'h-0 opacity-0 overflow-hidden py-0 border-0' : 'opacity-100'}`}>
            <span className="text-secondary-400 tracking-wide">Edison, NJ &mdash; Serving the Tri-State Area</span>
            <a href="tel:+19084286253" className="text-secondary-500 hover:text-primary-600 transition-colors font-medium tracking-wide">
              (908) 428-6253
            </a>
          </div>

          {/* Main nav row */}
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-9 h-9">
                <Image src="/logo.svg" alt="FalconMed" fill className="object-contain" />
              </div>
              <span className="font-display text-xl text-secondary-900 tracking-tight">
                Falcon<span className="text-accent-600">Med</span>
              </span>
            </Link>

            {/* Desktop links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-semibold uppercase tracking-[0.12em] text-secondary-500 hover:text-primary-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="btn-ring text-secondary-800 text-[11px] tracking-[0.15em] py-2.5 px-5"
              >
                Request a Quote
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col justify-center items-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl text-secondary-900 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <a
                  href="tel:+19084286253"
                  className="text-sm text-secondary-400 tracking-wide"
                >
                  (908) 428-6253
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
