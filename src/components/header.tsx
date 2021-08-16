import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import { useMediaQuery } from "react-responsive"
import * as styles from "~/styles/components/header.module.css"

type Props = {
  siteTitle?: string
  location: Window["location"]
}

const Header: React.FC<Props> = ({ siteTitle = "", location }) => {
  const data = useStaticQuery<GatsbyTypes.HeaderQuery>(graphql`
    query Header {
      add: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "add.svg" }
      ) {
        publicURL
      }
      addLineal: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "add_lineal.svg" }
      ) {
        publicURL
      }
      about: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "info.svg" }
      ) {
        publicURL
      }
      aboutLineal: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "info_lineal.svg" }
      ) {
        publicURL
      }
    }
  `)

  const isMobile = useMediaQuery({ maxWidth: "37.5em" })
  const isAdd = /^\/add\/?$/.test(location.pathname)
  const isAbout = /^\/about\/?$/.test(location.pathname)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <Link to="/">{siteTitle}</Link>
        </h1>
        {isMobile ? null : (
          <ul className={styles.items}>
            <li className={styles.item}>
              <Link to="/add" replace={isAdd}>
                <button className={styles.button}>
                  <img
                    className={styles.icon}
                    src={
                      isAdd ? data.add?.publicURL : data.addLineal?.publicURL
                    }
                    alt="add"
                  />
                </button>
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/about" replace={isAbout}>
                <button className={styles.button}>
                  <img
                    className={styles.icon}
                    src={
                      isAbout
                        ? data.about?.publicURL
                        : data.aboutLineal?.publicURL
                    }
                    alt="about"
                  />
                </button>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  )
}

export default Header
