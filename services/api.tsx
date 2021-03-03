import axios from 'axios'
import { getCookieFromBrowser } from '../shared/cookies'
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://books.ioasys.com.br'
      : 'https://books.ioasys.com.br'
})

// Intercepta a requisição e seta o token no header
api.interceptors.request.use(async config => {
  const authorization = getCookieFromBrowser('authorization')
  if (authorization) config.headers['authorization'] = `Bearer ${authorization}`
  return config
})

export default api
