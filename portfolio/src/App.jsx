import { Routes, Route } from "react-router-dom";
import { ScrollSpyProvider } from "./context/ScrollSpyContext";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";

export default function App() {
  return (
    <ScrollSpyProvider>
      <Layout>
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </main>
      </Layout>
    </ScrollSpyProvider>
  );
}
