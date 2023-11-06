import { Recipe } from '../utils/types/recipes';

const localStoragekey = '@app/favorite-recipes';

export const getFavoriteRecipes = (): Recipe[] => {
  const data = localStorage.getItem(localStoragekey);

  if (data) {
    return JSON.parse(data);
  }

  return [];
};

export const addFavoriteRecipe = (recipe: Recipe) => {
  const recipes = getFavoriteRecipes();

  recipes.push(recipe);

  localStorage.setItem(localStoragekey, JSON.stringify(recipes));
};

export const removeFavoriteRecipe = (id: string) => {
  const recipes = getFavoriteRecipes();

  const elementIndex = recipes.findIndex((recipe: Recipe) => recipe.id === id);

  recipes.splice(elementIndex, 1);

  localStorage.setItem(localStoragekey, JSON.stringify(recipes));
};
