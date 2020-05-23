/* eslint-env jest */

import { validate } from '../../src/Components/utils/ValidationUtils'
import { isEmpty } from '../../src/Components/utils/StringUtils'

const emptyFormData = {}

const formData = {
  username: '',
  password: ''
}

const partialErrorForm = {
  username: 'This is username',
  password: ''
}

const validForm = {
  username: 'SomeUsername',
  password: 'password'
}

const INVALID_USERNAME_ERROR_MESSAGE = 'Please provide a valid username'
const INVALID_PASSWORD_ERROR_MESSAGE = 'Please provide a valid password'
const validators = {
  username: (username) => ({
    isValid: !isEmpty(username),
    message: INVALID_USERNAME_ERROR_MESSAGE
  }),
  password: (password) => ({
    isValid: !isEmpty(password),
    message: INVALID_PASSWORD_ERROR_MESSAGE
  })
}

const validators_NO_MESSAGES = {
  username: (username) => ({
    isValid: !isEmpty(username)
  }),
  password: (password) => ({
    isValid: !isEmpty(password)
  })
}

describe('validate', () => {
  test('it should throw error with custom errors when when form is invalid and custom errors are passed', async () => {
    try {
      await validate(emptyFormData, validators)
    } catch (e) {
      expect(e).toEqual({
        username: INVALID_USERNAME_ERROR_MESSAGE,
        password: INVALID_PASSWORD_ERROR_MESSAGE
      })
    }
  })

  test('it should throw error with default errors when form is invalid and custom errors are not passed', async () => {
    try {
      await validate(formData, validators_NO_MESSAGES)
    } catch (e) {
      const postFix = 'is not valid'
      expect(e).toEqual({
        username: `username ${postFix}`,
        password: `password ${postFix}`
      })
    }
  })

  test('it should throw error when form is partially valid', async () => {
    try {
      await validate(partialErrorForm, validators_NO_MESSAGES)
    } catch (e) {
      const postFix = 'is not valid'
      expect(e).toEqual({
        password: `password ${postFix}`
      })
    }
  })

  test('it should throw error only for invalid fields when form is partially valid', async () => {
    try {
      await validate(partialErrorForm, validators_NO_MESSAGES)
    } catch (e) {
      expect(e).not.toHaveProperty('username')
    }
  })

  test('it should return original objectToValidate when form is valid', async () => {
    const data = await validate(validForm, validators_NO_MESSAGES)
    expect(data).toHaveProperty('username', 'SomeUsername')
    expect(data).toHaveProperty('password', 'password')
  })
})
