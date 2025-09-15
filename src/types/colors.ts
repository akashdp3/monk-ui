/**
 * Standard color scale with 11 shades from lightest (50) to darkest (950)
 * Used for consistent color progression across the design system
 */
export type ColorScale = {
  50: string; // Lightest shade - subtle backgrounds
  100: string; // Very light - hover states on light backgrounds
  200: string; // Light - borders, dividers
  300: string; // Light-medium - disabled states
  400: string; // Medium-light - placeholder text
  500: string; // Base color - primary brand color
  600: string; // Medium-dark - hover states
  700: string; // Dark - active states
  800: string; // Darker - emphasized text
  900: string; // Darkest - high contrast text
  950: string; // Deepest - maximum contrast
};

/**
 * Background colors for surfaces and containers
 * Provides hierarchical depth through different background levels
 */
export type BackgroundColors = {
  base: string; // Primary background - main surface color
  subtle: string; // Subtle background - cards, panels
  muted: string; // Muted background - secondary surfaces
  emphasized: string; // Emphasized background - high contrast surfaces
  overlay: string; // Overlay background - modal overlays, dropdowns
};

/**
 * Foreground colors for text, icons, and other content
 * Ensures proper contrast ratios across different contexts
 */
export type ForegroundColors = {
  base: string; // Primary text color
  muted: string; // Secondary text color - less emphasis
  subtle: string; // Tertiary text color - minimal emphasis
  disabled: string; // Disabled state text color
  inverse: string; // Inverse text color - for dark backgrounds
};

/**
 * Border colors for outlines, dividers, and focus states
 * Provides visual separation and interactive feedback
 */
export type BorderColors = {
  base: string; // Default border color
  muted: string; // Subtle border color - less prominent
  emphasized: string; // Strong border color - more prominent
  focus: string; // Focus ring color - accessibility
};

/**
 * Semantic color group with consistent interaction states
 * Used for primary, secondary and semantic colors (success, warning, danger)
 */
export type SemanticColorGroup = {
  base: string; // Primary color
  hover: string; // Hover state color
  active: string; // Active/pressed state color
  subtle: string; // Very light background variant
  muted: string; // Light background variant
  emphasized: string; // Dark variant for high contrast
  contrast: string; // Text color for optimal contrast
};

/**
 * Complete theme color palette
 * Combines all color categories into a cohesive design system
 */
export type ThemeColors = {
  background: BackgroundColors;
  foreground: ForegroundColors;
  border: BorderColors;
  primary: SemanticColorGroup; // Primary brand colors
  secondary: SemanticColorGroup; // Secondary brand colors
  success: SemanticColorGroup; // Success state colors
  warning: SemanticColorGroup; // Warning state colors
  danger: SemanticColorGroup; // Error/danger state colors
};
