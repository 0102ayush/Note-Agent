// src/components/UploadForm.jsx
import React, { useState } from 'react'
import { uploadAudio } from '../services/uploadService'
import { useNavigate } from 'react-router-dom'

export default function UploadForm() {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return
    setUploading(true)
    try {
      await uploadAudio(file)
      navigate('/summary')
    } catch (err) {
      alert('Upload failed.')
      console.error(err)
    } finally {
      setUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="audio/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="submit" disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload & Summarize'}
      </button>
    </form>
  )
}
