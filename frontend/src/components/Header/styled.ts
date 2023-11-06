import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 24px;

  width: 100%;
  display: flex;
  justify-content: space-between;

  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (min-width: 640px) {
    width: 50em;
  }
`;

export const NavigationContainer = styled.div`
  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      filter: brightness(0.8);
    }

    &.active {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
