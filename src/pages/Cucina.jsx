import { useScrollAnimation } from '../hooks/useScrollAnimation'

const values = [
  {
    title: 'Stagionalità',
    text: 'Il menù cambia con le stagioni, non il contrario. Seguiamo i ritmi della terra e i consigli dei nostri fornitori di fiducia.',
  },
  {
    title: 'Produttori locali',
    text: "Olio da Sabina, formaggi dai Castelli Romani, carne dalla Tuscia: ogni ingrediente ha un volto e un'origine verificabile.",
  },
  {
    title: 'Tecnica rispettosa',
    text: 'Cotture lente, conservazione naturale, fermentazioni. La tecnologia è al servizio del sapore, mai il contrario.',
  },
  {
    title: 'Zero sprechi',
    text: 'Dalla testa alla coda, dalla polpa alla buccia. Recuperiamo, trasformiamo, valorizziamo ogni parte degli ingredienti.',
  },
]

export default function Cucina() {
  const [heroRef, heroVisible] = useScrollAnimation()
  const [valRef, valVisible] = useScrollAnimation()

  return (
    <div className="bg-cream">
      {/* Page hero */}
      <div
        className="relative h-[60vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1556909114-44e3e9399a56?w=1600&auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        <div className="relative max-w-screen-xl mx-auto px-6 pb-16 pt-32">
          <p className="text-ocra text-xs tracking-[0.3em] uppercase font-body mb-3">La nostra filosofia</p>
          <h1 className="font-display text-5xl sm:text-6xl text-cream">La Cucina</h1>
        </div>
      </div>

      {/* Chef section */}
      <section className="py-24 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            ref={heroRef}
            className={`transition-all duration-700 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <p className="text-terracotta text-xs tracking-[0.3em] uppercase font-body mb-4">Lo chef</p>
            <h2 className="font-display text-4xl sm:text-5xl text-stone-800 mb-6 leading-tight">
              Massimo Ferretti
            </h2>
            <p className="text-warm-gray font-body text-base leading-relaxed mb-5">
              Nato a Roma nel 1968, Massimo Ferretti ha trascorso la sua formazione tra le cucine di Nino Bergese a Genova
              e le trattorie romane della sua infanzia. A 28 anni apre l'Osteria della Quercia con un obiettivo chiaro:
              fare cucina vera, senza compromessi.
            </p>
            <p className="text-warm-gray font-body text-base leading-relaxed mb-5">
              «Il mio lavoro è togliere, non aggiungere. Un'ottima materia prima ha bisogno di poco: rispetto, tempo
              e la capacità di ascoltarla.» Con questo approccio, Ferretti ha costruito nel tempo uno stile
              inconfondibile: essenziale, diretto, profondamente romano.
            </p>
            <p className="text-warm-gray font-body text-base leading-relaxed">
              Oggi guida una brigata di quattordici persone, molte delle quali formate internamente nel corso degli anni,
              in una cucina aperta dove la gerarchia lascia spazio alla collaborazione.
            </p>
          </div>
          <div
            className={`transition-all duration-700 delay-150 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&auto=format&fit=crop&q=80"
              alt="Chef Massimo Ferretti"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-stone-100">
        <div className="max-w-screen-xl mx-auto">
          <div
            ref={valRef}
            className={`text-center mb-16 transition-all duration-700 ${valVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-terracotta text-xs tracking-[0.3em] uppercase font-body mb-3">I nostri principi</p>
            <h2 className="font-display text-3xl sm:text-4xl text-stone-800">Come lavoriamo</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((v, i) => (
              <ValueCard key={v.title} value={v} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <div className="h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&auto=format&fit=crop&q=80"
          alt="Cucina"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

function ValueCard({ value, delay }) {
  const [ref, visible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-10 h-px bg-terracotta mb-5" />
      <h3 className="font-display text-xl text-stone-800 mb-3">{value.title}</h3>
      <p className="text-warm-gray text-sm font-body leading-relaxed">{value.text}</p>
    </div>
  )
}
