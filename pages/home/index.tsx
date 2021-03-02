import React, { useEffect, useState } from 'react'

// Material UI
import { Grid, Typography } from '@material-ui/core'
import { getCookie } from '../../shared/cookies'
import api from '../../services/api'
import { toast } from 'react-toastify'

export default function HomeBooks() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    api
      .get('/api/v1/books?page=1?amount=10')
      .then(function ({ data }) {
        setBooks(data.data)
      })
      .catch(function ({ response }) {
        const { message } = response.data.errors
        toast.warning(message)
      })
  }, [])

  return <Grid container justify="center"></Grid>
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
