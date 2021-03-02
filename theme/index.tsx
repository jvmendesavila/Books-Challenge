import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import colors from './colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary.main
    },
    secondary: {
      main: colors.secondary.main
    },
    error: {
      main: red.A400
    },
    background: {
      default: colors.background.main
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        fontSize: 14
      },
      containedPrimary: {
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: colors.primary.main
        },
        boxShadow: 'none',
        color: 'white'
      },
      outlinedSecondary: {
        color: colors.gray.main,
        border: `1px solid rgba(0, 0, 0, 0.23) !important`
      }
    }
  }
})

export default theme
