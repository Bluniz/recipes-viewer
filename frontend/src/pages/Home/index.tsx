/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, ChangeEvent, startTransition } from 'react';
import { AxiosError } from 'axios';

import { Recipe } from '../../utils/types/recipes';
import { getAllRecipes } from '../../services/RecipesService';

import { useDebounceEffect, useError, useIsLoading } from '../../hooks';

import ErrorImg from '../../assets/cancel.svg';
import { Loader, RecipeList } from '../../components';
import * as S from './styles';

import { ArrowUp, ArrowDown } from '@phosphor-icons/react';

const isFirstRender = true;

export const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [searchText, setSearchText] = useState('');
  const [orderBy, setOrderBy] = useState<'ASC' | 'DESC'>('ASC');

  const { isLoading, handleStartLoading, handleFinishLoading } =
    useIsLoading(true);

  const {
    hasError,
    errorMessage,
    handleSetHasError,
    handleSetErrorMessage,
    handleSetHasNotError,
  } = useError();

  const filterRecipes = () => {
    if (!searchText) return setFilteredRecipes(recipes);

    console.log(recipes);

    const filterList = recipes.filter((recipe) =>
      recipe.ingredients.includes(searchText)
    );

    setFilteredRecipes(filterList);
  };

  const loadRecipes = async (signal: AbortSignal, order: 'ASC' | 'DESC') => {
    try {
      handleStartLoading();
      handleSetHasNotError();
      handleSetErrorMessage('');

      const result = await getAllRecipes(signal, order);

      setRecipes(result.data.recipes);
      setFilteredRecipes(result.data.recipes);

      return result.data.recipes;
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
        "This page can't load the recipes data. Please, reload the app!"
      );
    } finally {
      handleFinishLoading();
    }
  };

  const handleChangeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
  };

  useEffect(() => {
    const Controller = new AbortController();

    (async () => {
      startTransition(await loadRecipes(Controller.signal, orderBy));
      filterRecipes();
    })();

    return () => {
      Controller.abort();
      handleStartLoading();
    };
  }, [orderBy]);

  useDebounceEffect(
    () => {
      if (searchText) {
        filterRecipes();
      }
    },
    1000,
    [searchText]
  );

  if (isLoading)
    return (
      <S.Container>
        <Loader />
      </S.Container>
    );

  return (
    <S.Container>
      <S.SearchInput
        type='text'
        placeholder='Search by ingredients. Ex: "Garlic, broccoli" '
        value={searchText}
        onChange={handleChangeSearchText}
      />
      <S.OrderByContainer>
        <S.OrderByButton
          selected={orderBy === 'ASC'}
          onClick={() => setOrderBy('ASC')}
        >
          <ArrowUp />
        </S.OrderByButton>
        <S.OrderByButton
          selected={orderBy === 'DESC'}
          onClick={() => {
            setOrderBy('DESC');
            setSearchText('');
          }}
        >
          <ArrowDown />
        </S.OrderByButton>
      </S.OrderByContainer>
      <S.RecipesContainer>
        {hasError ? (
          <S.ErrorContainer>
            <h2>Something went wrong.</h2>

            {!!errorMessage && <p>{errorMessage}</p>}
            <img src={ErrorImg} alt='A person in front of a error screen' />
          </S.ErrorContainer>
        ) : (
          <RecipeList recipes={filteredRecipes} isLoading={isLoading} />
        )}
      </S.RecipesContainer>
    </S.Container>
  );
};
