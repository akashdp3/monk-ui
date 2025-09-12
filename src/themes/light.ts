import { colors } from "../tokens/colors";

export const lightTheme = {
  colors: {
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

    // Brand colors - primary brand identity
    brand: {
      base: colors.primary[500],
      hover: colors.primary[600],
      active: colors.primary[700],
      subtle: colors.primary[50],
      muted: colors.primary[100],
      emphasized: colors.primary[800],
    },

    // Accent colors - secondary brand colors
    accent: {
      base: colors.accent[500],
      hover: colors.accent[600],
      active: colors.accent[700],
      subtle: colors.accent[50],
      muted: colors.accent[100],
      emphasized: colors.accent[800],
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

    // Component-specific token groups
    button: {
      primary: {
        bg: colors.primary[500],
        bgHover: colors.primary[600],
        bgActive: colors.primary[700],
        bgDisabled: colors.neutral[200],
        text: colors.white,
        textDisabled: colors.neutral[500],
        border: "transparent",
        borderFocus: colors.primary[500],
      },
      secondary: {
        bg: colors.white,
        bgHover: colors.neutral[200],
        bgActive: colors.neutral[100],
        bgDisabled: colors.neutral[100],
        text: colors.neutral[900],
        textDisabled: colors.neutral[400],
        border: colors.neutral[300],
        borderFocus: colors.primary[500],
      },
      ghost: {
        bg: "transparent",
        bgHover: colors.neutral[50],
        bgActive: colors.neutral[100],
        bgDisabled: "transparent",
        text: colors.neutral[900],
        textDisabled: colors.neutral[400],
        border: "transparent",
        borderFocus: colors.primary[500],
      },
      success: {
        bg: colors.success[500],
        bgHover: colors.success[600],
        bgActive: colors.success[700],
        bgDisabled: colors.success[100],
        text: colors.white,
        textDisabled: colors.neutral[500],
        border: colors.success[500],
        borderFocus: colors.success[500],
      },
      danger: {
        bg: colors.danger[500],
        bgHover: colors.danger[600],
        bgActive: colors.danger[700],
        bgDisabled: colors.danger[100],
        text: colors.white,
        textDisabled: colors.neutral[500],
        border: colors.danger[500],
        borderFocus: colors.danger[500],
      },
      warning: {
        bg: colors.warning[500],
        bgHover: colors.warning[600],
        bgActive: colors.warning[700],
        bgDisabled: colors.warning[100],
        text: colors.neutral[900],
        textDisabled: colors.neutral[500],
        border: colors.warning[500],
        borderFocus: colors.warning[500],
      },
    },
  },
};
