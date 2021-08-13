import { PageProps } from "gatsby"
import React, { useState } from "react"
import VideoCard from "~/components/video-card"
import { YouTubePlayerContext } from "~/contexts/youtube-context"
import * as styles from "~/styles/pages/index.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage: React.FC<PageProps> = () => {
  const [player, setPlayer] = useState<YT.Player | null>(null)

  return (
    <Layout>
      <Seo title="Home" />
      <YouTubePlayerContext.Provider value={[player, setPlayer]}>
        {/* dummy params */}
        <div className={styles.videoCard}>
          <VideoCard
            title="foo"
            createdAt="2021/08/13"
            createdBy="ふー"
            videoId="ovXkBclWosE"
            start={48}
            end={54}
          />
        </div>
        <div className={styles.videoCard}>
          <VideoCard
            title="foo"
            createdAt="2021/08/13"
            createdBy="ふー"
            videoId="ovXkBclWosE"
            start={48}
            end={54}
          />
        </div>
      </YouTubePlayerContext.Provider>
    </Layout>
  )
}

export default IndexPage
