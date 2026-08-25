import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Solution from '../components/Solution'
import Manufacturer from '../components/Manufacturer'
import SpecTables from '../components/SpecTables'
import { useSeo } from '../hooks/useSeo'

export default function Product() {
  useSeo({
    title: 'Greenaid Alpha & Beta Dosage & Specs, Salt Soda Substitute for Reactive Dyeing',
    description:
      'Full dosage tables for Greenaid Alpha & Beta: a salt and soda ash substitute for reactive dyeing, with exact conventional-vs-Greenaid figures for every auxiliary.',
    path: '/product',
  })
  return (
    <div className="bg-ink">
      <div className="pt-36 pb-16 max-w-7xl mx-auto px-6">
        <Reveal>
          <Eyebrow tone="lime">The Product</Eyebrow>
          <h1 className="text-display-md text-5xl md:text-6xl mt-4 font-bold text-cream tracking-tight">
            Greenaid Alpha &amp; Beta.
            <br />
            One system, two applications.
          </h1>
          <p className="mt-5 text-mist text-lg leading-relaxed max-w-xl">
            Everything the product actually is, what each component does, what it's made of on
            paper (not in the formula), and the exact dosage data behind every claim on this site.
          </p>
        </Reveal>
      </div>

      <Solution />
      <Manufacturer />
      <SpecTables />
    </div>
  )
}
