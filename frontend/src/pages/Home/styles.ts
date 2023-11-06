import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  padding: 0 24px;

  @media (min-width: 640px) {
    padding: 0;
    align-items: center;
  }
`;

export const RecipesContainer = styled.ul`
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

export const SearchInput = styled.input`
  width: 100%;
  border: 0;

  padding: 16px;
  outline: 0;
  border-radius: 4px;

  transition: outline 0.2s;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 640px) {
    width: 600px;
  }
`;
