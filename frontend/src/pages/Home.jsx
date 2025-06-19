// src/pages/Home.jsx
import React from 'react'
import UploadForm from '../components/UploadForm'
import AudioPlayer from '../components/AudioPlayer'

export default function Home() {
  return (
    <div className="container">
      <h2>Upload Your Meeting Audio</h2>
      <UploadForm />
      <AudioPlayer />
    </div>
  )
}
