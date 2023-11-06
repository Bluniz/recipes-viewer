import styled from 'styled-components';

export const RecipesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;

export const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  & > img {
    width: 400px;

    height: 400px;

    margin-top: 14px;
  }
`;
