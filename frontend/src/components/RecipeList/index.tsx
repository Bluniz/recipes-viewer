import * as S from './styled';
import { RecipeItem } from '../RecipeItem';
import { RecipeListProps } from './types';

import NoDataImg from '../../assets/no-data.svg';

export const RecipeList = ({
  recipes,
  onFavoriteCallback,
  isLoading,
}: RecipeListProps) => {
  return (
    <S.RecipesContainer>
      {recipes.length === 0 && !isLoading && (
        <S.NoDataContainer>
          <img src={NoDataImg} alt='no-data-image' />
          <h3>Favorites not found!</h3>
          <p>Favorite one recipe to see in this</p>
        </S.NoDataContainer>
      )}

      {!isLoading &&
        recipes.map((recipe) => {
          return (
            <RecipeItem
              key={recipe.id}
              item={recipe}
              onFavoriteCallback={onFavoriteCallback}
            />
          );
        })}
    </S.RecipesContainer>
  );
};
