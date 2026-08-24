import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { INDIA_PATH, INDIA_VIEWBOX } from '../data/indiaPath'
import Eyebrow from './Eyebrow'

// Real projected positions (equirectangular, cos-latitude corrected) —
// matches the INDIA_PATH projection exactly, not eyeballed. Featured cities
// (HQ + primary trial sites) lead the cycle and render as larger markers.
const CITIES = [
  { name: 'Solapur', state: 'Maharashtra', x: 137.8, y: 356.8, featured: true, tag: 'HQ' },
  { name: 'Bhilwara', state: 'Rajasthan', x: 114.1, y: 203.0, featured: true },
  { name: 'Amravati', state: 'Maharashtra', x: 172.6, y: 291.3, featured: true },
  { name: 'Ichalkaranji', state: 'Maharashtra', x: 111.0, y: 376.2, featured: true },
  { name: 'Ludhiana', state: 'Punjab', x: 137.0, y: 92.0 },
  { name: 'Panipat', state: 'Haryana', x: 157.6, y: 122.2 },
  { name: 'Ahmedabad', state: 'Gujarat', x: 76.1, y: 249.4 },
  { name: 'Vadodara', state: 'Gujarat', x: 87.4, y: 263.8 },
  { name: 'Surat', state: 'Gujarat', x: 80.7, y: 286.6 },
  { name: 'Mumbai', state: 'Maharashtra', x: 81.6, y: 328.4 },
  { name: 'Bhiwandi', state: 'Maharashtra', x: 85.0, y: 324.0 },
  { name: 'Indore', state: 'Madhya Pradesh', x: 137.0, y: 255.6 },
  { name: 'Erode', state: 'Tamil Nadu', x: 171.7, y: 483.2 },
  { name: 'Tiruppur', state: 'Tamil Nadu', x: 164.5, y: 487.8 },
  { name: 'Coimbatore', state: 'Tamil Nadu', x: 157.6, y: 489.6 },
]

const [VB_X, VB_Y, VB_W, VB_H] = INDIA_VIEWBOX.split(' ').map(Number)
const CYCLE_MS = 350

