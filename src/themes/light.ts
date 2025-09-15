import { DefaultTheme } from "styled-components/dist/types";
import {
  colors,
  typography,
  spacing,
  borders,
  shadows,
  motion,
} from "../tokens";

const semanticColors = {
  // Background colors - hierarchical for surfaces
  background: {
    base: colors.white,
    subtle: colors.neutral[50],
    muted: colors.neutral[100],
    emphasized: colors.neutral[900],
    overlay: "rgba(0, 0, 0, 0.5)",
  },

  // Foreground colors - for text and icons
  foreground: {
    base: colors.neutral[900],
    muted: colors.neutral[700],
    subtle: colors.neutral[500],
    disabled: colors.neutral[400],
    inverse: colors.white,
  },

  // Border colors
  border: {
    base: colors.neutral[200],
    muted: colors.neutral[300],
    emphasized: colors.neutral[400],
    focus: colors.primary[500],
  },

  // Primary colors - primary brand identity
  primary: {
    base: colors.primary[500],
    hover: colors.primary[600],
    active: colors.primary[700],
    subtle: colors.primary[50],
    muted: colors.primary[100],
    emphasized: colors.primary[800],
    contrast: colors.white,
  },

  // Secondary colors - secondary brand colors
  secondary: {
    base: colors.accent[500],
    hover: colors.accent[600],
    active: colors.accent[700],
    subtle: colors.accent[50],
    muted: colors.accent[100],
    emphasized: colors.accent[800],
    contrast: colors.white,
  },

  // Semantic colors - consistent state indicators
  success: {
    base: colors.success[500],
    hover: colors.success[600],
    active: colors.success[700],
    subtle: colors.success[50],
    muted: colors.success[100],
    emphasized: colors.success[800],
    contrast: colors.white,
  },

  warning: {
    base: colors.warning[500],
    hover: colors.warning[600],
    active: colors.warning[700],
    subtle: colors.warning[50],
    muted: colors.warning[100],
    emphasized: colors.warning[800],
    contrast: colors.neutral[900],
  },

  danger: {
    base: colors.danger[500],
    hover: colors.danger[600],
    active: colors.danger[700],
    subtle: colors.danger[50],
    muted: colors.danger[100],
    emphasized: colors.danger[800],
    contrast: colors.white,
  },
};

export const lightTheme: DefaultTheme = {
  ...typography,
  ...spacing,
  ...borders,
  ...shadows,
  ...motion,
  colors: {
    ...semanticColors,
    button: {
      primary: {
        bg: semanticColors.primary.base,
        bgHover: semanticColors.primary.hover,
        bgActive: semanticColors.primary.active,
        bgDisabled: semanticColors.background.muted,
        text: semanticColors.primary.contrast,
        textDisabled: semanticColors.foreground.disabled,
        border: "transparent",
        borderFocus: semanticColors.border.focus,
      },
      secondary: {
        bg: semanticColors.background.base,
        bgHover: semanticColors.background.muted,
        bgActive: semanticColors.background.subtle,
        bgDisabled: semanticColors.background.subtle,
        text: semanticColors.foreground.base,
        textDisabled: semanticColors.foreground.disabled,
        border: semanticColors.border.base,
        borderFocus: semanticColors.border.focus,
      },
      ghost: {
        bg: "transparent",
        bgHover: semanticColors.background.subtle,
        bgActive: semanticColors.background.muted,
        bgDisabled: "transparent",
        text: semanticColors.foreground.base,
        textDisabled: semanticColors.foreground.disabled,
        border: "transparent",
        borderFocus: semanticColors.border.focus,
      },
      success: {
        bg: semanticColors.success.base,
        bgHover: semanticColors.success.hover,
        bgActive: semanticColors.success.active,
        bgDisabled: semanticColors.success.muted,
        text: semanticColors.success.contrast,
        textDisabled: semanticColors.foreground.disabled,
        border: semanticColors.success.base,
        borderFocus: semanticColors.success.base,
      },
      danger: {
        bg: semanticColors.danger.base,
        bgHover: semanticColors.danger.hover,
        bgActive: semanticColors.danger.active,
        bgDisabled: semanticColors.danger.muted,
        text: semanticColors.danger.contrast,
        textDisabled: semanticColors.foreground.disabled,
        border: semanticColors.danger.base,
        borderFocus: semanticColors.danger.base,
      },
      warning: {
        bg: semanticColors.warning.base,
        bgHover: semanticColors.warning.hover,
        bgActive: semanticColors.warning.active,
        bgDisabled: semanticColors.warning.muted,
        text: semanticColors.warning.contrast,
        textDisabled: semanticColors.foreground.disabled,
        border: semanticColors.warning.base,
        borderFocus: semanticColors.warning.base,
      },
    },
  },
};
