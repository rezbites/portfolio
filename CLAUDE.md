# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server (localhost:5173)
npm run build      # TypeScript check + Vite production build → dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint on .ts/.tsx files
```

There are no automated tests. The contact form requires a running Vercel environment to test end-to-end (see API below).

## Architecture

Single-page portfolio built with **Vite + React 18 + TypeScript**, deployed to Vercel.

### Page structure (`src/App.tsx`)
The page is a vertical stack of full-width sections in this order:
`Hero → About → Experience → Projects → Skills → Achievements → Contact → Footer`

Supplementary layout pieces inserted between sections: `SectionDivider`, `PhilosophyBand`, `StatsBand`.  
Global overlays: `CustomCursor` (CSS-driven, uses `cursor-ring` classes), `Nav` (sticky top nav with `MenuOverlay`).

Smooth scroll is provided by **Lenis** (initialized in `App.tsx`), disabled when `prefers-reduced-motion` is set.

### Data layer (`src/data/`)
All site content lives in static TypeScript files — edit these to update content, never hardcode strings in components:
- `profile.ts` — name, email, phone, links, headline, tagline, stats
- `experience.ts` — work timeline
- `projects.ts` — project cards
- `skills.ts` — skills/tech tags
- `achievements.ts` — awards/certifications

### Styling conventions
**Tailwind v3** with a custom dark design system defined in `tailwind.config.ts`. Key token names:
- Backgrounds: `bg-bg`, `bg-deep`, `surface`, `surface-2`
- Text: `text` (primary), `text-dim`, `text-mute`
- Borders: `border`, `border-soft`
- Accent: `accent`, `accent-warm`

Reusable CSS component classes are in `src/styles/globals.css` (`@layer components`): `.card`, `.btn-primary`, `.btn-ghost`, `.tech-tag`, `.form-input`, `.underline-input`, `.section-label`, `.section-title`, `.container-page`, `.arrow-link`, `.invert-hover`.

Font families: `font-sans` (Inter), `font-display` (Playfair Display), `font-serif` (Fraunces), `font-mono` (JetBrains Mono).

### Three.js / R3F (`src/three/`)
`HeroCanvas.tsx` renders a `@react-three/fiber` Canvas behind the Hero section. `BackgroundBlobs.tsx` animates 3 distorted icosahedron meshes using `MeshDistortMaterial` from `@react-three/drei`. DPR is capped at 1.5 for performance. The three/fiber/drei/postprocessing packages are split into their own Rollup chunk (`three`).

### Reusable section wrapper
`src/components/ui/Section.tsx` — use this for any new section. It handles `id`, `scroll-mt-20`, viewport-triggered fade-in animation, `section-label` + `section-title` header, and `container-page` padding.

### Contact API (`api/contact.ts`)
Vercel serverless function at `POST /api/contact`. Uses **Resend** to send email. Required env vars:
- `RESEND_API_KEY` — Resend API key (required; form returns 500 without it)
- `CONTACT_TO_EMAIL` — recipient address (defaults to Shashank's Gmail)
- `CONTACT_FROM_EMAIL` — sender address (defaults to `onboarding@resend.dev`)

The function includes IP-based rate limiting (5 requests/hour per IP) and a honeypot field (`website`) for bot filtering. To test locally, use `vercel dev` rather than `npm run dev`.

### Path alias
`@/` resolves to `src/` (configured in both `vite.config.ts` and `tsconfig.json`).
