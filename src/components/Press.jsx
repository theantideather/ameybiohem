import Reveal from './Reveal'
import Eyebrow from './Eyebrow'
import articleShot from '../assets/press/industry-outlook-article.png'

export default function Press() {
  return (
    <section className="relative bg-bone text-ink py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <Eyebrow tone="pine">As Featured In</Eyebrow>
          <h2 className="text-display-md text-3xl md:text-4xl mt-4 font-bold tracking-tight">
            Recognised across the industry.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <a
            href="https://www.theindustryoutlook.com/manufacturing/vendor/-amey-chemtech-a-reliable-chemical-solution-provider-for-the-textile-industry-cid-6598.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-[28px] border-2 border-ink/15 bg-white p-2 hover:border-gold/60 transition-colors duration-500 shadow-xl shadow-ink/5"
          >
            <div className="rounded-[22px] border border-ink/10 p-8 md:p-12 grid md:grid-cols-[1fr_0.9fr] gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-sans font-bold text-[12px] uppercase tracking-[0.2em] text-ink/40 border border-ink/15 rounded-full px-3 py-1">
                    Industry Outlook
                  </span>
                  <span className="font-sans font-bold text-[12px] uppercase tracking-[0.2em] text-ink/30">December 2022</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight group-hover:text-pine transition-colors">
                  "Amey Chemtech: A Reliable Chemical Solution Provider for the Textile Industry"
                </h3>
                <p className="mt-5 text-ink/65 leading-relaxed italic">
                  "With powerful tools, experience, and innovation, we are able to solve the challenges of
                  textile manufacturing companies since our inception."
                </p>
                <p className="mt-2 text-sm text-ink/50 font-medium">Jayant Gurram, Director, Amey ChemTech</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-pine group-hover:gap-3 transition-all">
                  Read the full feature <span aria-hidden>→</span>
                </span>
              </div>

              <div className="rounded-xl border border-ink/15 shadow-lg shadow-ink/10 overflow-hidden">
                <img
                  src={articleShot}
                  alt="Industry Outlook magazine feature on Amey Chemtech"
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </a>
        </Reveal>

        <Reveal delay={0.14} className="mt-6 text-center text-xs text-ink/40 max-w-lg mx-auto leading-relaxed">
          AmeyBioChem operates under the Amey group, the same Solapur-based manufacturer profiled here,
          established 1997, now bringing Greenaid Alpha &amp; Beta to reactive dyeing.
        </Reveal>
      </div>
    </section>
  )
}
