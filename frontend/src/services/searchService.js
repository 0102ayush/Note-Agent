// src/services/searchService.js
import api from './api'

export async function searchTranscript(query) {
  const response = await api.get('/search', {
    params: { q: query },
  })
  return response.data
}
