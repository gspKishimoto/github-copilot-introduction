# github-copilot-introduction

## 概要

このプロジェクトは、React アプリケーションで GitHub Copilot を使用してコード補完とコード生成を行うデモンストレーションです。React コンポーネントの作成、Material-UI（MUI）を使用したスタイリング、React フックを使用した状態管理の例を含みます。

## プロジェクト構造

プロジェクトの構造は以下の通りです：

```
github-copilot-introduction/
├── src/
│   ├── components/
│   │   ├── OpenModalButton.js
│   │   └── QuestionnaireModal.js
│   └── App.js
└── package.json
```

- `src/components/OpenModalButton.js`: クリックするとモーダルを開くボタンをレンダリングするコンポーネントです。
- `src/components/QuestionnaireModal.js`: アンケートフォームのあるモーダルをレンダリングするコンポーネントです。
- `src/App.js`: `OpenModalButton`コンポーネントをレンダリングするメインのコンポーネントです。

## セットアップ

プロジェクトをセットアップするには、以下の手順を実行します：

1. リポジトリをクローンします：

```bash
git clone https://github.com/yourusername/github-copilot-introduction.git
```

2. プロジェクトディレクトリに移動します：

```bash
cd github-copilot-introduction
```

3. 依存関係をインストールします：

```bash
npm install
```

4. 開発サーバーを起動します：

```bash
npm start
```

アプリケーションは `http://localhost:3000` で利用できます。

## 使用方法

"Open Questionnaire"ボタンをクリックすると、"Yes"または"No"を選択するチェックボックスのあるアンケートフォームのモーダルが開きます。

## 貢献

貢献は歓迎します。GitHub で問題を開いたり、プルリクエストを提出してください。

## ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています。
