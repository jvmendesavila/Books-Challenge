import api from './api'
import { setCookie, removeCookie } from '../shared/cookies'
import { UserType } from '../types/auth/user'

export interface valuesTypes {
  email: string
  password: string
  setError?: (message: string) => void
}

interface Response {
  token: string
  authorization: string
  user: null | UserType
}

export async function signIn({
  email,
  password,
  setError
}: valuesTypes): Promise<Response> {
  return new Promise(resolve => {
    api
      .post('/api/v1/auth/sign-in', { email, password })
      .then(function ({ data, headers }) {
        resolve({
          token: `${headers['refresh-token']}`,
          authorization: `${headers.authorization}`,
          user: data
        })
        localStorage.setItem('state', JSON.stringify({ user: data }))
        setCookie('authorization', headers.authorization)
      })
      .catch(function ({ response }) {
        const { message } = response.data.errors
        setError(message)
        resolve(null)
      })
  })
}

export function signOut() {
  removeCookie('authorization')
  localStorage.removeItem('state')
}
