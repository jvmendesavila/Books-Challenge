import React, { useContext } from 'react'
import AuthContext from '../../contexts/auth'

// Material UI
import { Grid, Hidden, Typography } from '@material-ui/core'

export default function Header() {
  const { user, signOut, signed } = useContext(AuthContext)

  return !signed ? null : (
    <Grid container justify="center" style={{ padding: '42px 16px' }}>
      <Grid container style={{ maxWidth: 1130 }} justify="space-between">
        <Grid item style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/img/home/header/logo.png" height="36px" />
          <img src="/img/home/header/label.png" style={{ marginLeft: 16 }} />
        </Grid>
        <Grid item style={{ display: 'flex', alignItems: 'center' }}>
          <Hidden xsDown>
            <Typography>{user?.name}</Typography>
          </Hidden>
          <img
            src="/img/home/header/logout.png"
            style={{ marginLeft: 16, cursor: 'pointer' }}
            onClick={signOut}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
