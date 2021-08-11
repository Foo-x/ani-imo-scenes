import * as React from "react"
import * as styles from "~/styles/components/youtube-video.module.css"

type Props = {
  videoId: string
}

const YouTubeVideo: React.FC<Props> = ({ videoId }) => {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default YouTubeVideo
