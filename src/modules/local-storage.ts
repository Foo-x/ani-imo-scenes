const lastFetchedKey = "last-fetched"
export const setLastFetched = () => {
  localStorage.setItem(lastFetchedKey, "" + Date.now())
}

export const getLastFetched = (): number | null => {
  const lastFetched = localStorage.getItem(lastFetchedKey)
  return lastFetched ? +lastFetched : null
}
