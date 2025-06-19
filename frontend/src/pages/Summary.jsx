// src/pages/Summary.jsx
import React, { useEffect, useState } from 'react'
import { fetchSummary } from '../services/summaryService'
import SummaryCard from '../components/SummaryCard'
import Loader from '../components/Loader'

export default function Summary() {
  const [summary, setSummary] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const result = await fetchSummary()
        setSummary(result.points)
      } catch (error) {
        console.error('Failed to fetch summary', error)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <Loader />

  return (
    <div className="container">
      <h2>Meeting Summary</h2>
      {summary.length > 0 ? (
        summary.map((point, index) => (
          <SummaryCard key={index} point={point} />
        ))
      ) : (
        <p>No summary found. Please check audio upload.</p>
      )}
    </div>
  )
}
