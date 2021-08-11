import React, { useContext, useEffect, useState } from "react"
import YouTube from "react-youtube"
import { YouTubePlayerContext } from "~/contexts/youtube-context"
import * as styles from "~/styles/components/youtube-video.module.css"

type Props = {
  videoId: string
  start?: number
  end?: number
}

const YouTubeVideo: React.FC<Props> = ({ videoId, start, end }) => {
  const [playingPlayer, setPlayingPlayer] = useContext(YouTubePlayerContext)
  const [player, setPlayer] = useState<YT.Player>()

  useEffect(() => {
    if (player?.getPlayerState() !== YouTube.PlayerState.PLAYING) {
      return
    }
    if (playingPlayer !== player) {
      player.pauseVideo()
    }
  }, [playingPlayer])
  return (
    <YouTube
      containerClassName={styles.container}
      className={styles.video}
      videoId={videoId}
      opts={{ playerVars: { start, end } }}
      onReady={event => {
        setPlayer(event.target)
      }}
      onPlay={event => {
        setPlayingPlayer(event.target)
      }}
      onEnd={_ => {
        if (player && start !== undefined) {
          player.seekTo(start, true)
          player.pauseVideo()
        }
      }}
    />
  )
}

export default YouTubeVideo
