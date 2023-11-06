import { Recipe } from '../../utils/types/recipes';

export interface FavoriteButtonProps {
  recipe: Recipe;
  onClickCallback?: () => void;
}
