# このプロジェクトについて
`password-server`と`password-client`から参照される共通ライブラリを提供するためのもの。

# 開発環境構築メモ
このプロジェクトは単体で動作させる種類のものではないため基本的にはソース編集のみ行うのでVagrantは使用していない。
`password-server`と同様、トランスパイル後ソースのエイリアス設定の解決が必要になる。

`password-server`ではts-nodeを経由することで問題を解決したが、このプロジェクトではそれも使えないため、また別の方法を使用する。

## インストール
エイリアス解決に必要なビルドを実現するために以下を使用する。
- @zerollup/ts-transform-paths
- ttypescript

上記をインストールした状態でtsconfig.jsonに以下の設定を追記する。

```
"compilerOptions": {
  "plugins": [{ "transform": "@zerollup/ts-transform-paths" }]
}
```

`@zerollup/ts-transform-paths`プラグインがエイリアス解決したjsを生成する。

## ビルド
```
$ ./node_modules/.bin/ttsc
```

`ttsc`は`ttypescript`のインストールにより使用できるようになる。