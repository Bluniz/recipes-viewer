import { Link } from 'react-router-dom';

import * as S from './styled';
import PlaceholderImage from '../../assets/placeholder-image.jpeg';
import { RecipeItemProps } from './types';

import { FavoriteButton } from '../FavoriteButton';

export const RecipeItem = ({ item, onFavoriteCallback }: RecipeItemProps) => {
  const { name, image, id } = item;
  return (
    <S.RecipeItemContainer>
      <Link to={`/recipes/${id}`}>
        <S.RecipeItemImage
          src={image || PlaceholderImage}
          alt={image ? name : 'A plate on table'}
        />

        <S.RecipeItemTitle>{name}</S.RecipeItemTitle>
      </Link>
      <S.FavoriteButtonContainer>
        <FavoriteButton recipe={item} onClickCallback={onFavoriteCallback} />
      </S.FavoriteButtonContainer>
    </S.RecipeItemContainer>
  );
};
