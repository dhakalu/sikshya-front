
import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import NoteItem from './NoteItem'

const NotesGrid = ({ notes = [] }) => {
  // stores the ids of items that are currently faced up
  // By default each note is faced down. When user cliks on the item
  // then the note gets face up
  const [currentFaceUpItems, setCurrentFaceUpItems] = useState(new Set([]))

  const onToggleNote = ({ id }) => {
    if (currentFaceUpItems.has(id)) {
      setCurrentFaceUpItems(new Set([...currentFaceUpItems].filter(xid => xid !== id)))
    } else {
      setCurrentFaceUpItems(new Set([...currentFaceUpItems, id]))
    }
  }

  return (
    <Grid container alignItems='center'>
      {
        notes.map((note = {}, i) => {
          return (
            <div key={i}>
              <NoteItem
                onClick={onToggleNote}
                note={note}
                isFaceUp={currentFaceUpItems.has(note.id)}
              />
            </div>
          )
        })
      }
    </Grid>
  )
}

export default NotesGrid
