import React from "react";
import {
  ShieldCheck,
  Sparkles,
  Sun,
  Moon,
  Menu,
  X,
  FileText,
  Briefcase,
  LayoutTemplate,
  HelpCircle,
} from "lucide-react";

interface NavbarProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
  onOpenAuth: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenAuth,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      <nav
        className="glass-card"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 20px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: 0,
          borderLeft: "none",
          borderRight: "none",
          borderTop: "none",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Mobile App Bar Header Style with logo & brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                background: "var(--gradient-brand)",
                padding: "8px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(99, 102, 241, 0.4)",
              }}
            >
              <ShieldCheck size={22} color="#ffffff" />
            </div>
            <div>
              <span
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                CV<span className="text-gradient">Scan</span>.ai
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "0.65rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  lineHeight: "1",
                }}
              >
                ATS Analyzer
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "20px" }}
          className="nav-links"
        >
          <a
            href="/"
            className="btn-ghost"
            style={{ fontSize: "0.9rem", fontWeight: 500 }}
          >
            Home
          </a>
          <a
            href="/checker"
            className="btn-ghost"
            style={{ fontSize: "0.9rem", fontWeight: 500 }}
          >
            ATS Scanner
          </a>
          <a
            href="/matcher"
            className="btn-ghost"
            style={{ fontSize: "0.9rem", fontWeight: 500 }}
          >
            Job Match
          </a>
          <a
            href="/templates"
            className="btn-ghost"
            style={{ fontSize: "0.9rem", fontWeight: 500 }}
          >
            Templates
          </a>
          <a
            href="/features"
            className="btn-ghost"
            style={{ fontSize: "0.9rem", fontWeight: 500 }}
          >
            Features
          </a>
        </div>

        {/* Action Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={onToggleTheme}
            className="btn-secondary"
            style={{ padding: "8px", borderRadius: "10px" }}
            aria-label="Toggle Theme"
            title="Toggle Color Theme"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            onClick={onOpenAuth}
            className="btn-primary"
            style={{
              padding: "8px 16px",
              borderRadius: "10px",
              fontSize: "0.85rem",
            }}
          >
            <Sparkles size={15} />{" "}
            <span className="auth-btn-text">Get Started</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-secondary mobile-menu-toggle"
            style={{ padding: "8px", borderRadius: "10px", display: "none" }}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "65px",
            left: 0,
            right: 0,
            background: "var(--bg-secondary)",
            borderBottom: "1px solid var(--border-color)",
            padding: "20px",
            zIndex: 49,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            animation: "slideUp 0.2s ease-out",
          }}
          className="mobile-dropdown-menu"
        >
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px",
              borderRadius: "10px",
              color: "var(--text-primary)",
              textDecoration: "none",
              fontWeight: 600,
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <FileText size={18} color="var(--accent-indigo)" /> Home & Overview
          </a>
          <a
            href="/checker"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px",
              borderRadius: "10px",
              color: "var(--text-primary)",
              textDecoration: "none",
              fontWeight: 600,
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <FileText size={18} color="var(--accent-blue)" /> ATS CV Scanner
          </a>
          <a
            href="/matcher"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px",
              borderRadius: "10px",
              color: "var(--text-primary)",
              textDecoration: "none",
              fontWeight: 600,
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <Briefcase size={18} color="var(--accent-violet)" /> AI Job Matcher
          </a>
          <a
            href="/templates"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px",
              borderRadius: "10px",
              color: "var(--text-primary)",
              textDecoration: "none",
              fontWeight: 600,
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <LayoutTemplate size={18} color="var(--accent-pink)" /> Resume
            Templates
          </a>
          <a
            href="/features"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px",
              borderRadius: "10px",
              color: "var(--text-primary)",
              textDecoration: "none",
              fontWeight: 600,
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <HelpCircle size={18} color="var(--accent-yellow)" /> Pro Features
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
