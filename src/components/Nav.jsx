import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const LINKS = [
  { href: '/#calculator', label: 'Calculator' },
  { href: '/#solution', label: 'Product' },
  { href: '/#impact', label: 'Impact' },
  { href: '/blog', label: 'Journal' },
  { href: '/careers', label: 'Careers' },
  { href: '/#contact', label: 'Contact' },
]

const SPRING = { type: 'spring', bounce: 0, duration: 0.35 }

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-2.5' : 'py-5'}`}>
      <div
        className={`mx-auto max-w-7xl px-5 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'bg-black/70 backdrop-blur-2xl border border-white/10 rounded-2xl py-2.5 px-5 shadow-2xl shadow-black/50'
            : ''
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 group">
          <Logo size={32} />
          <span className="leading-none">
            <span className="block text-[17px] font-semibold tracking-tight text-cream">Greenaid</span>
            <span className="font-brand block text-[19px] leading-none text-gold -mt-0.5">AmeyBioChem</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-mist whitespace-nowrap">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="relative group py-1 hover:text-cream transition-colors">
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-lime transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <motion.a
          href="/#contact"
          whileTap={{ scale: 0.96 }}
          transition={SPRING}
          className="hidden md:inline-flex items-center gap-1.5 text-[13px] text-black bg-lime hover:bg-lime-2 transition-colors rounded-full px-4 py-2 font-semibold whitespace-nowrap shrink-0"
        >
          Book a Trial
        </motion.a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden w-9 h-9 grid place-items-center text-cream shrink-0"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} className="h-px bg-cream block" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-px bg-cream block" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="h-px bg-cream block" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mx-4 mt-2 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1 text-sm text-mist">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 px-2 border-b border-white/5 last:border-0">
                  {l.label}
                </a>
              ))}
              <a href="/#contact" onClick={() => setOpen(false)} className="mt-2 text-center rounded-full bg-lime text-black py-3 font-semibold">
                Book a Trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
