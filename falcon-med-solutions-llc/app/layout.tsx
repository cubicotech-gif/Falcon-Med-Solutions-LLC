import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://falconmedsolutions.com'),
  title: 'FalconMed Solutions | Premium Medical Equipment Supplier',
  description: 'Your trusted source for wheelchairs, mobility aids, diabetic care solutions, and orthopedic supports in Hillsborough, New Jersey.',
  keywords: ['medical equipment', 'wheelchairs', 'mobility aids', 'diabetic care', 'orthopedic braces', 'New Jersey', 'Hillsborough'],
  authors: [{ name: 'FalconMed Solutions LLC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://falconmedsolutions.com',
    title: 'FalconMed Solutions | Premium Medical Equipment Supplier',
    description: 'Your trusted source for wheelchairs, mobility aids, diabetic care solutions, and orthopedic supports.',
    siteName: 'FalconMed Solutions',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
