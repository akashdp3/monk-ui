# Using Tokens with Styled-System

This guide shows how to use design tokens with styled-system in your components.

## Overview

All design tokens are available in the theme and can be accessed through styled-system props. The theme includes:

- **Colors**: Semantic color system with brand, state, and UI colors
- **Typography**: Font families, sizes, weights, line heights, letter spacing
- **Spacing**: Consistent spacing scale for margins and padding
- **Sizes**: Width and height values
- **Borders**: Border widths, radius, and styles
- **Shadows**: Box shadow values
- **Motion**: Animation durations, easing, and transitions
- **Breakpoints**: Responsive breakpoint values
- **Z-indices**: Layering system for components

## Using Tokens with Components

### Box Component with Styled-System Props

The `Box` component accepts all styled-system props and uses theme tokens:

```tsx
import { Box } from '@monk/ui';

// Spacing - uses theme.space (spacing tokens)
<Box m={4}>Margin 16px</Box>
<Box p={8}>Padding 32px</Box>
<Box px={6} py={3}>Padding X: 24px, Y: 12px</Box>

// Sizes - uses theme.sizes
<Box width="md" height={64}>Width 448px, Height 256px</Box>
<Box maxWidth="xl">Max width 576px</Box>

// Colors - uses theme.colors
<Box bg="primary.base" color="white">Primary background</Box>
<Box borderColor="border.base">Border color</Box>

// Typography - uses theme.fontSize, fontWeight, etc.
<Box fontSize="lg" fontWeight="semibold">Large semibold text</Box>
<Box lineHeight="relaxed" letterSpacing="wide">Comfortable reading</Box>

// Borders - uses theme.borderRadius, borderWidth
<Box borderRadius="lg" borderWidth={2}>8px border radius, 2px border</Box>

// Shadows - uses theme.shadows
<Box boxShadow="md">Medium shadow</Box>

// Z-index - uses theme.zIndices
<Box zIndex="modal">Modal layer (1400)</Box>

// Flexbox - for flex layouts
<Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
  Flex container
</Box>

// Grid - for CSS Grid layouts
<Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap={4}>
  Grid container
</Box>

// Background - advanced background properties
<Box 
  backgroundImage="url(/image.jpg)"
  backgroundSize="cover"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
>
  Background image
</Box>

// Position - positioning properties
<Box position="absolute" top={4} right={4} zIndex="tooltip">
  Positioned element
</Box>
```

### Responsive Props

Use array or object syntax for responsive values with breakpoints:

```tsx
// Array syntax: [base, sm, md, lg, xl]
<Box
  width={['100%', 'md', 'lg', 'xl']}
  p={[2, 4, 6, 8]}
>
  Responsive width and padding
</Box>

// Object syntax
<Box
  fontSize={{ base: 'sm', md: 'base', lg: 'lg' }}
  p={{ base: 4, md: 6, lg: 8 }}
>
  Responsive font size and padding
</Box>
```

## Token Reference

### Spacing Scale (theme.space)

```tsx
// Token -> Value -> Pixels
0   -> '0px'       -> 0px
1   -> '0.25rem'   -> 4px
2   -> '0.5rem'    -> 8px
3   -> '0.75rem'   -> 12px
4   -> '1rem'      -> 16px
6   -> '1.5rem'    -> 24px
8   -> '2rem'      -> 32px
12  -> '3rem'      -> 48px
16  -> '4rem'      -> 64px
```

### Font Sizes (theme.fontSize)

```tsx
// Token -> Value -> Pixels -> Use Case
xs   -> '0.75rem'   -> 12px -> Small captions, labels
sm   -> '0.875rem'  -> 14px -> Secondary text, small buttons
base -> '1rem'      -> 16px -> Body text, default size
lg   -> '1.125rem'  -> 18px -> Large body text
xl   -> '1.25rem'   -> 20px -> Small headings
2xl  -> '1.5rem'    -> 24px -> H4 headings
3xl  -> '1.875rem'  -> 30px -> H3 headings
4xl  -> '2.25rem'   -> 36px -> H2 headings
5xl  -> '3rem'      -> 48px -> H1 headings
```

### Named Sizes (theme.sizes)

