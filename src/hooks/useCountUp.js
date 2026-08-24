import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function useCountUp(target, { duration = 1.6, decimals = 0, start = 0 } = {}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-10% 0px' })
  const [value, setValue] = useState(start)

  useEffect(() => {
    if (!inView) return
    let raf
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / (duration * 1000))
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(start + (target - start) * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration, start])

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString()
  return { ref, display, inView }
}
