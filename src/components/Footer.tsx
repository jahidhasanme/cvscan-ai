import React from "react";
import { ShieldCheck } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-color)",
        padding: "60px 24px 30px",
        background: "var(--bg-secondary)",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          marginBottom: "40px",
        }}
      >
        {/* Brand Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                background: "var(--gradient-brand)",
                padding: "8px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ShieldCheck size={22} color="#ffffff" />
            </div>
            <span style={{ fontSize: "1.2rem", fontWeight: 800 }}>
              CV<span className="text-gradient">Scan</span>.ai
            </span>
          </div>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Empowering professionals worldwide to beat Applicant Tracking
            Systems and land top-tier interviews effortlessly.
          </p>
        </div>

        {/* Links 1 */}
        <div>
          <h4
            style={{
              fontSize: "0.95rem",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            Product
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
            }}
          >
            <li>
              <a
                href="#checker"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                ATS CV Scanner
              </a>
            </li>
            <li>
              <a
                href="#matcher"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Job Description Matcher
              </a>
            </li>
            <li>
              <a
                href="#templates"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Resume Templates
              </a>
            </li>
            <li>
              <a
                href="#features"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                AI Keyword Generator
              </a>
            </li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h4
            style={{
              fontSize: "0.95rem",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            Resources
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
            }}
          >
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                ATS Resume Guide 2026
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Top 50 Action Verbs
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Interview Preparation
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Salary Negotiation
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div>
          <h4
            style={{
              fontSize: "0.95rem",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            Stay Ahead
          </h4>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              marginBottom: "12px",
            }}
          >
            Get weekly ATS tips and interview strategies straight to your inbox.
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                padding: "10px 14px",
                borderRadius: "var(--radius-md)",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                fontSize: "0.85rem",
                flex: 1,
                outline: "none",
              }}
            />
            <button
              className="btn-primary"
              style={{ padding: "10px 16px", fontSize: "0.85rem" }}
            >
              Join
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid var(--border-color)",
          paddingTop: "24px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          fontSize: "0.85rem",
          color: "var(--text-muted)",
        }}
      >
        <div>
          © 2026 CVScan.ai Inc. All rights reserved. Built with AI Precision.
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            Privacy Policy
          </a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            Terms of Service
          </a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            Security
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
