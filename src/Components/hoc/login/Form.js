import React, { useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { validate } from '../../utils/ValidationUtils'

import { LoggedInUserContext } from './../withLogin'
import { loginFormValidators, dummyPOCLoginApiCall } from './utils'

const Form = (props) => {
  const [formData, setFormData] = useState({ password: 'Demo123!' })
  const [error, setError] = useState({})

  const { setUser } = useContext(LoggedInUserContext)

  const updateFormField = (fieldName, event) => {
    const value = event.target.value
    setFormData({ ...formData, [fieldName]: value })
    const validate = loginFormValidators[fieldName]
    if (validate) {
      const { isValid, message } = validate(value)
      setError({ ...error, [fieldName]: isValid ? '' : message })
    }
  }

  const onLoginFormSubmit = async (event) => {
    event.preventDefault()
    try {
      const requestBody = await validate(formData, loginFormValidators)
      try {
        const user = await dummyPOCLoginApiCall(requestBody)
        setUser(user)
      } catch (error) {
        setError(error)
      }
    } catch (error) {
      setError(error)
    }
  }

  const setUsername = (username) => updateFormField('username', username)
  const setPassword = (password) => updateFormField('password', password)

  return (
    <form onSubmit={onLoginFormSubmit}>
      <TextField
        id='username'
        type='text'
        required
        error={error.username}
        helperText={error.username}
        label='Username'
        onChange={setUsername}
        fullWidth variant='outlined'
      />
      <TextField
        id='password'
        type='password'
        label='Password'
        fullWidth
        error={error.password}
        helperText={error.password}
        required
        value={formData.password}
        onChange={setPassword}
        variant='outlined'
      />
      <div>
        <Button onClick={onLoginFormSubmit} type='primary'>Login</Button>
      </div>
    </form>
  )
}

Form.propTypes = {

}

export default Form
