
export const isString = stringToCheck => typeof stringToCheck === 'string' || stringToCheck instanceof String

/**
 * Can be used weather a string is empty or not.
 * By default this method returns true if the object is undefined or null.
 * This can be overridden using returnFalseForUndefined argument
 * @param {String} stringToCheck
 * @param {boolean} returnFalseForUndefined This can be used to check weather a string is blank or not
 * @throws {TypeError} When the passed object is not of type string.
 */
export const isEmpty = (stringToCheck, returnFalseForUndefined) => {
  if (stringToCheck === undefined || stringToCheck === null) return !returnFalseForUndefined
  if (!isString(stringToCheck)) {
    throw new TypeError('input must be a string')
  }
  return (!stringToCheck || stringToCheck.length === 0)
}

export const upperCase = (string) => {
  if (!isString(string)) {
    throw new TypeError('input must be a string')
  }
  return string.toUpperCase()
}
