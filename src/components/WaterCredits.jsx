import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

export default function WaterCredits() {
  return (
    <section className="relative bg-cream text-ink py-20 md:py-28 border-t border-ink/10">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-10">
          <Eyebrow tone="pine">Looking Ahead</Eyebrow>
          <h2 className="text-display-md text-3xl md:text-4xl mt-4 font-bold tracking-tight">
            Water is getting scarcer.
            <br />
            We're already saving it.
          </h2>
          <p className="mt-5 text-ink/65 text-lg leading-relaxed">
            India's textile clusters, Bhilwara included, already run on tightening water budgets, and
            global industrial water demand keeps climbing as data centres and AI compute scale up their own
            cooling and power needs. A dyehouse running Greenaid already uses meaningfully less water per
            batch, see the <Link to="/blog/case-study-bhilwara" className="text-pine underline underline-offset-2 hover:text-lime transition-colors">Bhilwara field trial</Link>, without changing machines.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="rounded-[28px] border border-ink/10 bg-white/70 p-6 md:p-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 text-center">
            <div className="flex-1">
              <div className="text-4xl">💧</div>
              <div className="mt-2 font-semibold text-sm">Rinse water used today</div>
              <div className="text-xs text-ink/50 mt-1">4–6 cycles, standard recipe</div>
            </div>
            <div className="text-2xl text-ink/25 rotate-90 sm:rotate-0">→</div>
            <div className="flex-1">
              <div className="text-4xl">🏭</div>
              <div className="mt-2 font-semibold text-sm">Greenaid batch</div>
              <div className="text-xs text-ink/50 mt-1">2–3 cycles, ~25–33% less water</div>
            </div>
            <div className="text-2xl text-ink/25 rotate-90 sm:rotate-0">→</div>
            <div className="flex-1">
              <div className="text-4xl">🌍</div>
              <div className="mt-2 font-semibold text-sm">Water credits, emerging</div>
              <div className="text-xs text-ink/50 mt-1">A carbon-credit-style model for water saved</div>
            </div>
          </div>

          <p className="mt-8 text-sm text-ink/60 leading-relaxed max-w-2xl mx-auto text-center">
            Water credits work like carbon credits: verified water savings become a tradeable, reportable
            number. It's an early-stage idea in India, and AmeyBioChem is following government-side
            conversations on it closely, since every batch already dyed with Greenaid is water saved that
            would count toward one.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
