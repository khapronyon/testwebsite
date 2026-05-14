import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    title: 'Ristorante',
    text: 'La nostra sala principale accoglie fino a 80 ospiti in un ambiente raccolto e raffinato, dove ogni cena è un momento di celebrazione.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&auto=format&fit=crop&q=80',
    link: '/menu',
  },
  {
    title: 'Brunch',
    text: 'Sabato e domenica mattina, tra dolce e salato, per iniziare il weekend con calma, gusto e una buona tazza di caffè.',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=700&auto=format&fit=crop&q=80',
    link: '/brunch',
  },
  {
    title: 'Emporio',
    text: 'Selezione di prodotti artigianali: olio extravergine DOP, conserve, pasta secca, vini naturali e confetture della casa.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91798d455d?w=700&auto=format&fit=crop&q=80',
    link: '#',
  },
  {
    title: 'Delivery',
    text: 'I piatti della tradizione direttamente a casa tua. Ordina entro le 18:00 per la consegna serale nel quartiere.',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=700&auto=format&fit=crop&q=80',
    link: '#',
  },
  {
    title: 'Ricevimenti',
    text: 'Dalla cena di nozze al battesimo, dall\'aperitivo aziendale alla serata privata: organizziamo ogni evento su misura.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=700&auto=format&fit=crop&q=80',
    link: '/contatti',
  },
]

export default function ServicesGrid() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-20 px-6 bg-stone-100">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-terracotta text-xs tracking-[0.3em] uppercase font-body mb-3">I nostri servizi</p>
          <h2 className="font-display text-3xl sm:text-4xl text-stone-800">Un luogo, molte esperienze</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }) {
  const [ref, visible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative h-72 lg:h-96 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      </div>
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-cream">
        <h3 className="font-display text-2xl mb-2">{service.title}</h3>
        <p className="text-cream/75 text-sm font-body leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {service.text}
        </p>
        <Link
          to={service.link}
          className="text-xs tracking-widest uppercase font-body text-ocra hover:text-cream transition-colors duration-200 inline-flex items-center gap-2"
        >
          Scopri
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
