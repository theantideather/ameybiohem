import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useSpringNumber } from '../hooks/useSpringNumber'

export default function DonutChart({ value, max = 100, label, sublabel, color = '#3c6b45', size = 152, stroke = 14 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-10% 0px' })
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const pct = Math.min(1, value / max)
  const animated = useSpringNumber(inView ? value : 0, { damping: 24, stiffness: 120 })

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} fill="none" />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={color}
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            animate={{ strokeDashoffset: inView ? c * (1 - pct) : c }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-2xl font-semibold text-cream tabular-nums">
            {Math.round(animated)}
            <span className="text-sm text-mist">%</span>
          </span>
        </div>
      </div>
      <div>
        <div className="text-sm font-medium text-cream">{label}</div>
        {sublabel && <div className="text-xs text-mist mt-0.5 max-w-[160px]">{sublabel}</div>}
      </div>
    </div>
  )
}
