import { useLiveQuery } from "dexie-react-hooks"
import { PageProps } from "gatsby"
import React, { useEffect, useState } from "react"
import DummyVideoCard from "~/components/dummy-video-card"
import Layout from "~/components/layout"
import Seo from "~/components/seo"
import VideoCard from "~/components/video-card"
import { YouTubePlayerContext } from "~/contexts/youtube-context"
import { db } from "~/modules/db"
import { getVideoInfos } from "~/modules/google-sheets"
import { getLastFetched, setLastFetched } from "~/modules/local-storage"
import * as styles from "~/styles/pages/index.module.css"

const fetchInterval = 60000

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const [player, setPlayer] = useState<YT.Player | null>(null)
  const [isReady, setIsReady] = useState(false)

  const videoInfos = useLiveQuery(
    async () => {
      const result = await db.videoInfos.toArray()
      if (result.length > 0) {
        setIsReady(true)
      }
      result.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      return result
    },
    [],
    []
  )

  useEffect(() => {
    if (Date.now() - (getLastFetched() ?? 0) < fetchInterval) {
      return
    }
    getVideoInfos().then(_videoInfos => {
      if (_videoInfos) {
        db.videoInfos.bulkPut(_videoInfos)
        setLastFetched()
      }
    })
  }, [])

  return (
    <Layout location={location}>
      <Seo />
      <YouTubePlayerContext.Provider value={[player, setPlayer]}>
        {isReady
          ? videoInfos.map(videoInfo => (
              <div className={styles.videoCard} key={videoInfo.index}>
                <VideoCard
                  title={videoInfo.title}
                  createdAt={videoInfo.createdAt}
                  videoId={videoInfo.videoId}
                  start={videoInfo.start === -1 ? undefined : videoInfo.start}
                  end={videoInfo.end === -1 ? undefined : videoInfo.end}
                />
              </div>
            ))
          : [...Array(3)].map((_, i) => (
              <div className={styles.videoCard} key={i}>
                <DummyVideoCard />
              </div>
            ))}
      </YouTubePlayerContext.Provider>
    </Layout>
  )
}

export default IndexPage
