import { Hero } from '@/components/hero'
import { FeaturedProducts } from '@/components/featured-products'
import { WhyChooseUs } from '@/components/why-choose-us'
import { ServicesShowcase } from '@/components/services-showcase'
import { CTA } from '@/components/cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <ServicesShowcase />
      <CTA />
    </>
  )
}
