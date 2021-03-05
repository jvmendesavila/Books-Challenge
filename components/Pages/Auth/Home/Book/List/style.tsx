import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: '19px 16px',
    backgroundColor: 'white',
    boxShadow: '0px 6px 24px rgba(84, 16, 95, 0.13)',
    borderRadius: 4,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0px 16px 80px rgba(84, 16, 95, 0.32)'
    }
  },
  itemBook: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: 'calc(100% - 114px)'
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  bookAuthor: {
    fontSize: 12,
    lineHeight: '20px',
    color: theme.palette.primary.main,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  bookDetails: {
    fontSize: 12,
    lineHeight: '20px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#999999'
  }
}))

export default useStyles
