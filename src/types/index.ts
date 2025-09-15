import { ThemeColors } from "./colors";

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ComponentProps extends BaseProps {
  variant?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export { ThemeColors };
