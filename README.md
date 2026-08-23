# 前代運送｜軽貨物ドライバー採用サイト

前代運送の採用を主目的にした、スマートフォン対応の1ページ求人サイトです。

## 主な内容

- 軽貨物ドライバー向けのヒーロー・応募導線
- 仕事の特徴、月間売上実績例、1日の流れ
- 募集要項、応募から稼働までの手順、FAQ
- モバイル固定CTA
- OGP・X共有カード、favicon、基本SEOメタデータ

## 開発環境

- Node.js 22.13.0 以上
- npm

```bash
npm ci
npm run dev
```

本番用の成果物を確認する場合は、次を実行します。

```bash
npm run build
```

## 編集場所

- ページ本文: `app/page.tsx`
- デザイン: `app/globals.css`
- SEO・SNS共有設定: `app/layout.tsx`
- 画像: `public/`

## 公開前に差し替える内容

次の内容は仮データです。実際の募集条件に合わせて更新してください。

- 対応エリア
- 月間売上実績例
- 契約・稼働条件
- 車両リース条件と必要経費
- 応募先メールアドレス（現在は `.example` のダミーアドレス）

## 現在のサイト

https://keikamotsu-driver-recruit.halcy.chatgpt.site

`.openai/hosting.json` は現在のSitesプロジェクトとの関連付けに使用されています。
