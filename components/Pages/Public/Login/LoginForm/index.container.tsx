import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import api from '../../../../../services/api'

import { setCookie } from '../../../../../shared/cookies'

// Components
import LoginForm from '.'

// Material UI
import { createMuiTheme, Grid, Theme } from '@material-ui/core'

// Style
import useStyle from './style'
import colors from '../../../../../theme/colors'

export default function LoginFormContainer() {
  const classes = useStyle()
  const router = useRouter()
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const theme: Theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.primary.main
      },
      secondary: {
        main: colors.secondary.main
      },
      background: {
        default: colors.background.main
      }
    },
    overrides: {
      MuiInputLabel: {
        filled: {
          opacity: 0.5,
          color: 'white !important'
        }
      },
      MuiFormHelperText: {
        root: {
          color: 'white !important',
          marginLeft: '2px !important',
          marginRight: '2px !important'
        }
      },
      MuiFilledInput: {
        root: {
          color: 'white',
          borderRadius: 4,
          backgroundColor: 'rgba(0, 0, 0, 0.32) !important'
        },
        underline: {
          '&:after': {
            display: 'none',
            borderBottom: '0px solid !important'
          },
          '&:before': {
            display: 'none',
            borderBottom: '0px solid !important'
          }
        }
      },
      MuiButton: {
        root: {
          fontSize: 16,
          borderRadius: 42,
          fontWeight: 'bold',
          textTransform: 'none',
          backgroundColor: 'white',
          border: 'none !important'
        },
        outlinedPrimary: {
          padding: '4px 24px',
          '&:hover': {
            backgroundColor: '#eaeaea'
          }
        }
      }
    }
  })

  // Functions
  async function onSubmit(values: { email: string; password: string }) {
    setLoading(true)
    api
      .post('/api/v1/auth/sign-in', values)
      .then(function ({ data, headers }) {
        localStorage.setItem('user', JSON.stringify(data))
        setCookie('authorization', headers.authorization)
        router.push('/home')
      })
      .catch(function ({ response }) {
        const { message } = response.data.errors
        setError(message)
      })
    setLoading(false)
  }

  // Reset Error
  useEffect(() => {
    if (error.length > 0) {
      setTimeout(function () {
        setError('')
      }, 3000)
    }
  }, [error])

  return (
    <Grid container justify="center" className={classes.background}>
      <Grid container className={classes.container}>
        <Grid item>
          <Grid container style={{ padding: '0px 12px', margin: '38px 0' }}>
            <img src="/img/login/header.png" />
          </Grid>
          <LoginForm
            onSubmit={onSubmit}
            theme={theme}
            error={error}
            loading={loading}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
