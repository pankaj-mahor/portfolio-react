import { profile, contact, projects, orgs, skills } from "@/data/portfolio";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  "http://localhost:3000"
).replace(/\/$/, "");

export const defaultTitle = `${profile.name} | Software Engineer, Frontend Developer & Full Stack Developer`;

export const defaultDescription =
  `${profile.name} is a Software Engineer, Frontend Developer, and Full Stack Developer in Ghaziabad, Noida, and Gurugram. Available for remote and freelance work, with 4+ years of experience building React, Next.js, and TypeScript products across FinTech, SaaS, and Web3.`;

export const keywords = [
  "Pankaj Kori",
  "Pankaj Mahor",
  "Pankaj Kori Frontend Developer",
  "Pankaj Kori Software Engineer",
  "Pankaj Kori Full Stack Developer",
  "Frontend Developer",
  "Frontend Engineer",
  "Full Stack Developer",
  "Full Stack Engineer",
  "Software Engineer",
  "React Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "MERN Stack Developer",
  "Frontend Developer Ghaziabad",
  "Frontend Developer Noida",
  "Frontend Developer Gurugram",
  "Frontend Developer Gurgaon",
  "Software Engineer Noida",
  "Software Engineer Gurugram",
  "Full Stack Developer Noida",
  "Remote Frontend Developer",
  "Freelance Frontend Developer",
  "Freelance Software Engineer",
  "Remote Full Stack Developer",
  "Software Engineer India",
  "React",
  "Next.js",
  "Node.js",
];

export function buildMetadata({ title, description, path, ogTitle }) {
  const url = `${SITE_URL}${path}`;
  const resolvedOgTitle = ogTitle || `${title} | ${profile.name}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: resolvedOgTitle,
      description,
      url,
      siteName: `${profile.name} | Software Engineer Portfolio`,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "/favicon.png",
          width: 512,
          height: 512,
          alt: `${profile.name} — Software Engineer and Frontend Developer`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description,
      images: ["/favicon.png"],
    },
  };
}

export function personJsonLd() {
  const skillList = [
    ...skills.frontend,
    ...skills.backend,
    "Frontend Development",
    "Full Stack Development",
    "Software Engineering",
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile`,
        url: SITE_URL,
        name: defaultTitle,
        description: defaultDescription,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${SITE_URL}/#person` },
        about: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: profile.name,
        alternateName: ["Pankaj Mahor", "Pankaj Kori Frontend Developer"],
        jobTitle: [
          "Software Engineer",
          "Frontend Developer",
          "Frontend Engineer",
          "Full Stack Developer",
        ],
        description: defaultDescription,
        email: `mailto:${profile.email}`,
        telephone: profile.phone,
        url: SITE_URL,
        image: `${SITE_URL}/favicon.png`,
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Ghaziabad",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Noida",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Gurugram",
            addressRegion: "Haryana",
            addressCountry: "IN",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Ghaziabad" },
          { "@type": "City", name: "Noida" },
          { "@type": "City", name: "Gurugram" },
          { "@type": "Country", name: "India" },
          "Remote",
          "Freelance",
        ],
        workLocation: [
          { "@type": "VirtualLocation", name: "Remote" },
          { "@type": "Place", name: "Freelance" },
        ],
        sameAs: [contact.linkedin, contact.github],
        knowsAbout: skillList,
        worksFor: {
          "@type": "Organization",
          name: orgs[0]?.name || "LNVS Fintech",
        },
        hasOccupation: {
          "@type": "Occupation",
          name: "Software Engineer",
          occupationalCategory: "15-1252.00",
          skills: "React, Next.js, TypeScript, Node.js, Frontend Development, Full Stack Development",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: `${profile.name} | Software Engineer Portfolio`,
        url: SITE_URL,
        description: defaultDescription,
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#person` },
        author: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#projects`,
        name: `${profile.name} Projects`,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.name,
          description: project.description,
        })),
      },
    ],
  };
}
