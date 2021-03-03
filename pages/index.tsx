import React from 'react'
import LoginFormContainer from '../components/Pages/Public/Login/LoginForm/index.container'
import { getCookie } from '../shared/cookies'

export default function Books() {
  return <LoginFormContainer />
}

export async function getServerSideProps(context) {
  const authorization = getCookie('authorization', context.req)
  if (authorization) {
    context.res.writeHead(302, { Location: '/home' }).end()
  }
  return {
    props: {}
  }
}
