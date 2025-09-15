import { colors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { borders } from "./borders";
import { shadows } from "./shadows";
import { motion } from "./motion";

export const tokens = {
  colors,
  typography,
  spacing,
  borders,
  shadows,
  motion,
} as const;

export { colors, typography, spacing, borders, shadows, motion };
