# 1. Gatsbyを使用する

| Item     | Value      |
| -------- | ---------- |
| Date     | 2021-08-13 |
| Status   | 承認       |
| Deciders | Foo-x      |


## Context

静的サイトを構築するにあたり、フレームワークを選定する。


## Decision

[Gatsby](https://www.gatsbyjs.com/) を使用する。個人サイトで実績があり、パフォーマンス・保守性ともに優れているため。


## Consequences

### Positive

- パフォーマンスが良い
    - プリレンダリング、画像の自動リサイズ、オフラインサポートなど
- TypeScript + React で開発できる
- ある程度プラグインがそろっている


### Negative

- 個人で開発されているプラグインのクオリティがバラバラ
    - 最悪自分でフォークする
