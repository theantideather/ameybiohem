import { useEffect, useRef } from 'react'

// Molecular-network ambient background: nodes drift, nearby nodes link.
export default function ParticleField({ className = '', density = 0.00009, accent = '#5c8a63' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, nodes, raf
    let mouse = { x: -9999, y: -9999 }

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio
      height = canvas.height = canvas.offsetHeight * devicePixelRatio
      const count = Math.min(90, Math.floor(width * height * density))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        r: (Math.random() * 1.4 + 0.6) * devicePixelRatio,
      }))
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = (e.clientX - rect.left) * devicePixelRatio
      mouse.y = (e.clientY - rect.top) * devicePixelRatio
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)
      const linkDist = 140 * devicePixelRatio

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < linkDist) {
            ctx.globalAlpha = (1 - d / linkDist) * 0.35
            ctx.strokeStyle = accent
            ctx.lineWidth = 0.6 * devicePixelRatio
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        const dm = Math.hypot(n.x - mouse.x, n.y - mouse.y)
        if (dm < linkDist * 1.4) {
          ctx.globalAlpha = (1 - dm / (linkDist * 1.4)) * 0.5
          ctx.strokeStyle = accent
          ctx.lineWidth = 0.7 * devicePixelRatio
          ctx.beginPath()
          ctx.moveTo(n.x, n.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }

      ctx.globalAlpha = 0.85
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = accent
        ctx.fill()
      }
      ctx.globalAlpha = 1
      if (!reduced) raf = requestAnimationFrame(step)
    }

    resize()
    step() // draw one static frame either way; reduced motion just skips the loop
    window.addEventListener('resize', resize)
    if (!reduced) window.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      if (!reduced) window.removeEventListener('mousemove', onMove)
    }
  }, [density, accent])

  return <canvas ref={canvasRef} className={className} />
}
