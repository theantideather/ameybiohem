import Reveal from './Reveal'
import forestRiver from '../assets/photos/forest-river.png'
import Eyebrow from './Eyebrow'

const STATS = [
  { value: '40–60%', label: 'Less Effluent Volume', sub: 'Per dyebath discharge' },
  { value: 'Zero', label: 'APEO / NPE Content', sub: 'No internationally restricted substances' },
  { value: '~60%', label: 'Lower Effluent Toxicity', sub: 'Measurably cleaner water discharge' },
]

export default function EnvironmentalImpact() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-ink">
      <img src={forestRiver} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 min-h-[85vh] flex flex-col justify-center">
        <Reveal className="max-w-lg">
          <Eyebrow tone="lime">Environmental Impact</Eyebrow>
          <h2 className="text-display-md text-4xl md:text-5xl mt-4 font-semibold text-cream">
            Less goes down
            <br />
            the drain, too.
          </h2>
          <p className="mt-5 text-mist text-lg leading-relaxed">
            Lower salt and alkali load means lower conductivity and dissolved solids downstream -
            without a single restricted substance in the formulation.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-3 gap-6 max-w-3xl">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-xl p-6">
              <div className="text-3xl font-semibold text-gradient-lime">{s.value}</div>
              <div className="mt-2 text-sm font-medium text-cream">{s.label}</div>
              <div className="mt-1 text-xs text-mist leading-relaxed">{s.sub}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
