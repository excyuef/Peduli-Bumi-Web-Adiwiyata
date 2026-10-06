import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Routes, Route } from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar.jsx'
import Beranda from './pages/Beranda.jsx'
import TipsAksi from './pages/TipsAksi'
import Footer from './components/Footer.jsx'
import Galeri from "./pages/Galeri"

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
        <Route index element={<Beranda />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path='/' element={<Beranda/>} />
        <Route path='/tips-dan-aksi' element={<TipsAksi />} />
        <Route path='/galeri' element={<Galeri />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App