import { Inter, Outfit } from "next/font/google";
import { ScrollSpyProvider } from "@/context/ScrollSpyContext";
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
    <html lang="en" className={`dark ${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-background-dark font-sans text-slate-100 antialiased">
        <JsonLd />
        <ScrollSpyProvider>
          <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
          </div>
        </ScrollSpyProvider>
      </body>
    </html>
  );
}
