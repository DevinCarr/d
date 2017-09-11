let STORAGE_KEY = 'down-v1'
export default {
  fetch: () => {
    let response = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return response !== null ? response : undefined
  },
  save: (item) => {
    if (item === undefined) {
      localStorage.removeItem(STORAGE_KEY)
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(item))
    }
  }
}
