import React, { useState } from 'react'
import { Typography, Button } from '@material-ui/core'
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'
import CreateNoteForm from './CreateNoteForm'
import PaddingAdder from '../../common/PaddingAdder.styles'
const { default: NotesGrid } = require('./NotesGrid')

const Notes = () => {

  const match = useRouteMatch('/courses/:courseId')

  const history = useHistory()

  const [notes, setNotes] = useState(DEFAULT_NOTES)

  const handleCreate = (formData) => {
    setNotes([...notes, { id: Date.now(), ...formData }])
    history.push(`${match.path}/notes`)
  }

  return (
    <Switch>
      <Route path={`${match.path}/notes/create`}>
        <CreateNoteForm note='' onCreate={handleCreate} />
      </Route>
      <Route>
        <PaddingAdder l={20}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
          >
            <div>
              <Typography component='h3' variant='h4'>Notes</Typography>
            </div>
            <div>
              <Button
                onClick={() => {
                  history.push(`${match.path}/notes/create`)
                }}
                variant='contained'
                color='primary'
              >Create New Note
              </Button>
            </div>
          </div>
        </PaddingAdder>
        <NotesGrid notes={notes} />
      </Route>
    </Switch>
  )
}

export default Notes

const DEFAULT_NOTES = [
  {
    id: 1,
    front: 'Who is credited for the discovery of teloscope?',
    label: 'Astro-Physics',
    description: 'Exam II',
    back: 'Galli Galleleo',
    color: '#ccc'
  },
  {
    id: 2,
    front: 'What is smallest unit of life called?',
    back: 'Cell',
    description: 'Exam I',
    label: 'Biology',
    color: 'purple'
  },
  {
    id: 3,
    label: 'Physics',
    front: 'What is the process of bending of light when it passes through water is called?',
    back: 'Refreaction',
    description: 'Exam I',
    color: 'yellow'
  },
  {
    id: 4,
    label: 'Physics',
    front: 'Define light',
    description: 'Exam II',
    back: 'Light is a form of energy.',
    color: 'orange'
  },
  {
    id: 5,
    front: 'What is gravitation?',
    label: 'Physics',
    description: 'Exam I',
    back: 'The force with which a mass pulls other items towards itself.',
    color: 'red'
  }
]
