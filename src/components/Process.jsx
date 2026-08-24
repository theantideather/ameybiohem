import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'
import BlogLink from './BlogLink'

const STEPS = [
  { n: '01', title: 'Alpha Addition', detail: 'Add Greenaid Alpha 1.0–1.5% owf to the dyebath, pH 6.5–7.5.' },
  { n: '02', title: 'Dye Addition', detail: 'Add dye at 40°C, run 10–15 minutes for uniform strike.' },
  { n: '03', title: 'Salt', detail: 'Add salt at 40–60% of your normal dosage.' },
  { n: '04', title: 'Soda Ash', detail: 'Add soda ash at 40–60% of your normal dosage to fix.' },
  { n: '05', title: 'Drain & Rinse', detail: 'Drain, hot rinse at 70–80°C for 10–15 minutes.' },
  { n: '06', title: 'Beta Bath', detail: 'Beta bath 40–60°C, 1.0–1.5% owf. Skip the separate fixative, soaping agent and softener, dose only acetic acid at 50%, 15–20 min.' },
  { n: '07', title: 'Final Rinse', detail: 'Final rinse at 40–50°C for 10 minutes. Ready for finishing.' },
]

export default function Process() {
  return (
    <section id="process" className="relative bg-ink py-28 md:py-36 overflow-hidden noise-overlay">
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal className="max-w-2xl mb-16">
          <Eyebrow tone="lime">Application Protocol</Eyebrow>
          <h2 className="font-semibold text-4xl md:text-5xl mt-4 leading-[1.05] tracking-tight text-cream">
            Same recipe. Seven steps.
            <br />
            No new training.
          </h2>
          <p className="mt-5 text-mist text-lg leading-relaxed">
            Greenaid drops into your existing exhaust dyeing sequence, same machines, same operators,
            same shift pattern. Just less chemical going in at each step.
          </p>
          <BlogLink to="/blog/application-protocol-walkthrough">Read the full step-by-step walkthrough</BlogLink>
        </Reveal>
      </div>

      <div className="relative">
        <div className="flex gap-5 overflow-x-auto px-6 pb-6 snap-x snap-mandatory max-w-7xl mx-auto no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="snap-start shrink-0 w-[280px] md:w-[300px] rounded-2xl border border-white/10 bg-white/[0.03] p-7 relative overflow-hidden group hover:border-lime/30 transition-colors"
            >
              <span className="font-semibold text-5xl text-white/10 group-hover:text-lime/20 transition-colors">{s.n}</span>
              <h3 className="font-semibold text-xl text-cream mt-4">{s.title}</h3>
              <p className="mt-3 text-sm text-mist leading-relaxed">{s.detail}</p>
              {i < STEPS.length - 1 && (
                <span className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-lime/40 text-lg">→</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-6">
        <p className="font-sans font-bold text-[12px] uppercase tracking-[0.16em] text-mist/60">Scroll to see the full sequence →</p>
      </div>
    </section>
  )
}
