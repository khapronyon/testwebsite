import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const hours = [
  { days: 'Lunedì', time: 'Chiuso' },
  { days: 'Martedì – Venerdì', time: '12:30–15:00 / 19:30–23:30' },
  { days: 'Sabato', time: '12:00–15:30 / 19:30–23:30' },
  { days: 'Domenica', time: '12:00–15:30 / 19:30–23:00' },
]

export default function Contatti() {
  const [ref, visible] = useScrollAnimation()
  const [formRef, formVisible] = useScrollAnimation()
  const [form, setForm] = useState({ nome: '', email: '', telefono: '', data: '', ora: '', coperti: '2', note: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <div className="bg-cream">
      {/* Hero */}
      <div
        className="relative h-[45vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
        <div className="relative max-w-screen-xl mx-auto px-6 pb-14 pt-28">
          <p className="text-ocra text-xs tracking-[0.3em] uppercase font-body mb-3">Vieni a trovarci</p>
          <h1 className="font-display text-5xl sm:text-6xl text-cream">Info & Prenotazioni</h1>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <p className="text-terracotta text-xs tracking-[0.3em] uppercase font-body mb-4">Dove siamo</p>
            <h2 className="font-display text-3xl text-stone-800 mb-8">Come raggiungerci</h2>

            <div className="space-y-6 mb-12">
              <div>
                <p className="text-xs tracking-widest uppercase font-body text-warm-gray mb-2">Indirizzo</p>
                <p className="font-body text-stone-700">Via della Quercia, 12<br />00186 Roma (Rione Trastevere)</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase font-body text-warm-gray mb-2">Contatti</p>
                <p className="font-body text-stone-700">
                  <a href="tel:+390668801472" className="hover:text-terracotta transition-colors">+39 06 6880 1472</a><br />
                  <a href="mailto:info@osteriadellaquercia.it" className="hover:text-terracotta transition-colors text-sm">info@osteriadellaquercia.it</a>
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase font-body text-warm-gray mb-2">Trasporti</p>
                <p className="font-body text-stone-700 text-sm leading-relaxed">
                  Tram 8 — fermata Largo di Torre Argentina<br />
                  Bus 23, 280 — fermata Lungotevere Sanzio<br />
                  Parcheggio consigliato: Parcheggio Gianicolo
                </p>
              </div>
            </div>

            {/* Orari */}
            <p className="text-xs tracking-widest uppercase font-body text-warm-gray mb-4">Orari</p>
            <table className="w-full text-sm font-body">
              <tbody className="divide-y divide-stone-200">
                {hours.map((h) => (
                  <tr key={h.days}>
                    <td className="py-3 text-stone-600 pr-6">{h.days}</td>
                    <td className={`py-3 ${h.time === 'Chiuso' ? 'text-warm-gray' : 'text-stone-800'}`}>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Map placeholder */}
            <div className="mt-10 bg-stone-200 h-56 flex items-center justify-center">
              <a
                href="https://maps.google.com/?q=Via+della+Quercia+12+Roma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase font-body text-stone-600 hover:text-terracotta transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Apri in Google Maps
              </a>
            </div>
          </div>

          {/* Form */}
          <div
            ref={formRef}
            className={`transition-all duration-700 delay-150 ${formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <p className="text-terracotta text-xs tracking-[0.3em] uppercase font-body mb-4">Richiedi un tavolo</p>
            <h2 className="font-display text-3xl text-stone-800 mb-8">Prenota</h2>

            {sent ? (
              <div className="py-16 text-center">
                <div className="w-12 h-12 bg-dark-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-stone-800 mb-3">Richiesta inviata</h3>
                <p className="text-warm-gray font-body text-sm leading-relaxed">
                  Ti contatteremo entro 24 ore per confermare la prenotazione.<br />
                  Per richieste urgenti chiamaci al +39 06 6880 1472.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Nome e cognome" name="nome" type="text" value={form.nome} onChange={handleChange} required />
                  <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Telefono" name="telefono" type="tel" value={form.telefono} onChange={handleChange} />
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-warm-gray mb-2">Numero di ospiti</label>
                    <select
                      name="coperti"
                      value={form.coperti}
                      onChange={handleChange}
                      className="w-full border border-stone-300 bg-transparent text-stone-700 font-body text-sm px-4 py-3 focus:outline-none focus:border-terracotta transition-colors"
                    >
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'ospite' : 'ospiti'}</option>)}
                      <option value="9+">9 o più</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Data" name="data" type="date" value={form.data} onChange={handleChange} required />
                  <div>
                    <label className="block text-xs tracking-widest uppercase font-body text-warm-gray mb-2">Orario</label>
                    <select
                      name="ora"
                      value={form.ora}
                      onChange={handleChange}
                      className="w-full border border-stone-300 bg-transparent text-stone-700 font-body text-sm px-4 py-3 focus:outline-none focus:border-terracotta transition-colors"
                    >
                      <option value="">Seleziona</option>
                      <optgroup label="Pranzo">
                        {['12:30','13:00','13:30','14:00','14:30'].map(t => <option key={t} value={t}>{t}</option>)}
                      </optgroup>
                      <optgroup label="Cena">
                        {['19:30','20:00','20:30','21:00','21:30','22:00'].map(t => <option key={t} value={t}>{t}</option>)}
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase font-body text-warm-gray mb-2">Note speciali</label>
                  <textarea
                    name="note"
                    value={form.note}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Allergie, occasioni speciali, richieste particolari…"
                    className="w-full border border-stone-300 bg-transparent text-stone-700 font-body text-sm px-4 py-3 focus:outline-none focus:border-terracotta transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-terracotta text-cream text-xs tracking-widest uppercase font-body hover:bg-terracotta/85 transition-colors"
                >
                  Invia richiesta
                </button>
                <p className="text-warm-gray text-xs font-body text-center">
                  La prenotazione sarà confermata via email o telefono entro 24 ore.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function Field({ label, name, type, value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs tracking-widest uppercase font-body text-warm-gray mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-stone-300 bg-transparent text-stone-700 font-body text-sm px-4 py-3 focus:outline-none focus:border-terracotta transition-colors"
      />
    </div>
  )
}
