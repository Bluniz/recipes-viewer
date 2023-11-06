import { Recipe } from '../../utils/types/recipes';

export interface RecipeListProps {
  recipes: Recipe[];
  onFavoriteCallback?: () => void;
  isLoading?: boolean;
}
