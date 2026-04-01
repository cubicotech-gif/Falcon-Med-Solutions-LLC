import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Clock } from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'Wheelchairs', href: '/products#wheelchairs' },
    { name: 'Mobility Aids', href: '/products#mobility-aids' },
    { name: 'Diabetic Care', href: '/products#diabetic-care' },
    { name: 'Orthopedic Braces', href: '/products#orthopedic' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary-900 text-gray-300">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-accent to-primary-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.svg"
                  alt="FalconMed Solutions"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <div className="font-display text-xl text-white">
                  Falcon<span className="text-accent-400">Med</span>
                </div>
                <div className="text-xs text-primary-300 tracking-wider uppercase">Solutions LLC</div>
              </div>
            </div>
            <p className="text-sm text-primary-300 leading-relaxed mb-6">
              Premium medical equipment supplier dedicated to improving lives through quality products and exceptional service in New Jersey.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-800 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-800 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-800 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-300 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-300 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=668+Rt-206+Suite-D+Hillsborough+NJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-start gap-3 text-primary-300 hover:text-white transition-colors"
                >
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent-400" />
                  <span>
                    668 Rt-206, Suite-D<br />
                    Hillsborough, NJ
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:9084286253"
                  className="text-sm flex items-center gap-3 text-primary-300 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-accent-400" />
                  (908) 428-6253
                </a>
              </li>
              <li>
                <a
                  href="mailto:falconmedsolutions@gmail.com"
                  className="text-sm flex items-center gap-3 text-primary-300 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 text-accent-400" />
                  falconmedsolutions@gmail.com
                </a>
              </li>
              <li>
                <div className="text-sm flex items-start gap-3 text-primary-300">
                  <Clock className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent-400" />
                  <span>
                    Mon - Fri: 10 AM - 4 PM<br />
                    Closed on Weekends &amp; Holidays
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-400">
            <p>&copy; {new Date().getFullYear()} FalconMed Solutions LLC. All rights reserved.</p>
            <p>
              Developed by{' '}
              <a
                href="https://cubicotechnologies.com"
                className="text-accent-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cubico Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
