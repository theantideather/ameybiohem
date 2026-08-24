const TONES = {
  lime: 'text-lime',
  gold: 'text-gold',
  mist: 'text-mist',
  pine: 'text-pine',
}

// A tiny droplet glyph + a legible label in the site's own sans, used at the
// top of every section instead of a squint-sized monospace tag. Repeating
// this one mark everywhere is the site's connecting thread.
export default function Eyebrow({ children, tone = 'lime', className = '' }) {
  const color = TONES[tone] || TONES.lime
  return (
    <div className={`inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.08em] ${color} ${className}`}>
      <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
        <path d="M5 0C5 0 0 5.6 0 8.4C0 10.4 2.2 12 5 12C7.8 12 10 10.4 10 8.4C10 5.6 5 0 5 0Z" />
      </svg>
      <span>{children}</span>
    </div>
  )
}
