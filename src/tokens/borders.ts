/**
 * Border tokens
 * Base: 1rem = 16px (browser default)
 * Use for border widths, radius, and styles
 */
export const borders = {
  // Border widths (fixed pixel values)
  borderWidth: {
    0: "0px",     // No border
    1: "1px",     // Thin border (default)
    2: "2px",     // Medium border
    4: "4px",     // Thick border
    8: "8px",     // Extra thick border
  },

  // Border radius (1rem = 16px)
  borderRadius: {
    none: "0px",          // 0px - Sharp corners
    sm: "0.125rem",       // 2px - Slightly rounded
    base: "0.25rem",      // 4px - Small rounded
    md: "0.375rem",       // 6px - Medium rounded
    lg: "0.5rem",         // 8px - Large rounded
    xl: "0.75rem",        // 12px - Extra large rounded
    "2xl": "1rem",        // 16px - Very rounded
    "3xl": "1.5rem",      // 24px - Highly rounded
    full: "9999px",       // Fully rounded (pills/circles)
  },

  // Border styles (standard CSS values)
  borderStyle: {
    solid: "solid",       // Solid line
    dashed: "dashed",     // Dashed line
    dotted: "dotted",     // Dotted line
    double: "double",     // Double line
    none: "none",         // No border
  },
};
