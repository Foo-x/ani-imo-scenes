import { Link, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import YouTubeVideo from "~/components/youtube-video"
import { YouTubePlayerContext } from "~/contexts/youtube-context"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage: React.FC<PageProps> = () => {
  const [player, setPlayer] = useState<YT.Player | null>(null)

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
      <YouTubePlayerContext.Provider value={[player, setPlayer]}>
        {/* dummy params */}
        <YouTubeVideo videoId="ovXkBclWosE" start={48} end={54} />
        <YouTubeVideo videoId="ovXkBclWosE" start={48} end={54} />
      </YouTubePlayerContext.Provider>
    </Layout>
  )
}

export default IndexPage
