import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-secondary-900 overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image src="/logo.svg" alt="FalconMed" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-none">
                  Falcon<span className="text-accent-400">Med</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-secondary-500 font-medium">
                  Solutions
                </span>
              </div>
            </Link>
            <p className="mt-5 text-sm text-secondary-400 leading-relaxed max-w-xs">
              Premium medical equipment and supplies, delivered with expert care
              and personalized guidance for every patient.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.06] flex items-center justify-center text-secondary-400 hover:text-primary-400 hover:bg-white/[0.1] hover:border-primary-500/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Products</h3>
            <ul className="space-y-3">
              {['Wheelchairs', 'Mobility Aids', 'Diabetic Care', 'Orthopedic Braces'].map((item) => (
                <li key={item}>
                  <Link
                    href="/products"
                    className="text-sm text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Company</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Products', href: '/products' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <span className="text-sm text-secondary-400">
                  1811 Lincoln Hwy, Edison,<br />NJ 08817
                </span>
              </li>
              <li>
                <a href="tel:+19084286253" className="flex items-center gap-3 text-sm text-secondary-400 hover:text-primary-400 transition-colors">
                  <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                  (908) 428-6253
                </a>
              </li>
              <li>
                <a href="mailto:info@falconmedsolutions.com" className="flex items-center gap-3 text-sm text-secondary-400 hover:text-primary-400 transition-colors">
                  <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                  info@falconmedsolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <span className="text-sm text-secondary-400">
                  Mon - Fri: 9AM - 6PM<br />
                  Sat: 10AM - 4PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary-500">
            &copy; {new Date().getFullYear()} FalconMed Solutions LLC. All rights reserved.
          </p>
          <p className="text-xs text-secondary-600">
            Developed by{' '}
            <a
              href="https://cubicotechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400/70 hover:text-primary-400 transition-colors"
            >
              Cubico Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
