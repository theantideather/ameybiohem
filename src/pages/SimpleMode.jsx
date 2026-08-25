import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Droplets, Zap, IndianRupee, CheckCircle2, Flame, Gauge } from 'lucide-react'
import jars from '../assets/photos/jars.png'
import { useSeo } from '../hooks/useSeo'

const BOUNCE = { type: 'spring', bounce: 0.4, duration: 0.7 }

function BigPie({ percent, color, label, sub, emoji }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: '-5% 0px' }}
      transition={BOUNCE}
      className="flex flex-col items-center gap-3 bg-white rounded-[2.5rem] border-4 border-ink/10 p-5 shadow-xl"
    >
      <div
        className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full grid place-items-center"
        style={{ background: `conic-gradient(${color} ${percent * 3.6}deg, #eee 0deg)` }}
      >
        <div className="absolute inset-3 bg-white rounded-full grid place-items-center">
          <span className="text-3xl sm:text-4xl font-black text-ink">{percent}%</span>
        </div>
      </div>
      <div className="text-center">
        <div className="text-lg sm:text-xl font-black text-ink">{emoji} {label}</div>
        <div className="text-sm text-ink/60 font-bold mt-1">{sub}</div>
      </div>
    </motion.div>
  )
}

function CompareBar({ icon: Icon, label, before, after, unit, color }) {
  const max = Math.max(before, after)
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={BOUNCE}
      className="bg-white rounded-3xl border-4 border-ink/10 p-5 shadow-md"
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5 text-ink" strokeWidth={2.5} />
        <span className="text-base font-black text-ink">{label}</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-ink/50 w-20 shrink-0">Before 😕</span>
          <div className="flex-1 h-6 bg-ink/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(before / max) * 100}%` }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="h-full bg-ink/30 rounded-full"
            />
          </div>
          <span className="text-xs font-bold text-ink/60 w-16 text-right shrink-0">{before}{unit}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-ink/50 w-20 shrink-0">After 🎉</span>
          <div className="flex-1 h-6 bg-ink/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(after / max) * 100}%` }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="h-full rounded-full"
              style={{ background: color }}
            />
          </div>
          <span className="text-xs font-bold text-ink w-16 text-right shrink-0">{after}{unit}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function SimpleMode() {
  useSeo({
    title: 'Greenaid, Easy View | AmeyBioChem',
    description: 'A simple, visual walkthrough of what Greenaid Alpha & Beta save on salt, water and fuel.',
    path: '/',
  })
  return (
    <div className="min-h-screen bg-lime-2 text-ink">
      {/* Simple top bar */}
      <div className="sticky top-0 z-20 bg-ink text-cream px-4 py-4 flex items-center justify-between shadow-lg">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="text-lg font-black">Greenaid, Easy View</span>
        </Link>
        <Link
          to="/"
          className="text-xs sm:text-sm font-bold bg-white/15 hover:bg-white/25 rounded-full px-4 py-2 transition-colors"
        >
          Full Website →
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-5 py-10 sm:py-14 space-y-14">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={BOUNCE}
          className="text-center"
        >
          <div className="text-6xl mb-3">🧵</div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight text-ink">
            Same Machine.
            <br />
            Less Chemical.
            <br />
            More Money Saved.
          </h1>
          <p className="mt-5 text-lg sm:text-xl font-bold text-ink/70 max-w-lg mx-auto">
            Add Greenaid to your dyeing. Use less salt, less soda, less water.
            Get the same beautiful colour, for less money.
          </p>
        </motion.div>

        {/* Product image, simple */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={BOUNCE}
          className="rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl"
        >
          <img src={jars} alt="Greenaid Alpha and Beta drums" className="w-full h-auto" />
        </motion.div>

        {/* Big simple pies */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-8">What You Save 👇</h2>
          <div className="grid grid-cols-2 gap-5">
            <BigPie percent={60} color="#3c6b45" label="Less Salt" sub="& Soda too" emoji="🧂" />
            <BigPie percent={25} color="#b8923a" label="Less Water" sub="every batch" emoji="💧" />
            <BigPie percent={22} color="#c96b3c" label="Less Fuel" sub="boiler & steam" emoji="🔥" />
            <BigPie percent={20} color="#3c6b45" label="Better Colour" sub="deeper shade" emoji="🎨" />
          </div>
        </div>

        {/* Before vs After, plain numbers */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-2">Before vs After 📊</h2>
          <p className="text-center text-ink/60 font-bold mb-8">Same machine. Same operator. Real numbers.</p>
          <div className="space-y-4">
            <CompareBar icon={Gauge} label="Rinse Cycles Needed" before={5} after={3} unit="x" color="#3c6b45" />
            <CompareBar icon={Flame} label="Batch Cycle Time" before={100} after={78} unit="%" color="#c96b3c" />
            <CompareBar icon={CheckCircle2} label="First-Time-Right Batches" before={85} after={96} unit="%" color="#b8923a" />
          </div>
        </div>

        {/* Energy card, simple diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={BOUNCE}
          className="bg-white rounded-[2.5rem] border-4 border-ink/10 p-7 shadow-xl"
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="text-4xl">⚡</span>
            <h3 className="text-xl sm:text-2xl font-black text-ink text-center">Less Time On Fire = Less Money Burned</h3>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
            <div className="text-center">
              <div className="text-4xl">🔥⏱️</div>
              <div className="text-xs font-bold text-ink/60 mt-1">Shorter Cycle</div>
            </div>
            <div className="text-2xl text-ink/30">→</div>
            <div className="text-center">
              <div className="text-4xl">⛽↓</div>
              <div className="text-xs font-bold text-ink/60 mt-1">Less Fuel Burned</div>
            </div>
            <div className="text-2xl text-ink/30">→</div>
            <div className="text-center">
              <div className="text-4xl">💰</div>
              <div className="text-xs font-bold text-ink/60 mt-1">Lower Power Bill</div>
            </div>
          </div>
          <p className="text-center text-sm text-ink/50 font-bold mt-4">
            Every batch runs ~22% shorter on the boiler, so you use less fuel and power for the exact same cloth.
          </p>
        </motion.div>

        {/* Money card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={BOUNCE}
          className="bg-gold rounded-[2.5rem] border-4 border-ink/10 p-8 sm:p-10 text-center shadow-xl"
        >
          <IndianRupee className="w-10 h-10 mx-auto text-ink mb-2" strokeWidth={3} />
          <div className="text-5xl sm:text-6xl font-black text-ink">₹31,500</div>
          <div className="text-lg sm:text-xl font-bold text-ink/70 mt-2">Saved Every Shift</div>
          <div className="text-sm font-bold text-ink/50 mt-1">(Real number from real factories)</div>
        </motion.div>

        {/* Simple 4-step */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-8">How It Works 👇</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { n: '1', text: 'Add Greenaid Alpha to your dyebath', icon: Droplets },
              { n: '2', text: 'Dye your cloth like you always do', icon: CheckCircle2 },
              { n: '3', text: 'Add Greenaid Beta after dyeing', icon: Droplets },
              { n: '4', text: 'Done! Less chemical used, same great colour', icon: Zap },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ ...BOUNCE, delay: i * 0.08 }}
                className="flex items-center gap-4 bg-white rounded-3xl border-4 border-ink/10 p-5 shadow-md"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-forest text-cream grid place-items-center text-xl font-black">
                  {step.n}
                </div>
                <p className="text-base sm:text-lg font-bold text-ink">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Big call-to-action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={BOUNCE}
          className="text-center pb-6"
        >
          <div className="text-2xl sm:text-3xl font-black mb-6">Want to Try It Free? 🎉</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="tel:+919021791234"
              className="flex items-center justify-center gap-3 bg-forest text-cream rounded-full px-8 py-5 text-lg font-black shadow-lg hover:scale-105 transition-transform"
            >
              <Phone className="w-6 h-6" strokeWidth={2.5} />
              Call Us Now
            </a>
            <a
              href="https://wa.me/919021791234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-full px-8 py-5 text-lg font-black shadow-lg hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-6 h-6" strokeWidth={2.5} />
              WhatsApp Us
            </a>
          </div>
          <p className="mt-6 text-sm font-bold text-ink/50">+91 90217 91234 · AmeyBioChem, Solapur</p>
        </motion.div>
      </div>
    </div>
  )
}
