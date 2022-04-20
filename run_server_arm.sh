#!/bin/sh
cd "$(dirname "$BASH_SOURCE")"
docker-compose down
docker-compose up -d --build
docker-compose ps -a
docker ps -a
docker image prune -f
rm -r node_modules
docker cp todo-react:/home/node/app/node_modules ./