import { Link } from 'react-router-dom'

export default function SimpleModeToggle() {
  return (
    <Link
      to="/simple"
      className="absolute top-20 right-4 z-30 flex items-center gap-1.5 text-[11px] text-cream/90 bg-black/60 backdrop-blur-xl border border-white/15 hover:border-gold hover:text-gold transition-colors rounded-full pl-2.5 pr-3 py-2 font-semibold shadow-lg shadow-black/40"
      title="A simpler view of the same numbers"
    >
      <span className="text-sm leading-none">🌿</span>
      Simple Mode
    </Link>
  )
}
