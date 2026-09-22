import HashScroll from "@/components/HashScroll";
import ScrollSpy from "@/components/ScrollSpy";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Orgs from "@/components/Orgs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { profile } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Software Engineer - Frontend Engineer",
  description: `${profile.tagline} Based in ${profile.location}.`,
  path: "/",
  ogTitle: `${profile.name} | Software Engineer - Frontend Engineer`,
});

export default function HomePage() {
  return (
    <>
      <HashScroll />
      <ScrollSpy />
      <Hero />
      <Projects />
      <Orgs />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
