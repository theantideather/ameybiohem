import Reveal from './Reveal'
import jars from '../assets/photos/jars.png'
import Eyebrow from './Eyebrow'

const CARDS = [
  {
    tag: 'Component 01',
    name: 'Greenaid Alpha',
    role: 'Dyebath Conditioner',
    dose: '1.0–1.5% owf · added at dyebath start',
    desc:
      'A single dosage at the start of the dyebath that lets you drop salt and soda ash 40–60% while reducing the wetting, chelating, leveling and anti-foaming agents you’d normally dose separately — by roughly half.',
    points: ['Salt reduced 40–60%', 'Soda ash reduced 40–60%', 'Wetting / chelating / leveling / anti-foam ↓ ~50%'],
    spec: [
      ['Appearance', 'Clear to pale straw liquid'],
      ['pH (1% aqueous)', '6.5 – 7.5'],
      ['Viscosity @ 25°C', '80 – 150 mPa·s'],
      ['Active Content', '≥ 35%'],
    ],
    accent: 'lime',
  },
  {
    tag: 'Component 02',
    name: 'Greenaid Beta',
    role: 'Fastness Enhancer',
    dose: '1.0–1.5% owf · applied post-dyeing',
    desc:
      'Applied after dyeing, Beta lets every after-treatment auxiliary — fixative, soaping agent, acetic acid, softener — run at half its normal dosage, while lifting wash and rub fastness by up to a full ISO 105 grade.',
    points: ['After-treatment auxiliaries ↓ ~50%', 'Wash / rub fastness +0.5–1.0 grade', 'Shade depth (K/S) +20%'],
    spec: [
      ['Appearance', 'Clear to pale yellow liquid'],
      ['Ionic Character', 'Weakly cationic'],
      ['Bath Temperature', '40 – 60°C, 15–20 min'],
      ['Active Content', '≥ 35%'],
    ],
    accent: 'gold',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="relative bg-cream text-ink py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-16 md:mb-20">
          <Eyebrow tone="pine">The System</Eyebrow>
          <h2 className="font-semibold text-4xl md:text-5xl mt-4 leading-[1.05] tracking-tight">
            Two drums. One dyebath.
            <br />
            Half the auxiliary shelf.
          </h2>
          <p className="mt-5 text-ink/60 text-lg leading-relaxed">
            Greenaid works in two applications across a single reactive dyeing cycle — nothing added to your
            machine, nothing changed in your recipe structure. Just fewer chemicals doing more work.
          </p>
        </Reveal>

        <Reveal className="mb-8 rounded-[28px] overflow-hidden bg-black">
          <img src={jars} alt="Greenaid Alpha and Beta containers" className="w-full h-auto max-h-[420px] object-cover object-top" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {CARDS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.12}>
              <div className="group relative h-full rounded-[28px] border border-ink/10 bg-white/70 p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-ink/20 hover:shadow-2xl hover:shadow-ink/5 hover:-translate-y-1">
                <div
                  className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-50 ${
                    c.accent === 'lime' ? 'bg-lime' : 'bg-gold'
                  }`}
                />
                <div className="relative">
                  <span className="font-sans font-bold text-[12px] uppercase tracking-[0.2em] text-ink/40">{c.tag}</span>
                  <h3 className="font-semibold text-3xl mt-3 tracking-tight">{c.name}</h3>
                  <p className={`mt-1 font-medium ${c.accent === 'lime' ? 'text-pine' : 'text-[#8a6a1f]'}`}>{c.role}</p>
                  <p className="mt-2 font-sans font-bold text-[11px] uppercase tracking-wide text-ink/40">{c.dose}</p>

                  <p className="mt-6 text-ink/70 leading-relaxed">{c.desc}</p>

                  <ul className="mt-7 space-y-3">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                            c.accent === 'lime' ? 'bg-pine' : 'bg-[#8a6a1f]'
                          }`}
                        />
                        <span className="text-ink/80">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 pt-6 border-t border-ink/10 grid grid-cols-2 gap-4">
                    {c.spec.map(([k, v]) => (
                      <div key={k}>
                        <div className="font-sans font-bold text-[12px] uppercase tracking-wider text-ink/40">{k}</div>
                        <div className="text-sm font-medium text-ink mt-0.5">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8 rounded-[28px] border border-ink/10 bg-forest text-cream p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 justify-between">
          <div>
            <span className="font-sans font-bold text-[12px] uppercase tracking-[0.2em] text-lime">Trade Secret</span>
            <p className="mt-2 text-cream/80 max-w-xl leading-relaxed">
              The formulation behind Alpha &amp; Beta is proprietary to AmeyBioChem. We disclose performance,
              protocol and dosage in full — never composition.
            </p>
          </div>
          <div className="flex gap-8 shrink-0">
            <div>
              <div className="font-semibold text-2xl text-lime">6 mo</div>
              <div className="font-sans font-bold text-[12px] uppercase tracking-wider text-cream/50 mt-1">Shelf Life · 5–35°C</div>
            </div>
            <div>
              <div className="font-semibold text-2xl text-lime">55L / 220L</div>
              <div className="font-sans font-bold text-[12px] uppercase tracking-wider text-cream/50 mt-1">HDPE Carboys</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
