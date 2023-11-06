import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 16px;

  @media (min-width: 640px) {
    padding: 0;
    align-items: center;
  }
`;

export const FavoriteRecipesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & > img {
    width: 400px;

    height: 400px;

    margin-top: 14px;
  }
`;
