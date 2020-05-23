/* eslint-env jest */

import { isString, isEmpty } from '../../src/Components/utils/StringUtils'

describe('isString', () => {
  test('it returns false when null', () => {
    expect(isString(null)).toBeFalsy()
  })

  test('it returns false when undefined', () => {
    expect(isString(undefined)).toBeFalsy()
  })

  test('it returns false when integer is passed', () => {
    expect(isString(9)).toBeFalsy()
  })

  test('it returns false when float is passed', () => {
    expect(isString(9.00)).toBeFalsy()
  })

  test('it returns false when object is passed', () => {
    expect(isString({})).toBeFalsy()
  })

  test('it returns true for empty string', () => {
    expect(isString('')).toBeTruthy()
  })

  test('it returns true for non empty string', () => {
    expect(isString('this can be anything')).toBeTruthy()
  })

  test('it returns true for string created using new String [It is discouraged to create string this way]', () => {
    expect(isString(new String(''))).toBeTruthy()
  })
})

describe('isEmpty', () => {
  test('it returns true when null is passed', () => {
    expect(isEmpty(null)).toBeTruthy()
  })

  test('it returns false when null is passed but returnFalseForUndefined is true', () => {
    expect(isEmpty(null, true)).not.toBeTruthy()
  })

  test('it returns true when undefined is passed', () => {
    expect(isEmpty(undefined)).toBeTruthy()
  })

  test('it returns false when undefined is passed but returnFalseForUndefined is true', () => {
    expect(isEmpty(undefined, true)).not.toBeTruthy()
  })

  test('it returns true when \'\' or "" is passed', () => {
    expect(isEmpty('')).toBeTruthy()
  })

  test('it returns true when new String(\'\') or new String("") is passed', () => {
    expect(isEmpty(new String(''))).toBeTruthy()
  })

  test('it returns false when non empty string is passed', () => {
    expect(isEmpty('This is non empty string')).not.toBeTruthy()
  })

  test('it returns false when non empty string created using new String is passed', () => {
    expect(isEmpty(new String('This is not empty'))).not.toBeTruthy()
  })

  test('it throws exception when non string objects are passed like integer, float', () => {
    expect(() => isEmpty('')).not.toThrowError('input must be a string')
    expect(() => isEmpty(9)).toThrowError('input must be a string')
    expect(() => isEmpty(9.00)).toThrowError('input must be a string')
    expect(() => isEmpty({})).toThrowError('input must be a string')
  })
})
