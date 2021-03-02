import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    padding: 12,
    width: 'calc(100vw - 24px)',
    maxWidth: 440,
    minWidth: 296,
    display: 'flex',
    marginTop: '10vh',
    borderRadius: 24,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.main
  },
  logoLabel: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center'
  },
  logoImage: {
    height: 120
  },
  button: {
    margin: '20px 12px',
    minWidth: 280,
    height: 52,
    fontSize: 18,
    borderRadius: 24
  }
}))

export default useStyles
