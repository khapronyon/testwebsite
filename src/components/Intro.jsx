import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Intro() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-28 px-6 bg-cream">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Decorative */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="block w-12 h-px bg-terracotta/40" />
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-terracotta opacity-60">
            <path d="M9 0L10.8 6.3H17.5L12.1 10.2L13.9 16.5L9 12.6L4.1 16.5L5.9 10.2L0.5 6.3H7.2L9 0Z" fill="currentColor" />
          </svg>
          <span className="block w-12 h-px bg-terracotta/40" />
        </div>

        <h2 className="font-display text-3xl sm:text-4xl text-stone-800 mb-6 leading-snug">
          Cucina vera, nella Roma vera
        </h2>
        <p className="text-warm-gray text-base sm:text-lg leading-relaxed font-body font-light">
          Nel cuore del Rione Trastevere, tra vicoli lastricati e profumi d'altri tempi,
          l'Osteria della Quercia custodisce una cucina che non ha fretta di stupire.
          Ogni piatto è il risultato di un dialogo quotidiano con i produttori,
          con la stagione, con la memoria di chi ha cucinato prima di noi.
          Benvenuti a casa.
        </p>
      </div>
    </section>
  )
}
