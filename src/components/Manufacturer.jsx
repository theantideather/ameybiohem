import Reveal from './Reveal'
import Eyebrow from './Eyebrow'
import BlogLink from './BlogLink'

export default function Manufacturer() {
  return (
    <section className="relative bg-void py-24 md:py-28 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <Reveal>
            <Eyebrow tone="gold">Original Manufacturer</Eyebrow>
            <h2 className="text-display-md text-3xl md:text-4xl mt-4 font-semibold text-cream leading-tight">
              Same chemistry, sold under
              <br />
              different labels. Made in one place.
            </h2>
            <p className="mt-5 text-mist text-lg leading-relaxed">
              Greenaid Alpha &amp; Beta are formulated and manufactured exclusively by AmeyBioChem. Across
              our active regions, super stockists carry this same system and resell it under their own
              trade names to factories in their territory — the drum in front of your machine may not
              say "Greenaid" on it at all.
            </p>
            <p className="mt-4 text-mist text-lg leading-relaxed">
              The formulation, the batch quality and the performance data on this page are ours either
              way. If you want to confirm what you're already running, ask your supplier who manufactures
              it — or come straight to us.
            </p>
            <BlogLink to="/blog/genuine-or-rebranded" tone="gold">How to check what's actually in your drum</BlogLink>
          </Reveal>

          <Reveal delay={0.1} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-semibold text-gradient-gold">01</div>
                <div className="mt-2 text-sm font-medium text-cream">We Manufacture</div>
                <div className="mt-1 text-xs text-mist leading-relaxed">Every batch of Alpha &amp; Beta is formulated and produced by AmeyBioChem</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-gradient-gold">02</div>
                <div className="mt-2 text-sm font-medium text-cream">Super Stockists Sell</div>
                <div className="mt-1 text-xs text-mist leading-relaxed">Regional super stockists resell it under their own trade names</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-gradient-gold">03</div>
                <div className="mt-2 text-sm font-medium text-cream">You Get the Same System</div>
                <div className="mt-1 text-xs text-mist leading-relaxed">Same formulation, same dosage protocol, same tested performance</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-gradient-gold">04</div>
                <div className="mt-2 text-sm font-medium text-cream">We Stand Behind It</div>
                <div className="mt-1 text-xs text-mist leading-relaxed">Technical support and trial data come direct from the manufacturer</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
