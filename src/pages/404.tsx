import { graphql, Link, PageProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import * as styles from "~/styles/pages/404.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage: React.FC<PageProps<GatsbyTypes.NotFoundQuery>> = ({
  data,
  location,
}) => (
  <Layout location={location}>
    <Seo title="404" />
    <article className={styles.container}>
      <h2 className={styles.heading}>404</h2>
      <GatsbyImage
        image={data.sleepingCat!.childImageSharp!.gatsbyImageData}
        alt="sleeping cat"
      />
      <div className={styles.link}>
        <Link to="/">ホームへ</Link>
      </div>
    </article>
  </Layout>
)

export default NotFoundPage

export const pageQuery = graphql`
  query NotFound {
    sleepingCat: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "sleeping-cat.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 800, formats: [WEBP])
      }
    }
  }
`
