# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- **Build**: `npm run build` - Compiles TypeScript to `dist/` directory
- **Development**: `npm run dev` - Watch mode compilation with TypeScript
- **Testing**: `npm run test` - Run Jest tests
- **Type Checking**: `npm run typecheck` - TypeScript type checking without emission
- **Linting**: `npm run lint` - ESLint check on TypeScript/TSX files in `src/`
- **Storybook**: `npm run storybook` - Start Storybook dev server on port 6006
- **Build Storybook**: `npm run build-storybook` - Build static Storybook

## Architecture Overview

This is a React design system library built with TypeScript and styled-components.

### Core Structure

- **`src/tokens/`**: Design tokens (colors, typography, spacing, borders, shadows, motion)
- **`src/themes/`**: Theme definitions (light, dark, high-contrast) that consume tokens
- **`src/components/`**: React components (currently Box component)
- **`src/layout/`**: Layout utilities and components
- **`src/icons/`**: Icon components
- **`src/utils/`**: Utility functions
- **`src/hooks/`**: Custom React hooks
- **`src/types/`**: TypeScript type definitions

### Key Dependencies

- **styled-components**: For CSS-in-JS styling
- **styled-system**: For consistent spacing and style props
- **React 18+**: Peer dependency for components

### Testing Setup

- Jest with jsdom environment
- React Testing Library
- Tests located in `__tests__` directories or `.test.tsx` files
- Path alias `@/` maps to `src/`
- Setup file: `src/setupTests.ts`

### Build Output

- TypeScript compilation outputs to `dist/`
- Declaration files and source maps generated
- Main entry: `dist/index.js`
- Types entry: `dist/index.d.ts`

### Theme System

The design system uses a token-based theming approach where:
1. Tokens define raw design values
2. Themes compose tokens into complete theme objects
3. Components consume themes via styled-components ThemeProvider