## Enviroment
- Node：16.10.0
[Node.js v16.10.0 インストーラリンク](https://nodejs.org/download/release/v16.10.0/)

## Getting Started

本リポジトリをクローン後、以下コマンドを順に実行してください。

```bash
## 初回のみ実行
npm install

# db起動
cd db
docker-compose up

# アプリサーバー起動
npm run dev
```