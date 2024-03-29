export const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}

export const getKeys = (obj) => {
  return Object.keys(obj)
}

export const hasKey = (object, key) => {
  return key in object
}
