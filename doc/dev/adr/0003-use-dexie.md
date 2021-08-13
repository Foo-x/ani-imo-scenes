# 3. Dexie.js を使用する

| Item     | Value      |
| -------- | ---------- |
| Date     | 2021-08-13 |
| Status   | 承認       |
| Deciders | Foo-x      |


## Context

取得した場面データをクライアント上に保持する方法を決める。


## Decision

[IndexedDB](https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API) に保持し、ラッパーとして [Dexie.js](https://dexie.org/) を使用する。


## Consequences

### Positive

- 保存できる容量に余裕がある
- 文字列以外も保存できる
- 複雑な検索ができる


### Negative

- APIが複雑
    - Dexie.js により軽減


## Options

- LocalStorage
    - メリット
        - APIが使いやすい
    - デメリット
        - 文字列しか扱えない
        - KVSなので複雑な検索はできない
        - 容量に5MBまでの制限がある


## Links

- https://web.dev/storage-for-the-web/
