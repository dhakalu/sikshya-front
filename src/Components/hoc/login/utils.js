import { isEmpty } from '../../utils/StringUtils'
import { isEmpty as objectIsEmpty } from '../../utils/ObjectUtils'

const INVALID_USERNAME_ERROR_MESSAGE = 'Must provide a valid username'

const INVALID_PASSWORD_ERROR_MESSAGE = 'Must provide a valid password'

export const loginFormValidators = {
  username: (username) => ({
    isValid: !isEmpty(username),
    message: INVALID_USERNAME_ERROR_MESSAGE
  }),
  password: (password) => ({
    isValid: !isEmpty(password),
    message: INVALID_PASSWORD_ERROR_MESSAGE
  })
}

const dummyPOCUser = {
  username: 'demo',
  password: 'Demo123!'
}

export const dummyPOCLoginApiCall = async (loginFormData) => {
  const { username, password } = loginFormData
  if (username && password) {
    const error = {}

    if (username !== dummyPOCUser.username) {
      error.username = 'User name not found'
    }

    if (password !== dummyPOCUser.password) {
      error.password = 'Password did not match'
    }

    if (objectIsEmpty(error)) {
      return { username: 'devUser', firstName: 'Dev User', lastName: 'someLastName' }
    } else {
      throw error
    }
  }
}
