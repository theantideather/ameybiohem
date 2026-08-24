import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

const AUXILIARIES = [
  ['Sodium Chloride / Sulphate', 'Electrolyte, dye exhaustion', '40 – 100 g/L', '16 – 60 g/L', '40–60%'],
  ['Sodium Carbonate', 'Soda ash, fixation activator', '8 – 20 g/L', '3 – 12 g/L', '40–60%'],
  ['Wetting Agent', 'Substrate penetration', '0.5 – 1.5 g/L', 'Integrated in Alpha', '~50%'],
  ['Chelating / Sequestering Agent', 'Removes Ca, Mg, trace metals', '0.5 – 1.5 g/L', 'Integrated in Alpha', '~50%'],
  ['Leveling / Migration Agent', 'Even dye strike', '0.5 – 2.0 g/L', 'Integrated in Alpha', '~50%'],
  ['Anti-Foaming Agent', 'Foam control', '0.1 – 0.5 g/L', 'Integrated in Alpha', '~50%'],
  ['Cationic Dye-Fixative', 'Wash fastness of residual dye', '1.0 – 2.0% owf', '0.5 – 1.0% owf', '~50%'],
  ['Soaping / Washing-Off Agent', 'Removes unfixed dye', '1.0 – 2.0 g/L', '0.5 – 1.0 g/L', '~50%'],
  ['Neutralising Agent (Acetic Acid)', 'Dyebath / fabric neutralisation', '0.5 – 1.5 g/L', '0.25 – 0.75 g/L', '~50%'],
  ['Textile Softener', 'Handle & drape restoration', '1.0 – 3.0% owf', '0.5 – 1.5% owf', '~50%'],
]

const EFFLUENT = [
  ['Conductivity', '12,000 – 25,000 μS/cm', '5,000 – 12,000 μS/cm', '40–60%'],
  ['Total Dissolved Solids', '8,000 – 18,000 mg/L', '3,500 – 9,000 mg/L', '40–55%'],
  ['Effluent pH (post-dyeing)', '10.5 – 11.5', '9.0 – 10.0', 'Reduced alkalinity'],
  ['Effluent Toxicity', 'Moderate to High', 'Low to Moderate', '~60%'],
  ['Rinse Cycles', '4 – 6', '2 – 3', '33–50% fewer'],
  ['Total Water per Batch', 'Baseline', '~25% less', 'Significant saving'],
]

function Table({ title, rows, cols }) {
  return (
    <div className="rounded-[28px] border border-ink/10 bg-white overflow-hidden">
      <div className="px-7 md:px-8 pt-7 pb-4">
        <span className="font-sans font-bold text-[12px] uppercase tracking-[0.18em] text-ink/40">{title}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[10px] sm:text-sm table-fixed sm:table-auto">
          <thead>
            <tr className="border-t border-ink/10 text-left">
              {cols.map((c) => (
                <th key={c} className="px-1.5 sm:px-7 md:px-8 py-2 sm:py-3 font-sans font-bold text-[8px] sm:text-[12px] uppercase tracking-tight sm:tracking-wider text-ink/40 whitespace-normal sm:whitespace-nowrap leading-tight">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r[0]} className={`border-t border-ink/8 ${i % 2 === 1 ? 'bg-ink/[0.02]' : ''}`}>
                {r.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-1.5 sm:px-7 md:px-8 py-1.5 sm:py-3.5 whitespace-normal sm:whitespace-nowrap leading-tight ${
                      ci === 0 ? 'font-medium text-ink' : ci === r.length - 1 ? 'font-mono text-pine font-semibold' : 'text-ink/60'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function SpecTables() {
  return (
    <section className="relative bg-bone text-ink py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <Eyebrow tone="pine">The Full Data Sheet</Eyebrow>
          <h2 className="text-display-md text-4xl md:text-5xl mt-4 font-semibold tracking-tight">
            Every dosage number,
            <br />
            written out in full.
          </h2>
          <p className="mt-5 text-ink/60 text-lg leading-relaxed">
            Exact dosage ranges from controlled trials across 0.5–4.0% owf shade depths, on 100% cotton
            single jersey and woven poplin. Confirm exact figures through a mill-specific trial. We keep
            the formulation to ourselves, everything else here is exactly what we measured.
          </p>
        </Reveal>

        <div className="space-y-8">
          <Reveal>
            <Table title="Auxiliary Dosage, Conventional vs Greenaid" cols={['Auxiliary', 'Function', 'Conventional', 'With Greenaid', 'Reduction']} rows={AUXILIARIES} />
          </Reveal>
          <Reveal delay={0.08}>
            <Table title="Effluent Quality, Conventional vs Greenaid" cols={['Parameter', 'Conventional', 'With Greenaid', 'Improvement']} rows={EFFLUENT} />
            <Link
              to="/blog/effluent-and-etp-load"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold rounded-full border border-pine/40 text-pine bg-pine/5 hover:bg-pine/10 hover:border-pine px-4 py-2 transition-colors"
            >
              Why this drops your ETP load too <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
