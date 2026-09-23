import Script from "next/script";
import { Inter, Outfit } from "next/font/google";
import { ScrollSpyProvider } from "@/context/ScrollSpyContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Nav from "@/components/Nav";
import JsonLd from "@/components/JsonLd";
import { profile } from "@/data/portfolio";
import { SITE_URL, defaultDescription, defaultTitle, keywords } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${profile.name}`,
  },
  description: defaultDescription,
  keywords,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: SITE_URL,
    siteName: `${profile.name} | Software Engineer Portfolio`,
    title: defaultTitle,
    description: defaultDescription,
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
    title: defaultTitle,
    description: defaultDescription,
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: [
      "aSn1f9QMRT54f8_Gq_Hu6cmWNZ-6oHlI6BqR7MYJqy8",
      "kaTo7Wd3sPaolO7sypHBK7z_Up5ixoEVl6Ac64qGvKs",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background-light font-sans text-slate-900 antialiased dark:bg-background-dark dark:text-slate-100">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark");}else{document.documentElement.classList.add("dark");}}catch(e){document.documentElement.classList.add("dark");}})();`}
        </Script>
        <Script
          id="clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ymoiayqv1v");
            `,
          }}
        />
        <JsonLd />
        <ThemeProvider>
          <ScrollSpyProvider>
            <div className="flex min-h-screen flex-col">
              <Nav />
              <main className="flex-1">{children}</main>
            </div>
          </ScrollSpyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
