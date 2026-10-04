import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import TipsAksi from './pages/TipsAksi.jsx'

function App() {
  
  return (
      <div>
        <NavBar />

        <TipsAksi />
      </div>
  )
}

export default App
