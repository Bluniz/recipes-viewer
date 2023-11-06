import { useTheme } from '../../hooks';
import * as S from './styled';
import { Sun, Moon } from '@phosphor-icons/react';

export const ToggleThemeButton = () => {
  const { theme, handleSetThemeToDark, handleSetThemeToLight } = useTheme();

  return (
    <S.Container>
      <S.Button selected={theme === 'light'} onClick={handleSetThemeToLight}>
        <Sun weight='fill' />
      </S.Button>
      <S.Button selected={theme === 'dark'} onClick={handleSetThemeToDark}>
        <Moon weight='fill' />
      </S.Button>
    </S.Container>
  );
};
