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

Set the public site URL in Netlify so Google uses the real domain:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This is used for canonical URLs, Open Graph tags, `sitemap.xml`, and `robots.txt`.

To get indexed in Google:

1. Deploy the site on a stable URL (custom domain is better than a changing Netlify preview).
2. Open [Google Search Console](https://search.google.com/search-console), add the property, and verify it (verification tags are already in the site metadata).
3. Submit `https://your-domain.com/sitemap.xml`.
4. Use **URL Inspection → Request indexing** on `/` and `/resume`.
5. Share the site from LinkedIn, GitHub, and your resume so Google sees real links to your name.
