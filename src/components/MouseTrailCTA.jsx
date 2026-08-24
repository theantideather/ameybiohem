import { useEffect, useRef } from 'react'
import Reveal from './Reveal'

function TrailCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let raf
    let w, h

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio
      h = canvas.height = canvas.offsetHeight * devicePixelRatio
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const x = (e.clientX - rect.left) * devicePixelRatio
      const y = (e.clientY - rect.top) * devicePixelRatio
      if (x < 0 || y < 0 || x > w || y > h) return
      for (let i = 0; i < 2; i++) {
        particles.push({
          x, y,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.3,
          life: 1,
          r: Math.random() * 3 + 1.5,
          gold: Math.random() > 0.6,
        })
      }
      if (particles.length > 220) particles.splice(0, particles.length - 220)
    }
    canvas.addEventListener('mousemove', onMove)

    const step = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.018
        if (p.life <= 0) return
        ctx.globalAlpha = p.life
        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(0.01, p.r * p.life), 0, Math.PI * 2)
        ctx.fillStyle = p.gold ? '#b8923a' : '#5c8a63'
        ctx.shadowBlur = 8
        ctx.shadowColor = p.gold ? '#b8923a' : '#5c8a63'
        ctx.fill()
      })
      ctx.shadowBlur = 0
      ctx.globalAlpha = 1
      particles = particles.filter((p) => p.life > 0)
      raf = requestAnimationFrame(step)
    }
    step()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto" />
}

export default function MouseTrailCTA() {
  return (
    <section id="contact" className="relative bg-ink py-32 md:py-44 overflow-hidden cursor-crosshair">
      <div className="absolute inset-0 grid-lines opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-forest/50 blur-[160px]" />
      <TrailCanvas />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <span className="font-sans font-bold text-[11px] uppercase tracking-[0.22em] text-lime">Move your cursor</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-semibold text-5xl md:text-7xl mt-6 leading-[1.02] tracking-tight text-cream">
            Ready to run a
            <br />
            <span className="text-gradient-lime">trial batch?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 text-lg text-mist max-w-xl mx-auto leading-relaxed">
            Send us your fabric, your machine specs and your standard recipe. We'll run a trial batch
            alongside your conventional process — same shift, side by side.
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:ameychemtech@gmail.com?subject=Trial%20Batch%20Request%20—%20Greenaid%20Alpha%20%26%20Beta"
            className="inline-flex items-center gap-2 bg-lime text-ink font-medium rounded-full px-8 py-4 hover:bg-lime-2 transition-colors"
          >
            ameychemtech@gmail.com
          </a>
          <a
            href="tel:+919021791234"
            className="inline-flex items-center gap-2 text-cream font-medium rounded-full px-8 py-4 border border-white/15 hover:border-white/30 hover:bg-white/[0.03] transition-colors"
          >
            +91 90217 91234
          </a>
        </Reveal>
      </div>
    </section>
  )
}
