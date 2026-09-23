import HashScroll from "@/components/HashScroll";
import ScrollSpy from "@/components/ScrollSpy";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Orgs from "@/components/Orgs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { buildMetadata, defaultDescription, defaultTitle } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Software Engineer, Frontend Developer & Full Stack Developer",
  description: defaultDescription,
  path: "/",
  ogTitle: defaultTitle,
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
