import Reveal from './Reveal'
import { useCountUp } from '../hooks/useCountUp'
import Eyebrow from './Eyebrow'

const STATS = [
  { value: 60, suffix: '%', label: 'Lower Effluent TDS', sub: 'Cleaner discharge, easier ETP compliance' },
  { value: 25, suffix: '%', label: 'Faster Cycle Time', sub: 'Less boiler and steam hours per batch' },
  { value: 25, suffix: '%', label: 'More Batches / Shift', sub: 'Same machines, same staff, zero capex' },
  { value: 20, suffix: '%', label: 'Deeper Shade (K/S)', sub: 'Brighter, more consistent colour yield' },
  { value: 25, suffix: '%', label: 'Less Water Used', sub: 'Fewer rinse cycles per batch' },
  { value: 4, prefix: '2–', suffix: ' mo', label: 'ROI Payback', sub: 'Chemical savings alone cover the switch' },
]

function StatCard({ s, i }) {
  const { ref, display } = useCountUp(s.value, { duration: 1.4 + i * 0.08 })
  return (
    <Reveal delay={i * 0.06} className="relative border-t border-white/10 pt-7 group">
      <div ref={ref} className="font-semibold text-5xl md:text-6xl text-cream tabular-nums tracking-tight">
        {s.prefix}
        <span className="text-gradient-lime">{display}</span>
        {s.suffix}
      </div>
      <div className="mt-4 text-cream/90 font-medium">{s.label}</div>
      <div className="mt-1.5 text-sm text-mist leading-relaxed max-w-[220px]">{s.sub}</div>
      <span className="absolute top-0 left-0 h-px w-0 bg-lime group-hover:w-full transition-all duration-700" />
    </Reveal>
  )
}

export default function Stats() {
  return (
    <section id="numbers" className="relative bg-forest py-28 md:py-36 overflow-hidden">
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-pine/25 blur-[160px]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal className="max-w-2xl mb-16 md:mb-20">
          <Eyebrow tone="lime">The Numbers</Eyebrow>
          <h2 className="font-semibold text-4xl md:text-5xl mt-4 leading-[1.05] tracking-tight text-cream">
            What one switch
            <br />
            does to a dyehouse.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {STATS.map((s, i) => (
            <StatCard key={s.label} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
