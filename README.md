# docker_laravel_tailwind

<参考サイト>
(環境構築 docker&laravel)
・【超入門】20 分で Laravel 開発環境を爆速構築する Docker ハンズオン 「https://qiita.com/ucan-lab/items/56c9dc3cf2e6762672f4」 2022/09/04
(環境構築 tailwind)
・Docker ＋ Laravel 環境で Tailwind CSS を使えるようにする 「https://hanlabo.co.jp/memorandum/1994/」 2022/09/04
・【備忘録】Laravel8 tailwind を sass で使う 「https://qiita.com/rioinb/items/1ea767d5ace6edd39ea7」 2022/09/04
(scss を使えるようにする)
・【備忘録】Laravel8 tailwind を sass で使う 「https://qiita.com/rioinb/items/1ea767d5ace6edd39ea7」 2022/09/04
・Docker を使って Laravel/Blade 環境構築から scss 導入まで 「https://rinblog.org/docker-laravel-blade/」 2022/09/04

<page>
・http://localhost:8787/   [webpage]
・127.0.0.1:8095  [phpmyadmin]

<version>
PHP 8.1
Laravel 9.27
mysql 8.0.30
node 17.9.0
npm 8.19.1

<起動>
・make up
・make npm-watch ←tailwind.css の変化を監視
・

<laravel が動かない場合>
app コンテナに入り、Laravel をインストール
・「docker compose up -d」
・「docker compose exec app bash」
・「composer create-project --prefer-dist "laravel/laravel=9.\*" .」 ←\消して下さい
・「chmod -R 777 storage bootstrap/cache」
・「php artisan -V」
・「exit」

<git clone 後に一度行う処理>
(1)[mac] docker compose exec app bash
(2)[app] chmod -R 777 storage bootstrap/cache
(3)[app] composer install
(4)[app] cp .env.example .env
(5)[app] php artisan key:generate
(6)[app] php artisan storage:link
(7)[app] php artisan migrate
(8)[app] exit

<tailwindCSS のインストール>
PHP コンテナ内でインストールコマンドを実行する
・docker compose exec app bash
・npm install -D tailwindcss postcss autoprefixer
・npm view tailwindcss ← 確認インストールできてるかどうか
設定ファイルの作成
・npx tailwindcss init
・npm run dev

<scss 使えるようにする>
上記の参考サイトで確認

<使用するコマンド>
・docker compose ps //起動しているコンテナの一覧を表示
・docker compose build //コンテナを生成
・compose -V //compose のバージョン確認
・docker compose exec サービス名 コマンド
