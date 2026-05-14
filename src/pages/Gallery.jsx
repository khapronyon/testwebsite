import { useScrollAnimation } from '../hooks/useScrollAnimation'

const photos = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80', alt: 'Piatto principale' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80', alt: 'La sala' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80', alt: 'Pasta della casa' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80', alt: 'Il girarrosto' },
  { src: 'https://images.unsplash.com/photo-1551183053-bf91798d455d?w=800&auto=format&fit=crop&q=80', alt: 'Antipasto' },
  { src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80', alt: 'La cantina' },
  { src: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&auto=format&fit=crop&q=80', alt: 'Il forno' },
  { src: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&auto=format&fit=crop&q=80', alt: 'Brunch domenicale' },
  { src: 'https://images.unsplash.com/photo-1498654896293-37aaa4861fe1?w=800&auto=format&fit=crop&q=80', alt: 'Primo piatto' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80', alt: 'Tavola apparecchiata' },
  { src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&auto=format&fit=crop&q=80', alt: 'Evento privato' },
  { src: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=80', alt: 'Dessert' },
]

export default function Gallery() {
  const [ref, visible] = useScrollAnimation()

  return (
    <div className="bg-stone-900">
      {/* Header */}
      <div className="pt-36 pb-16 px-6 text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-ocra text-xs tracking-[0.3em] uppercase font-body mb-3">Immagini dall'osteria</p>
          <h1 className="font-display text-5xl sm:text-6xl text-cream">Gallery</h1>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="px-4 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 max-w-screen-xl mx-auto">
          {photos.map((photo, i) => (
            <GalleryPhoto key={i} photo={photo} delay={i * 50} />
          ))}
        </div>
      </div>
    </div>
  )
}

function GalleryPhoto({ photo, delay }) {
  const [ref, visible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`break-inside-avoid mb-3 overflow-hidden group transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full object-cover transition-transform duration-600 group-hover:scale-[1.03]"
      />
    </div>
  )
}
