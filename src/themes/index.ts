export { lightTheme } from './light';
export { darkTheme } from './dark';
export { highContrastTheme } from './high-contrast';

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  highContrast: highContrastTheme,
} as const;

export type ThemeName = keyof typeof themes;
export type Theme = typeof lightTheme;

import { lightTheme } from './light';
import { darkTheme } from './dark';
import { highContrastTheme } from './high-contrast';