import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { useSpringNumber } from '../hooks/useSpringNumber'
import Eyebrow from './Eyebrow'
import BlogLink from './BlogLink'

const REF_BATCH_KG = 500
const FULL_SAVINGS_PER_BATCH = 4200 // ₹, at reference batch weight, full Alpha + Beta system vs normal process
const WORKING_DAYS_PER_MONTH = 26

const SPRING = { type: 'spring', bounce: 0, duration: 0.35 }

function inr(n, decimals = 0) {
  return n.toLocaleString('en-IN', { maximumFractionDigits: decimals, minimumFractionDigits: decimals })
}

function Stepper({ value, onChange, min = 1, max = 20 }) {
  return (
    <div className="inline-flex items-center gap-4 rounded-full border border-ink/10 bg-white px-2 py-2">
      <motion.button
        type="button"
        whileTap={{ scale: 0.88 }}
        transition={SPRING}
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-8 h-8 grid place-items-center rounded-full text-ink/70 hover:bg-ink/5 active:bg-ink/10 font-semibold text-lg"
        aria-label="Decrease"
      >
        −
      </motion.button>
      <span className="font-semibold text-lg w-6 text-center tabular-nums">{value}</span>
      <motion.button
        type="button"
        whileTap={{ scale: 0.88 }}
        transition={SPRING}
        onClick={() => onChange(Math.min(max, value + 1))}
        className="w-8 h-8 grid place-items-center rounded-full text-ink/70 hover:bg-ink/5 active:bg-ink/10 font-semibold text-lg"
        aria-label="Increase"
      >
        +
      </motion.button>
    </div>
  )
}

function ResultRow({ label, value, decimals, suffix, big }) {
  const animated = useSpringNumber(value)
  return (
    <div className="flex items-baseline justify-between py-4 border-b border-white/10 last:border-0">
      <span className="text-mist text-sm">{label}</span>
      <span className={`font-semibold tabular-nums text-cream ${big ? 'text-4xl md:text-5xl' : 'text-2xl'}`}>
        <span className="text-lime">₹</span>
        {inr(animated, decimals)}
        {suffix && <span className="text-mist text-base ml-1">{suffix}</span>}
      </span>
    </div>
  )
}

export default function SavingsCalculator() {
  const [batchKg, setBatchKg] = useState(500)
  const [batchesPerDay, setBatchesPerDay] = useState(6)

  const perBatch = FULL_SAVINGS_PER_BATCH * (batchKg / REF_BATCH_KG)
  const perKg = perBatch / batchKg
  const perDay = perBatch * batchesPerDay
  const perMonth = perDay * WORKING_DAYS_PER_MONTH

  return (
    <section id="calculator" className="relative bg-cream text-ink py-28 md:py-36 noise-overlay">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14 md:mb-16">
          <Eyebrow tone="pine">Savings Calculator</Eyebrow>
          <h2 className="font-semibold text-4xl md:text-5xl mt-4 leading-[1.05] tracking-tight">
            What does Greenaid
            <br />
            save <em className="not-italic text-pine">your</em> dyehouse?
          </h2>
          <p className="mt-5 text-ink/60 text-lg leading-relaxed">
            Alpha and Beta, run together as one system, against your normal process. Set your batch
            weight and daily batch count, see the saving per batch, per kilogram, per day and per month.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-6 lg:gap-8 items-stretch">
          {/* Controls */}
          <Reveal className="rounded-[28px] border border-ink/10 bg-white/70 p-8 md:p-10 space-y-10">
            <div>
              <span className="font-sans font-bold text-[12px] uppercase tracking-[0.18em] text-ink/40">Comparing</span>
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-ink/10 bg-ink/[0.03] p-4">
                <span className="flex-1 text-center rounded-xl bg-pine text-white text-sm font-semibold py-2.5">
                  Greenaid System<br /><span className="font-sans font-bold text-[12px] uppercase tracking-wider opacity-70">Alpha + Beta</span>
                </span>
                <span className="text-ink/30 font-mono text-xs">vs</span>
                <span className="flex-1 text-center rounded-xl border border-ink/15 text-ink/60 text-sm font-semibold py-2.5">
                  Normal Process<br /><span className="font-sans font-bold text-[12px] uppercase tracking-wider opacity-70">Your Current Recipe</span>
                </span>
              </div>
              <p className="mt-3 text-xs text-ink/45 leading-relaxed">
                Alpha and Beta are always used together, one at the dyebath, one after dyeing.
              </p>
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <span className="font-sans font-bold text-[12px] uppercase tracking-[0.18em] text-ink/40">Batch Weight</span>
                <span className="font-semibold text-2xl tabular-nums">{batchKg} kg</span>
              </div>
              <input
                type="range"
                min={100}
                max={1500}
                step={10}
                value={batchKg}
                onChange={(e) => setBatchKg(Number(e.target.value))}
                className="mt-4 w-full accent-pine h-1.5 rounded-full"
              />
              <div className="flex justify-between mt-1.5 font-sans font-bold text-[12px] uppercase tracking-wider text-ink/35">
                <span>100 kg</span>
                <span>1500 kg</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-sans font-bold text-[12px] uppercase tracking-[0.18em] text-ink/40">Batches / Day</span>
              <Stepper value={batchesPerDay} onChange={setBatchesPerDay} />
            </div>
          </Reveal>

          {/* Results */}
          <Reveal delay={0.08} className="rounded-[28px] bg-ink p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="font-sans font-bold text-[12px] uppercase tracking-[0.18em] text-lime">Estimated Savings</span>
              <div className="mt-2">
                <ResultRow label="Per Batch" value={perBatch} big />
              </div>
              <ResultRow label="Per Kilogram" value={perKg} decimals={2} />
              <ResultRow label="Per Day" value={perDay} />
              <ResultRow label="Per Month" value={perMonth} suffix="· 26 working days" />
            </div>
            <p className="mt-6 text-[11px] text-mist/60 leading-relaxed">
              Estimates benchmark AmeyBioChem trial data at a {REF_BATCH_KG} kg reference batch, full
              Alpha + Beta system. Actual savings vary with fabric, recipe and local chemical pricing.
            </p>
            <BlogLink to="/blog/roi-economics">Where these numbers come from</BlogLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
