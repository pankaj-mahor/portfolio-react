import { useEffect } from "react";
import { useScrollSpy } from "../context/ScrollSpyContext";

const SECTION_IDS = ["projects", "skills", "experience", "contact"];

export default function ScrollSpy() {
  const { setActiveSection } = useScrollSpy();

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (els.length === 0) return;

    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        });
        const first = SECTION_IDS.find((id) => visible.has(id));
        setActiveSection(first || "");
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [setActiveSection]);

  return null;
}
