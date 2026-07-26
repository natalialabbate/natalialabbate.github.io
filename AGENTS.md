# Editing guide

For **Natalia** (and any AI she's working with) to update this site.

This file is the single source of truth for how to change things safely. If you're using Claude, Cursor, Copilot, ChatGPT, or any other AI to make an edit, paste the relevant section into the chat and ask it to follow the instructions here exactly.

---

## What this site is

A static portfolio built with Next.js 16 (App Router). The whole site is generated at build time into `out/` and deployed to GitHub Pages. There is no database, no server, no CMS. Every word and every image lives in the repo as code.

- **Home** — `app/page.tsx`
- **Case study pages** — `app/work/[slug]/page.tsx` (the template) + `app/cases.ts` (the data)
- **Design tokens & styles** — `app/globals.css`
- **Images** — `public/imgs/<case-slug>/`
- **Deploy** — `.github/workflows/deploy.yml` (runs on every push to `main`)

If you know how to edit a text file and use git, you can update everything.

---

## Writing rules (very important)

The prose on this site was cleaned to sound like a human, not an AI. Please keep it that way:

1. **No em-dashes.** Never `—`. Use commas, periods, or parentheses instead.
2. **No arrows in prose.** Never `→`. Say "to" or split into two sentences.
3. **No AI filler.** Ban list: *human-centred products that scale as businesses grow, framing the right problem, empowering, leverage, seamless, cutting-edge, delve, unlock, elevate, robust, actionable insights*.
4. **Keep Natalia's voice** in the bio, process, and case narratives. When in doubt, use her exact wording from her Notion docs.

**When prompting an AI:** always include *"Do not use em-dashes or AI filler phrases. Match the existing tone: direct, concrete, minimal decoration."*

---

## Common tasks

### 1. Update your bio, process, or contact info

Open [`app/page.tsx`](app/page.tsx). Everything on the home page is in this one file, in plain text inside JSX. Search for the sentence you want to change, edit it in place, save.

### 2. Change the H1 or the subtitle under it

Same file, [`app/page.tsx`](app/page.tsx). Look for `hero-headline` (the giant text) and `hero-sub` (the paragraph below it).

### 3. Edit an existing case study

Open [`app/cases.ts`](app/cases.ts). Find the entry by `slug` (e.g. `slug: "ventas-grupo-plaenge"`). Every case is a JavaScript object with these fields:

```ts
{
  slug: "ventas-grupo-plaenge",   // URL segment
  number: "01",
  tag: "Real Estate",              // shown on the home card chip
  year: "2022",
  title: "Ventas · Grupo Plaenge", // the big page title
  client: "Grupo Plaenge",         // optional
  tagline: "…",                    // short one-liner under the title
  disclaimer: "…",                 // small note (optional)
  role, industry, duration, timeline, tools, scope, team,  // meta strip
  tags: ["Mobile", "iOS", …],      // chips shown at the top of the case
  goals: ["…", "…"],               // numbered "Product goals" list
  sections: [ { heading, paragraphs, bullets, subsections } ],
  results: ["…", "…"],             // green-arrow bullets at the bottom
  testimonials: [ { quote, author, role } ],
  heroImage: "/imgs/ventas/hero.webp",
  heroAlt: "…",                    // accessibility text for the hero
  galleryLayout: "stack",          // "grid" (default) or "stack"
  gallery: [ { src, alt, wide? } ],
}
```

Every field is either a string or a plain array. No magic. Save the file, refresh the browser.

### 4. Add a brand new case study

Two steps:

1. **Drop your images** into a new folder `public/imgs/<your-slug>/` (e.g. `public/imgs/newco/`). Use `hero.webp` (or `.png`) for the cover, and any names you like for the rest — `01.png`, `02.png`, `screenshot-flow.png`, whatever.
2. **Add a new entry** to the `CASES` array in [`app/cases.ts`](app/cases.ts). Copy an existing case as a template. Set the `slug` to match your image folder name. Point `heroImage` and `gallery[].src` at your files (paths start with `/imgs/…`, no `public` prefix).

Your case will automatically appear on the home page and get its own URL at `/work/<slug>/`.

### 5. Add or replace images on an existing case

Drop the new file into `public/imgs/<slug>/`. Add or edit the matching entry in that case's `gallery` array in [`app/cases.ts`](app/cases.ts). Order in the array = order on the page.

### 6. Change the theme colours or typography

[`app/globals.css`](app/globals.css) starts with a `:root {…}` block of CSS variables. `--bg` for background, `--fg` for text, `--font-display` for the type family. Both dark and light themes are defined here. Change a value, save.

---

## Preview locally before deploying

```bash
npm install
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000). Also reachable from your phone on the same Wi-Fi at the network address printed in the terminal.

If something's broken, run:

```bash
npm run build
```

This is what GitHub runs on deploy. Any type or CSS error will show up here.

---

## Deploy

Every push to the `main` branch triggers the deploy. That's it.

```bash
git add .
git commit -m "Short message about what changed"
git push
```

Wait ~1 minute. The GitHub Actions tab in the repo shows the build. When it goes green, the site is live at:
- https://natalialabbate.github.io/ (current)

If GitHub tells you the deploy failed, open the failed run and read the last few lines of the log. Common cause: a typo in `cases.ts`. Fix and push again.

---

## Prompt templates for your AI

Copy-paste these when you want help.

### "Edit my bio"

> Open `app/page.tsx`. Find the About section (search for `id="about"`). Change the second paragraph to say: [your new text].
> Do not use em-dashes or AI filler phrases. Match the existing tone: direct, concrete, minimal decoration.

### "Add a new case"

> I'm adding a new case study to my portfolio. Follow the instructions in `AGENTS.md` section 4.
> Slug: `[slug]`. Title: `[title]`. Tag: `[tag]`. Year: `[year]`. Client: `[client]`. Tools: `[list]`.
> I'll paste the copy for each section separately. Create the entry in `app/cases.ts` mirroring the shape of the `ventas-grupo-plaenge` case. Images are already in `public/imgs/[slug]/`.
> Do not use em-dashes. Do not paraphrase my copy — use it verbatim.

### "Change a case image"

> In `app/cases.ts`, find the case with slug `[slug]`. In its `gallery` array, replace the image at index [n] with `{ src: "/imgs/[slug]/[new-file]", alt: "[alt text]" }`.
> I've already put the new file in `public/imgs/[slug]/`. Nothing else should change.

### "Fix a typo"

> Search the repo for the exact string `[old text]` and replace with `[new text]`. Show me the file it changed. Don't touch anything else.

### "Deploy"

> Run `git status` to show what changed, then commit with a short message describing the change, then push. Report the URL of the workflow run.

---

## What to avoid

- **Don't run `rm -rf` anything** unless you know what you're deleting.
- **Don't rename `slug` values** on cases that are already live — the URLs will break. Change them only if you're OK with a new URL.
- **Don't edit `next.config.ts` or `.github/workflows/deploy.yml`** without a specific reason — those control the deploy.
- **Don't add JavaScript dependencies** (`npm install <thing>`) unless you actually need one — every dependency slows the build and adds risk.
- **Don't commit huge unoptimised images.** Compress with [Squoosh](https://squoosh.app/) or similar first, keep files under ~1 MB when you can.

---

## Where to find things (quick map)

```
app/
  layout.tsx           # global head, SEO, fonts, loading screen, scroll-top, analytics
  page.tsx             # home
  work/[slug]/page.tsx # case study template
  cases.ts             # case content (edit this most)
  site-header.tsx      # top bar (avatar, back link, theme toggle, socials)
  loading-screen.tsx   # black overlay between routes
  animations.tsx       # GSAP scroll reveals
  scroll-top.tsx       # jumps to top on route change
  theme-toggle.tsx     # light/dark switch
  analytics.tsx        # GA4 injection
  assets.ts            # asset("/imgs/…") helper for GitHub Pages basePath
  globals.css          # tokens + all component styles
public/
  favicon.svg
  imgs/                # case images, one folder per case
.github/workflows/
  deploy.yml           # GitHub Pages deploy
next.config.ts         # static export, basePath, analytics env
```

---

## Getting help

If something goes wrong and you can't figure it out from the error message, ask your AI:

> Read `AGENTS.md` for context. Here's the error: [paste error]. What's the root cause and how do I fix it without breaking anything else?

Or ping Ney.
