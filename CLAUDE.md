# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 15 portfolio website using the App Router with TypeScript and Tailwind CSS v4. It features a scrollytelling interface with sticky project images and smooth navigation.

## Essential Commands
```bash
# Development
npm run dev          # Start development server at http://localhost:3000

# Production
npm run build        # Create production build
npm run start        # Run production server

# Code Quality
npm run lint         # Run ESLint for code linting
```

## Architecture Overview
The portfolio uses Next.js App Router architecture with client-side interactivity:

- **`app/`**: Contains all pages and layouts using App Router conventions
  - `page.tsx`: Main portfolio page with scrollytelling implementation using Intersection Observer
  - `layout.tsx`: Root layout with metadata and font configuration
  - `globals.css`: Tailwind CSS imports and theme variables
  
- **Key Patterns**:
  - Client components (`"use client"`) for interactive features
  - Intersection Observer for scroll-based project transitions
  - Sticky positioning for the project image panel
  - Responsive design with Tailwind's mobile-first utilities

## Technology Stack
- **Next.js 15.4.5** with App Router
- **React 19.1.0** 
- **TypeScript 5** with strict mode
- **Tailwind CSS 4** (latest version with PostCSS)
- **next/image** for optimized image loading

## Development Guidelines
- TypeScript interfaces are defined inline in components
- Use `@/*` import alias for root-relative imports
- Images go in `public/projects/` for project screenshots
- Follow existing scrollytelling pattern when adding new projects
- Maintain responsive design principles using Tailwind classes

## Current Implementation Notes
The portfolio currently has placeholder content and needs customization:
- Replace "Your Name" with actual name throughout
- Update project data in the `projects` array in `page.tsx`
- Replace placeholder project images in `public/projects/`
- Update social links and contact information
- Customize color scheme via CSS variables in `globals.css`