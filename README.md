# Pankaj Kori — Portfolio

Personal portfolio built with **Next.js 15** (App Router), React 19, and Tailwind CSS v4.

## Routes

- `/` — Home (hero, projects, experience, skills, contact)
- `/resume` — Resume PDF viewer

## Scripts

```bash
npm install
npm run dev
npm run build
npm start
```

## Deploy to Netlify

This app uses Netlify’s Next.js runtime (`@netlify/plugin-nextjs`).

1. Push the repo to GitHub/GitLab/Bitbucket.
2. In Netlify: **Add new site → Import an existing project**.
3. Build settings are already in `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node:** 20
4. Optional: set `NEXT_PUBLIC_SITE_URL` to your custom domain (for example `https://pankajkori.com`). If you skip it, Netlify’s site `URL` is used for canonicals, Open Graph, sitemap, and robots.

## SEO

Set the public site URL before deploying (optional on Netlify):

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This is used for canonical URLs, Open Graph tags, `sitemap.xml`, and `robots.txt`.
