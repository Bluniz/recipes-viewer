# Recipeviewer backend

## About

This project is viewer of recipes where you can see a lot of recipes and favorite then.

## How to execute this project localy

1. After cloning this repository, open your fork
2. In the folder, use the command `yarn` or if you don't use `yarn`. Use `npm install`.
3. You need to have Docker installed.
4. Execute the command: `docker compose up -d`
5. After that execute the command `yarn dev`

Your app will run at http://localhost:3000'

## Technologies

- node.js/javascript for create the rest api
- express to rest api route management
- dotenv to load .env in the project
- pg to consume postgree database
