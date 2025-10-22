import { colors } from './colors';
import { fonts, fontSizes, fontWeights, lineHeights, letterSpacings } from './typography';
import { space, sizes } from './space';
import { breakpoints } from './breakpoints';
import { radii } from './radii';
import { shadows } from './shadows';
import { zIndices } from './zIndices';

export const theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  space,
  sizes,
  breakpoints,
  radii,
  shadows,
  zIndices,
};

export type Theme = typeof theme;

export * from './colors';
export * from './typography';
export * from './space';
export * from './breakpoints';
export * from './radii';
export * from './shadows';
export * from './zIndices';
