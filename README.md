# Vite Vue Sandbox

## Overview

Vue 3とViteを使用した実験的なサンドボックスプロジェクトです。動的フォーム、HeadlessUIコンポーネント、Props/Emitパターンなど、様々なVue.jsの機能とパターンを試すための環境を提供します。

## Tech Stack

- **フレームワーク**: Vue 3 (Composition API)
- **ビルドツール**: Vite
- **言語**: TypeScript
- **状態管理**: Pinia
- **ルーティング**: Vue Router
- **UIコンポーネント**: HeadlessUI
- **スタイリング**: Tailwind CSS v4
- **フォームバリデーション**: Vee-validate + Yup (日本語ロケール対応)
- **テスト**: Vitest + Vue Testing Library
- **コード品質**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged + Commitlint

## Setup

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# ビルドのプレビュー
npm run preview

# テスト実行
npm test

# Lint実行
npm run lint:eslint
```

## Usage

開発サーバー起動後、以下のルートにアクセスできます：

- `/` - ホームページ
- `/props-emit` - Props/Emitパターンのデモ
- `/headless-ui` - HeadlessUIコンポーネント（Tabs, Menu, Listbox, Popover等）のデモ
- `/dynamic-form` - 動的フォームビルダーとバリデーションのデモ
- `/lib-app` - カスタムライブラリのデモ

## Directory Structure

```
.
├── public/           # 静的ファイル
├── src/
│   ├── assets/       # アセット（画像、スタイル等）
│   ├── components/   # 再利用可能なVueコンポーネント
│   ├── mocks/        # モックデータ・API
│   ├── router/       # Vue Routerの設定
│   ├── stores/       # Piniaストア
│   ├── utils/        # ユーティリティ関数・ヘルパー
│   ├── views/        # ページコンポーネント
│   ├── App.vue       # ルートコンポーネント
│   └── main.ts       # エントリーポイント
├── tests/            # テストファイル
└── vite.config.ts    # Vite設定
```

## License

This repository is for personal/private use only.
