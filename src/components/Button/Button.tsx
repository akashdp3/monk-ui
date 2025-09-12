import { StyledButton } from "./Button.styles";

export interface ButtonProps {
  /** Button contents */
  children: React.ReactNode;

  /** Visual style variant of the button */
  variant:
    | "primary"
    | "secondary"
    | "ghost"
    | "link"
    | "success"
    | "danger"
    | "warning";

  /** How large should the button be? */
  size: "sm" | "md" | "lg";

  /** Loading state - shows loading indicator */
  loading?: boolean;

  /** Full width button */
  fullWidth?: boolean;
}

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return (
    <StyledButton {...rest} as="button">
      {children}
    </StyledButton>
  );
};

Button.displayName = "Button";
export default Button;
