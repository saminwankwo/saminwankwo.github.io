# saminwankwo.dev — Portfolio

Vite + React 18 + React Router 6 + Framer Motion. Backend engineer portfolio for Samuel Nwankwo.

## Getting Started

```bash
npm install
npm run dev      # Vite dev server at http://localhost:5173
npm run build    # generate sitemap + vite build → dist/
npm run preview  # preview production build
```

Requires Node `>=22` (see `.nvmrc`).

## Env

Copy `.env.example` → `.env`:

```
VITE_SITE_URL=https://saminwankwo.dev
VITE_HASHNODE_USERNAME=saminwankwo
VITE_HASHNODE_BLOG=saminwankwo.hashnode.dev
VITE_GITHUB_USERNAME=saminwankwo
VITE_FORMSPREE_ID=your_formspree_id
```

## Scripts

- `generate-sitemap` — fetches Hashnode posts and rebuilds `public/sitemap.xml`
- `build` — runs sitemap generation then `vite build`

## Deploy

Configured for both **Vercel** (`vercel.json`) and **Netlify** (`netlify.toml`) as SPA — pick one. Output dir: `dist`.

## Structure

```
src/
  config/      # CONFIG single source of truth
  data/        # projects, experience, skills, freelance
  hooks/       # useGitHub, useHashnode, useClipboard
  lib/         # seo, analytics, formatters
  components/  # layout, ui, features, seo
  pages/       # route pages
  sections/    # home sections
  styles/      # globals, typography, animations
```

## License

MIT © 2025 Nwankwo Samuel
