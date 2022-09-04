# docker_laravel_tailwind

<参考サイト>
(環境構築 docker&laravel)
・ 「https://qiita.com/ucan-lab/items/56c9dc3cf2e6762672f4」 2022/09/04

<git clone 後に行うこと>
app コンテナに入り、Laravel をインストール
・「docker compose up -d」
・「docker compose exec app bash」
・「composer create-project --prefer-dist "laravel/laravel=9.\*" .」 ←\消して下さい
・「chmod -R 777 storage bootstrap/cache」
・「php artisan -V」
・「exit」
