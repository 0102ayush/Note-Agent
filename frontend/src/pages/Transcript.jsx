// src/pages/Transcript.jsx
import React, { useEffect, useState } from 'react'
import { searchTranscript } from '../services/searchService'
import SearchBox from '../components/SearchBox'
import Loader from '../components/Loader'

export default function Transcript() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    setLoading(true)
    try {
      const data = await searchTranscript(query)
      setResults(data.matches)
    } catch (err) {
      console.error('Search failed', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h2>Transcript Search</h2>
      <SearchBox query={query} setQuery={setQuery} onSearch={handleSearch} />
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {results.map((res, i) => (
            <li key={i}>
              <b>[{res.timestamp}]</b> {res.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
