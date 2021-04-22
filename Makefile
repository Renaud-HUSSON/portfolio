test:
	cd client && npm run test
dev:
	docker-compose up
dev-build:
	docker-compose build
prod:
	git pull origin master
	docker-compose -f docker-compose.prod.yml build
	docker-compose -f docker-compose.prod.yml up -d
