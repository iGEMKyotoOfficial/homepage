# iGEM Kyoto 公式サイト

[Next.js](https://nextjs.org)（App Router）+ [Tailwind CSS v4](https://tailwindcss.com) で構築した iGEM Kyoto の公式サイトです。`output: "export"` による**静的書き出し**で、`/homepage` サブパス配下に配信する前提です。

## 必要環境

- Node.js 18.18 以上（推奨: 20 LTS）

## セットアップ

```bash
npm install
```

> `framer-motion` などトップページのアニメーションに必要な依存が含まれます。`package.json` を更新したら必ず `npm install` を実行してください。

## 開発

```bash
npm run dev
```

[http://localhost:3000/homepage](http://localhost:3000/homepage) を開きます（`basePath` が `/homepage` のため、ルート `/` ではなく `/homepage` でアクセスします）。

## ビルド（静的書き出し）

```bash
npm run build
```

静的ファイルが `out/` に出力されます。`out/` の中身をそのまま静的ホスティングの `/homepage` 配下に配置してください。

## Lint

```bash
npm run lint
```

## 配信パス（basePath）の変更

サブパスは [`src/lib/site.ts`](src/lib/site.ts) の `basePath` 1 か所で管理しています。`next.config.ts` と各コンポーネント・Markdown 変換処理はこの値を参照するため、デプロイ先のパスを変える場合はここだけを変更します。

## ディレクトリ構成

| パス | 役割 |
| --- | --- |
| `src/app/` | 各ページ（App Router） |
| `src/components/` | 共通コンポーネント（Header / Footer / カード等） |
| `src/data/` | メンバー・過去プロジェクトのデータ |
| `src/lib/` | サイト設定（`site.ts`）・Markdown 変換（`markdown.ts`） |
| `content/` | Markdown で管理するページ本文（about / contact / news / sponsor-intro / sponsor-support） |
| `public/images/` | 画像アセット |

### コンテンツの編集

- **about / contact / news / 協賛ページ**: `content/*.md` を編集します。`![alt](../public/images/foo.jpg)` の相対パスはビルド時に `/homepage/images/foo.jpg` へ自動変換されます。協賛ページでは信頼済み前提で生 HTML / インライン style も利用できます。
- **メンバー**: [`src/data/members.ts`](src/data/members.ts) を編集します。
- **過去プロジェクト**: [`src/data/projects.ts`](src/data/projects.ts) を編集します（先頭要素が注目プロジェクトとして展開表示されます）。
- **トップページの本文**: [`src/app/page.tsx`](src/app/page.tsx) の `textData` を編集します。
