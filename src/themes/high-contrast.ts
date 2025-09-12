import { colors } from "../tokens/colors";

export const highContrastTheme = {
  colors: {
    // Background colors
    background: {
      primary: colors.white,
      secondary: colors.neutral[50],
      tertiary: colors.neutral[100],
    },

    // Text colors (higher contrast ratios)
    text: {
      primary: colors.black,
      secondary: colors.neutral[800],
      tertiary: colors.neutral[600],
      inverse: colors.white,
    },

    // Border colors (stronger borders)
    border: {
      primary: colors.neutral[400],
      secondary: colors.neutral[500],
      focus: colors.primary[700],
    },

    // Interactive colors (higher contrast)
    interactive: {
      primary: colors.primary[700],
      primaryHover: colors.primary[800],
      primaryActive: colors.primary[900],
      secondary: colors.neutral[700],
      secondaryHover: colors.neutral[800],
      secondaryActive: colors.neutral[900],
    },

    // Semantic colors (more pronounced)
    semantic: {
      success: colors.success[700],
      successBg: colors.success[100],
      warning: colors.warning[700],
      warningBg: colors.warning[100],
      error: colors.danger[700],
      errorBg: colors.danger[100],
    },
  },
};
