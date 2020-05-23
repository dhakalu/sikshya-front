/* eslint-env jest */

import { isEmpty, getKeys } from '../../src/Components/utils/ObjectUtils'

const empty = {}

const nonEmpty = {
  username: '',
  password: ''
}

describe('isEmpty', () => {
  test('it should return true for {}', () => {
    expect(isEmpty(empty)).toBeTruthy()
  })

  test('it should return false for object which has keys', () => {
    expect(isEmpty(nonEmpty)).not.toBeTruthy()
  })
})

describe('isEmpty', () => {
  test('it should return [] for {}', () => {
    expect(getKeys(empty)).toHaveLength(0)
  })

  test(`it should return ["username", "password"] for ${JSON.stringify(nonEmpty)}`, () => {
    const recieved = getKeys(nonEmpty)
    expect(recieved).toHaveLength(2)
    expect(recieved).toContain('username')
    expect(recieved).toContain('password')
  })
})
