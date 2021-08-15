import { graphql, useStaticQuery } from "gatsby"
import { ReactNodeLike } from "prop-types"
import * as React from "react"
import * as styles from "~/styles/components/layout.module.css"
import Footer from "./footer"
import Header from "./header"

type Props = {
  children: ReactNodeLike
  location: Window["location"]
}

const Layout: React.FC<Props> = ({ children, location }) => {
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
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      <Footer location={location} />
    </>
  )
}

export default Layout
