import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'La Cucina', to: '/cucina' },
  { label: 'Il Menù', to: '/menu' },
  { label: 'La Cantina', to: '/cantina' },
  { label: 'Brunch', to: '/brunch' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Novità ed eventi', to: '/news' },
  { label: 'Info & Prenotazioni', to: '/contatti' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (email) { setSent(true); setEmail('') }
  }

  return (
    <footer className="bg-stone-900 text-cream/70">
      <div className="max-w-screen-xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-2xl text-cream block mb-4">
              Osteria<br />della Quercia
            </Link>
            <p className="text-sm font-body leading-relaxed mb-6">
              Cucina romana autentica<br />nel cuore di Trastevere,<br />dal 1987.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {['instagram', 'facebook', 'tripadvisor'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-9 h-9 border border-cream/20 flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-colors duration-200"
                >
                  {social === 'instagram' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {social === 'facebook' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {social === 'tripadvisor' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 14.5a7.5 7.5 0 0 1-7.5-7.5 7.5 7.5 0 0 1 15 0 7.5 7.5 0 0 1-7.5 7.5z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-cream text-xs tracking-widest uppercase font-body mb-6">Esplora</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm font-body hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 className="text-cream text-xs tracking-widest uppercase font-body mb-6">Orari e contatti</h4>
            <div className="text-sm font-body space-y-2 mb-6">
              <p className="text-cream/90 font-bold">Pranzo</p>
              <p>Martedì – Venerdì: 12:30 – 15:00</p>
              <p>Sabato – Domenica: 12:00 – 15:30</p>
              <p className="text-cream/90 font-bold pt-2">Cena</p>
              <p>Martedì – Domenica: 19:30 – 23:30</p>
              <p className="text-cream/40 pt-2">Lunedì: chiuso</p>
            </div>
            <div className="text-sm font-body space-y-1">
              <p>Via della Quercia, 12</p>
              <p>00186 Roma (Trastevere)</p>
              <a href="tel:+390668801472" className="hover:text-cream transition-colors">+39 06 6880 1472</a>
              <br />
              <a href="mailto:info@osteriadellaquercia.it" className="hover:text-cream transition-colors text-xs">
                info@osteriadellaquercia.it
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-cream text-xs tracking-widest uppercase font-body mb-6">Newsletter</h4>
            <p className="text-sm font-body leading-relaxed mb-6">
              Ricevi aggiornamenti su eventi, nuovi menù e storie dalla cucina.
            </p>
            {sent ? (
              <p className="text-ocra text-sm font-body">Grazie! Ti aggiorneremo presto.</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="La tua email"
                  className="flex-1 bg-cream/10 border border-cream/20 text-cream placeholder-cream/40 text-sm font-body px-4 py-2.5 focus:outline-none focus:border-terracotta transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-terracotta text-cream hover:bg-terracotta/85 transition-colors"
                  aria-label="Iscriviti"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body text-cream/40">
            © {new Date().getFullYear()} Osteria della Quercia S.r.l. — P.IVA 01234567890
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-body text-cream/40 hover:text-cream/70 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs font-body text-cream/40 hover:text-cream/70 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
