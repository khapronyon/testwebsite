import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const menu = {
  Antipasti: [
    { name: 'Carpaccio di manzo con rucola selvatica e grana stagionato 36 mesi', price: '18' },
    { name: 'Burrata di Andria con pomodori di Pachino, basilico e olio del Lazio', price: '16' },
    { name: 'Polpo alla Luciana con olive di Gaeta, capperi di Pantelleria e sedano', price: '22' },
    { name: 'Tagliere di salumi e formaggi artigianali con marmellata di fichi', price: '24' },
    { name: 'Fritto di baccalà in pastella alla birra con maionese al limone', price: '14' },
  ],
  Primi: [
    { name: 'Rigatoni all\'amatriciana con guanciale di Norcia e pecorino romano DOP', price: '18' },
    { name: 'Spaghetti alla carbonara: uova di fattoria, pecorino e guanciale croccante', price: '17' },
    { name: 'Pici al ragù di cinghiale della Maremma con bacche di ginepro', price: '20' },
    { name: 'Risotto al tartufo nero di Norcia con parmigiano invecchiato', price: '28' },
    { name: 'Pasta e fagioli con cotiche e rosmarino', price: '15' },
    { name: 'Gnocchi di patate al pomodoro San Marzano DOP e basilico', price: '16' },
    { name: 'Tonnarelli cacio e pepe con pepe nero del Kerala', price: '16' },
  ],
  Secondi: [
    { name: 'Agnello scottadito con mentuccia, limone e carciofi alla brace', price: '32' },
    { name: 'Saltimbocca alla romana con prosciutto di Parma e salvia fresca', price: '28' },
    { name: 'Branzino al forno con erbe aromatiche, patate e pomodorini', price: '34' },
    { name: 'Pollo al mattone con peperoni arrostiti e aceto balsamico', price: '26' },
    { name: 'Trippa alla romana con menta e pecorino', price: '20' },
    { name: 'Coda alla vaccinara con cioccolato fondente e pinoli', price: '24' },
  ],
  Contorni: [
    { name: 'Cicoria ripassata in padella con aglio e peperoncino', price: '8' },
    { name: 'Carciofi alla giudia — solo stagione', price: '10' },
    { name: 'Puntarelle con acciughe e olio extravergine del Lazio', price: '9' },
    { name: 'Patate arrosto al rosmarino con sale di Cervia', price: '7' },
  ],
  Dolci: [
    { name: 'Tiramisù della casa: savoiardi artigianali, mascarpone e caffè di CostaDoro', price: '10' },
    { name: 'Crostata di visciole con ricotta di pecora e miele di castagno', price: '9' },
    { name: 'Panna cotta al rosmarino con miele di zagara e mandorle tostate', price: '9' },
    { name: 'Gelato artigianale alla crema, nocciola o cioccolato fondente (3 gusti)', price: '8' },
    { name: 'Torta di ricotta e limone con coulis di lamponi', price: '9' },
  ],
}

const categories = Object.keys(menu)

export default function Menu() {
  const [active, setActive] = useState('Antipasti')
  const [ref, visible] = useScrollAnimation()

  return (
    <div className="bg-cream">
      {/* Hero */}
      <div
        className="relative h-[50vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1600&auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/15" />
        <div className="relative max-w-screen-xl mx-auto px-6 pb-14 pt-28">
          <p className="text-ocra text-xs tracking-[0.3em] uppercase font-body mb-3">Cucina di stagione</p>
          <h1 className="font-display text-5xl sm:text-6xl text-cream">Il Menù</h1>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-screen-md mx-auto">
          {/* Intro note */}
          <p className="text-warm-gray text-sm font-body text-center mb-14 leading-relaxed">
            Il nostro menù varia secondo stagione e disponibilità dei fornitori.<br />
            Eventuali allergie e intolleranze: il personale di sala è a vostra disposizione.
          </p>

          {/* Category tabs */}
          <div
            ref={ref}
            className={`flex flex-wrap gap-2 justify-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 text-xs tracking-widest uppercase font-body transition-colors duration-200 ${
                  active === cat
                    ? 'bg-terracotta text-cream'
                    : 'border border-stone-300 text-stone-600 hover:border-terracotta hover:text-terracotta'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu items */}
          <MenuCategory items={menu[active]} />

          {/* Wine note */}
          <div className="mt-16 pt-10 border-t border-stone-200 text-center">
            <p className="text-warm-gray text-sm font-body leading-relaxed">
              La nostra selezione di vini è disponibile alla{' '}
              <a href="/cantina" className="text-terracotta underline underline-offset-4">Cantina</a>.
              <br />Coperto: €3,50 a persona — include pane e grissini del forno di casa.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

function MenuCategory({ items }) {
  return (
    <ul className="divide-y divide-stone-200">
      {items.map((item, i) => (
        <MenuRow key={i} item={item} delay={i * 60} />
      ))}
    </ul>
  )
}

function MenuRow({ item, delay }) {
  const [ref, visible] = useScrollAnimation()
  return (
    <li
      ref={ref}
      className={`flex items-baseline justify-between py-5 gap-6 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="font-body text-stone-700 text-sm leading-relaxed">{item.name}</span>
      <span className="font-display text-terracotta text-base shrink-0">€{item.price}</span>
    </li>
  )
}
