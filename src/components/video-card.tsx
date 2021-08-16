import React from "react"
import * as styles from "~/styles/components/video-card.module.css"
import YouTubeVideo from "./youtube-video"

type Props = {
  title: string
  createdAt?: string
  videoId: string
  start?: number
  end?: number
}

const VideoCard: React.FC<Props> = ({
  title,
  createdAt,
  videoId,
  start,
  end,
}) => {
  return (
    <section>
      <YouTubeVideo {...{ videoId, start, end }} />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.info}>{createdAt}</div>
    </section>
  )
}

export default VideoCard
