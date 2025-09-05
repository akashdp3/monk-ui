import { colors } from '../tokens/colors';

export const lightTheme = {
  colors: {
    // Background colors
    background: {
      primary: colors.white,
      secondary: colors.neutral[50],
      tertiary: colors.neutral[100],
    },

    // Text colors
    text: {
      primary: colors.neutral[900],
      secondary: colors.neutral[700],
      tertiary: colors.neutral[500],
      inverse: colors.white,
    },

    // Border colors
    border: {
      primary: colors.neutral[200],
      secondary: colors.neutral[300],
      focus: colors.primary[500],
    },

    // Interactive colors
    interactive: {
      primary: colors.primary[500],
      primaryHover: colors.primary[600],
      primaryActive: colors.primary[700],
      secondary: colors.secondary[500],
      secondaryHover: colors.secondary[600],
      secondaryActive: colors.secondary[700],
    },

    // Semantic colors
    semantic: {
      success: colors.success[500],
      successBg: colors.success[50],
      warning: colors.warning[500],
      warningBg: colors.warning[50],
      error: colors.error[500],
      errorBg: colors.error[50],
    },
  },
};