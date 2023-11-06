import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 24px;
  padding: 16px;

  @media (min-width: 640px) {
    padding: 0;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecipeImage = styled.img`
  height: 100px;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
`;

export const RecipeName = styled.h1``;

export const Section = styled.section`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 16px 0;

  display: flex;
  flex-direction: column;

  gap: 16px;

  & > p {
    font-size: 20px;
  }
`;

export const IngredientsList = styled.ul`
  list-style: none;
  padding: 8px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
`;

export const IngredientItem = styled.li`
  font-size: 20px;
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

export const RecipeHeader = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;
