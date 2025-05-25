# HeartfeltAiart

AIイラストレーターのためのスタイリッシュなポートフォリオサイト

## 概要

このサイトは、AIイラストレーターの作品を紹介するためのポートフォリオサイトです。Astroフレームワークを使用して構築されており、モダンでスタイリッシュなデザインを採用しています。

## 機能

- ホームページ: 動画紹介、制作者紹介、ギャラリー、SNSリンク
- ギャラリーページ: 作品の一覧表示と拡大表示機能
- お問い合わせページ: 問い合わせフォーム

## ファイル構成

- `public/videos/homepage1.mp4`: メインビデオ
- `public/images/homepage1.png` ~ `homepage16.png`: ギャラリー画像
- `src/pages/`: Astroページコンポーネント
  - `index.astro`: ホームページ
  - `gallery.astro`: ギャラリーページ
  - `contact.astro`: お問い合わせページ

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## カスタマイズ方法

- 制作者紹介: `index.astro`ファイル内の該当セクションを編集
- ギャラリー: `public/images/`ディレクトリに画像を追加（9:16の縦長画像推奨）
- SNSリンク: 各ページ内のSNSリンクURLを実際のアカウントURLに変更
