import Reveal from './Reveal'
import Eyebrow from './Eyebrow'
import GlobalGlobe from './GlobalGlobe'
import itammaHall from '../assets/press/itamma-turkey-hall.png'
import itammaBooth from '../assets/press/itamma-turkey-booth.png'
import itammaTable from '../assets/press/itamma-turkey-greenaid-table.png'

const GROUP = [
  { name: 'Amey Marketing', role: 'Sales & distribution network' },
  { name: 'AmeyBioChem', role: 'Greenaid Alpha & Beta, current flagship' },
  { name: 'Amey ChemTech', role: 'Chemical technologies division, est. 1997' },
]

export default function GlobalReach() {
  return (
    <section className="relative bg-forest py-20 md:py-28 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <Reveal>
            <Eyebrow tone="lime">Beyond India</Eyebrow>
            <h2 className="text-display-md text-3xl md:text-4xl mt-4 font-bold text-cream leading-tight">
              India first. Bangladesh already.
              <br />
              Europe next.
            </h2>
            <p className="mt-5 text-mist text-lg leading-relaxed">
              Greenaid Alpha &amp; Beta are already sold into Bangladesh's reactive dyeing clusters
              alongside our Indian distributor network. We're now actively exploring the European
              market, starting with Italy's textile processing districts, where the same salt, soda
              and effluent economics apply.
            </p>

            <div className="mt-8 rounded-2xl border border-gold/25 bg-gold/[0.06] p-6">
              <div className="flex items-start gap-4">
                <span className="font-sans font-bold text-[12px] uppercase tracking-[0.18em] text-gold shrink-0 mt-1">Milestone</span>
                <p className="text-sm text-cream/85 leading-relaxed">
                  AmeyBioChem represented at an international textile exhibition in Turkey as a member of{' '}
                  <span className="text-gold font-semibold">ITAMMA</span> (Indian Textile Accessories &amp; Machinery
                  Manufacturers' Association), generating <span className="text-gold font-semibold">4,000+ leads</span> and{' '}
                  <span className="text-gold font-semibold">600+ high-quality, convertible enquiries</span>, and opening
                  early interest across the European market.
                </p>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  [itammaBooth, 'AmeyBioChem at the ITAMMA booth, Turkey textile exhibition'],
                  [itammaTable, 'Greenaid Alpha & Beta literature on the ITAMMA member table'],
                  [itammaHall, 'The exhibition hall floor, Turkey'],
                ].map(([src, alt]) => (
                  <div key={alt} className="rounded-lg overflow-hidden border border-gold/20 aspect-[4/3]">
                    <img src={src} alt={alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <GlobalGlobe className="max-w-md mx-auto" />
            <div className="flex flex-wrap justify-center gap-2 -mt-4">
              {[
                ['Solapur, India', 'lime'],
                ['Mumbai, India', 'lime'],
                ['Dhaka, Bangladesh', 'gold'],
                ['Prato, Italy', 'gold'],
              ].map(([label, tone]) => (
                <span
                  key={label}
                  className={`text-xs font-semibold rounded-full px-3 py-1 border ${
                    tone === 'gold' ? 'border-gold/30 text-gold' : 'border-lime/30 text-lime'
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14 rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="font-sans font-bold text-[12px] uppercase tracking-[0.18em] text-mist">The Amey Group</span>
              <p className="mt-1 text-xs text-mist/70">Solapur, Maharashtra · Manufacturing since 1997</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-3">
              {GROUP.map((g) => (
                <div key={g.name}>
                  <div className="text-base font-semibold text-cream">{g.name}</div>
                  <div className="text-xs text-mist mt-0.5">{g.role}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
