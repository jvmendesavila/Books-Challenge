import React from 'react'
import { getCookie } from '../../shared/cookies'
import Home from '../../components/Pages/Auth/Home'

export default function HomeBooks() {
  return <Home />
}

export async function getServerSideProps(context) {
  const authorization = getCookie('authorization', context.req)
  if (!authorization) {
    context.res.writeHead(302, { Location: '/' }).end()
  }
  return {
    props: {}
  }
}
