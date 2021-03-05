import React, { useEffect, useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

// Material UI
import { Grid, IconButton, Typography } from '@material-ui/core'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'

// Styles
import useStyles from './style'
import colors from '../../../../../../theme/colors'

function informations(showBook) {
  const results = [
    { title: 'Páginas', information: `${showBook?.pageCount} páginas` },
    { title: 'Editora', information: `Editora ${showBook?.publisher}` },
    { title: 'Publicação', information: `${showBook?.published}` },
    { title: 'Idioma', information: `${showBook?.language}` },
    { title: 'Título Original', information: `${showBook?.title}` },
    { title: 'ISBN-10', information: `${showBook?.isbn10}` },
    { title: 'ISBN-13', information: `${showBook?.isbn13}` }
  ]
  return results
}

export default function DetailsDialog(props) {
  const classes = useStyles()

  return (
    <Dialog maxWidth="md" open={props.open} onClose={props.onClose}>
      <DialogContent style={{ padding: 0 }}>
        {/* Close Button */}
        <Grid item className={classes.closeButtonContainer}>
          <IconButton onClick={props.onClose} className={classes.iconButton}>
            <CloseRoundedIcon style={{ fontSize: 12 }} />
          </IconButton>
        </Grid>

        {/* Content Book */}
        <Grid container className={classes.container}>
          {/* Book Image */}
          <Grid item className={classes.bookItem}>
            <img src={props.showBook?.imageUrl} width="100%" />
          </Grid>

          {/* Book Details */}
          <Grid container className={classes.detailesItem}>
            {/* Book Title */}
            <Grid container>
              <Typography
                style={{
                  fontSize: 28,
                  lineHeight: '40px',
                  color: colors.gray.second
                }}
              >
                {props.showBook?.title}
              </Typography>
            </Grid>

            {/* Book Authors */}
            <Grid container>
              <Typography
                color="primary"
                style={{ fontSize: 12, lineHeight: '20px' }}
              >
                {props.showBook?.authors.map((a, i) => {
                  if (i === 0) return a
                  else return ', ' + a
                })}
              </Typography>
            </Grid>

            {/* Informations */}
            <Grid item style={{ margin: '32px 0' }}>
              <Grid container style={{ marginBottom: 16 }}>
                <Typography style={{ fontSize: 12 }}>
                  <b>INFORMAÇÕES</b>
                </Typography>
              </Grid>
              {informations(props.showBook).map((info, i) => (
                <Grid
                  key={i}
                  container
                  wrap="nowrap"
                  justify="space-between"
                  style={{ margin: '8px 0' }}
                >
                  <Typography style={{ fontSize: 12, marginRight: 32 }}>
                    <b>{info.title}</b>
                  </Typography>
                  <Typography
                    style={{ fontSize: 12, color: 'gray', marginLeft: 32 }}
                  >
                    {info.information}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            {/* Informations */}
            <Grid item style={{ margin: '32px 0' }}>
              <Grid container style={{ marginBottom: 16 }}>
                <Typography style={{ fontSize: 12 }}>
                  <b>RESENHA DA EDITORA</b>
                </Typography>
              </Grid>
              <Grid container>
                <Typography
                  style={{ fontSize: 12, color: 'gray', lineHeight: '20px' }}
                >
                  <img
                    src="/img/home/quotes.png"
                    style={{ marginRight: 2, marginBottom: -4 }}
                  />{' '}
                  {props.showBook?.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
