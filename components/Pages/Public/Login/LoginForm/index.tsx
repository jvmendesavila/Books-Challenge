import React from 'react'

// Material UI
import { Button, Grid, Theme, CircularProgress } from '@material-ui/core'

// Form
import * as Yup from 'yup'
import { Formik, Form } from 'formik'

// Style
import useStyle from './style'

// Types
import FormTextField from '../../../../Form/FormTextField'
import { Popup } from 'semantic-ui-react'

export interface PlayerFormComponentType {
  theme?: Theme
  error: String
  loading: boolean
  onSubmit: (values: { email: string; password: string }) => void
}

export default function LoginForm(props: PlayerFormComponentType) {
  const classes = useStyle()

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Email Obrigatório *')
      .email('Email Inválido *'),
    password: Yup.string().required('Senha Obrigatória *')
  })

  const formInitialValues = {
    email: '',
    password: ''
  }

  return (
    <Formik
      validationSchema={schema}
      initialValues={formInitialValues}
      onSubmit={props.onSubmit}
    >
      {formik => (
        <Form onSubmit={formik.handleSubmit} data-testid="form">
          {/* Form */}
          <Grid container className={classes.formContainer}>
            {/* Email */}
            <Grid container className={classes.formItem}>
              <FormTextField
                fullWidth
                name="email"
                label="Email"
                variant="filled"
                data-testid="email"
                theme={props.theme}
              />
            </Grid>

            {/* Name */}
            <Grid container className={classes.formItem}>
              <FormTextField
                fullWidth
                type="password"
                name="password"
                label="Senha"
                variant="filled"
                data-testid="password"
                theme={props.theme}
                InputProps={{
                  endAdornment: (
                    <Button
                      type="submit"
                      color="primary"
                      variant="outlined"
                      disabled={props.loading || !formik.isValid}
                    >
                      {props.loading ? (
                        <CircularProgress
                          color="primary"
                          style={{ width: 16, height: 16 }}
                        />
                      ) : (
                        'Entrar'
                      )}
                    </Button>
                  )
                }}
              />
            </Grid>
            <Popup
              className={classes.popup}
              position="bottom left"
              open={Boolean(props.error.length > 0)}
              content={'Email e/ou senha incorretos.'}
              trigger={<Grid container />}
            />
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
