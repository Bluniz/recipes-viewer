import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
`;

export const Button = styled.button<ButtonProps>`
  border: 0;
  background: transparent;
  padding: 8px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  display: flex;
  align-items: center;

  &:hover {
    filter: brightness(0.8);
  }

  ${({ selected, theme }) =>
    selected &&
    css`
      background: ${theme.colors.secondary};
      color: ${theme.colors.primary};
    `}
`;
