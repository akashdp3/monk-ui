import styled from "styled-components";
import { variant } from "styled-system";

import { Box } from "../Box";
import { ButtonProps } from "./types";

export const StyledButton = styled(Box).withConfig({
  shouldForwardProp: (prop) =>
    !["variant", "size", "loading", "fullWidth"].includes(prop),
})<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme?.colors?.border?.focus};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${variant({
    variants: {
      primary: {
        backgroundColor: "button.primary.bg",
        color: "button.primary.text",
        border: "1px solid",
        borderColor: "button.primary.border",
        "&:hover:not(:disabled)": {
          backgroundColor: "button.primary.bgHover",
        },
        "&:active:not(:disabled)": {
          backgroundColor: "button.primary.bgActive",
        },
        "&:disabled": {
          backgroundColor: "button.primary.bgDisabled",
          color: "button.primary.textDisabled",
        },
      },
      secondary: {
        backgroundColor: "button.secondary.bg",
        color: "button.secondary.text",
        border: "1px solid",
        borderColor: "button.secondary.border",
        "&:hover:not(:disabled)": {
          backgroundColor: "button.secondary.bgHover",
        },
        "&:active:not(:disabled)": {
          backgroundColor: "button.secondary.bgActive",
        },
        "&:disabled": {
          backgroundColor: "button.secondary.bgDisabled",
          color: "button.secondary.textDisabled",
        },
      },
      ghost: {
        backgroundColor: "button.ghost.bg",
        color: "button.ghost.text",
        border: "1px solid",
        borderColor: "button.ghost.border",
        "&:hover:not(:disabled)": {
          backgroundColor: "button.ghost.bgHover",
        },
        "&:active:not(:disabled)": {
          backgroundColor: "button.ghost.bgActive",
        },
        "&:disabled": {
          backgroundColor: "button.ghost.bgDisabled",
          color: "button.ghost.textDisabled",
        },
      },
      link: {
        backgroundColor: "transparent",
        color: "brand.base",
        border: "none",
        textDecoration: "underline",
        "&:hover:not(:disabled)": {
          color: "brand.hover",
        },
        "&:active:not(:disabled)": {
          color: "brand.active",
        },
        "&:disabled": {
          color: "foreground.disabled",
        },
      },
      success: {
        backgroundColor: "button.success.bg",
        color: "button.success.text",
        border: "1px solid",
        borderColor: "button.success.border",
        "&:hover:not(:disabled)": {
          backgroundColor: "button.success.bgHover",
        },
        "&:active:not(:disabled)": {
          backgroundColor: "button.success.bgActive",
        },
        "&:disabled": {
          backgroundColor: "button.success.bgDisabled",
          color: "button.success.textDisabled",
        },
      },
      danger: {
        backgroundColor: "button.danger.bg",
        color: "button.danger.text",
        border: "1px solid",
        borderColor: "button.danger.border",
        "&:hover:not(:disabled)": {
          backgroundColor: "button.danger.bgHover",
        },
        "&:active:not(:disabled)": {
          backgroundColor: "button.danger.bgActive",
        },
        "&:disabled": {
          backgroundColor: "button.danger.bgDisabled",
          color: "button.danger.textDisabled",
        },
      },
      warning: {
        backgroundColor: "button.warning.bg",
        color: "button.warning.text",
        border: "1px solid",
        borderColor: "button.warning.border",
        "&:hover:not(:disabled)": {
          backgroundColor: "button.warning.bgHover",
        },
        "&:active:not(:disabled)": {
          backgroundColor: "button.warning.bgActive",
        },
        "&:disabled": {
          backgroundColor: "button.warning.bgDisabled",
          color: "button.warning.textDisabled",
        },
      },
    },
  })}

  ${variant({
    prop: "size",
    variants: {
      sm: {
        padding: "8px 12px",
        fontSize: "14px",
        minHeight: "32px",
      },
      md: {
        padding: "12px 16px",
        fontSize: "16px",
        minHeight: "40px",
      },
      lg: {
        padding: "16px 24px",
        fontSize: "18px",
        minHeight: "48px",
      },
    },
  })}

  ${(props) =>
    props.fullWidth &&
    `
    width: 100%;
  `}
`;
