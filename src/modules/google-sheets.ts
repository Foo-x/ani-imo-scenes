const url =
  "https://script.google.com/macros/s/AKfycbyQXboYBuAKdPxnXkRP7y78Kh464bIPuXn_m-F3PEMgHTN-i0Sarqp_vToKgmQX49_k/exec"

export type VideoInfo = {
  index: number
  title: string
  person: string
  createdAt: string
  createdBy: string
  videoId: string
  start: number
  end: number
  videoTitle: string
  postedAt: string
}

export const getVideoInfos = async (): Promise<VideoInfo[] | undefined> => {
  try {
    const response = await fetch(url)
    return ((await response.json()) as Omit<VideoInfo, "index">[]).map(
      (videoInfo, index: number) => ({
        index,
        ...videoInfo,
      })
    )
  } catch (_) {
    return
  }
}
