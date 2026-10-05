import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home.jsx'
import Galeri from '@/pages/Galeri'
import ImageCard from './components/GalleryImageCard.jsx'
import NavBar from './components/NavBar.jsx'

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
        <Route index element={<Galeri />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App