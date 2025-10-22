import { colors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { sizes } from "./sizes";
import { borders } from "./borders";
import { shadows } from "./shadows";
import { motion } from "./motion";
import { breakpoints } from "./breakpoints";
import { zIndices } from "./zIndices";

export const tokens = {
  colors,
  typography,
  spacing,
  sizes,
  borders,
  shadows,
  motion,
  breakpoints,
  zIndices,
} as const;

export { colors, typography, spacing, sizes, borders, shadows, motion, breakpoints, zIndices };
