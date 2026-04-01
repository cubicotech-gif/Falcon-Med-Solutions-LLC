import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

const links = {
  products: ['Wheelchairs', 'Mobility Aids', 'Diabetic Care', 'Orthopedic Braces'],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[var(--ink)]">
      {/* Thin gradient top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        {/* Top section - big text CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-16 border-b border-white/[0.06]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="relative w-9 h-9">
                <Image src="/logo.svg" alt="FalconMed" fill className="object-contain" />
              </div>
              <span className="font-display text-xl text-white tracking-tight">
                Falcon<span className="text-accent-400">Med</span>
              </span>
            </Link>
            <p className="text-secondary-500 text-sm max-w-xs leading-relaxed">
              Premium medical equipment delivered with expert care and
              personalized guidance for every patient.
            </p>
          </div>

          <div className="flex gap-3">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Linkedin, label: 'LinkedIn' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 border border-white/[0.08] flex items-center justify-center text-secondary-500 hover:text-primary-400 hover:border-primary-500/30 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          <div>
            <h4 className="label-sm text-white/40 mb-5">Products</h4>
            <ul className="space-y-3">
              {links.products.map((p) => (
                <li key={p}>
                  <Link href="/products" className="text-sm text-secondary-500 hover:text-primary-400 transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-sm text-white/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {links.company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="text-sm text-secondary-500 hover:text-primary-400 transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-sm text-white/40 mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-secondary-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                1811 Lincoln Hwy,<br />Edison, NJ 08817
              </li>
              <li>
                <a href="tel:+19084286253" className="flex items-center gap-3 hover:text-primary-400 transition-colors">
                  <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                  (908) 428-6253
                </a>
              </li>
              <li>
                <a href="mailto:info@falconmedsolutions.com" className="flex items-center gap-3 hover:text-primary-400 transition-colors">
                  <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                  info@falconmedsolutions.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="label-sm text-white/40 mb-5">Hours</h4>
            <div className="text-sm text-secondary-500 space-y-2">
              <div className="flex justify-between">
                <span>Mon — Fri</span>
                <span className="text-white/50">9AM — 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white/50">10AM — 4PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white/50">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-secondary-600 tracking-wide">
            &copy; {new Date().getFullYear()} FalconMed Solutions LLC. All rights reserved.
          </p>
          <p className="text-[11px] text-secondary-700 tracking-wide">
            Developed by{' '}
            <a
              href="https://cubicotechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500/60 hover:text-primary-400 transition-colors"
            >
              Cubico Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
