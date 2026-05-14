import { useScrollAnimation } from '../hooks/useScrollAnimation'

const brunchMenu = {
  Dolce: [
    { name: 'Cornetto artigianale al burro — sfogliato o integrale', price: '3' },
    { name: 'Brioche con crema pasticcera e crema di pistacchio', price: '4' },
    { name: 'Pancakes americani con sciroppo d\'acero e frutti di bosco', price: '12' },
    { name: 'Porridge di avena con banana caramellata e cannella', price: '10' },
    { name: 'Granola croccante con yogurt greco e miele di castagno', price: '9' },
    { name: 'French toast con ricotta montata e confettura di albicocche', price: '13' },
  ],
  Salato: [
    { name: 'Uova strapazzate con salmone affumicato e crème fraîche su toast di segale', price: '16' },
    { name: 'Avocado toast con uovo in camicia, sesamo e germogli di ravanello', price: '15' },
    { name: 'Shakshuka con uova in umido, peperoni e feta greca', price: '16' },
    { name: 'Frittata di stagione con verdure dell\'orto e erbe aromatiche', price: '14' },
    { name: 'Club sandwich con tacchino, guanciale croccante e maionese al limone', price: '17' },
    { name: 'Tagliere di affettati e formaggi del mattino con pane di casa', price: '22' },
  ],
  Bevande: [
    { name: 'Caffè espresso o americano', price: '2' },
    { name: 'Cappuccino o macchiato', price: '3' },
    { name: 'Tè e infusi biologici', price: '4' },
    { name: 'Succo d\'arancia fresco', price: '5' },
    { name: 'Mimosa con prosecco Valdobbiadene', price: '9' },
    { name: 'Bloody Mary classico', price: '10' },
  ],
}

export default function Brunch() {
  const [ref, visible] = useScrollAnimation()
  const [infoRef, infoVisible] = useScrollAnimation()

  return (
    <div className="bg-cream">
      {/* Hero */}
      <div
        className="relative h-[55vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1600&auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
        <div className="relative max-w-screen-xl mx-auto px-6 pb-14 pt-28">
          <p className="text-ocra text-xs tracking-[0.3em] uppercase font-body mb-3">Sabato e domenica</p>
          <h1 className="font-display text-5xl sm:text-6xl text-cream">Brunch</h1>
        </div>
      </div>

      {/* Info banner */}
      <div
        ref={infoRef}
        className={`bg-dark-green text-cream py-10 px-6 transition-all duration-700 ${infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-around gap-8 text-center">
          {[
            { label: 'Giorni', value: 'Sabato e Domenica' },
            { label: 'Orario', value: '10:00 – 15:00' },
            { label: 'Menù fisso', value: '€28 a persona' },
            { label: 'Prenotazione', value: 'Consigliata' },
          ].map((info) => (
            <div key={info.label}>
              <p className="text-ocra text-xs tracking-widest uppercase font-body mb-1">{info.label}</p>
              <p className="font-display text-xl">{info.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Menu */}
      <section className="py-20 px-6">
        <div className="max-w-screen-md mx-auto">
          <div
            ref={ref}
            className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-terracotta text-xs tracking-[0.3em] uppercase font-body mb-3">Ogni weekend</p>
            <h2 className="font-display text-3xl sm:text-4xl text-stone-800 mb-5">Il menù del brunch</h2>
            <p className="text-warm-gray font-body text-sm leading-relaxed">
              Il menù fisso include caffè o tè, un dolce e un salato a scelta.<br />
              Gli extra sono disponibili à la carte.
            </p>
          </div>

          {Object.entries(brunchMenu).map(([cat, items]) => (
            <BrunchCategory key={cat} category={cat} items={items} />
          ))}
        </div>
      </section>
    </div>
  )
}

function BrunchCategory({ category, items }) {
  const [ref, visible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <h3 className="font-display text-2xl text-stone-800 mb-6 pb-3 border-b border-stone-200">{category}</h3>
      <ul className="divide-y divide-stone-100">
        {items.map((item) => (
          <li key={item.name} className="flex items-baseline justify-between py-4 gap-6">
            <span className="font-body text-stone-700 text-sm leading-relaxed">{item.name}</span>
            <span className="font-display text-terracotta text-base shrink-0">€{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
