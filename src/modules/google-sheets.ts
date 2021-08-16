const url =
  "https://script.google.com/macros/s/AKfycbzAl5EyC8LU-27Qn3vcLsGtYaZHt3TtoENobiaSPZ98HqNZPYfS11lsXR2PgqF0pNfUXA/exec"

export type GetVideoInfo = {
  index: number
  title: string
  person: string
  createdAt: string
  videoId: string
  start: number
  end: number
  videoTitle: string
  postedAt: string
}

export type PostVideoInfo = {
  title: string
  url: string
  start: string
  end: string
  person: string
  createdAt: string
}

export const getVideoInfos = async (): Promise<GetVideoInfo[] | undefined> => {
  try {
    const response = await fetch(url)
    return ((await response.json()) as Omit<GetVideoInfo, "index">[]).map(
      (videoInfo, index: number) => ({
        index,
        ...videoInfo,
      })
    )
  } catch (_) {
    return
  }
}

export const postVideoInfo = async (
  videoInfo: PostVideoInfo
): Promise<void> => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(videoInfo),
    })
  } catch (_) {}
}
