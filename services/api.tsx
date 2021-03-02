import axios from 'axios'
import { getCookieFromBrowser } from '../shared/cookies'
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://books.ioasys.com.br'
      : 'https://books.ioasys.com.br',
  headers: {
    Authorization: `Bearer ${getCookieFromBrowser('authorization')}`
  }
})

export default api
