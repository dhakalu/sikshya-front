import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@material-ui/core'
import WhiteSpace from '../../common/WhiteSpace.styles'

const CreateNoteForm = ({ note, onCreate = () => false }) => {
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = values => {
    // form is valid
    onCreate(values)
  }

  return (
    <form style={{ padding: 10 }} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        required
        name='front'
        id='front'
        rows={7}
        inputRef={register({
          required: 'Title of the note is required'
        })}
        multiline
        fullWidth
        maxRows={10}
        label='Front'
        variant='filled'
        aria-errormessage='front-error-message'
        error={!!(errors.front || {}).message}
      />
      <ErrorMessage message={(errors.front || {}).message} />

      <TextField
        name='back'
        id='back'
        rows={7}
        maxRows={10}
        inputRef={register()}
        multiline
        fullWidth
        label='Back'
        variant='filled'
        error={!!(errors.front || {}).message}
      />
      <WhiteSpace />
      <TextField
        name='label'
        id='label'
        rows={7}
        maxRows={10}
        inputRef={register()}
        fullWidth
        label='Label'
        variant='filled'
        error={!!(errors.front || {}).message}
      />
      <Button type='submit' onClick={handleSubmit(onSubmit)}>Save</Button>
    </form>
  )
}

export default CreateNoteForm

export const ErrorMessage = ({ message }) => (
  <p id='front-error-message' style={{ color: 'red', fontSize: '0.8em' }}>
    {message}
  </p>
)
