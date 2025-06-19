// src/components/Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>🧠 Note Agent</h1>
      <ul>
        <li><Link to="/">Upload</Link></li>
        <li><Link to="/summary">Summary</Link></li>
        <li><Link to="/transcript">Transcript</Link></li>
        <li><Link to="/download">Download</Link></li>
      </ul>
    </nav>
  )
}
