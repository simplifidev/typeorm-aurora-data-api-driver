We're really glad you're reading this, because we need volunteer developers to help this project come to fruition. 👏

## Instructions

These steps will guide you through contributing to this project:

- Fork the repo
- Clone it and install dependencies

	-	`git clone https://github.com/ArsenyYankovsky/typeorm-aurora-data-api-driver`
	- `npm install`
	- Before running any functional tests run the following commands:
	  - `npm run build`
		- `npm link`
		- `npm link typeorm-aurora-data-api-driver`
	- To run functional tests for Postgres `docker-compose -f docker/pg.yml up -d`
		- `docker-compose -f docker/pg.yml up -d`
		- `npm run test:pg-func`
	- To run functional tests for MySQL run the following commands:
		- `docker-compose -f docker/mysql.yml up -d`
		- `npm run test:mysql-func`

- Make sure to lint before committing
  - `npm run lint`

Finally, send a [GitHub Pull Request](https://github.com/ArsenyYankovsky/typeorm-aurora-data-api-driver/compare?expand=1) with a clear list of what you've done (read more [about pull requests](https://help.github.com/articles/about-pull-requests/)). 
Make sure all of your commits are atomic (one feature per commit) and conventional (https://www.conventionalcommits.org/en/v1.0.0/).
