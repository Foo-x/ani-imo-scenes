import React from "react"

export const YouTubePlayerContext = React.createContext<
  [YT.Player | null, (player: YT.Player | null) => void]
>([null, () => {}])
