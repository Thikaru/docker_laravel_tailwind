up:
	docker compose up -d
build:
	docker compose build --no-cache --force-rm
down:
	docker compose down
down-all:
	docker compose down --rmi all --volumes --remove-orphans