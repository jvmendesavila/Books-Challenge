import React, { useContext, useEffect, useState } from 'react'
import api from '../../../../services/api'
import { toast } from 'react-toastify'

// Material UI
import { Grid } from '@material-ui/core'

// Components
import BookList from './Book/List'
import DetailsDialog from './Book/Details'
import { getListBooks } from '../../../../services/books'

// Styles
import useStyle from './style'
import AuthContext from '../../../../contexts/auth'

const perPage = 12
const preLoad = 4

export default function Home() {
  const classes = useStyle()
  const { signOut } = useContext(AuthContext)
  const [page, setPage] = useState(1)
  const [showBook, setShowBook] = useState(null)
  const [openBook, setOpenBook] = useState(false)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([])

  function handleOpenBook(book) {
    setShowBook(book)
    setOpenBook(true)
  }

  function handleCloseBook() {
    setOpenBook(false)
    setTimeout(function () {
      setShowBook(null)
    }, 100)
  }

  function handleNextPage() {
    if (page < totalPages) setPage(page + 1)
  }

  function handleBeforePage() {
    if (page > 1) setPage(page - 1)
  }

  async function getPage() {
    setLoading(true)
    const { data, request } = await getListBooks({ page, perPage, preLoad })
    if (request.status === 200) {
      setTotalPages(Math.ceil(data.totalPages * preLoad))
      setBooks([...books, ...data.data])
    } else {
      if (request.status === 401) signOut()
      else toast.warning(data.errors.message)
    }
    setLoading(false)
  }

  // Init Searching for page 1
  useEffect(() => {
    getPage()
  }, [])

  useEffect(() => {
    if (page > 1 && page > Math.ceil(books.length / perPage)) {
      getPage()
    }
  }, [page])

  return (
    <Grid container justify="center" className={classes.background}>
      <Grid container style={{ maxWidth: 1176, padding: '0px 8px 42px' }}>
        {/* Body */}
        <Grid container justify="center" alignItems="center">
          <BookList
            page={page}
            books={books}
            perPage={perPage}
            loading={loading}
            totalPages={totalPages}
            handleOpenBook={handleOpenBook}
            handleNextPage={handleNextPage}
            handleBeforePage={handleBeforePage}
          />

          {/* Book Dialog */}
          <DetailsDialog
            open={openBook}
            showBook={showBook}
            onClose={handleCloseBook}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
