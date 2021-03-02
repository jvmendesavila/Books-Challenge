import React from 'react'
import LoginFormContainer from '../components/Login/LoginForm/index.container'
import { getCookie } from '../shared/cookies'

// Components

// Style
import useStyle from './style'

export default function Books() {
  const classes = useStyle()
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
