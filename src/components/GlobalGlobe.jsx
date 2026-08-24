import { useEffect, useRef, useCallback } from 'react'
import createGlobe from 'cobe'

const MARKERS = [
  { id: 'solapur', location: [17.6599, 75.9064] }, // HQ
  { id: 'mumbai', location: [19.076, 72.8777] },
  { id: 'dhaka', location: [23.8103, 90.4125] },
  { id: 'prato', location: [43.8777, 11.0955] }, // Italy textile district
]

const ARCS = [
  { id: 'india-bangladesh', from: [19.076, 72.8777], to: [23.8103, 90.4125] },
  { id: 'india-europe', from: [19.076, 72.8777], to: [43.8777, 11.0955] },
]

export default function GlobalGlobe({ className = '' }) {
  const canvasRef = useRef(null)
  const pointerInteracting = useRef(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  const handlePointerDown = useCallback((e) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing'
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerup', handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe = null
    let animationId
    let phi = 3.6 // start facing the India / Indian Ocean side

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.28,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 3.5,
        baseColor: [0.09, 0.13, 0.1], // deep hunter-green-black, matches --color-ink
        markerColor: [0.82, 0.69, 0.39], // antique gold
        glowColor: [0.24, 0.42, 0.27], // muted hunter green
        markerElevation: 0.06,
        markers: MARKERS.map((m) => ({ location: m.location, size: 0.045, id: m.id })),
        arcs: ARCS.map((a) => ({ from: a.from, to: a.to, id: a.id })),
        arcColor: [0.82, 0.69, 0.39],
        arcWidth: 1.5,
        arcHeight: 0.3,
        opacity: 0.95,
      })

      function animate() {
        if (!isPausedRef.current) phi += 0.0022
        globe.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.28 + thetaOffsetRef.current + dragOffset.current.theta,
        })
        animationId = requestAnimationFrame(animate)
      }
      animate()

      setTimeout(() => canvas && (canvas.style.opacity = '1'))
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          opacity: 0,
          transition: 'opacity 1.2s ease',
          contain: 'layout paint size',
        }}
      />
    </div>
  )
}
