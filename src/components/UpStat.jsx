import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useSpringNumber } from '../hooks/useSpringNumber'

export default function UpStat({ value, label, sublabel, color = '#3c6b45', size = 152 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-10% 0px' })
  const animated = useSpringNumber(inView ? value : 0, { damping: 24, stiffness: 120 })

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-3">
      <div className="relative grid place-items-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="absolute inset-0" viewBox="0 0 100 100">
          <path
            d="M20 75 L38 52 L54 64 L80 28"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="100"
            style={{
              strokeDashoffset: inView ? 0 : 100,
              transition: 'stroke-dashoffset 1.1s cubic-bezier(0.16,1,0.3,1) 0.1s',
            }}
          />
          <path
            d="M68 28 L80 28 L80 40"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.3s ease 1.1s' }}
          />
        </svg>
        <span className="text-2xl font-semibold text-cream tabular-nums relative">
          +{Math.round(animated)}
          <span className="text-sm text-mist">%</span>
        </span>
      </div>
      <div>
        <div className="text-sm font-medium text-cream">{label}</div>
        {sublabel && <div className="text-xs text-mist mt-0.5 max-w-[160px]">{sublabel}</div>}
      </div>
    </div>
  )
}
