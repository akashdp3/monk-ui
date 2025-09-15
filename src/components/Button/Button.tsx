import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

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
