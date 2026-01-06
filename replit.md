# Next.js Project

## Overview
This is a Next.js 15 application using the App Router with Turbopack for fast development.

## Project Structure
- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Main page component
  - `layout.tsx` - Root layout
  - `globals.css` - Global styles
- `public/` - Static assets
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration

## Tech Stack
- Next.js 15.5.7
- React 19
- TypeScript
- Tailwind CSS

## Development
The app runs on port 5000 with the command:
```
npm run dev -- -p 5000 -H 0.0.0.0
```

## Deployment
Uses autoscale deployment with:
- Build: `npm run build`
- Start: `npm run start -- -p 5000 -H 0.0.0.0`
