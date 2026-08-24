"use client"

import NumberFlow from '@number-flow/react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

const BARS = [
  { value: 82, label: 'Conventional · Low End', delay: 0 },
  { value: 88, label: 'Conventional · High End', delay: 0.15 },
  { value: 96, label: 'Greenaid System', highlight: true, showTooltip: true, delay: 0.3 },
]

function StripeBg() {
  return (
    <div
      className="absolute inset-0 opacity-[0.5]"
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(232,226,208,0.06) 25%, transparent 25.5%, transparent 50%, rgba(232,226,208,0.06) 50.5%, rgba(232,226,208,0.06) 75%, transparent 75.5%, transparent)',
        backgroundSize: '10px 10px',
      }}
    />
  )
}

function Bar({ value, label, highlight, showTooltip, delay }) {
  return (
    <div className="group relative h-full w-full">
      <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
        <StripeBg />
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: `${value}%` }}
          viewport={{ once: false, margin: '-10% 0px' }}
          transition={{ duration: 0.7, type: 'spring', damping: 20, delay }}
          className={`absolute bottom-0 w-full rounded-[28px] p-3 ${
            highlight ? 'bg-gold text-ink' : 'bg-lime/70 text-ink'
          }`}
        >
          <div className="relative flex h-12 w-full items-center justify-center gap-1 rounded-full bg-black/10 tracking-tight font-bold">
            <NumberFlow value={value} suffix="%" />
          </div>
        </motion.div>

        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, type: 'spring', damping: 15, delay: delay + 0.3 }}
            className="absolute left-1/2 -translate-x-1/2 rounded-xl bg-gold text-ink px-3 py-1.5 text-xs font-bold whitespace-nowrap shadow-lg"
            style={{ bottom: `calc(${value}% + 14px)` }}
          >
            first-time-right
            <svg className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-gold" width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M3.8 7.1c.6.9 1.8.9 2.4 0L9 2.7C9.6 1.7 8.9.5 7.8.5H2.2C1 .5.4 1.7 1 2.7l2.8 4.4Z" fill="currentColor" />
            </svg>
          </motion.div>
        )}
      </div>
      <p className="mt-3 text-center text-sm font-medium text-mist">{label}</p>
    </div>
  )
}

export default function ResultsChart() {
  return (
    <section className="relative bg-ink py-24 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="text-center mb-4">
          <Eyebrow tone="gold" className="justify-center">Measured, Not Promised</Eyebrow>
        </Reveal>
        <Reveal delay={0.05} className="text-center mb-16">
          <h2 className="text-display-md text-4xl md:text-5xl font-bold text-cream max-w-2xl mx-auto">
            We don't talk about it. We batch it.
          </h2>
        </Reveal>

        <div className="relative mx-auto flex h-80 md:h-96 max-w-2xl items-end justify-center gap-4">
          {BARS.map((b, i) => (
            <div key={b.label} className="h-full w-full">
              <Bar {...b} />
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-mist/60 mt-6">First-time-right rate, standard reactive recipe on 100% cotton</p>
      </div>
    </section>
  )
}
