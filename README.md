## Enviroment
- Node：16.10.0 ([Node.js v16.10.0 インストーラリンク](https://nodejs.org/download/release/v16.10.0/))
- MySQL：5.7.37 ([Docker Image](https://hub.docker.com/_/mysql))

## Getting Started

本リポジトリをクローン後、以下コマンドを順に実行してください。

```bash
# 初回のみ実行
npm install

# db起動
cd db
docker-compose up

# アプリサーバー起動
npm run dev
```

## Details
- `localhost:3000`からアプリケーションサーバーへアクセスできます。
- `localhost:8080`からMySQLのGUIクライアントへアクセスできます。  
※MySQLサーバー本体は`ポート番号3306`で起動しています。