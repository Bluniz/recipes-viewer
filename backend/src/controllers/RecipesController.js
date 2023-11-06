import { RecipesRepository } from '../repository/index.js';

const RecipesController = {
  async findAll(req, res, next) {
    try {
      const recipes = await RecipesRepository.findAll();

      return res.status(200).json({
        recipes,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  async findById(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: 'Id param not found' });
      }

      const recipe = await RecipesRepository.findById(id);

      if (!!recipe && recipe.length === 0) {
        return res
          .status(404)
          .json({ message: 'Not Found a recipe with this id' });
      }

      return res.status(200).json({
        recipe: recipe[0],
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};

export default RecipesController;
