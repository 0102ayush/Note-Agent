// src/pages/Download.jsx
import React from 'react'
import { downloadPDF, downloadText } from '../services/exportService'

export default function Download() {
  const handleDownload = async (type) => {
    try {
      if (type === 'pdf') await downloadPDF()
      else await downloadText()
    } catch (error) {
      console.error('Download failed', error)
    }
  }

  return (
    <div className="container">
      <h2>Export Your Notes</h2>
      <button onClick={() => handleDownload('pdf')}>Download PDF</button>
      <button onClick={() => handleDownload('txt')}>Download Text</button>
    </div>
  )
}