```tsx
// Token -> Value -> Pixels -> Use Case
xs   -> '20rem'  -> 320px  -> Small containers
sm   -> '24rem'  -> 384px  -> Small-medium containers
md   -> '28rem'  -> 448px  -> Medium containers
lg   -> '32rem'  -> 512px  -> Large containers
xl   -> '36rem'  -> 576px  -> Extra large containers
2xl  -> '42rem'  -> 672px  -> Very large containers
```

### Border Radius (theme.borderRadius)

```tsx
// Token -> Value -> Pixels
none -> '0px'       -> 0px   -> Sharp corners
sm   -> '0.125rem'  -> 2px   -> Slightly rounded
base -> '0.25rem'   -> 4px   -> Small rounded
md   -> '0.375rem'  -> 6px   -> Medium rounded
lg   -> '0.5rem'    -> 8px   -> Large rounded
xl   -> '0.75rem'   -> 12px  -> Extra large rounded
2xl  -> '1rem'      -> 16px  -> Very rounded
full -> '9999px'    -> Full  -> Pills/circles
```

### Breakpoints (theme.breakpoints)

```tsx
sm   -> '640px'   -> Mobile landscape
md   -> '768px'   -> Tablet
lg   -> '1024px'  -> Desktop
xl   -> '1280px'  -> Large desktop
2xl  -> '1536px'  -> Extra large desktop
```

### Z-indices (theme.zIndices)

```tsx
base         -> 0     -> Base layer
dropdown     -> 1000  -> Dropdown menus
sticky       -> 1100  -> Sticky headers
fixed        -> 1200  -> Fixed elements
modalBackdrop-> 1300  -> Modal backdrop
modal        -> 1400  -> Modal dialogs
popover      -> 1500  -> Popovers
tooltip      -> 1600  -> Tooltips (highest)
```

## Creating Custom Components

### Using Styled-System with Your Components

```tsx
import styled from 'styled-components';
import { space, color, layout, SpaceProps, ColorProps, LayoutProps } from 'styled-system';

interface CardProps extends SpaceProps, ColorProps, LayoutProps {
  elevated?: boolean;
}

const Card = styled.div<CardProps>`
  ${space}
  ${color}
  ${layout}
  
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.elevated 
    ? props.theme.shadows.lg 
    : props.theme.shadows.base};
  transition: ${props => props.theme.motion.transition.all};
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

// Usage
<Card p={6} bg="background.base" maxWidth="lg" elevated>
  Card content with theme tokens
</Card>
```

### Using Variant API

```tsx
import { variant } from 'styled-system';

const Button = styled.button`
  ${space}
  ${typography}
  
  ${variant({
    variants: {
      primary: {
        bg: 'primary.base',
        color: 'white',
        borderRadius: 'base',
      },
      secondary: {
        bg: 'background.base',
        color: 'foreground.base',
        borderColor: 'border.base',
        borderRadius: 'base',
      }
    }
  })}
`;
```

## Accessing Theme in Components

### Using Theme Context

```tsx
import { useTheme } from 'styled-components';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <div style={{
      padding: theme.space[4],
      fontSize: theme.fontSize.base,
      color: theme.colors.foreground.base,
    }}>
      Content
    </div>
  );
}
```

### Using Props Function

```tsx
const StyledDiv = styled.div`
  padding: ${props => props.theme.space[6]};
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.colors.primary.base};
  border-radius: ${props => props.theme.borderRadius.md};
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.space[8]};
  }
`;
```

## Best Practices

1. **Always use theme tokens** instead of hardcoded values
2. **Use semantic color names** (e.g., `primary.base`) instead of direct color values
3. **Prefer styled-system props** for common CSS properties (spacing, colors, typography)
4. **Use responsive arrays/objects** for responsive design
5. **Reference the token comments** for pixel equivalents when needed

## Examples

### Complete Component Example

```tsx
import { Box } from '@monk/ui';
import styled from 'styled-components';
import { space, color, typography } from 'styled-system';

const Hero = () => (
  <Box
    p={{ base: 6, md: 12, lg: 16 }}
    bg="primary.base"
    color="white"
    borderRadius="2xl"
    boxShadow="xl"
  >
    <Box
      as="h1"
      fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
      fontWeight="bold"
      mb={4}
    >
      Welcome to Monk UI
    </Box>
    <Box
      fontSize={{ base: 'base', md: 'lg' }}
      lineHeight="relaxed"
      maxWidth="2xl"
    >
      A modern design system built with tokens and styled-system
    </Box>
  </Box>
);
```

This provides a complete, type-safe design system that's easy to use and maintain!
