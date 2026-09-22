import Script from "next/script";
import { Inter, Outfit } from "next/font/google";
import { ScrollSpyProvider } from "@/context/ScrollSpyContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Nav from "@/components/Nav";
import JsonLd from "@/components/JsonLd";
import { profile } from "@/data/portfolio";
import { SITE_URL, defaultDescription, keywords } from "@/lib/seo";
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
    default: `${profile.name} | Software Engineer - Frontend Engineer`,
    template: `%s | ${profile.name}`,
  },
  description: defaultDescription,
  keywords,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  publisher: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${profile.name} | Portfolio`,
    title: `${profile.name} | Software Engineer - Frontend Engineer`,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Software Engineer - Frontend Engineer`,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
    <meta name="google-site-verification" content="aSn1f9QMRT54f8_Gq_Hu6cmWNZ-6oHlI6BqR7MYJqy8" />
      <body className="min-h-screen bg-background-light font-sans text-slate-900 antialiased dark:bg-background-dark dark:text-slate-100">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark");}else{document.documentElement.classList.add("dark");}}catch(e){document.documentElement.classList.add("dark");}})();`}
        </Script>
        <meta name="google-site-verification" content="KaTo7Wd3sPaolO7sypHBK7z_Up5ixoEVl6Ac64qGvKs" />
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
