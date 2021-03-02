import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: '40%',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(/img/login/background.png)'
  },
  container: {
    maxWidth: '80vw',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '@media (max-width: 600px)': {
      justifyContent: 'center'
    }
  },
  formContainer: {
    maxWidth: 360,
    marginBottom: 24,
    padding: '0px 12px'
  },
  formItem: {
    margin: '12px 0px'
  },
  popup: {
    opacity: 0.9,
    fontWeight: 'bold',
    color: 'white !important',
    border: 'none !important',
    backgroundColor: 'rgba(255, 255, 255, 0.4) !important',
    '&:before': {
      border: 'none !important',
      background:
        'linear-gradient(to bottom right, rgb(255 255 255 / 40%)40%, #0000ff00 10%) !important',
      boxShadow: '0px 0px 0 0 #bababc !important'
    }
  }
}))

export default useStyles
