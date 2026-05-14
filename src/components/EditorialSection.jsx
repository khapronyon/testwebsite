import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * @param {{ tag:string, title:string, text:string, image:string,
 *            imageLeft:boolean, cta1:{label:string,href:string},
 *            cta2:{label:string,href:string}, dark?:boolean }} props
 */
export default function EditorialSection({ tag, title, text, image, imageLeft, cta1, cta2, dark = false }) {
  const [imgRef, imgVisible] = useScrollAnimation()
  const [txtRef, txtVisible] = useScrollAnimation()

  const bg = dark ? 'bg-dark-green' : 'bg-cream'
  const headingColor = dark ? 'text-cream' : 'text-stone-800'
  const bodyColor = dark ? 'text-cream/70' : 'text-warm-gray'
  const tagColor = dark ? 'text-ocra' : 'text-terracotta'

  return (
    <section className={`${bg} py-0`}>
      <div className={`flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* Image */}
        <div
          ref={imgRef}
          className={`w-full lg:w-1/2 h-80 sm:h-[480px] lg:h-[600px] overflow-hidden transition-all duration-800 ${
            imgVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
          }`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Text */}
        <div
          ref={txtRef}
          className={`w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-16 lg:py-24 transition-all duration-700 delay-150 ${
            txtVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className={`text-xs tracking-[0.3em] uppercase font-body mb-4 ${tagColor}`}>{tag}</p>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 ${headingColor}`}>
            {title}
          </h2>
          <p className={`text-base leading-relaxed font-body font-light mb-10 ${bodyColor}`}>{text}</p>
          <div className="flex flex-wrap gap-4">
            {cta1 && (
              <Cta href={cta1.href} label={cta1.label} primary dark={dark} />
            )}
            {cta2 && (
              <Cta href={cta2.href} label={cta2.label} dark={dark} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Cta({ href, label, primary, dark }) {
  const isExternal = href === '#'
  const baseClass = `text-xs tracking-widest uppercase font-body px-7 py-3 transition-colors duration-200 inline-block`

  const style = primary
    ? 'bg-terracotta text-cream hover:bg-terracotta/85'
    : dark
    ? 'border border-cream/40 text-cream hover:bg-cream hover:text-dark-green'
    : 'border border-stone-400 text-stone-700 hover:bg-stone-800 hover:text-cream hover:border-stone-800'

  if (isExternal) {
    return <a href={href} className={`${baseClass} ${style}`}>{label}</a>
  }
  return (
    <Link to={href} className={`${baseClass} ${style}`}>
      {label}
    </Link>
  )
}
