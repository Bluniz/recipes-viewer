# Recipeviewer backend

## About

This project is viewer of recipes where you can see a lot of recipes and favorite then.

## How to execute this project localy

1. After cloning this repository, open your fork
2. In the folder, use the command `yarn` or if you don't use `yarn`. Use `npm install`.
3. You need to have Docker installed.
4. Execute the following commands:

```docker
  docker pull postgres
```

```docker
  docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

```docker
  docker exect -it pg
```

```docker
  psql -U root
```

```docker
  CREATE DATABASE recipeviewer;
```

```docker
  \c recipeviewer
```

Now, you need to copy paste all data in src/database/schema.sql

After this, you have populate your database.

Finishing, you need to run the app.

```
  yarn dev
```

After that your server will run at http://localhost:3000'

## Technologies

- node.js/javascript for create the rest api
- express to rest api route management
- dotenv to load .env in the project
- pg to consume postgree database

## I want to improve.

Unfortunally i didnt have time to create an automatization for the docker commands. I want do improve this.

And i wanted to did the sorting, is not dificult but not had time....
