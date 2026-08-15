# Gym3D — UI Showcase

A single-page, front-end-only concept design for **Gym3D**, a fictional 3D-motion-capture fitness platform. Built as a portfolio piece to explore 2026 interface trends: glassmorphism, bento grids, WebGL hero scenes, and orchestrated scroll motion.

**This is a visual showcase only.** There is no backend, no auth, no database, and no API calls. Every button, link, and form control is decorative. All copy and data are hardcoded mock content in `src/data/content.ts`.

## Stack

- **React 19 + TypeScript + Vite**
- **Tailwind CSS v4** for styling and design tokens
- **Framer Motion** for scroll reveals, the accordion, flip cards, and magnetic buttons
- **React Three Fiber + drei** for the WebGL hero scene (wireframe icosahedron core + particle field)
- **Lenis** for inertial smooth scrolling
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/       All UI sections (Hero, Navbar, Bento, Programs, Pricing, ...)
  data/content.ts    Hardcoded mock copy, stats, pricing, testimonials, FAQ
  hooks/useLenis.ts  Smooth-scroll setup
  index.css          Design tokens + global styles (Tailwind v4 @theme)
```

## Design notes

- **Palette:** near-black void background with a signature orange (`#F97316`) → green (`#22C55E`) gradient running through headings, CTAs, and the 3D core mesh.
- **Type:** Barlow Condensed (display, heavy weights) paired with Inter (body) and Space Mono (labels, stats, telemetry-style eyebrows) to lean into the "tracked, measured" feel of the product.
- **Motion:** a single loader sequence on entry, scroll-triggered reveals throughout, 3D tilt on the bento cards and program flip cards, and a magnetic pull on primary buttons.
- Respects `prefers-reduced-motion` (disables Lenis, the custom cursor, and shortens animation durations).

## Notes for reuse

Everything under `src/data/content.ts` is placeholder copy — swap it out to reskin the page for a different product. All interactive elements use `href="#"` with `preventDefault`, so wiring up real functionality means replacing those handlers with real navigation/state.
