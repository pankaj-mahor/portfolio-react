"use client";

import { createContext, useContext, useState } from "react";

const ScrollSpyContext = createContext(null);

export function ScrollSpyProvider({ children }) {
  const [activeSection, setActiveSection] = useState("");

  return (
    <ScrollSpyContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ScrollSpyContext.Provider>
  );
}

export function useScrollSpy() {
  const ctx = useContext(ScrollSpyContext);
  if (!ctx) return { activeSection: "", setActiveSection: () => {} };
  return ctx;
}
