import { graphql, Link, useStaticQuery, withPrefix } from "gatsby"
import React from "react"
import * as styles from "~/styles/components/footer.module.css"

type Props = {
  location: Window["location"]
}

const Footer: React.FC<Props> = ({ location }) => {
  const data = useStaticQuery<GatsbyTypes.FooterQuery>(graphql`
    query Footer {
      home: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "home.svg" }
      ) {
        publicURL
      }
      homeLineal: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "home_lineal.svg" }
      ) {
        publicURL
      }
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

  const isHome = new RegExp(`^${withPrefix("/")}$`).test(location.pathname)
  const isAdd = new RegExp(`^${withPrefix("/add")}/?$`).test(location.pathname)
  const isAbout = new RegExp(`^${withPrefix("/about")}/?$`).test(
    location.pathname
  )

  return (
    <footer className={styles.container}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link to="/" replace={isHome}>
            <button className={styles.button}>
              <img
                className={styles.icon}
                src={isHome ? data.home?.publicURL : data.homeLineal?.publicURL}
                alt="home"
              />
            </button>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/add" replace={isAdd}>
            <button className={styles.button}>
              <img
                className={styles.icon}
                src={isAdd ? data.add?.publicURL : data.addLineal?.publicURL}
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
                  isAbout ? data.about?.publicURL : data.aboutLineal?.publicURL
                }
                alt="about"
              />
            </button>
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
