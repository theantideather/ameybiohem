import { useEffect, useState } from 'react'
import { useSpring, useMotionValueEvent } from 'framer-motion'

// Apple-style: animates from the current on-screen value toward a new
// target whenever it changes, using a critically-damped spring (no
// overshoot) so a mid-flight target change never causes a visible jump.
export function useSpringNumber(target, { damping = 26, stiffness = 220 } = {}) {
  const spring = useSpring(target, { damping, stiffness })
  const [value, setValue] = useState(target)

  useEffect(() => {
    spring.set(target)
  }, [target, spring])

  useMotionValueEvent(spring, 'change', (v) => setValue(v))

  return value
}
