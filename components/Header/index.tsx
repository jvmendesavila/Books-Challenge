import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Material UI
import { Grid, Hidden, Typography } from '@material-ui/core'

// Style
import useStyle from './style'
import { removeCookie } from '../../shared/cookies'

export default function Header() {
  const classes = useStyle()
  const router = useRouter()
  const [user, setUser] = useState({ name: '' })
  const { pathname }: { pathname: string } = useRouter()
  const hideHeader: string[] = ['/'].filter(route => route === pathname)

  // Functions
  function handleLogout() {
    removeCookie('authorization')
    localStorage.removeItem('user')
    router.push('/')
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    setUser(user)
  }, [])

  return hideHeader.length ? null : (
    <Grid container justify="center" style={{ padding: '42px 16px' }}>
      <Grid container style={{ maxWidth: 1130 }} justify="space-between">
        <Grid item style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/img/home/header/logo.png" height="36px" />
          <img src="/img/home/header/label.png" style={{ marginLeft: 16 }} />
        </Grid>
        <Grid item style={{ display: 'flex', alignItems: 'center' }}>
          <Hidden xsDown>
            <Typography>{user.name}</Typography>
          </Hidden>
          <img
            src="/img/home/header/logout.png"
            style={{ marginLeft: 16, cursor: 'pointer' }}
            onClick={handleLogout}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
