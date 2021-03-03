import React, { useEffect, useState } from 'react'
import api from '../../../../services/api'
import { toast } from 'react-toastify'

// Material UI
import { Grid, Typography } from '@material-ui/core'

// Style
import useStyle from './style'
import Truncate from 'react-truncate'

export default function Home() {
  const classes = useStyle()
  const [books, setBooks] = useState([])

  useEffect(() => {
    api
      .get('/api/v1/books?page=1&amount=12')
      .then(function ({ data }) {
        setBooks(data.data)
      })
      .catch(function ({ response }) {
        const { message } = response.data.errors
        toast.warning(message)
      })
  }, [])

  return (
    <Grid container justify="center">
      <Grid container style={{ maxWidth: 1160, padding: '0px 8px 42px' }}>
        {books.map(book => (
          <Grid item style={{ padding: 8 }} xs={12} sm={6} md={4} lg={3}>
            <Grid container wrap="nowrap" className={classes.container}>
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
                    i <= 1 ? (
                      <Typography className={classes.bookAuthor}>
                        {author}
                      </Typography>
                    ) : i === 2 ? (
                      <Typography
                        className={classes.bookAuthor}
                        style={{ lineHeight: '8px' }}
                      >
                        {'...'}
                      </Typography>
                    ) : null
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
      </Grid>
    </Grid>
  )
}
