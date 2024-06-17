import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import FellowshipList from './components/FellowshipList'
import FellowshipCharacter from './components/FellowshipCharacter'

function App() {
  

  return (
    <Router>

      <nav>
        <Link className="nav-text" to="/">
          Home
        </Link>
        <Link className="nav-text" to="/about">
          About
        </Link>
        <Link className="nav-text" to="/characters">
          Characters
        </Link>
      </nav>

      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/characters" element={<FellowshipList />} />
        <Route path ="/characters/:charId" element={<FellowshipCharacter />} />
      </Routes>
    </Router>
  )
}

export default App
