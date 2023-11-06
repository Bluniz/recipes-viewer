import { ReactNode, createContext, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes, ThemeProp } from '../../styles';

interface ThemeContextProps {
  theme: 'light' | 'dark';
  handleSetThemeToDark: () => void;
  handleSetThemeToLight: () => void;
}

const themeStorageKey = '@app/theme';

const getSystemTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
    return 'dark';
  else 'light';
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  handleSetThemeToLight: () => null,
  handleSetThemeToDark: () => null,
});

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem(themeStorageKey);

    if (localTheme) {
      return JSON.parse(localTheme);
    }

    return getSystemTheme();
  });

  const handleSetThemeToDark = useCallback(() => setTheme('dark'), []);
  const handleSetThemeToLight = useCallback(() => setTheme('light'), []);

  return (
    <ThemeContext.Provider
      value={{ theme, handleSetThemeToDark, handleSetThemeToLight }}
    >
      <ThemeProvider theme={themes[theme as ThemeProp] || themes.dark}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
