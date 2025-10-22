import React from "react";
import styled from "styled-components";
import {
  space,
  color,
  layout,
  flexbox,
  grid,
  background,
  border,
  shadow,
  typography,
  position,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  ShadowProps,
  TypographyProps,
  PositionProps,
} from "styled-system";

export interface BoxProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    GridProps,
    BackgroundProps,
    BorderProps,
    ShadowProps,
    TypographyProps,
    PositionProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children?: React.ReactNode;
}

const StyledBox = styled.div<BoxProps>`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${shadow}
  ${typography}
  ${position}
`;

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledBox ref={ref} {...props}>
        {children}
      </StyledBox>
    );
  },
);

Box.displayName = "Box";
export default Box;
