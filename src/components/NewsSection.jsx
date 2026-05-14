import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const news = [
  {
    id: 1,
    category: 'Evento',
    date: '20 Maggio 2025',
    title: 'Cena degustazione: Vini dell\'Etna e cucina siciliana',
    excerpt:
      'Una serata straordinaria con il produttore Benanti e cinque portate abbinate ai suoi vini vulcanici. Posti limitati, prenotazione obbligatoria.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    category: 'Novità',
    date: '10 Maggio 2025',
    title: 'Il nuovo menù primavera: carciofi, asparagi e fave',
    excerpt:
      'Con i primi tepori, la nostra cucina si tinge di verde. Scopri i piatti che celebrano la primavera laziale e i suoi sapori freschi.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    category: 'Riconoscimenti',
    date: '2 Maggio 2025',
    title: 'Osteria della Quercia nella guida Gambero Rosso 2025',
    excerpt:
      'Siamo orgogliosi di annunciare il riconoscimento con il massimo dei Gamberi per il secondo anno consecutivo. Grazie ai nostri ospiti.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80',
  },
]

export default function NewsSection() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-24 px-6 bg-dark-green">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <p className="text-ocra text-xs tracking-[0.3em] uppercase font-body mb-3">Dall'osteria</p>
            <h2 className="font-display text-3xl sm:text-4xl text-cream">Novità ed eventi</h2>
          </div>
          <Link
            to="/news"
            className="text-xs tracking-widest uppercase font-body text-cream/60 hover:text-cream transition-colors inline-flex items-center gap-2 shrink-0"
          >
            Tutte le novità
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <NewsCard key={item.id} item={item} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsCard({ item, delay }) {
  const [ref, visible] = useScrollAnimation()
  return (
    <article
      ref={ref}
      className={`group cursor-pointer transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden mb-5">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-52 object-cover transition-transform duration-600 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs tracking-widest uppercase font-body text-ocra">{item.category}</span>
        <span className="text-cream/30 text-xs">·</span>
        <span className="text-xs font-body text-cream/50">{item.date}</span>
      </div>
      <h3 className="font-display text-xl text-cream mb-3 leading-snug group-hover:text-ocra transition-colors duration-200">
        {item.title}
      </h3>
      <p className="text-cream/55 text-sm font-body leading-relaxed">{item.excerpt}</p>
    </article>
  )
}
