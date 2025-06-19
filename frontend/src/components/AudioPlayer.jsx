// src/components/AudioPlayer.jsx
import React, { useState } from 'react'

export default function AudioPlayer() {
  const [audioUrl, setAudioUrl] = useState(null)

  const handleFile = (e) => {
    const file = e.target.files[0]
    if (file) setAudioUrl(URL.createObjectURL(file))
  }

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFile} />
      {audioUrl && (
        <audio controls src={audioUrl} style={{ width: '100%' }} />
      )}
    </div>
  )
}
