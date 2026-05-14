import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'La Cucina', to: '/cucina' },
  { label: 'Il Menù', to: '/menu' },
  { label: 'La Cantina', to: '/cantina' },
  { label: 'Brunch', to: '/brunch' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Novità', to: '/news' },
  { label: 'Info & Prenotazioni', to: '/contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-cream/96 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`font-display text-xl tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-terracotta' : 'text-cream'
          }`}
        >
          Osteria della Quercia
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-xs tracking-widest uppercase font-body font-700 transition-colors duration-200 ${
                  scrolled
                    ? isActive
                      ? 'text-terracotta'
                      : 'text-stone-700 hover:text-terracotta'
                    : isActive
                    ? 'text-ocra'
                    : 'text-cream/85 hover:text-cream'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="#"
            className="ml-2 px-5 py-2.5 bg-terracotta text-cream text-xs tracking-widest uppercase font-body hover:bg-terracotta/85 transition-colors duration-200"
          >
            Prenota
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="xl:hidden flex items-center gap-4">
          <a
            href="#"
            className="px-4 py-2 bg-terracotta text-cream text-xs tracking-widest uppercase font-body"
          >
            Prenota
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`transition-colors ${scrolled ? 'text-stone-800' : 'text-cream'}`}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        } bg-cream border-t border-stone-200`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-xs tracking-widest uppercase font-body ${
                  isActive ? 'text-terracotta' : 'text-stone-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
