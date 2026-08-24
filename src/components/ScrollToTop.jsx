import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Runs on every route change: jumps to a #hash target once React has
// actually rendered it, or scrolls to top for a plain path change.
// Without this, a hash link clicked from another page (a full navigation)
// lands at the top of the new page, the browser tries to jump to the
// anchor before React has mounted it, so the native jump silently fails.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const raf = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' })
      })
      return () => cancelAnimationFrame(raf)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
