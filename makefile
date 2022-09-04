up:
	docker compose up -d
build:
	docker compose build --no-cache --force-rm
down:
	docker compose down
down-all:
	docker compose down --rmi all --volumes --remove-orphans
migrate:
	docker compose exec app php artisan migrate
migrate-fresh:
	docker compose exec app php artisan config:cache
	docker compose exec app php artisan migrate:fresh --seed
migrate-dacapo:
	docker compose exec app php artisan dacapo --seed
npm-dev:
	docker compose exec app npm run dev
npm-watch:
	docker compose exec app npm run watch