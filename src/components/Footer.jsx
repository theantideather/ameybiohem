import { Link } from 'react-router-dom'
import Logo from './Logo'
import Reveal from './Reveal'

const COLS = [
  {
    title: 'Product',
    links: [
      { label: 'Greenaid Alpha', href: '/product' },
      { label: 'Greenaid Beta', href: '/product' },
      { label: 'Application Protocol', href: '/#process' },
      { label: 'Impact Data', href: '/impact' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'The Journal', href: '/blog' },
      { label: 'Savings Calculator', href: '/#calculator' },
      { label: 'Careers', href: '/careers' },
      { label: 'Request a Trial', href: '/#contact' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'ameychemtech@gmail.com', href: 'mailto:ameychemtech@gmail.com' },
      { label: '+91 90217 91234', href: 'tel:+919021791234' },
    ],
  },
]

const HUBS = ['Tiruppur', 'Surat', 'Ichalkaranji', 'Ludhiana', 'Erode', 'Coimbatore', 'Ahmedabad', 'Panipat']

export default function Footer() {
  return (
    <footer className="relative bg-void border-t border-white/10 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo size={32} />
              <span className="leading-none">
                <span className="block text-[15px] font-semibold text-cream">Greenaid</span>
                <span className="font-brand block text-[27px] leading-none text-gold -mt-1">AmeyBioChem</span>
              </span>
            </div>
            <p className="mt-5 text-mist text-sm leading-relaxed max-w-xs">
              A two-part reactive-dyeing system engineered to cut salt, soda, water and energy -
              without touching your machines or your shade.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {HUBS.map((h) => (
                <span
                  key={h}
                  className="font-sans font-bold text-[12px] uppercase tracking-wider text-mist/70 border border-white/10 rounded-full px-2.5 py-1"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans font-bold text-[12px] uppercase tracking-[0.18em] text-lime mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith('/') && !l.href.includes('#') ? (
                      <Link to={l.href} className="text-sm text-mist hover:text-cream transition-colors">
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} className="text-sm text-mist hover:text-cream transition-colors">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans font-bold text-[12px] uppercase tracking-wider text-mist/50">
            © {new Date().getFullYear()} AmeyBioChem · Ref GA-B / TDS-003 · Proprietary Formulations
          </p>
          <p className="font-sans font-bold text-[12px] uppercase tracking-wider text-mist/50">
            Green Chemistry · Smarter Dyehouses
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 font-semibold text-[18vw] leading-none text-white/[0.03] whitespace-nowrap select-none">
        GREENAID
      </div>
    </footer>
  )
}
