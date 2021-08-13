import { PageProps } from "gatsby"
import React, { useEffect, useState } from "react"
import VideoCard from "~/components/video-card"
import { YouTubePlayerContext } from "~/contexts/youtube-context"
import { getVideoInfos, VideoInfo } from "~/modules/google-sheets"
import * as styles from "~/styles/pages/index.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage: React.FC<PageProps> = () => {
  const [player, setPlayer] = useState<YT.Player | null>(null)
  const [videoInfos, setVideoInfos] = useState<VideoInfo[]>([])

  useEffect(() => {
    getVideoInfos().then(_videoInfos => {
      if (_videoInfos) {
        setVideoInfos(_videoInfos)
      }
    })
  }, [])

  return (
    <Layout>
      <Seo title="Home" />
      <YouTubePlayerContext.Provider value={[player, setPlayer]}>
        {videoInfos.map(videoInfo => (
          <div className={styles.videoCard}>
            <VideoCard
              title={videoInfo.title}
              createdAt={videoInfo.createdAt}
              createdBy={videoInfo.createdBy}
              videoId={videoInfo.videoId}
              start={videoInfo.start === -1 ? undefined : videoInfo.start}
              end={videoInfo.end === -1 ? undefined : videoInfo.end}
            />
          </div>
        ))}
      </YouTubePlayerContext.Provider>
    </Layout>
  )
}

export default IndexPage
