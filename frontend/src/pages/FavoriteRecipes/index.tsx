import { useEffect, useState } from 'react';
import { Recipe } from '../../utils/types/recipes';
import { useError, useIsLoading } from '../../hooks';
import { getFavoriteRecipes } from '../../services/FavoriteRecipesServices';
import { RecipeList, Loader } from '../../components';
import ErrorImg from '../../assets/cancel.svg';

import * as S from './styled';

export const FavoriteRecipes = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  const { isLoading, handleStartLoading, handleFinishLoading } =
    useIsLoading(true);

  const {
    hasError,
    errorMessage,
    handleSetHasError,
    handleSetErrorMessage,
    handleSetHasNotError,
  } = useError();

  const loadFavoriteRecipes = async () => {
    try {
      handleStartLoading();
      handleSetHasNotError();
      handleSetErrorMessage('');

      const data = getFavoriteRecipes();
      setFavoriteRecipes(data);
    } catch (error) {
      console.log(error);
      handleSetHasError();
      handleSetErrorMessage(
        "This page can't load the recipes data. Please, reload the app!"
      );
    } finally {
      handleFinishLoading();
    }
  };

  useEffect(() => {
    loadFavoriteRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading)
    return (
      <S.Container>
        <Loader />
      </S.Container>
    );

  return (
    <S.Container>
      <S.FavoriteRecipesContainer>
        {hasError ? (
          <S.ErrorContainer>
            <h2>Something went wrong.</h2>

            {!!errorMessage && <p>{errorMessage}</p>}
            <img src={ErrorImg} alt='A person in front of a error screen' />
          </S.ErrorContainer>
        ) : (
          <RecipeList
            recipes={favoriteRecipes}
            onFavoriteCallback={loadFavoriteRecipes}
            isLoading={isLoading}
          />
        )}
      </S.FavoriteRecipesContainer>
    </S.Container>
  );
};
