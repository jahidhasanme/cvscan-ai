import React from "react";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import {
  Zap,
  Search,
  Briefcase,
  LayoutTemplate,
  ArrowRight,
} from "lucide-react";

interface HomeProps {
  onOpenAuth?: () => void;
}

export const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        width: "100%",
      }}
    >
      <Hero
        onStartScanning={() => navigate("/checker")}
        onExploreTemplates={() => navigate("/templates")}
      />

      {/* Quick Access Grid for Multi-Page Navigation */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px",
          width: "100%",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span
            className="badge"
            style={{ marginBottom: "12px", display: "inline-flex" }}
          >
            <Zap size={14} /> Explore CVScan.ai Features
          </span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              marginBottom: "12px",
            }}
          >
            Everything You Need to{" "}
            <span className="text-gradient">Land Top Interviews</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "0.95rem",
            }}
          >
            Select a dedicated tool below to scan your resume, match job
            requirements, or browse professional templates.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Card 1: ATS Scanner */}
          <div
            className="glass-card"
            onClick={() => navigate("/checker")}
            style={{
              padding: "28px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              transition: "transform 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div
              style={{
                background: "rgba(99, 102, 241, 0.15)",
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-indigo)",
              }}
            >
              <Search size={24} />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                ATS Resume Scanner
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.88rem",
                  lineHeight: 1.5,
                }}
              >
                Test your CV against corporate ATS filters with instant score
                breakdown and keyword detection.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--accent-indigo)",
                fontWeight: 600,
                fontSize: "0.9rem",
                marginTop: "auto",
              }}
            >
              <span>Open Scanner</span> <ArrowRight size={16} />
            </div>
          </div>

          {/* Card 2: Job Matcher */}
          <div
            className="glass-card"
            onClick={() => navigate("/matcher")}
            style={{
              padding: "28px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              transition: "transform 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div
              style={{
                background: "rgba(168, 85, 247, 0.15)",
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-violet)",
              }}
            >
              <Briefcase size={24} />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                AI Job Matcher
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.88rem",
                  lineHeight: 1.5,
                }}
              >
                Paste any job description to compare required vs present skills
                with intelligent missing-keyword advice.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--accent-violet)",
                fontWeight: 600,
                fontSize: "0.9rem",
                marginTop: "auto",
              }}
            >
              <span>Open Matcher</span> <ArrowRight size={16} />
            </div>
          </div>

          {/* Card 3: Templates */}
          <div
            className="glass-card"
            onClick={() => navigate("/templates")}
            style={{
              padding: "28px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              transition: "transform 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div
              style={{
                background: "rgba(236, 72, 153, 0.15)",
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-pink)",
              }}
            >
              <LayoutTemplate size={24} />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                Resume Templates
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.88rem",
                  lineHeight: 1.5,
                }}
              >
                Browse ATS-optimized professional templates designed for tech,
                executive, and modern roles.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--accent-pink)",
                fontWeight: 600,
                fontSize: "0.9rem",
                marginTop: "auto",
              }}
            >
              <span>View Templates</span> <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Stats Bar */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "20px auto 0",
          padding: "30px 24px",
          width: "100%",
        }}
      >
        <div
          className="glass-card"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            textAlign: "center",
            padding: "32px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                color: "var(--accent-indigo)",
                marginBottom: "4px",
              }}
            >
              98.4%
            </div>
            <div
              style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}
            >
              ATS Pass Rate Accuracy
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                color: "var(--accent-violet)",
                marginBottom: "4px",
              }}
            >
              250K+
            </div>
            <div
              style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}
            >
              Resumes Optimized
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                color: "var(--accent-pink)",
                marginBottom: "4px",
              }}
            >
              3.5x
            </div>
            <div
              style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}
            >
              More Interview Callbacks
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                color: "var(--accent-yellow)",
                marginBottom: "4px",
              }}
            >
              100%
            </div>
            <div
              style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}
            >
              Data Privacy Guaranteed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
