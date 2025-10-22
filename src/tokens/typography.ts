/**
 * Typography tokens
 * Base: 1rem = 16px (browser default)
 * Font sizes use rem for accessibility (respects user's browser font size settings)
 */
export const typography = {
  // Font families
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    mono: ['JetBrains Mono', 'Monaco', 'Cascadia Code', 'Segoe UI Mono', 'Roboto Mono', 'monospace'],
  },

  // Font sizes (1rem = 16px by default)
  fontSize: {
    xs: '0.75rem',      // 12px - Small captions, labels
    sm: '0.875rem',     // 14px - Secondary text, small buttons
    base: '1rem',       // 16px - Body text, default size
    lg: '1.125rem',     // 18px - Large body text
    xl: '1.25rem',      // 20px - Small headings
    '2xl': '1.5rem',    // 24px - H4 headings
    '3xl': '1.875rem',  // 30px - H3 headings
    '4xl': '2.25rem',   // 36px - H2 headings
    '5xl': '3rem',      // 48px - H1 headings
    '6xl': '3.75rem',   // 60px - Hero/display text
  },

  // Font weights (standard CSS weight values)
  fontWeight: {
    thin: '100',        // Very thin
    extralight: '200',  // Extra light
    light: '300',       // Light
    normal: '400',      // Normal/regular text
    medium: '500',      // Medium emphasis
    semibold: '600',    // Headings, important text
    bold: '700',        // Bold emphasis
    extrabold: '800',   // Extra bold
    black: '900',       // Heaviest weight
  },

  // Line heights (unitless multipliers)
  lineHeight: {
    none: '1',          // 1x - Tight, for headings
    tight: '1.25',      // 1.25x - Compact text
    snug: '1.375',      // 1.375x - Slightly relaxed
    normal: '1.5',      // 1.5x - Standard body text
    relaxed: '1.625',   // 1.625x - Comfortable reading
    loose: '2',         // 2x - Very spacious
  },

  // Letter spacing (em-based for scalability)
  letterSpacing: {
    tighter: '-0.05em', // -5% - Condensed
    tight: '-0.025em',  // -2.5% - Slightly tight
    normal: '0',        // 0 - Default
    wide: '0.025em',    // 2.5% - Slightly expanded
    wider: '0.05em',    // 5% - Expanded
    widest: '0.1em',    // 10% - Very expanded (all-caps)
  },
};
