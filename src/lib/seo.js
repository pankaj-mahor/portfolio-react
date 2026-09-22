import { profile, contact } from "@/data/portfolio";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  "http://localhost:3000"
).replace(/\/$/, "");

export const defaultDescription = profile.tagline;

export const keywords = [
  "Pankaj Kori",
  "Software Engineer",
  "Frontend Engineer",
  "React Developer",
  "Next.js",
  "Next.js App Router",
  "TypeScript",
  "FinTech",
  "TanStack Query",
  "SEO",
  "Core Web Vitals",
  "Ghaziabad",
];

export function buildMetadata({ title, description, path, ogTitle }) {
  const url = `${SITE_URL}${path}`;
  const resolvedOgTitle = ogTitle || `${title} | ${profile.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: resolvedOgTitle,
      description,
      url,
      siteName: `${profile.name} | Portfolio`,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description,
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: profile.name,
        jobTitle: profile.title,
        description: profile.tagline,
        email: `mailto:${profile.email}`,
        telephone: profile.phone,
        url: SITE_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ghaziabad",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
        sameAs: [contact.linkedin, contact.github],
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "TanStack Query",
          "FinTech",
          "Frontend Architecture",
          "Performance Engineering",
          "SEO",
        ],
      },
      {
        "@type": "WebSite",
        name: `${profile.name} | Portfolio`,
        url: SITE_URL,
        description: profile.tagline,
        author: { "@type": "Person", name: profile.name },
      },
    ],
  };
}
