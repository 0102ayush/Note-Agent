// src/components/SearchBox.jsx
import React from 'react'

export default function SearchBox({ query, setQuery, onSearch }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') onSearch()
  }

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search transcript..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  )
}
