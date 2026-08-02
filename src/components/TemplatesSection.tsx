import React, { useState } from "react";
import { FileText } from "lucide-react";

const TemplatesSection: React.FC = () => {
  const [activeTemplate, setActiveTemplate] = useState(0);

  const templates = [
    {
      name: "Silicon Valley Tech",
      tag: "Most Popular for Engineering",
      color: "#6366f1",
      desc: "Clean single-column layout optimized for technical parsing.",
    },
    {
      name: "Executive Corporate",
      tag: "Best for Leadership & Management",
      color: "#3b82f6",
      desc: "Professional, elegant hierarchy emphasizing executive achievements.",
    },
    {
      name: "Modern Minimalist",
      tag: "Great for Creative & Product",
      color: "#8b5cf6",
      desc: "Sleek two-column design with modern accent badges.",
    },
  ];

  return (
    <section
      id="templates"
      style={{ padding: "60px 16px", maxWidth: "1200px", margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2
          style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "12px" }}
        >
          ATS-Optimized <span className="text-gradient">CV Templates</span>
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Choose from our library of battle-tested templates designed to pass
          99% of Applicant Tracking Systems without layout distortion.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {templates.map((tpl, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              border:
                activeTemplate === idx
                  ? "1px solid var(--accent-indigo)"
                  : "1px solid var(--border-color)",
              background:
                activeTemplate === idx
                  ? "rgba(99, 102, 241, 0.08)"
                  : "var(--bg-card)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onClick={() => setActiveTemplate(idx)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <span
                  className="badge badge-pass"
                  style={{ marginBottom: "8px" }}
                >
                  {tpl.tag}
                </span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                  {tpl.name}
                </h3>
              </div>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: tpl.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <FileText size={18} />
              </div>
            </div>

            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              {tpl.desc}
            </p>

            {/* Mini Visual Preview */}
            <div
              style={{
                background: "var(--bg-secondary)",
                borderRadius: "var(--radius-sm)",
                padding: "16px",
                border: "1px solid var(--border-color)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "40%",
                  height: "10px",
                  background: tpl.color,
                  borderRadius: "4px",
                }}
              />
              <div
                style={{
                  width: "80%",
                  height: "6px",
                  background: "var(--border-color)",
                  borderRadius: "4px",
                }}
              />
              <div
                style={{
                  width: "60%",
                  height: "6px",
                  background: "var(--border-color)",
                  borderRadius: "4px",
                }}
              />
            </div>

            <button
              className={
                activeTemplate === idx ? "btn-primary" : "btn-secondary"
              }
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "12px",
                fontSize: "0.9rem",
              }}
            >
              Use This Template
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TemplatesSection;
