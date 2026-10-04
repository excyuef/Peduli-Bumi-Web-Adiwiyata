import { Routes, Route } from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route index element={<NavBar />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App