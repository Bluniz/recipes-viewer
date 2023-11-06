import { Recipe } from '../../utils/types/recipes';

export interface RecipeItemProps {
  item: Recipe;
  onFavoriteCallback?: () => void;
}
