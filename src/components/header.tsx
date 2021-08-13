import * as React from "react"
import * as styles from "~/styles/components/header.module.css"

type Props = {
  siteTitle?: string
}

const Header: React.FC<Props> = ({ siteTitle = "" }) => (
  <header className={styles.header}>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{siteTitle}</h1>
    </div>
  </header>
)

export default Header
