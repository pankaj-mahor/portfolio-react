/**
 * Root layout: full-height flex column so Nav stays at top and main content fills the rest.
 */
export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark">
      {children}
    </div>
  );
}
