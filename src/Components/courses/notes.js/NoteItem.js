
import React from 'react'
import styled from 'styled-components'
import { IconButton, Card, CardContent, makeStyles, CardActions, CardHeader } from '@material-ui/core'
import Flip from '@material-ui/icons/Flip'
import MoreVert from '@material-ui/icons/MoreVert'

const useStyles = makeStyles({
  root: {
    width: 275,
    margin: 10,
    height: 240
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  content: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#ddd'
    },
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const NoteItem = ({ note, isFaceUp, onClick }) => {
  const { front, back, label = '', color = 'green' } = note
  const classes = useStyles()
  return (
    <Card
      elevation={0}
      className={classes.root}
    >
      {
        isFaceUp ? null : (
          <CardHeader
            avatar={
              <div style={{ width: 40, height: 40, borderRadius: 3, background: color }} />
            }
            title={label || 'Chapter I'}
            subheader='Some description'
            action={
              <IconButton aria-label='settings'>
                <MoreVert />
              </IconButton>
            }
          />
        )
      }
      <CardContent
        className={classes.content}
        onClick={() => {
          onClick(note)
        }}
        style={{ height: !isFaceUp ? 150 : 240 }}
      >
        <div>
          {isFaceUp ? back : front}
        </div>
      </CardContent>
    </Card>

  )
}

export default NoteItem
