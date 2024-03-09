
#!/bin/bash

# Docker コンテナをビルドする
docker-compose build

# yarn i
docker-compose run --rm hacksaw-blog yarn install

# Docker コンテナをバックグラウンドで起動する
docker-compose up -d
