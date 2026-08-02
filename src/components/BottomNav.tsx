import React from "react";
import {
  Sparkles,
  FileText,
  Search,
  LayoutTemplate,
  Briefcase,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface BottomNavProps {
  onOpenAuth: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ onOpenAuth }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className="mobile-bottom-nav glass-card"
      style={{
        display: "none", // displayed via CSS query on mobile
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "var(--bg-card)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid var(--border-color)",
        padding: "8px 12px",
        alignItems: "center",
        justifyContent: "space-around",
        boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.3)",
      }}
    >
      <button
        onClick={() => navigate("/")}
        style={{
          background: "transparent",
          border: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3px",
          color:
            currentPath === "/"
              ? "var(--accent-indigo)"
              : "var(--text-secondary)",
          cursor: "pointer",
          fontSize: "0.68rem",
          fontWeight: 650,
        }}
      >
        <FileText size={20} />
        <span>Home</span>
      </button>

      <button
        onClick={() => navigate("/checker")}
        style={{
          background: "transparent",
          border: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3px",
          color:
            currentPath === "/checker"
              ? "var(--accent-indigo)"
              : "var(--text-secondary)",
          cursor: "pointer",
          fontSize: "0.68rem",
          fontWeight: 650,
        }}
      >
        <Search size={20} />
        <span>Scanner</span>
      </button>

      <button
        onClick={() => navigate("/matcher")}
        style={{
          background: "transparent",
          border: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3px",
          color:
            currentPath === "/matcher"
              ? "var(--accent-indigo)"
              : "var(--text-secondary)",
          cursor: "pointer",
          fontSize: "0.68rem",
          fontWeight: 650,
        }}
      >
        <Briefcase size={20} />
        <span>Match</span>
      </button>

      <button
        onClick={() => navigate("/templates")}
        style={{
          background: "transparent",
          border: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3px",
          color:
            currentPath === "/templates"
              ? "var(--accent-indigo)"
              : "var(--text-secondary)",
          cursor: "pointer",
          fontSize: "0.68rem",
          fontWeight: 650,
        }}
      >
        <LayoutTemplate size={20} />
        <span>Templates</span>
      </button>

      <button
        onClick={onOpenAuth}
        style={{
          background: "var(--gradient-brand)",
          border: "none",
          borderRadius: "50%",
          width: "38px",
          height: "38px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
        }}
        title="Get Started"
      >
        <Sparkles size={16} />
      </button>
    </div>
  );
};

export default BottomNav;
