import { colors } from '../tokens/colors';

export const darkTheme = {
  colors: {
    // Background colors
    background: {
      primary: colors.neutral[900],
      secondary: colors.neutral[800],
      tertiary: colors.neutral[700],
    },

    // Text colors
    text: {
      primary: colors.neutral[50],
      secondary: colors.neutral[200],
      tertiary: colors.neutral[400],
      inverse: colors.neutral[900],
    },

    // Border colors
    border: {
      primary: colors.neutral[700],
      secondary: colors.neutral[600],
      focus: colors.primary[400],
    },

    // Interactive colors
    interactive: {
      primary: colors.primary[400],
      primaryHover: colors.primary[300],
      primaryActive: colors.primary[200],
      secondary: colors.secondary[400],
      secondaryHover: colors.secondary[300],
      secondaryActive: colors.secondary[200],
    },

    // Semantic colors
    semantic: {
      success: colors.success[400],
      successBg: colors.success[900],
      warning: colors.warning[400],
      warningBg: colors.warning[900],
      error: colors.error[400],
      errorBg: colors.error[900],
    },
  },
};