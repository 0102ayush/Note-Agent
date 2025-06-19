// src/services/summaryService.js
import api from './api'

export async function fetchSummary() {
  const response = await api.get('/summary')
  return response.data
}
