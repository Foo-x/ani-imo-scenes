import { PageProps } from "gatsby"
import React from "react"
import Layout from "~/components/layout"
import Seo from "~/components/seo"
import * as styles from "~/styles/pages/about.module.css"

const AboutPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="このサイトについて" />
      <h2 className={styles.heading}>このサイトについて</h2>
      <p>このサイトでは、以下の YouTube チャンネルの名場面を集めています。</p>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/channel/UCxM9OJy4o6mqZaaT2kpfwKA"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            帰ってきたら兄の部屋でゲームをしてる妹ちゃんねる
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCU8K9Lbjup7FcNQu7IL_UTA"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            ヒヨブー [兄部屋のあにはん]
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/user/hiyobu"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            hiyobu
          </a>
        </li>
      </ul>
      <p>
        名場面のデータは{" "}
        <a
          href="https://docs.google.com/spreadsheets/d/1aT4i9__D9y-JOgfmfBxL1TYJSyMmRX_OhGcRr83XL_0/edit?usp=sharing"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          スプレッドシート
        </a>{" "}
        で管理しています。シートの使い方はリンク先をご覧ください。
      </p>
      <h2 className={styles.heading}>お問い合わせ</h2>
      <ul>
        <li>
          <a
            href="https://github.com/Foo-x/ani-imo-scenes"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/f_akira_s"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default AboutPage
