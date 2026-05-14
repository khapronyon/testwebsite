import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/65" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-ocra text-xs tracking-[0.35em] uppercase font-body mb-5">
          Roma, dal 1987
        </p>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-cream leading-[1.05] mb-6">
          Osteria<br />della Quercia
        </h1>
        <p className="text-cream/75 font-body text-base sm:text-lg mb-10 max-w-md leading-relaxed">
          Un viaggio nei sapori autentici della cucina romana,<br className="hidden sm:block" />
          tra tradizione millenaria e ricerca continua.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-8 py-3.5 bg-terracotta text-cream text-xs tracking-widest uppercase font-body hover:bg-terracotta/85 transition-colors duration-200"
          >
            Prenota un tavolo
          </a>
          <Link
            to="/menu"
            className="px-8 py-3.5 border border-cream/70 text-cream text-xs tracking-widest uppercase font-body hover:bg-cream hover:text-dark-green transition-colors duration-200"
          >
            Scopri il menù
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50">
        <span className="text-xs tracking-widest uppercase font-body">Scorri</span>
        <div className="w-px h-10 bg-cream/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-cream/70 h-full animate-[slideDown_1.6s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  )
}
