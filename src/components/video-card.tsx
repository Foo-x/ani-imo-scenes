import React from "react"
import * as styles from "~/styles/components/video-card.module.css"
import YouTubeVideo from "./youtube-video"

type Props = {
  title: string
  createdAt?: string
  createdBy?: string
  videoId: string
  start?: number
  end?: number
}

const VideoCard: React.FC<Props> = ({
  title,
  createdAt,
  createdBy,
  videoId,
  start,
  end,
}) => {
  return (
    <section>
      <YouTubeVideo {...{ videoId, start, end }} />
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.info}>
        <li>{createdBy}</li>
        <li>{createdAt}</li>
      </ul>
    </section>
  )
}

export default VideoCard
