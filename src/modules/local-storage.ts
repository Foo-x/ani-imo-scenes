const lastFetchedKey = "last-fetched"
export const setLastFetched = () => {
  localStorage.setItem(lastFetchedKey, "" + Date.now())
}

export const getLastFetched = (): number | null => {
  const lastFetched = localStorage.getItem(lastFetchedKey)
  return lastFetched ? +lastFetched : null
}

const fakeDbKey = "fake-db"
export const setFakeDb = (fakeDb: Blob) => {
  fakeDb.text().then(fakeDbText => {
    localStorage.setItem(fakeDbKey, fakeDbText)
  })
}

export const getFakeDb = (): Blob | null => {
  const fakeDbText = localStorage.getItem(fakeDbKey)
  return fakeDbText ? new Blob([fakeDbText], { type: "text/json" }) : null
}
