import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { List, ListItem, ListItemSecondaryAction, Paper, Button } from '@material-ui/core'
import { details } from '../../assignment/AssignmentDetail'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import PaddingAdder from '../../../common/PaddingAdder.styles'
import AddIcon from '@material-ui/icons/Add'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: 10
  }
}))

const MultipleChoiceQuestionEditor = props => {
  const { description, options = [] } = props.info

  const [isEditing, setEditing] = useState(true)
  const [dirtyOptions, setDirtyOptions] = useState([{ label: '' }])
  const [dirtyDescription, setDirtyDescription] = useState([])

  useEffect(() => {
    setDirtyOptions(options)
  }, [options])

  useEffect(() => {
    setDirtyDescription(description)
  }, [description])

  const handleDeleteOption = ({ value }) => {
    setDirtyOptions(dirtyOptions.filter(x => x.value !== value))
  }

  const handleUpdateChoice = ({ label, value }) => {
    if (!value) {
      const value = dirtyOptions.length + 1
      setDirtyOptions([...dirtyOptions, { label, value }])
    }
  }

  const classess = useStyles()

  const toggleEditor = () => {
    setEditing(!isEditing)
  }

  return (
    <Paper elevation={0} square>
      {
        isEditing ? (
          <>
            <PaddingAdder>
              <TextField
                id='standard-multiline-static'
                label='Description of question'
                multiline
                fullWidth
                value={dirtyDescription}
                rows={4}
              />
            </PaddingAdder>
            <ChoiceList
              choices={dirtyOptions}
              onUpdateChoice={handleUpdateChoice}
              onDelete={handleDeleteOption}
            />
          </>
        ) : (
          <MultipleChoiceQuestion
            description={dirtyDescription}
            options={dirtyOptions}
          />
        )
      }
      <PaddingAdder>
        <Button variant='contained' color='primary' className={classess.root}>Save</Button>
        <Button variant='contained' className={classess.root} onClick={toggleEditor}>Preview</Button>
        <Button>Delete</Button>
      </PaddingAdder>
    </Paper>
  )
}

MultipleChoiceQuestionEditor.propTypes = {
  info: PropTypes.object
}

MultipleChoiceQuestionEditor.defaultProps = {
  info: details.tasks.mcq[0]
}

export default MultipleChoiceQuestionEditor

const Choice = (props) => {
  const { label, value, onDelete, onUpdateChoice } = props

  const [dirtyLabel, setDirtyLabel] = useState(label)

  useEffect(() => {
    setDirtyLabel(label)
  }, [label])

  const handleDeleteIconClick = () => {
    onDelete({ value })
  }

  const handleAddIconClick = () => {
    onUpdateChoice({ label: dirtyLabel, value })
  }

  const handleValueUpdate = (event) => {
    setDirtyLabel(event.target.value)
  }

  return (
    <ListItem>
      <TextField
        id='standard-multiline-static'
        label='Option'
        fullWidth
        onChange={handleValueUpdate}
        value={dirtyLabel}
      />
      {
        value ? (
          <ListItemSecondaryAction>
            <IconButton onClick={handleDeleteIconClick}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        ) : (
          <ListItemSecondaryAction>
            <IconButton onClick={handleAddIconClick}>
              <AddIcon />
            </IconButton>
          </ListItemSecondaryAction>
        )
      }

    </ListItem>
  )
}

const ChoiceList = (props) => {
  const { choices = [], onDelete = () => false, onUpdateChoice = () => false } = props
  return (
    <List>
      {
        choices.map(({ value, label }, index) => {
          return (
            <Choice
              key={index}
              value={value}
              label={label}
              onDelete={onDelete}
              onUpdateChoice={onUpdateChoice}
            />
          )
        })
      }
      <Choice
        label=''
        onUpdateChoice={onUpdateChoice}
        onDelete={onDelete}
      />
    </List>
  )
}
