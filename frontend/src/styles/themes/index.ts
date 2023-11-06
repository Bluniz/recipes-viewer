import { darkTheme } from './dark';
import { lightTheme } from './light';

export const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export type ThemeProp = keyof typeof themes;
