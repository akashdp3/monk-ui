import { lightTheme } from "./light";

export const themes = {
  light: lightTheme,
} as const;

export type ThemeName = keyof typeof themes;
export type Theme = typeof lightTheme;

export { lightTheme };
