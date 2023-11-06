import { api } from '../config/api';

export function getAllRecipes(signal: AbortSignal) {
  return api.get('/recipes', {
    signal,
  });
}

export function getRecipe(id: string, signal: AbortSignal) {
  return api.get(`/recipes/${id}`, {
    signal,
  });
}
