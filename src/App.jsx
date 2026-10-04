import { Routes, Route } from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home.jsx'

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App