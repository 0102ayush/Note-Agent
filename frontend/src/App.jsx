// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Summary from './pages/Summary'
import Transcript from './pages/Transcript'
import Download from './pages/Download'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/transcript" element={<Transcript />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
  )
}

export default App
