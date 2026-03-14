import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Orgs from "../components/Orgs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollSpy from "../components/ScrollSpy";

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const t = setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      return () => clearTimeout(t);
    }
  }, [hash]);

  return (
    <>
      <ScrollSpy />
      <Hero />
      <Projects />
      <Skills />
      <Orgs />
      <Contact />
      <Footer />
    </>
  );
}
