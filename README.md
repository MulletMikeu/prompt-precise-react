# Godhans Tree Company — Website

Marketing site for [Godhans Tree Company](https://godhans.com), a veteran-owned
tree service in Jacksonville, NC (Onslow County). Service, location, and blog
pages are statically pre-rendered for SEO and speed.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** with **[vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg)** — every route is crawled and pre-rendered to static HTML at build time
- **Tailwind CSS**
- **react-router-dom** for routing (routes are defined in `src/App.tsx`)
- **@formspree/react** for the quote/contact form
- Deployed on **Vercel** (config in `vercel.json`)

## Local development

```sh
npm install
npm run dev      # start the dev server
npm run build    # production build (pre-renders all routes to /dist)
npm run preview  # serve the built site locally
npm run lint     # eslint
```

## Project layout

```
src/
  App.tsx              # route table (each path is lazily imported)
  pages/               # one component per route
    ServicePage.tsx    # shared template behind most service pages
    LocationPage.tsx   # shared template behind the smaller city pages
  components/          # Navbar, Footer, Hero, homepage sections, etc.
  data/siteData.ts     # business info (phone, address, services, reviews, …)
  lib/constants.ts     # derived business constants
public/                # static assets (images, favicons, og-image, sitemap, robots)
```

## Content editing

Most business details (phone, address, services, service area, reviews) live in
`src/data/siteData.ts`. Page copy lives in the corresponding file under
`src/pages/`. Images go in `public/images/` and are referenced by absolute path.

## Deployment

Pushing to `main` triggers an automatic Vercel deployment that runs
`npm run build` and serves the pre-rendered `dist/` output.
