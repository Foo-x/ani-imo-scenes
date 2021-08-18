import Dexie, { DexieOptions } from "dexie"
// @ts-ignore
import indexedDB from "fake-indexeddb"
// @ts-ignore
import IDBKeyRange from "fake-indexeddb/lib/FDBKeyRange"
import { GetVideoInfo } from "./google-sheets"

class DB extends Dexie {
  videoInfos: Dexie.Table<GetVideoInfo, number>

  constructor(options?: DexieOptions) {
    super("ani-imo-scenes-db", options)

    this.version(1).stores({
      videoInfos:
        "index, videoId, title, person, createdAt, videoTitle, postedAt",
    })

    this.videoInfos = this.table("videoInfos")
  }
}

export const db = new DB()

export const fakeDb = new DB({ indexedDB, IDBKeyRange })
