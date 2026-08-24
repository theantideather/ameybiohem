import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ParticleField from './ParticleField'
import { useSpringNumber } from '../hooks/useSpringNumber'
import heroDyehouse from '../assets/photos/hero-dyehouse.jpg'

const MODES = {
  conventional: {
    label: 'Conventional Process',
    salt: 80,
    soda: 20,
    cycle: 90,
    rinses: 6,
    batches: 6,
    discharge: 100,
    savings: 0,
    tint: 'text-red-flag',
    bar: 'bg-red-flag/70',
  },
  greenaid: {
    label: 'Greenaid System',
    salt: 32,
    soda: 8,
    cycle: 68,
    rinses: 5,
    batches: 8,
    discharge: 40,
    savings: 31500,
    tint: 'text-lime',
    bar: 'bg-lime',
  },
}

const STAT_CHIPS = [
  { value: '40–60%', label: 'Less Salt & Soda' },
  { value: '~25%', label: 'Less Water' },
  { value: '~22%', label: 'Less Energy' },
  { value: '+25%', label: 'More Output' },
]

// Critically damped (no overshoot), Apple's default for value repositioning.
const GAUGE_SPRING = { type: 'spring', bounce: 0, duration: 0.45 }
const PILL_SPRING = { type: 'spring', bounce: 0, duration: 0.35 }
const TAP = { scale: 0.96 }

function Gauge({ value, max, label, unit, accent }) {
  const pct = Math.max(4, Math.min(100, (value / max) * 100))
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="font-sans font-bold text-[12px] uppercase tracking-[0.16em] text-mist">{label}</span>
        <span className="text-lg text-cream tabular-nums font-semibold">
          {value}
          <span className="text-xs text-mist ml-1 font-normal">{unit}</span>
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${accent} transition-colors duration-300`}
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={GAUGE_SPRING}
        />
      </div>
    </div>
  )
}

function StatFlip({ value, tint }) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={value}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={GAUGE_SPRING}
        className={`text-xl font-semibold ${tint}`}
      >
        {value}
      </motion.div>
    </AnimatePresence>
  )
}

export default function Hero() {
  const [mode, setMode] = useState('greenaid')
  const m = MODES[mode]
  const savings = useSpringNumber(m.savings, { damping: 22, stiffness: 140 })

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-ink noise-overlay">
      <div className="absolute inset-0 grid-lines opacity-25 mask-fade-b" />
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-forest/60 blur-[140px] animate-drift" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-forest-2/50 blur-[120px] animate-drift" style={{ animationDelay: '4s' }} />
      <ParticleField className="absolute inset-0 w-full h-full opacity-45" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-10 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 font-sans font-bold text-[12px] uppercase tracking-[0.22em] text-lime border border-lime/25 bg-lime/[0.08] rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" />
          By AmeyBioChem · Manufacturer of Greenaid Alpha &amp; Beta
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-end">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display text-[12vw] sm:text-5xl md:text-6xl lg:text-[4.4rem] font-semibold text-cream"
            >
              Same machine.
              <br />
              <span className="text-gradient-lime">Half the chemical bill.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-xl text-lg text-mist leading-relaxed"
            >
              Add Greenaid Alpha to the dyebath and Greenaid Beta after dyeing, that's the whole change.
              Salt and soda ash drop 40–60%, water and energy drop by a quarter, and your shade comes out
              deeper and more consistent. No new machinery, no new training, no restricted chemistry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg"
            >
              {STAT_CHIPS.map((c) => (
                <div key={c.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
                  <div className="text-lg font-semibold text-gradient-lime tabular-nums">{c.value}</div>
                  <div className="text-[12px] text-mist mt-0.5 leading-tight">{c.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#calculator"
                whileTap={TAP}
                whileHover={{ scale: 1.02 }}
                transition={PILL_SPRING}
                className="inline-flex items-center gap-2 bg-lime text-black font-semibold rounded-full px-7 py-3.5 hover:bg-lime-2 transition-colors"
              >
                Calculate Your Savings <span aria-hidden>→</span>
              </motion.a>
              <motion.a
                href="#solution"
                whileTap={TAP}
                whileHover={{ scale: 1.02 }}
                transition={PILL_SPRING}
                className="inline-flex items-center gap-2 text-cream font-semibold rounded-full px-7 py-3.5 border border-white/15 hover:border-white/30 hover:bg-white/[0.04] transition-colors"
              >
                See the Product
              </motion.a>
            </motion.div>
          </div>

          {/* Live dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 md:p-7 shadow-2xl shadow-black/60"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-sans font-bold text-[12px] uppercase tracking-[0.18em] text-mist">Live Dyehouse Feed</span>
              <div className="flex rounded-full border border-white/10 p-1 bg-black/40">
                {Object.entries(MODES).map(([key]) => (
                  <motion.button
                    key={key}
                    onClick={() => setMode(key)}
                    whileTap={TAP}
                    className={`relative font-sans font-bold text-[12px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-full transition-colors ${
                      mode === key ? 'text-black' : 'text-mist hover:text-cream'
                    }`}
                  >
                    {mode === key && (
                      <motion.span
                        layoutId="mode-pill"
                        className={`absolute inset-0 rounded-full ${key === 'greenaid' ? 'bg-lime' : 'bg-red-flag'}`}
                        transition={PILL_SPRING}
                      />
                    )}
                    <span className="relative">{key === 'greenaid' ? 'Greenaid' : 'Conventional'}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Gauges stay mounted across toggles so bars morph 1:1 from their
                current value instead of cutting/fading to the new one. */}
            <div className="space-y-5">
              <Gauge value={m.salt} max={80} label="Salt Dosage" unit="g/L" accent={m.bar} />
              <Gauge value={m.soda} max={20} label="Soda Ash" unit="g/L" accent={m.bar} />
              <Gauge value={m.cycle} max={90} label="Cycle Time" unit="min" accent={m.bar} />

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="rounded-xl bg-black/40 border border-white/5 px-3 py-3 text-center overflow-hidden">
                  <StatFlip value={m.rinses} tint={m.tint} />
                  <div className="font-sans font-bold text-[12px] uppercase tracking-wider text-mist mt-1">Rinses</div>
                </div>
                <div className="rounded-xl bg-black/40 border border-white/5 px-3 py-3 text-center overflow-hidden">
                  <StatFlip value={m.batches} tint={m.tint} />
                  <div className="font-sans font-bold text-[12px] uppercase tracking-wider text-mist mt-1">Batches / Shift</div>
                </div>
                <div className="rounded-xl bg-black/40 border border-white/5 px-3 py-3 text-center overflow-hidden">
                  <StatFlip value={`${m.discharge}%`} tint={m.tint} />
                  <div className="font-sans font-bold text-[12px] uppercase tracking-wider text-mist mt-1">Discharge Load</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
              <span className="font-sans font-bold text-[12px] uppercase tracking-[0.16em] text-mist">Saved per shift</span>
              <span className="text-2xl font-semibold text-gradient-gold tabular-nums">
                ₹{Math.round(savings).toLocaleString('en-IN')}
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
        >
          <img
            src={heroDyehouse}
            alt="Conventional dyehouse process versus the AmeyBioChem Greenaid system, side by side"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Trust / certification strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-8 gap-y-3 font-sans font-bold text-[12px] uppercase tracking-[0.14em] text-mist"
        >
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-lime" /> Tested to ISO 105 &amp; AATCC</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-lime" /> Zero APEO / NPE</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-lime" /> Compliant, International Textile Standards</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-lime" /> Made in India by AmeyBioChem</span>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-ink to-transparent" />
    </section>
  )
}
