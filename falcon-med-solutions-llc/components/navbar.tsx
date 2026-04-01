'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      {/* Top bar */}
      <div className={`bg-primary-900 text-white ${scrolled ? 'hidden' : 'block'}`}>
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="hidden md:flex items-center gap-2 text-primary-200">
              <MapPin className="h-3.5 w-3.5" />
              668 Rt-206, Suite-D, Hillsborough, NJ
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:9084286253" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Phone className="h-3.5 w-3.5" />
                (908) 428-6253
              </a>
              <a href="mailto:falconmedsolutions@gmail.com" className="hidden sm:flex items-center gap-2 hover:text-white/80 transition-colors">
                <Mail className="h-3.5 w-3.5" />
                falconmedsolutions@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 transition-transform group-hover:scale-105">
              <Image
                src="/logo.svg"
                alt="FalconMed Solutions"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-xl text-primary-700 leading-tight">
                Falcon<span className="text-accent">Med</span>
              </div>
              <div className="text-[11px] font-medium text-secondary-500 tracking-wider uppercase">
                Solutions LLC
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium px-4 py-2 rounded-lg transition-all hover:bg-primary-50 hover:text-primary text-gray-700"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild size="default" className="ml-4 rounded-full">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-6 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-gray-900 hover:text-primary hover:bg-primary-50 px-4 py-3 rounded-lg transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
                <a href="tel:9084286253" className="flex items-center gap-2 text-sm text-gray-600 px-4">
                  <Phone className="h-4 w-4 text-primary" />
                  (908) 428-6253
                </a>
                <a href="mailto:falconmedsolutions@gmail.com" className="flex items-center gap-2 text-sm text-gray-600 px-4">
                  <Mail className="h-4 w-4 text-primary" />
                  falconmedsolutions@gmail.com
                </a>
              </div>
              <Button asChild className="w-full mt-4 rounded-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
