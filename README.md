# Acuity Software Services — React Website + Admin CMS

## Structure
```
src/
  components/   Header, Footer, TopBar — shared on every page
  sections/     One component per homepage block (Hero, Services, About, ...)
                + SectionRenderer.jsx, which maps a block's `type` to its component
  pages/        Home, About, Services, Industries, Portfolio, Blog, Contact, Admin
  data/         defaultData.js — seed content for menu, company info, and homepage sections
  App.jsx       Routing + the single source of truth (menu/company/sections state)
  main.jsx      Entry point
```

## Run locally
```
npm install
npm run dev
```
Visit `/` for the site and `/admin` for the dashboard.

## How the CMS works right now
`App.jsx` holds `menu`, `company`, and `sections` in React state and persists
them to the browser's `localStorage` (see the `save` function). The Admin
page (`/admin`) edits that same state: reorder/enable/disable/add/remove
homepage blocks, edit header menu items, footer/company info, and basic SEO
settings.

## Wiring up a real backend
This is currently a front-end-only demo — persistence is per-browser via
localStorage, and there's no authentication on `/admin`. To make it
production-ready:
1. Replace the `save`/`loadConfig` functions in `App.jsx` with calls to your
   own API (e.g. `PUT /api/site-config`, `GET /api/site-config`).
2. Add auth (e.g. a login screen + protected route) in front of `/admin`.
3. Move `defaultData.js` content into a real database (Postgres/Mongo/etc.)
   with one table/collection per: pages, sections, menu items, company info.
4. Extend `sections/SectionRenderer.jsx`'s registry as you add more block
   types (Statistics, Team, FAQ, Blog, Newsletter, Video, etc.) — the pattern
   is the same for every new block: a component + one line in the registry.
5. Add an "Other Pages" admin (reuses the same `SectionsAdmin` UI pattern)
   so any page — not just Home — can be built from the same block library.
