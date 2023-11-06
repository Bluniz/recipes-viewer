import express from 'express';
import { RecipesController } from '../controllers/index.js';
const routes = express.Router();

//! Route for get all recipes data
routes.get('/', RecipesController.findAll);
//! Route for get a specific recipe data searched by id prop
routes.get('/:id', RecipesController.findById);

export default routes;
