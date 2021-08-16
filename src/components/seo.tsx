import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"

type Props = {
  description?: string
  lang?: string
  meta?: JSX.IntrinsicElements["meta"][]
  title?: string
}

const Seo: React.FC<Props> = ({
  description = "",
  lang = "ja",
  meta = [],
  title,
}) => {
  const { site, ogp } = useStaticQuery<GatsbyTypes.SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
        ogp: file(
          sourceInstanceName: { eq: "images" }
          relativePath: { eq: "ogp.png" }
        ) {
          publicURL
        }
      }
    `
  )

  const metaDescription = description || site?.siteMetadata?.description
  const defaultTitle = site?.siteMetadata?.title
  const actualTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  const ogpUrl = new URL(ogp?.publicURL!, site?.siteMetadata?.siteUrl).href

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={actualTitle}
      meta={[
        ...[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: actualTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: ogpUrl,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
        ],
        ...meta,
      ]}
    />
  )
}

export default Seo
