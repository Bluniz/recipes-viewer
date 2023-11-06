import { Star } from '@phosphor-icons/react';
import * as S from './styled';
import { FavoriteButtonProps } from './types';
import { useCallback, useEffect, useState } from 'react';
import {
  addFavoriteRecipe,
  getFavoriteRecipes,
  removeFavoriteRecipe,
} from '../../services/FavoriteRecipesServices';

export const FavoriteButton = ({
  recipe,
  onClickCallback,
}: FavoriteButtonProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const verifyIsFavorited = useCallback(async () => {
    const storageFavoriteRecipes = getFavoriteRecipes();

    if (recipe) {
      const filteredList = storageFavoriteRecipes.filter(
        (currentRecipe) => currentRecipe.id === recipe.id
      );

      if (filteredList.length > 0) {
        setIsFavorited(true);
      }
    }
  }, [recipe]);

  const handleFavorite = () => {
    if (isFavorited) {
      removeFavoriteRecipe(recipe.id);
      setIsFavorited(false);
    } else {
      addFavoriteRecipe(recipe);
      setIsFavorited(true);
    }

    onClickCallback?.();
  };

  useEffect(() => {
    verifyIsFavorited();
  }, [verifyIsFavorited]);

  return (
    <S.FavoriteButtonContainer onClick={handleFavorite}>
      <Star
        className='favorite-icon'
        size={18}
        weight={isFavorited ? 'fill' : 'regular'}
      />
    </S.FavoriteButtonContainer>
  );
};
