import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'

function App() {
  
  return (
    <>
      <div>
        <NavBar />

        <Routes>
          <Route path='/' element={<Beranda />}></Route>
          <Route path='/tips-dan-aksi' element={<TipsAksi />}></Route>
          <Route path='/galeri' element={<Galeri />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
