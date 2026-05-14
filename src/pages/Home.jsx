import Hero from '../components/Hero'
import Intro from '../components/Intro'
import ServicesGrid from '../components/ServicesGrid'
import EditorialSection from '../components/EditorialSection'
import NewsSection from '../components/NewsSection'

const editorials = [
  {
    tag: 'La nostra specialità',
    title: 'Il Girarrosto',
    text: 'Cuociamo carni selezionate su brace viva, con la pazienza di chi sa che il tempo è il miglior condimento. Il nostro girarrosto a legna, acceso ogni giorno all\'alba, è il cuore pulsante della cucina. Pollo di fattoria, porchetta di Ariccia, abbacchio romano: sapori che resistono al tempo.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&auto=format&fit=crop&q=80',
    imageLeft: true,
    cta1: { label: 'Scopri il menù', href: '/menu' },
    cta2: { label: 'Prenota un tavolo', href: '#' },
  },
  {
    tag: 'Radici e memoria',
    title: 'La Tradizione',
    text: 'Ogni piatto nasce da un ricordo. La ricetta della nonna, il mercato del mattino, il dialogo quotidiano con i produttori locali. Non cuciniamo per stupire: cuciniamo per nutrire l\'anima. I nostri ingredienti hanno un nome, un\'origine, una storia che vale la pena raccontare.',
    image: 'https://images.unsplash.com/photo-1498654896293-37aaa4861fe1?w=900&auto=format&fit=crop&q=80',
    imageLeft: false,
    cta1: { label: 'La nostra filosofia', href: '/cucina' },
    cta2: { label: 'Il menù', href: '/menu' },
  },
  {
    tag: 'Ogni giorno, a mano',
    title: 'La Pasta Fresca',
    text: 'Farina di grano tenero tipo "00", uova di galline allevate a terra e il tocco delle mani di chi conosce l\'impasto da trent\'anni. Tonnarelli, rigatoni, pappardelle, gnocchi: la pasta fresca è il nostro atto d\'amore quotidiano verso la cucina italiana.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&auto=format&fit=crop&q=80',
    imageLeft: true,
    cta1: { label: 'Il menù dei primi', href: '/menu' },
    cta2: { label: 'Prenota', href: '#' },
  },
  {
    tag: 'Pane, focacce, grissini',
    title: 'Il Forno',
    text: 'Alle cinque del mattino il forno a legna si accende. Pane di casa con lievito madre, focacce all\'olio extravergine, grissini stirati a mano, taralli con finocchietto: tutto quello che arriva in tavola prima del pasto è prodotto da noi, con farina macinata a pietra.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=900&auto=format&fit=crop&q=80',
    imageLeft: false,
    cta1: { label: "L'emporio", href: '#' },
    cta2: { label: 'Il menù', href: '/menu' },
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesGrid />
      {editorials.map((ed) => (
        <EditorialSection key={ed.title} {...ed} />
      ))}
      <NewsSection />
    </>
  )
}
