import { useScrollAnimation } from '../hooks/useScrollAnimation'

const articles = [
  {
    id: 1,
    category: 'Evento',
    date: '20 Maggio 2025',
    title: 'Cena degustazione: Vini dell\'Etna e cucina siciliana',
    excerpt: 'Una serata straordinaria con il produttore Benanti e cinque portate abbinate ai suoi vini vulcanici. Il menù ha visto protagonisti i sapori dell\'isola reinterpretati dallo chef Ferretti con la sua inconfondibile mano romana. Posti esauriti in 48 ore. Prossima data: 15 giugno.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    category: 'Novità',
    date: '10 Maggio 2025',
    title: 'Il nuovo menù primavera: carciofi, asparagi e fave',
    excerpt: 'Con i primi tepori della stagione, la nostra cucina si tinge di verde. I carciofi della campagna romana, gli asparagi di Canino, le fave fresche dei Castelli: la primavera laziale è nel piatto. Scopri i nuovi antipasti, i risotti e i secondi stagionali.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    category: 'Riconoscimenti',
    date: '2 Maggio 2025',
    title: 'Osteria della Quercia nella guida Gambero Rosso 2025',
    excerpt: 'Siamo orgogliosi di annunciare il riconoscimento con il massimo dei Gamberi nella Guida Ristoranti 2025, per il secondo anno consecutivo. Un risultato che appartiene a tutta la squadra: in cucina, in sala e tra i produttori che lavorano con noi ogni giorno.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    category: 'Evento',
    date: '18 Aprile 2025',
    title: 'Pasqua e Pasquetta all\'Osteria: menù delle feste',
    excerpt: 'Un menù speciale per il periodo pasquale, con agnello scottadito, torta pasqualina e uova di Pasqua artigianali preparate dalla nostra pasticcera. La prenotazione è chiusa, ma è già possibile prenotare per il ponte del 25 aprile.',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    category: 'Cucina',
    date: '5 Aprile 2025',
    title: 'Corso di pasta fresca: nuove date disponibili',
    excerpt: 'Tornano i corsi di pasta fresca con il nostro sfoglinoe Carla Montesi. Un sabato mattina a imparare l\'arte di sfogliare, tirare, riempire. I prossimi appuntamenti sono il 7 e il 21 giugno. Iscrizioni aperte.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    category: 'Novità',
    date: '20 Marzo 2025',
    title: 'L\'emporio si allarga: nuovi prodotti in arrivo',
    excerpt: 'Abbiamo selezionato nuovi produttori per il nostro emporio. Dal prossimo mese troverete olio monovarietale di Canino, miele millefiori biologico dalla Sabina e una nuova linea di conserve preparate dalla nostra cucina. Disponibile anche online.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91798d455d?w=900&auto=format&fit=crop&q=80',
  },
]

export default function News() {
  const [ref, visible] = useScrollAnimation()

  return (
    <div className="bg-cream">
      {/* Hero */}
      <div className="bg-dark-green pt-36 pb-20 px-6">
        <div
          ref={ref}
          className={`max-w-screen-xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-ocra text-xs tracking-[0.3em] uppercase font-body mb-3">Dall'osteria</p>
          <h1 className="font-display text-5xl sm:text-6xl text-cream">Novità ed eventi</h1>
        </div>
      </div>

      {/* Articles */}
      <section className="py-20 px-6">
        <div className="max-w-screen-xl mx-auto space-y-20">
          {articles.map((article, i) => (
            <ArticleRow key={article.id} article={article} reverse={i % 2 !== 0} delay={0} />
          ))}
        </div>
      </section>
    </div>
  )
}

function ArticleRow({ article, reverse }) {
  const [ref, visible] = useScrollAnimation()
  return (
    <article
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${reverse ? 'lg:[direction:rtl]' : ''}`}
    >
      <div className={reverse ? '[direction:ltr]' : ''}>
        <div className="overflow-hidden h-72 lg:h-96">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-600" />
        </div>
      </div>
      <div className={`${reverse ? '[direction:ltr]' : ''} px-0 lg:px-8`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs tracking-widest uppercase font-body text-terracotta">{article.category}</span>
          <span className="text-stone-300">·</span>
          <span className="text-xs font-body text-warm-gray">{article.date}</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl text-stone-800 mb-5 leading-snug">{article.title}</h2>
        <p className="text-warm-gray font-body text-sm leading-relaxed mb-6">{article.excerpt}</p>
        <a
          href="#"
          className="text-xs tracking-widest uppercase font-body text-terracotta hover:text-stone-800 transition-colors inline-flex items-center gap-2"
        >
          Leggi tutto
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </article>
  )
}
