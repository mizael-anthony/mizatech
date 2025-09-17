# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio/business website for Mizatech, a technology solutions company. The site features multilingual support (English/French), a blog system, and modern UI components built with shadcn/ui and Tailwind CSS.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint (note: ignores build errors via next.config.mjs)

## Dependencies and Tech Stack

Key dependencies include:
- **Next.js 15.2.4** with App Router
- **React 19** with TypeScript
- **shadcn/ui** components built on Radix UI primitives
- **Tailwind CSS** for styling with next-themes for dark mode
- **React Hook Form** with Zod validation
- **Resend** for email functionality
- **Lucide React** for icons

## Architecture Overview

### App Router Structure
- Uses Next.js App Router with TypeScript
- Pages are organized under `app/` directory with route-based file structure
- Server and client components are clearly separated

### UI Component System
- Built on shadcn/ui component library (configured in components.json)
- All UI components are in `components/ui/` 
- Custom components in `components/` root
- Uses Tailwind CSS with CSS variables for theming
- Supports dark mode via class-based theme switching

### Internationalization
- Bilingual support (English/French) implemented via React Context
- Language context defined in `components/layout-wrapper.tsx`
- Blog content and UI text are localized in `lib/blog-data.ts`
- Use `useLanguage()` hook to access current language state

### Blog System
- Static blog data managed in `lib/blog-data.ts`
- Structured with BlogPost and BlogCategory interfaces
- Content includes full markdown for individual post pages
- Supports categories, tags, featured posts, and search functionality
- Dynamic routing via `app/blog/[slug]/page.tsx`

### Layout Architecture
- Root layout in `app/layout.tsx` handles fonts and basic HTML structure
- Main layout logic in `components/layout-wrapper.tsx` with Navigation/Footer
- Consistent theming and responsive design throughout

### Configuration Notes
- Next.js config ignores ESLint and TypeScript errors during builds
- Images are unoptimized (likely for static deployment)
- Uses pnpm for package management
- Path aliases configured: `@/components`, `@/lib`, `@/hooks`, etc.

## Key Patterns

When working with this codebase:
- Follow the established component pattern with TypeScript interfaces
- Use the existing language context for any new internationalized content
- Maintain the shadcn/ui component patterns and Tailwind styling approach
- Blog-related functionality should extend the existing data structure in `lib/blog-data.ts`
- Keep server/client component boundaries clear per Next.js App Router best practices

## API Routes

The application includes:
- Contact form API at `app/api/contact/route.ts` using Resend for email
- Server actions are preferred over API routes where possible per Next.js 15 conventions

## Important Development Notes

- **Package Manager**: This project uses `pnpm` - always use pnpm commands, not npm
- **TypeScript Strict Mode**: The project uses strict TypeScript settings
- **Build Configuration**: ESLint and TypeScript errors are ignored during builds (configured for production deployment)
- **Image Handling**: Images are unoptimized and use placeholder URLs - consider this when adding new images
- **Component Creation**: When adding new UI components, use shadcn/ui patterns and check components.json for configuration