import { useScrollAnimation } from '../hooks/useScrollAnimation'

const wines = [
  {
    region: 'Lazio',
    list: [
      { name: 'Frascati Superiore DOCG — Castel de Paolis', type: 'Bianco', price: '28' },
      { name: 'Cesanese del Piglio DOCG — Coletti Conti', type: 'Rosso', price: '35' },
      { name: 'Grechetto di Velletri — Cantine San Marco', type: 'Bianco', price: '24' },
      { name: 'Roma DOC Rosso — Poggio le Volpi', type: 'Rosso', price: '32' },
    ],
  },
  {
    region: 'Toscana',
    list: [
      { name: 'Brunello di Montalcino DOCG 2018 — Ciacci Piccolomini', type: 'Rosso', price: '110' },
      { name: 'Chianti Classico Gran Selezione — Riecine', type: 'Rosso', price: '75' },
      { name: 'Vernaccia di San Gimignano DOCG — Montenidoli', type: 'Bianco', price: '38' },
      { name: 'Super Tuscan "Sassicaia" 2019 — Tenuta San Guido', type: 'Rosso', price: '180' },
    ],
  },
  {
    region: 'Sicilia & Isole',
    list: [
      { name: 'Etna Rosso DOC — Cornelissen', type: 'Rosso naturale', price: '65' },
      { name: 'Nerello Mascalese — Benanti', type: 'Rosso', price: '48' },
      { name: 'Carricante — Terre Nere', type: 'Bianco', price: '42' },
      { name: 'Passito di Pantelleria DOC — Ben Ryé', type: 'Dolce', price: '55' },
    ],
  },
  {
    region: 'Bollicine',
    list: [
      { name: 'Franciacorta Brut DOCG — Ca\' del Bosco', type: 'Metodo classico', price: '65' },
      { name: 'Prosecco Superiore di Valdobbiadene DOCG — Nino Franco', type: 'Spumante', price: '35' },
      { name: 'Champagne Blanc de Blancs — Jacques Selosse', type: 'Champagne', price: '210' },
    ],
  },
]

export default function Cantina() {
  const [ref, visible] = useScrollAnimation()

  return (
    <div className="bg-cream">
      {/* Hero */}
      <div
        className="relative h-[55vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/15" />
        <div className="relative max-w-screen-xl mx-auto px-6 pb-14 pt-28">
          <p className="text-ocra text-xs tracking-[0.3em] uppercase font-body mb-3">Vini e distillati</p>
          <h1 className="font-display text-5xl sm:text-6xl text-cream">La Cantina</h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 px-6">
        <div
          ref={ref}
          className={`max-w-2xl mx-auto text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-terracotta text-xs tracking-[0.3em] uppercase font-body mb-4">La nostra selezione</p>
          <h2 className="font-display text-3xl sm:text-4xl text-stone-800 mb-6">Vino è territorio</h2>
          <p className="text-warm-gray font-body text-base leading-relaxed">
            La nostra carta vini nasce da un percorso di conoscenza diretta: visitiamo le cantine, incontriamo i vignaioli,
            scegliamo in base a ciò che ci emoziona. Non inseguiamo punteggi o mode: inseguiamo la sincerità del vino.
            Privilegiamo la produzione biologica e biodinamica, con attenzione alla biodiversità e ai vitigni autoctoni.
          </p>
        </div>

        {/* Wine list */}
        <div className="max-w-screen-lg mx-auto space-y-16">
          {wines.map((section, i) => (
            <WineSection key={section.region} section={section} delay={i * 100} />
          ))}
        </div>

        <p className="text-center text-warm-gray text-xs font-body mt-16">
          Carta vini completa disponibile in sala. Il nostro sommelier è a vostra disposizione per abbinamenti su misura.
        </p>
      </section>
    </div>
  )
}

function WineSection({ section, delay }) {
  const [ref, visible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="font-display text-2xl text-stone-800 mb-6 pb-4 border-b border-stone-200">{section.region}</h3>
      <ul className="divide-y divide-stone-100">
        {section.list.map((wine) => (
          <li key={wine.name} className="flex items-baseline justify-between py-4 gap-6">
            <div>
              <span className="font-body text-stone-700 text-sm">{wine.name}</span>
              <span className="ml-3 text-xs text-warm-gray font-body italic">{wine.type}</span>
            </div>
            <span className="font-display text-terracotta text-base shrink-0">€{wine.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
