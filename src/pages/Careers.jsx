import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import fabricsGreen from '../assets/photos/fabrics-green.jpg'

const ROLES = [
  {
    title: 'Application Technician, Reactive Dyeing',
    type: 'Full-Time · Field-Based',
    locations: 'Tiruppur, Surat, Ichalkaranji, Ludhiana, Erode/Coimbatore',
    summary:
      'You run the trial batch. You stand at the machine with the dyehouse team, dose Alpha and Beta to protocol, and walk them through the first live comparison against their own recipe.',
    duties: [
      'Execute the 7-step application protocol on customer machines, start to finish',
      'Take dosage, temperature and timing readings; document before/after results',
      'Troubleshoot shade, fastness or handle issues on the floor in real time',
      'Train dyehouse operators to run Alpha & Beta independently after handover',
      'Feed field data back to AmeyBioChem for the technical dossier',
    ],
    requirements: [
      'B.Sc / B.Tech in Textile Chemistry, Applied Chemistry or Dyeing & Printing',
      '1–4 years on the floor in exhaust reactive dyeing, jet, soft-flow or winch machines',
      'Comfortable reading a dyehouse recipe and adjusting on the spot',
      'Willing to travel within your assigned cluster; own two-wheeler preferred',
    ],
  },
  {
    title: 'Technical Sales Executive',
    type: 'Full-Time · Field-Intensive',
    locations: 'Pan-India · Multiple Openings',
    summary:
      'You pitch Greenaid to dyehouse owners and production managers, with the numbers, not just the pitch, and set up the trial batches that close the deal.',
    duties: [
      'Build and work a territory of textile dyehouses and processing units',
      'Present cost, water, energy and throughput savings with real batch data',
      'Coordinate trial batches with the Application Technician team',
      'Own the relationship from first call through to repeat orders',
    ],
    requirements: [
      'B.Sc / B.Tech in Textile Chemistry, Applied Chemistry or Chemical Engineering',
      '2–6 years in textile chemical sales or technical service',
      'Working knowledge of reactive exhaust dyeing, electrolyte, alkali, machine types',
      'Hunger to build a territory from the ground up',
    ],
  },
]

export default function Careers() {
  return (
    <div className="bg-black text-cream min-h-screen pb-24">
      <div className="relative pt-36 pb-16 overflow-hidden border-b border-white/10">
        <img src={fabricsGreen} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <Reveal>
            <Eyebrow tone="lime">We're Hiring</Eyebrow>
            <h1 className="text-display-md text-5xl md:text-6xl mt-4 font-semibold tracking-tight">
              Take Greenaid to
              <br />
              every dyehouse in India.
            </h1>
            <p className="mt-5 text-mist text-lg leading-relaxed max-w-xl">
              AmeyBioChem is building out its field team, technicians who can run a trial batch on the
              floor, and sales executives who can walk a factory owner through what it saves. Full training
              provided on Greenaid Alpha &amp; Beta chemistry, protocol and objection handling.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="mt-16 space-y-8">
          {ROLES.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.08} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{role.title}</h2>
                  <p className="mt-1 font-sans font-bold text-[11px] uppercase tracking-wider text-lime">{role.type}</p>
                </div>
                <span className="font-sans font-bold text-[12px] uppercase tracking-wider text-mist border border-white/15 rounded-full px-3 py-1.5">
                  {role.locations}
                </span>
              </div>

              <p className="mt-6 text-mist leading-relaxed">{role.summary}</p>

              <div className="mt-7 grid sm:grid-cols-2 gap-8">
                <div>
                  <span className="font-sans font-bold text-[12px] uppercase tracking-[0.16em] text-mist">What You'll Do</span>
                  <ul className="mt-3 space-y-2.5">
                    {role.duties.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-cream/85">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-lime shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-sans font-bold text-[12px] uppercase tracking-[0.16em] text-mist">What We Need</span>
                  <ul className="mt-3 space-y-2.5">
                    {role.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-cream/85">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-mist">Compensation: competitive, discussed post-interview · Travel covered</p>
                <a
                  href={`mailto:ameychemtech@gmail.com?subject=Application, ${encodeURIComponent(role.title)}, [Your City]`}
                  className="inline-flex items-center gap-2 bg-lime text-black font-semibold rounded-full px-6 py-3 hover:bg-lime-2 transition-colors text-sm"
                >
                  Apply Now →
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center text-sm text-mist">
          Send your CV with subject "Application, [Role], [Your City]" to{' '}
          <a href="mailto:ameychemtech@gmail.com" className="text-lime hover:underline">ameychemtech@gmail.com</a>
        </Reveal>
      </div>
    </div>
  )
}
