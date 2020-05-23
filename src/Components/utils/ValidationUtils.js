import { getKeys, isEmpty } from './ObjectUtils'

export const validate = async (objectToValidate, validationConfig) => {
  const error = {}
  const validators = getKeys(validationConfig)
  validators.forEach(objectKey => {
    const validationFunction = validationConfig[objectKey]
    const validationResult = validationFunction(objectToValidate[objectKey])
    if (!validationResult.isValid) {
      error[objectKey] = validationResult.message || `${objectKey} is not valid`
    }
  })
  if (!isEmpty(error)) throw error
  return objectToValidate
}
