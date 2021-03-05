import React, { createContext, useEffect, useState } from 'react'
import * as auth from '../services/auth'
import { getCookie, getCookieFromBrowser } from '../shared/cookies'
import { UserType } from '../types/auth/user'

interface AuthContextData {
  signed: boolean
  user: UserType | null
  signOut(): void
  signIn(values: auth.valuesTypes): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserType | null>(null)

  async function signIn(values) {
    const response = await auth.signIn(values)
    if (response) setUser(response.user)
  }

  async function signOut() {
    setUser(null)
    auth.signOut()
  }

  useEffect(() => {
    const authorization = getCookieFromBrowser('authorization')
    if (authorization) {
      const state = JSON.parse(localStorage.getItem('state'))
      if (state) setUser(state.user)
    } else {
      localStorage.setItem('state', JSON.stringify({ user: {} }))
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
