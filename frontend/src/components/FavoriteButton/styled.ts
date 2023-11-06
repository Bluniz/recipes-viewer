import styled from 'styled-components';

export const FavoriteButtonContainer = styled.button`
  background: transparent;
  border: 0;
  color: white;
  cursor: pointer;

  padding: 16px;

  height: 100%;

  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    filter: brightness(0.8);
  }
`;
