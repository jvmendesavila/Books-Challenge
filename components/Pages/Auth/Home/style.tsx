import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    '@media (min-width: 600px)': {
      minHeight: '100vh',
      marginTop: -120,
      paddingTop: 120,
      height: 'fit-content',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundImage: 'url(/img/home/background.png)'
    }
  }
}))

export default useStyles
