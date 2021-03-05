import React from 'react'

// Material UI
import { Grid, Hidden, IconButton, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIosRounded'
import ArrowNextIcon from '@material-ui/icons/ArrowForwardIosRounded'

import CircularProgress from '@material-ui/core/CircularProgress'

// Style
import useStyle from './style'
import Truncate from 'react-truncate'
import colors from '../../../../../../theme/colors'

export default function BookList(props) {
  const classes = useStyle()
  return props.loading ? (
    <CircularProgress color="primary" style={{ marginBottom: 180 }} />
  ) : (
    <Grid container>
      {props.books.map((book, i) => (
        <Grid
          item
          key={book.id}
          style={{
            padding: 8,
            display:
              (i < (props.page - 1) * props.perPage ||
                i > props.page * props.perPage - 1) &&
              'none'
          }}
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <Grid
            container
            wrap="nowrap"
            className={classes.container}
            onClick={() => props.handleOpenBook(book)}
          >
            {/* Book Image */}
            <Grid item style={{ marginRight: 16 }}>
              <img src={book.imageUrl} width="100px" height="150px" />
            </Grid>
            <Grid item className={classes.itemBook}>
              {/* Book Header */}
              <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Title */}
                <Truncate lines={2} className={classes.bookTitle}>
                  <Typography>{book.title}</Typography>
                </Truncate>

                {/* Authors */}
                {book.authors.map((author, i) =>
                  i !== 2 ? (
                    <Typography
                      key={i}
                      className={classes.bookAuthor}
                      style={{ display: i > 2 && 'none' }}
                    >
                      {author}
                    </Typography>
                  ) : (
                    <Typography
                      key={i}
                      className={classes.bookAuthor}
                      style={{ lineHeight: '8px' }}
                    >
                      {'...'}
                    </Typography>
                  )
                )}
              </Grid>

              {/* Book Deatails */}
              <Grid item>
                {/* Page Count */}
                <Typography className={classes.bookDetails}>
                  {`${book.pageCount} Páginas`}
                </Typography>

                {/* Publisher */}
                <Typography className={classes.bookDetails}>
                  {`Editora ${book.publisher}`}
                </Typography>

                {/* Published */}
                <Typography className={classes.bookDetails}>
                  {`Publicado em ${book.published}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}

      {/* Footer Mobile */}
      <Hidden xsDown>
        <Grid container style={{ padding: 8 }}>
          <Grid container justify="flex-end">
            <Grid item style={{ display: 'flex', alignItems: 'center' }}>
              <Typography style={{ marginRight: 16, fontSize: 12 }}>
                {`Pagina ${props.page} de ${props.totalPages}`}
              </Typography>

              {/* Back Icon */}
              <IconButton
                disabled={Boolean(props.page === 1)}
                onClick={props.handleBeforePage}
                style={{
                  padding: 9,
                  marginRight: 8,
                  border: '1px solid rgba(51, 51, 51, 0.2)'
                }}
              >
                <ArrowBackIcon
                  style={{
                    fontSize: 12,
                    color: props.page !== 1 && colors.gray.second
                  }}
                />
              </IconButton>

              {/* Next Icon */}
              <IconButton
                disabled={Boolean(props.page === props.totalPages)}
                onClick={props.handleNextPage}
                style={{
                  padding: 9,
                  marginLeft: 8,
                  border: '1px solid rgba(51, 51, 51, 0.2)'
                }}
              >
                <ArrowNextIcon
                  style={{
                    fontSize: 12,
                    color: props.page !== props.totalPages && colors.gray.second
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      {/* Footer Mobile Up */}
      <Hidden smUp>
        <Grid container style={{ padding: 8 }}>
          <Grid container justify="center">
            <Grid item style={{ display: 'flex', alignItems: 'center' }}>
              {/* Back Icon */}
              <IconButton
                disabled={Boolean(props.page === 1)}
                onClick={props.handleBeforePage}
                style={{
                  padding: 9,
                  marginRight: 8,
                  border: '1px solid rgba(51, 51, 51, 0.2)'
                }}
              >
                <ArrowBackIcon
                  style={{
                    fontSize: 12,
                    color: props.page !== 1 && colors.gray.second
                  }}
                />
              </IconButton>

              <Typography style={{ margin: '0px 16px', fontSize: 12 }}>
                {`Pagina ${props.page} de ${props.totalPages}`}
              </Typography>

              {/* Next Icon */}
              <IconButton
                disabled={Boolean(props.page === props.totalPages)}
                onClick={props.handleNextPage}
                style={{
                  padding: 9,
                  marginLeft: 8,
                  border: '1px solid rgba(51, 51, 51, 0.2)'
                }}
              >
                <ArrowNextIcon
                  style={{
                    fontSize: 12,
                    color: props.page !== props.totalPages && colors.gray.second
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  )
}
