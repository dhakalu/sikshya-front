import { FormControlLabel, TextField, Button, Checkbox } from '@material-ui/core'
import React from 'react'
import WhiteSpace from '../../common/WhiteSpace.styles'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '../notes.js/CreateNoteForm'

const CreateDiscussionForm = ({ props }) => {
  const { register, errors, watch, handleSubmit } = useForm()

  const onSubmit = (values) => {
    alert(JSON.stringify(values))
  }

  const watchFields = watch(['carriesMarks'])

  return (
    <div style={{ padding: 10 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name='detail'
          id='detail'
          label='Discussion detail'
          inputRef={register({
            required: 'Discussion detail is needed. This helps user know what is expected out of this assignment.'
          })}
          error={errors.detail}
          rows={10}
          multiline
          fullWidth
          variant='outlined'
        />
        <ErrorMessage message={(errors.detail || {}).message} />
        <WhiteSpace />
        <FormControlLabel
          control={(
            <Checkbox
              name='carriesMarks'
              inputRef={register()}
              onChange={(event) => false}
            />
          )}
          label='Carries Marks'
        />
        {watchFields.carriesMarks && (
          <TextField
            name='fullMarks'
            id='fullMarks'
            label='Full Marks'
            inputRef={register()}
            size='small'
            variant='outlined'
            style={{ marginRight: 10 }}
          />)}
        <Button
          variant='contained'
          color='primary'
          disableElevation
          type='submit' onSubmit={handleSubmit(onSubmit)}
        >
              Create
        </Button>
      </form>
    </div>
  )
}

export default CreateDiscussionForm
