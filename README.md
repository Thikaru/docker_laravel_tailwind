# docker_laravel_tailwind

<参考サイト>
(環境構築 docker&laravel)
・ 「https://qiita.com/ucan-lab/items/56c9dc3cf2e6762672f4」 2022/09/04

<page>
・http://localhost:8787/   [webpage]
・127.0.0.1:8095  [phpmyadmin]

<version>
PHP 8.1
Laravel 9.27
mysql 8.0.30

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
