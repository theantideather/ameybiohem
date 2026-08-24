import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import DonutChart from './DonutChart'
import UpStat from './UpStat'
import Eyebrow from './Eyebrow'
import BlogLink from './BlogLink'

const DONUTS = [
  { value: 60, label: 'Chemical Bill', sublabel: 'Salt, soda ash & core auxiliaries', color: '#3c6b45' },
  { value: 55, label: 'Effluent Load', sublabel: 'Dissolved solids leaving the plant', color: '#b8923a' },
  { value: 25, label: 'Water Use', sublabel: 'Per batch, fewer rinse cycles', color: '#3c6b45' },
  { value: 22, label: 'Energy Use', sublabel: 'Boiler and steam hours per batch', color: '#b8923a' },
]

const UP_STATS = [
  { value: 25, label: 'Throughput', sublabel: 'More batches per shift, same machines', color: '#3c6b45' },
  { value: 25, label: 'Production Speed', sublabel: 'Faster dye-to-finish per batch', color: '#b8923a' },
]

const PROCESS_BARS = [
  { label: 'First-Time-Right Rate', before: [82, 88], after: [90, 96], unit: '%', inverse: false },
  { label: 'Rework / Re-Dyeing Rate', before: [5, 10], after: [2, 4], unit: '%', inverse: true },
  { label: 'Fabric Tensile Strength Retained', before: [90, 93], after: [95, 98], unit: '%', inverse: false },
]

function RangeBar({ label, before, after, unit, inverse }) {
  const max = Math.max(before[1], after[1]) * 1.15
  const bw = (v) => `${(v / max) * 100}%`
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-cream font-medium">{label}</span>
        <span className="font-sans font-bold text-[12px] uppercase tracking-wider text-mist">
          {inverse ? 'lower is better' : 'higher is better'}
        </span>
      </div>
      <div className="space-y-2.5">
        <div className="flex items-center gap-3">
          <span className="w-24 shrink-0 font-sans font-bold text-[12px] uppercase tracking-wide text-red-flag/80">Conventional</span>
          <div className="flex-1 h-2.5 rounded-full bg-white/8 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: bw(before[1]) }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-red-flag/60"
            />
          </div>
          <span className="w-16 text-right font-mono text-xs text-cream/70 tabular-nums">
            {before[0]}–{before[1]}{unit}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-24 shrink-0 font-sans font-bold text-[12px] uppercase tracking-wide text-lime">Greenaid</span>
          <div className="flex-1 h-2.5 rounded-full bg-white/8 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: bw(after[1]) }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-lime"
            />
          </div>
          <span className="w-16 text-right font-mono text-xs text-lime tabular-nums">
            {after[0]}–{after[1]}{unit}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function ImpactDashboard() {
  return (
    <section id="impact" className="relative bg-ink py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14 md:mb-16">
          <Eyebrow tone="lime">Measured Impact</Eyebrow>
          <h2 className="text-display-md text-4xl md:text-6xl mt-4 font-bold text-cream">
            What goes down.
            <br />
            What goes up.
          </h2>
          <p className="mt-5 text-mist text-lg leading-relaxed">
            Controlled laboratory trials and mill-scale pilot runs, validated against ISO and AATCC
            standards on 100% cotton substrates. This is what changes, batch after batch, when Greenaid
            replaces the conventional recipe.
          </p>
        </Reveal>

        <Reveal className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {DONUTS.map((d) => (
              <DonutChart key={d.label} {...d} />
            ))}
          </div>
          <div className="mt-10 pt-10 border-t border-white/10 grid grid-cols-2 gap-x-6 gap-y-10 max-w-md mx-auto">
            {UP_STATS.map((d) => (
              <UpStat key={d.label} {...d} />
            ))}
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          <Reveal className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-10 space-y-9">
            <span className="font-sans font-bold text-[12px] uppercase tracking-[0.18em] text-mist">Process & Quality</span>
            {PROCESS_BARS.map((b) => (
              <RangeBar key={b.label} {...b} />
            ))}
          </Reveal>

          <Reveal delay={0.1} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <span className="font-sans font-bold text-[12px] uppercase tracking-[0.18em] text-mist">Colour Fastness — ISO 105</span>
            <div className="mt-6 space-y-4">
              {[
                ['Wash Fastness — Shade Change', '3–4', '4–5'],
                ['Wash Fastness — Cotton Staining', '3–4', '4–5'],
                ['Rub Fastness — Dry', '3–4', '4–5'],
                ['Rub Fastness — Wet', '2–3', '3–4'],
                ['Lightfastness', '4–5', '4–5'],
                ['Perspiration Fastness', '3–4', '4–5'],
              ].map(([label, before, after]) => (
                <div key={label} className="flex items-center justify-between py-2.5 border-b border-white/8 last:border-0">
                  <span className="text-sm text-cream/90">{label}</span>
                  <div className="flex items-center gap-3 font-mono text-xs tabular-nums">
                    <span className="text-red-flag/80">{before}</span>
                    <span className="text-mist/50" aria-hidden>→</span>
                    <span className="text-lime font-semibold">{after}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-4">
              <div className="text-3xl font-semibold text-gradient-gold">+~20%</div>
              <div className="text-sm text-mist leading-snug">Shade depth (K/S) improvement over baseline</div>
            </div>
            <BlogLink to="/blog/fastness-science" tone="gold">What Beta actually does after dyeing</BlogLink>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <p className="text-sm text-mist leading-relaxed max-w-2xl">
            These are trial benchmarks — your machine, water, dyestuff and shade will move the exact
            numbers up or down. Book a trial batch and we'll run it on your own setup, tailored to you.
          </p>
          <Link
            to="/#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-lime text-black font-semibold rounded-full px-6 py-3 hover:bg-lime-2 transition-colors text-sm"
          >
            Book a Trial Batch →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
