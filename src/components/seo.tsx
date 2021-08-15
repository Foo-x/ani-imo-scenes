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
  lang = "en",
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery<GatsbyTypes.SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site?.siteMetadata?.description
  const defaultTitle = site?.siteMetadata?.title
  const actualTitle = title ? `${title} | ${defaultTitle}` : defaultTitle

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
