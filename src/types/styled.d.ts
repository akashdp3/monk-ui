import "styled-components";
import {
  BackgroundColors,
  ForegroundColors,
  BorderColors,
  SemanticColorGroup,
} from "./index";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: BackgroundColors;
      foreground: ForegroundColors;
      border: BorderColors;
      primary: SemanticColorGroup;
      secondary: SemanticColorGroup;
      success: SemanticColorGroup;
      warning: SemanticColorGroup;
      danger: SemanticColorGroup;
      button: {
        primary: ButtonVariant;
        secondary: ButtonVariant;
        ghost: ButtonVariant;
        success: ButtonVariant;
        danger: ButtonVariant;
        warning: ButtonVariant;
      };
    };
  }
}

interface ButtonVariant {
  bg: string;
  bgHover: string;
  bgActive: string;
  bgDisabled: string;
  text: string;
  textDisabled: string;
  border: string;
  borderFocus: string;
}