export default function IndiaPresence() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: false, margin: '-20% 0px' })

  useEffect(() => {
    if (paused || !inView) return
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % CITIES.length)
    }, CYCLE_MS)
    return () => clearInterval(id)
  }, [paused, inView])

  const active = CITIES[activeIdx]

  const setActiveByName = (name) => {
    const idx = CITIES.findIndex((c) => c.name === name)
    if (idx >= 0) setActiveIdx(idx)
  }

  return (
    <section ref={sectionRef} className="relative bg-forest py-24 md:py-36 overflow-hidden">
      <div className="absolute -top-1/3 right-0 w-[800px] h-[800px] rounded-full bg-pine/20 blur-[180px]" />
      <div className="absolute -bottom-1/3 left-0 w-[600px] h-[600px] rounded-full bg-forest-2/40 blur-[160px]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal className="max-w-2xl mx-auto text-center mb-4">
          <Eyebrow tone="lime">Where the Market Is</Eyebrow>
          <h2 className="text-display-md text-4xl md:text-6xl mt-4 font-bold text-cream">
            Already on the floor in
            <br />
            India's reactive-dyeing belt.
          </h2>
          <p className="mt-5 text-mist text-lg leading-relaxed">
            From Punjab's processing houses to Tamil Nadu's knitwear cluster — Greenaid is already
            running in the districts that do the most reactive dyeing in the country.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mt-10 max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <svg viewBox={INDIA_VIEWBOX} className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-visible">
            <path d={INDIA_PATH} fill="rgba(255,255,255,0.05)" stroke="rgba(232,226,208,0.35)" strokeWidth="1.2" strokeLinejoin="round" />
            {CITIES.map((c) => {
              const isActive = c.name === active.name
              return (
                <g key={c.name} onMouseEnter={() => setActiveByName(c.name)} className="cursor-pointer">
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={isActive ? 8.5 : c.featured ? 6 : 4.5}
                    fill={isActive ? '#d1b064' : c.featured ? '#5c8a63' : '#3c6b45'}
                    stroke="#0e130e"
                    strokeWidth="1"
                    style={{ transition: 'r 0.18s cubic-bezier(0.16,1,0.3,1), fill 0.18s ease' }}
                  />
                  <circle cx={c.x} cy={c.y} r={9} fill="none" stroke="#5c8a63" strokeWidth="1" opacity={isActive ? 0 : 0.3} style={{ transition: 'opacity 0.3s ease' }} />
                  {isActive && (
                    <motion.circle
                      cx={c.x}
                      cy={c.y}
                      fill="none"
                      stroke="#d1b064"
                      strokeWidth="1"
                      initial={{ r: 10, opacity: 0.6 }}
                      animate={{ r: 20, opacity: 0 }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                    />
                  )}
                </g>
              )
            })}
          </svg>

          {/* HTML label layer — positioned from the same projected coordinates,
              so the pop-in card gets real typography instead of raw SVG <text>. */}
          <div className="absolute inset-0 pointer-events-none">
            <AnimatePresence>
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 6, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.94 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.2 }}
                className="absolute -translate-x-1/2 -translate-y-full"
                style={{
                  left: `${((active.x - VB_X) / VB_W) * 100}%`,
                  top: `${((active.y - VB_Y) / VB_H) * 100}%`,
                  marginTop: '-14px',
                }}
              >
                <div className="rounded-xl bg-gold text-ink px-4 py-2 shadow-xl shadow-black/40 whitespace-nowrap">
                  <div className="text-base font-bold leading-tight tracking-tight">
                    {active.name}
                    {active.tag && <span className="ml-1.5 text-[10px] font-bold bg-ink text-gold rounded px-1.5 py-0.5 align-middle">{active.tag}</span>}
                  </div>
                  <div className="font-sans font-bold text-[12px] uppercase tracking-[0.14em] text-ink/60 leading-tight">{active.state}</div>
                </div>
                <div className="w-2 h-2 bg-gold rotate-45 mx-auto -mt-1" />
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
          {CITIES.map((c) => (
            <button
              key={c.name}
              onMouseEnter={() => setActiveByName(c.name)}
              className={`text-sm font-semibold rounded-full px-3.5 py-1.5 border transition-colors ${
                c.name === active.name
                  ? 'border-gold text-gold bg-gold/10'
                  : 'border-white/15 text-mist hover:border-white/30 hover:text-cream'
              }`}
            >
              {c.name} <span className="opacity-50 font-normal">· {c.state}</span>
            </button>
          ))}
        </Reveal>

        <Reveal delay={0.28} className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="font-sans font-bold text-[12px] uppercase tracking-[0.16em] text-gold">Case Studies by Location</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { slug: 'case-study-solapur', place: 'Solapur', label: 'Home ground · HQ', tag: 'Towelling & terry' },
              { slug: 'case-study-bhilwara', place: 'Bhilwara, Rajasthan', label: 'Spinning & weaving mill', tag: 'Hard-water trial' },
              { slug: 'case-study-amravati', place: 'Amravati', label: 'Processing unit', tag: 'Vidarbha region' },
              { slug: 'case-study-ichalkaranji', place: 'Ichalkaranji', label: 'Powerloom processing unit', tag: 'Throughput trial' },
              { slug: 'case-study-vijayawada', place: 'Vijayawada, AP', label: 'Reactive dyeing unit', tag: 'Effluent trial' },
            ].map((cs) => (
              <Link
                key={cs.slug}
                to={`/blog/${cs.slug}`}
                className="group rounded-2xl border-2 border-white/12 bg-white/[0.04] p-5 hover:border-gold/60 hover:bg-white/[0.07] transition-colors shadow-lg shadow-black/20"
              >
                <span className="font-sans font-bold text-[11px] uppercase tracking-[0.14em] text-gold">{cs.tag}</span>
                <div className="mt-2 font-bold text-cream group-hover:text-gold transition-colors">{cs.place}</div>
                <div className="text-xs text-mist mt-1">{cs.label}</div>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold/80 group-hover:gap-2 transition-all">
                  Read <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
