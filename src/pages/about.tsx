import { PageProps } from "gatsby"
import React from "react"
import Layout from "~/components/layout"
import Seo from "~/components/seo"
import * as styles from "~/styles/pages/about.module.css"

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
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
      <p>
        管理人は「ふー」(
        <a
          href="https://twitter.com/f_akira_s"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          @f_akira_s
        </a>
        ) です。
      </p>
      <h2 className={styles.heading}>アクセス解析ツールについて</h2>
      <p>
        当サイトでは「Googleアナリティクス」を導入しています。このツールではデータを収集するためにCookieを使用しています。データは匿名で収集されており、個人を特定できるものではありません。
      </p>
      <p>
        この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認いただけると幸いです。詳細は{" "}
        <a
          href="https://marketingplatform.google.com/about/analytics/terms/jp/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Googleアナリティクスサービス利用規約
        </a>{" "}
        や{" "}
        <a
          href="https://policies.google.com/technologies/ads?hl=ja"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Googleポリシーと規約
        </a>
        をご覧ください。
      </p>
      <h2 className={styles.heading}>ライセンス</h2>
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>{" "}
        and{" "}
        <a href="https://creativemarket.com/Becris" title="Becris">
          Becris
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </Layout>
  )
}

export default AboutPage
