import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { Recipe } from '../../utils/types/recipes';
import { getRecipe } from '../../services/RecipesService';
import { useError, useIsLoading } from '../../hooks';
import ErrorImg from '../../assets/cancel.svg';

import * as S from './styled';
import { Loader } from '../../components/Loader';
import { FavoriteButton } from '../../components/FavoriteButton';

export const RecipeDetails = () => {
  const params = useParams<{ id: string }>();

  const [recipe, setRecipe] = useState<Recipe>();
  const { handleStartLoading, handleFinishLoading, isLoading } =
    useIsLoading(true);

  const {
    hasError,
    errorMessage,
    handleSetHasError,
    handleSetErrorMessage,
    handleSetHasNotError,
  } = useError();

  const loadRecipe = async (signal: AbortSignal) => {
    try {
      handleStartLoading();
      handleSetHasNotError();
      handleSetErrorMessage('');
      const result = await getRecipe(params.id!, signal);

      setRecipe(result.data.recipe);
    } catch (error) {
      const err = error as AxiosError;
      if (
        (err instanceof DOMException && err.name === 'AbortError') ||
        err?.name === 'CanceledError'
      ) {
        return;
      }

      console.log(err);
      handleSetHasError();
      handleSetErrorMessage(
        "This page can't load the recipe data. Please, reload the app!"
      );
    } finally {
      handleFinishLoading();
    }

    return <S.Container>{recipe?.name}</S.Container>;
  };

  useEffect(() => {
    const Controller = new AbortController();

    loadRecipe(Controller.signal);

    return () => {
      Controller.abort();
      handleStartLoading();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  if (isLoading) {
    return (
      <S.LoaderWrapper>
        <Loader />
      </S.LoaderWrapper>
    );
  }

  return (
    <S.Container>
      {hasError ? (
        <S.ErrorContainer>
          <h2>Something went wrong.</h2>

          {!!errorMessage && <p>{errorMessage}</p>}
          <img src={ErrorImg} alt='A person in front of a error screen' />
        </S.ErrorContainer>
      ) : (
        <>
          <S.RecipeImage src={recipe?.image} alt={recipe?.name} />
          <S.RecipeHeader>
            <S.RecipeName>{recipe?.name}</S.RecipeName>
            <FavoriteButton recipe={recipe!} />
          </S.RecipeHeader>
          <S.Section>
            <h2>Ingredients</h2>

            <S.IngredientsList>
              {recipe?.ingredients.split(',').map((ingredient) => {
                return (
                  <S.IngredientItem key={ingredient}>
                    {ingredient}
                  </S.IngredientItem>
                );
              })}
            </S.IngredientsList>
          </S.Section>

          <S.Section>
            <h2>Cooking Instructions</h2>
            <p>{recipe?.cooking_instructions}</p>
          </S.Section>
        </>
      )}
    </S.Container>
  );
};
