import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home.jsx'
import ImageCard from './components/ImageCarousel.jsx'
import TipsAksi from './pages/TipsAksi.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<ImageCard />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/tips-dan-aksi' element={<TipsAksi />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App