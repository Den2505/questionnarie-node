# Backend of questionnaire system


## Requirements:
1. Node v10.x
2. NPM v6.x

## How to install requirements:
1. npm install


## How to run app:
1. npm start

## Repo contains:
1. docker-compose file with mysql db. You can change db_user and db_password in docker-compose.yml file.

## How to use Docker:
* npm run docker-build: to download images if it's still not exist
* npm run docker-start: start mysql within docker containers
* npm run docker-clean: turn containers off.


## EER Database diagram
![alt text](https://dev.omgtu.ru/eduproc/backend-of-questionnaire-system/blob/master/eer.png)