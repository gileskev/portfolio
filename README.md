# Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, React and Tailwind CSS. Hosted on Vercel from GitHub.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit your content

- Name, links, projects, skills: `src/lib/site.ts` (search for `TODO`)
- About text: `src/app/page.tsx`
- Blog posts: add `.mdx` files to `content/posts/` with `title`, `date` (YYYY-MM-DD) and `summary` frontmatter
- Colors: CSS variables at the top of `src/app/globals.css`

## Contact form

The form posts to `/api/contact`, which sends email through Resend. Copy `.env.example` to `.env.local` and fill in the keys. Without them the form shows a friendly "not set up yet" message.

## Deploy

1. Push this repo to GitHub.
2. In Vercel, choose Add New > Project and import the repo (framework is detected automatically).
3. Add the environment variables from `.env.example`, then deploy. Every push to `main` redeploys.
