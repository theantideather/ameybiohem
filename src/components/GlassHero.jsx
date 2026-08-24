import { motion } from 'framer-motion'
import { Sparkles, ArrowUpRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import fabricsGreen from '../assets/photos/fabrics-green.jpg'

function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mx-auto mb-5 w-fit"
    >
      <Sparkles className="w-4 h-4 text-gold" />
      <span className="text-[14px] font-medium text-cream">Trial Batches Open — Book Yours</span>
    </motion.div>
  )
}

function BottomLeftCard() {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 p-4 lg:p-5 rounded-[1.5rem] lg:rounded-[2rem] bg-white/15 backdrop-blur-xl border border-white/15 flex flex-col gap-3 min-w-[150px] lg:min-w-[180px] w-fit"
    >
      <div>
        <div className="text-2xl md:text-3xl font-bold text-cream tracking-tight">15+</div>
        <div className="text-[11px] md:text-xs font-semibold text-cream/70 uppercase tracking-wider mt-1">
          Districts Across India
        </div>
      </div>
      <motion.a
        href="/#contact"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center bg-gold rounded-full pl-1.5 pr-4 py-1.5 gap-2 hover:bg-gold-2 transition-colors self-start group"
      >
        <div className="bg-black/10 p-1 rounded-full flex items-center justify-center">
          <ArrowUpRight className="w-3.5 h-3.5 text-ink" />
        </div>
        <span className="text-[13px] font-semibold text-ink">Book a Trial</span>
      </motion.a>
    </motion.div>
  )
}

function BottomRightCorner() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="absolute bottom-0 right-0 p-4 pt-6 pl-8 sm:p-5 sm:pt-7 sm:pl-10 md:p-6 md:pt-8 md:pl-12 bg-ink/85 backdrop-blur-xl rounded-tl-[1.75rem] sm:rounded-tl-[2.25rem] flex items-center gap-3 sm:gap-4"
    >
      {/* Concave corner masks — make the glass panel read as cut into the
          rounded container corner, rather than just a rectangle stacked on top. */}
      <div className="absolute -top-[1.75rem] sm:-top-[2.25rem] right-0 w-[1.75rem] sm:w-[2.25rem] h-[1.75rem] sm:h-[2.25rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="rgba(14,19,14,0.85)" />
        </svg>
      </div>
      <Link
        to="/blog"
        className="bg-white/10 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-white/15 shrink-0 hover:bg-white/15 transition-colors"
      >
        <ArrowUpRight className="w-5 h-5 text-gold" />
      </Link>
      <div>
        <Link to="/blog" className="text-[15px] md:text-lg font-semibold text-cream hover:text-gold transition-colors">
          Technical Dossier
        </Link>
        <Link
          to="/#impact"
          className="mt-1 flex items-center gap-1 text-mist hover:text-cream transition-colors cursor-pointer"
        >
          <span className="text-[11px] md:text-[13px] font-medium">See the data</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function GlassHero() {
  return (
    <section className="w-full px-3 md:px-5 py-3 md:py-5 bg-ink">
      <div className="relative w-full max-w-[1536px] mx-auto aspect-[16/10] md:aspect-[21/9] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden">
        <motion.img
          src={fabricsGreen}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-center">
          <div className="w-full flex flex-col items-center max-w-3xl">
            <HeroBadge />
            <motion.h2
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-4 tracking-tight leading-[1.05]"
            >
              See it work, before you switch.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-cream/80 leading-relaxed max-w-xl font-medium"
            >
              Book a side-by-side trial batch — your fabric, your machine, your recipe against ours.
              No commitment until you see the numbers yourself.
            </motion.p>
          </div>
        </div>

        <BottomLeftCard />
        <BottomRightCorner />
      </div>
    </section>
  )
}
