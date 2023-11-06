import { api } from '../config/api';

export function getAllRecipes(
  signal: AbortSignal,
  orderBy: 'ASC' | 'DESC' = 'ASC'
) {
  return api.get(`/recipes?orderBy=${orderBy}`, {
    signal,
  });
}

export function getRecipe(id: string, signal: AbortSignal) {
  return api.get(`/recipes/${id}`, {
    signal,
  });
}
