// src/utils/cleanText.js
export function cleanTranscriptText(text) {
  // Basic filler removal
  const fillers = ['um', 'uh', 'like', 'you know', 'so', 'I mean']
  let cleaned = text

  fillers.forEach((filler) => {
    const regex = new RegExp(`\\b${filler}\\b`, 'gi')
    cleaned = cleaned.replace(regex, '')
  })

  // Remove multiple spaces
  cleaned = cleaned.replace(/\s{2,}/g, ' ')

  return cleaned.trim()
}
