import React from "react"
import * as styles from "~/styles/components/dummy-video-card.module.css"

const DummyVideoCard: React.FC = () => {
  return (
    <section>
      <div className={styles.video}></div>
      <h2 className={styles.title}>&nbsp;</h2>
      <div className={styles.info}>&nbsp;</div>
    </section>
  )
}

export default DummyVideoCard
