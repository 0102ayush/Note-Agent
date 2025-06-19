// src/services/exportService.js
import api from './api'

export async function downloadPDF() {
  const response = await api.get('/export', {
    params: { type: 'pdf' },
    responseType: 'blob',
  })

  const url = window.URL.createObjectURL(new Blob([response.data]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'summary.pdf')
  document.body.appendChild(link)
  link.click()
}

export async function downloadText() {
  const response = await api.get('/export', {
    params: { type: 'txt' },
    responseType: 'blob',
  })

  const url = window.URL.createObjectURL(new Blob([response.data]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'transcript.txt')
  document.body.appendChild(link)
  link.click()
}
