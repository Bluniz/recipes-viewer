import styled from 'styled-components';

export const RecipeItemContainer = styled.li`
  display: flex;
  height: 150px;
  overflow: hidden;
  width: 100%;
  border-radius: 4px;

  position: relative;

  cursor: pointer;

  transition: border 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    filter: brightness(0.8);
  }

  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    flex: 1;
  }

  @media (min-width: 640px) {
    width: 600px;
  }
`;

export const RecipeItemImage = styled.img`
  width: 100%;
  height: 148px;
  object-fit: cover;
  border-radius: 4px;
  filter: brightness(0.6);
`;

export const RecipeItemTitle = styled.span`
  position: absolute;
  background-color: transparent;

  bottom: 0;
  left: 0;

  padding: 8px;
  font-size: 24px;
  font-weight: bold;
`;

export const RecipeItemHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FavoriteButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-left: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
