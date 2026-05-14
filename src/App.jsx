import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cucina from './pages/Cucina'
import Menu from './pages/Menu'
import Cantina from './pages/Cantina'
import Brunch from './pages/Brunch'
import Gallery from './pages/Gallery'
import Contatti from './pages/Contatti'
import News from './pages/News'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cucina" element={<Cucina />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cantina" element={<Cantina />} />
        <Route path="/brunch" element={<Brunch />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
