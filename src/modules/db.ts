import Dexie from "dexie"
import { VideoInfo } from "./google-sheets"

class DB extends Dexie {
  videoInfos: Dexie.Table<VideoInfo, number>

  constructor() {
    super("ani-imo-scenes-db")

    this.version(1).stores({
      videoInfos:
        "index, videoId, title, person, createdAt, videoTitle, postedAt",
    })

    this.videoInfos = this.table("videoInfos")
  }
}

export const db = new DB()
