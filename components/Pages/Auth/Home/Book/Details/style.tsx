import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    maxWidth: 770,
    padding: 48,
    flexWrap: 'nowrap',
    '@media (max-width: 960px)': {
      justifyContent: 'center',
      maxWidth: 520,
      flexWrap: 'wrap',
      padding: 24
    }
  },
  bookItem: {
    marginRight: 48,
    display: 'flex',
    '@media (max-width: 960px)': {
      marginRight: 0
    },
    '@media (min-width: 961px)': {
      minWidth: 350
    }
  },
  detailesItem: {
    maxHeight: 520,
    paddingRight: 4,
    '@media (max-width: 960px)': {
      marginTop: 24,
      maxWidth: 350,
      maxHeight: 'fit-content'
    },
    '@media (min-width: 961px)': {
      overflowY: 'scroll'
    }
  },
  closeButtonContainer: {
    top: 0,
    right: 0,
    margin: 16,
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    backgroundColor: 'white'
  },
  iconButton: {
    padding: 9,
    color: 'black',
    border: '1px solid rgba(51, 51, 51, 0.2)'
  }
}))

export default useStyles
