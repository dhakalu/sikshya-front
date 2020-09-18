import React, { useState } from 'react'
import { convertFromRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Typography, FormControl } from '@material-ui/core'
import { QuestionCategory } from '../radio/RadioGroup'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  description: {
    margin: '10px 0'
  },
  marks: {
    margin: '0 10px'
  }
}))

const TextEditor = (props) => {
  const { questionId, answer, onUpdate = () => false, category, points, description, placeholder = 'Type your response here' } = props
  const [editorState, setEditorState] = useState(answer ? convertFromRaw(answer) : undefined)

  const onContentStateChange = (state) => {
    setEditorState(state)
    onUpdate(questionId, state)
  }

  const classes = useStyles()
  return (
    <FormControl fullWidth>
      <QuestionCategory category={category} points={points} pointsClass={classes.marks} />

      {description && (
        <Typography className={classes.description}>
          {description}
        </Typography>
      )}
      <Editor
        editorClassName='text-editor'
        placeholder={placeholder}
        onContentStateChange={onContentStateChange}
      />
    </FormControl>
  )
}

export default TextEditor
