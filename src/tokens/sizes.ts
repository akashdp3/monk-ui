import { spacing } from './spacing';

/**
 * Size tokens
 * Base: 1rem = 16px (browser default)
 * Use for widths, heights, max-widths, and other sizing needs
 */
export const sizes = {
  // Include all spacing values
  ...spacing,

  // Special size utilities
  max: 'max-content',
  min: 'min-content',
  full: '100%',

  // Named sizes (primarily for width/height constraints)
  '3xs': '14rem',     // 224px
  '2xs': '16rem',     // 256px
  xs: '20rem',        // 320px
  sm: '24rem',        // 384px
  md: '28rem',        // 448px
  lg: '32rem',        // 512px
  xl: '36rem',        // 576px
  '2xl': '42rem',     // 672px
  '3xl': '48rem',     // 768px
  '4xl': '56rem',     // 896px
  '5xl': '64rem',     // 1024px
  '6xl': '72rem',     // 1152px
  '7xl': '80rem',     // 1280px

  // Container sizes (fixed pixel widths for responsive breakpoints)
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};
