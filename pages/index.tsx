import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../contexts/auth'
import { getCookie } from '../shared/cookies'

// Pages
import Home from '../components/Pages/Auth/Home'
import LoginFormContainer from '../components/Pages/Public/Login/LoginForm/index.container'

export default function Books({ authorization }) {
  const { signed, signIn } = useContext(AuthContext)
  const [auth, setAuth] = useState(!!authorization)

  useEffect(() => {
    setAuth(signed)
  }, [signed])

  return auth || signed ? <Home /> : <LoginFormContainer signIn={signIn} />
}

export async function getServerSideProps(context) {
  const authorization = getCookie('authorization', context.req) || null
  return {
    props: { authorization }
  }
}
