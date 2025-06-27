# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture Overview

This is a Next.js portfolio website with bilingual support, built using Chakra UI for styling and MDX for blog functionality.

### Application Structure

The app uses a layered provider architecture in `_app.js`:
- **ChakraProvider**: Provides custom theme and UI components
- **TranslationProvider**: Manages language state (EN/ES toggle)
- **AnimatedSection**: Wraps all content with Framer Motion animations
- **Layout**: Contains Navbar and Footer with maxW='3xl' container

### Key Architecture Patterns

1. **Data Separation**: Static data lives in `/src/data/` files:
   - `projects.js`: Project portfolio items with GitHub/demo links
   - `jobs.js`: Work experience data
   - `education.js`: Educational background
   - `toolboxData.js`: Tech stack information

2. **Translation System**: 
   - Context-based language switching between English/Spanish
   - `TranslationContext.js` provides `language` state and `toggleLanguage` function
   - `translations.js` contains mock translation logic (currently returns "(Traducido al español)" suffix)

3. **Blog Architecture**:
   - MDX files in `/src/posts/` directory
   - `mdx.js` utility handles frontmatter parsing with gray-matter
   - Blog posts have title, date, description, and category fields
   - URL slugification converts titles to URL-safe slugs
   - Dynamic routing via `/blog/[slug].js`

4. **Component Organization**:
   - Page components: Hero, WorkExperience, Education, Toolbox, Projects, ThankYouSection
   - Layout components in `/components/layout/`
   - Shared utilities like AnimatedSection for consistent animations

### Theme Configuration

Custom Chakra UI theme in `/src/theme/theme.js`:
- Light/dark mode support with custom background colors
- Custom color palette including `customSwitchColors` scheme
- IBM Plex Sans font family for headings and body
- Global styles using Chakra's mode() function for theme-aware styling

### Path Aliases

Uses `@/*` alias pointing to `./src/*` for clean imports (configured in `jsconfig.json`).

### Analytics Integration

Vercel Analytics and Speed Insights are integrated at the app level for performance monitoring.

## Key Files for Modifications

- `/src/data/*.js`: Update portfolio content, work experience, education
- `/src/posts/*.mdx`: Add new blog posts with frontmatter
- `/src/theme/theme.js`: Modify colors, fonts, or theme configuration
- `/src/context/TranslationContext.js`: Extend translation functionality
- `/src/components/`: Add or modify UI components