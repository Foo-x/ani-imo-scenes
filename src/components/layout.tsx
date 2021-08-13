import { graphql, useStaticQuery } from "gatsby"
import { ReactNodeLike } from "prop-types"
import * as React from "react"
import Header from "./header"

type Props = {
  children: ReactNodeLike
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.SiteTitleQuery>(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site?.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
