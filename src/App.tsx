import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModal";
import BottomNav from "./components/BottomNav";

import { Home } from "./pages/Home";
import { CheckerPage } from "./pages/CheckerPage";
import { MatcherPage } from "./pages/MatcherPage";
import { TemplatesPage } from "./pages/TemplatesPage";
import { FeaturesPage } from "./pages/FeaturesPage";

export function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <div
        className="app-container"
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenAuth={() => setIsAuthOpen(true)}
        />

        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            paddingTop: "76px",
            paddingBottom: "80px", // extra space for mobile bottom nav
            width: "100%",
            maxWidth: "1440px",
            margin: "0 auto",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={<Home onOpenAuth={() => setIsAuthOpen(true)} />}
            />
            <Route path="/checker" element={<CheckerPage />} />
            <Route path="/matcher" element={<MatcherPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/features" element={<FeaturesPage />} />
          </Routes>
        </main>

        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        <BottomNav onOpenAuth={() => setIsAuthOpen(true)} />
      </div>
    </Router>
  );
}

export default App;
