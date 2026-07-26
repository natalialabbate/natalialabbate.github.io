# Natalia L'Abbate — Portfolio

Static Next.js 16 portfolio for Natalia L'Abbate (Senior Product Designer, São Paulo).

Live at **https://natalialabbate.github.io/**.

## Editing

See [AGENTS.md](AGENTS.md) for the full editing guide — what to change, where, and how to prompt an AI to help.

## Local development

```bash
npm install
npm run dev
```

Opens at http://localhost:3000. Also reachable from other devices on the same Wi-Fi at the LAN address printed by Next.

## Production build

```bash
npm run build
```

Outputs a fully static site into `out/`.

## Deploy

Every push to `main` triggers the GitHub Actions workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml). It builds and publishes to GitHub Pages.

To bind a custom domain (e.g. `natalialabbate.com`):
1. Add a `public/CNAME` file with the domain.
2. Configure DNS at the registrar (A records for GitHub Pages IPs, or CNAME for a subdomain).

## Analytics

GA4 measurement ID is set as `NEXT_PUBLIC_ANALYTICS_ID` in the deploy workflow. Update it there to swap or disable.

## Stack

- Next.js 16 (App Router), static export
- TypeScript
- GSAP for scroll reveals
- Inter Tight display font via `next/font/google`
- GitHub Pages via Actions

## Structure

```
app/
  layout.tsx           # global head, SEO, fonts, loading, analytics
  page.tsx             # home
  work/[slug]/page.tsx # case study template
  cases.ts             # all case content (edit this most)
  globals.css          # design tokens and all styles
public/
  imgs/                # case images, one folder per case
.github/workflows/
  deploy.yml           # GitHub Pages deploy
```
