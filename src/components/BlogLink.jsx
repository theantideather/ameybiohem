import { Link } from 'react-router-dom'

const TONES = {
  lime: 'border-lime/40 text-lime hover:bg-lime/10 hover:border-lime',
  gold: 'border-gold/40 text-gold hover:bg-gold/10 hover:border-gold',
}

// Standard "read the article" pill, bordered and filled on hover so it
// reads as clickable, not just a stray line of coloured text.
export default function BlogLink({ to, tone = 'lime', children, className = '' }) {
  return (
    <Link
      to={to}
      className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold rounded-full border px-4 py-2 transition-colors ${TONES[tone] || TONES.lime} ${className}`}
    >
      {children} <span aria-hidden>→</span>
    </Link>
  )
}
