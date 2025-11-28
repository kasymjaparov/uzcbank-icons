# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React SVG icon library for UZCBANK, published as `@kasymjaparov/uzcbank-icons` on npm. The library provides a lightweight collection of SVG icons optimized for React applications with TypeScript support.

## Development Commands

### Build
```bash
npm run build
```
- Uses Rollup to bundle the library
- Outputs CommonJS (`dist/index.js`), ESM (`dist/index.mjs`), and TypeScript declarations (`dist/index.d.ts`)
- Automatically runs before publishing via `prepublishOnly` hook

### Lint
```bash
npm run lint
```
- Lints all TypeScript/JavaScript files in `src/` using ESLint
- Max warnings allowed: 0 (lint must be clean)
- Configured with TypeScript, React, and custom rules in `.eslintrc.cjs`

### Publishing
```bash
npm version <patch|minor|major>
npm publish
```
- The build step runs automatically before publish
- Package is published to npm registry

## Architecture

### Core Pattern: SVG Sprite System

The library uses an SVG sprite pattern where all icons are defined once in a hidden `<svg>` element (via `IconProvider`) and then referenced by ID throughout the application:

1. **IconProvider component** (`src/icons/IconProvider.tsx`):
   - Renders a hidden `<svg>` element containing all icon definitions as `<symbol>` elements
   - Each symbol has an ID matching the icon type from `ICON_TYPES`
   - Must be mounted once at the application root level

2. **Icon component** (`src/icons/Icon.tsx`):
   - Renders individual icons using `<use href="#icon-id" />`
   - References the sprite symbols by ID
   - Accepts props: `type` (required), `width`, `height`, `className`, `onClick`, `style`
   - Uses `currentColor` for fill/stroke to enable easy color customization via CSS

3. **Type system** (`src/types.ts`):
   - `ICON_TYPES` object maps camelCase keys to kebab-case/snake_case icon IDs
   - `TIconType` provides TypeScript autocomplete for all available icons
   - Icon types are defined as `const` assertions for strict typing

### File Structure

```
src/
├── index.ts              # Main entry point, exports Icon, IconProvider, ICON_TYPES
├── types.ts              # Icon type definitions and ICON_TYPES constant
└── icons/
    ├── Icon.tsx          # Icon component that uses SVG sprite references
    └── IconProvider.tsx  # Provider component with all SVG symbol definitions
```

### Build Configuration

Rollup is configured with two outputs:
- **JavaScript bundles**: CommonJS and ESM formats with source maps and terser minification
- **Type declarations**: Bundled .d.ts file using rollup-plugin-dts
- External dependencies: React and React-DOM are treated as peer dependencies

## Adding New Icons

When adding a new icon:

1. Add the icon key-value pair to `ICON_TYPES` in `src/types.ts`
   - Key: camelCase name for TypeScript usage
   - Value: kebab-case or snake_case ID for the SVG symbol

2. Add the `<symbol>` definition to `IconProvider.tsx`:
   - Use the icon type from `ICON_TYPES` as the ID
   - Include proper `viewBox` attribute
   - Use `currentColor` for stroke/fill attributes to enable color customization
   - Test that the icon renders correctly at different sizes

3. Update the icon table in `README.md` with the new icon and its description

## Code Style

- ESLint enforces 2-space indentation
- Maximum line length: 140 characters
- React imports are not required in JSX files (React 17+ JSX transform)
- TypeScript `any` is allowed but should be used sparingly
- Unused variables prefixed with `_` are ignored
- Semicolons are optional (rule disabled)
