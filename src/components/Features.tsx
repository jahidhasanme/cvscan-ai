import React from "react";
import { Star, ShieldCheck, Zap, Award } from "lucide-react";

interface FeaturesProps {
  onGetStarted?: () => void;
}

const Features: React.FC<FeaturesProps> = () => {
  const featuresList = [
    {
      icon: ShieldCheck,
      title: "ATS Algorithm Simulation",
      description:
        "Test your CV against top ATS parsers (Workday, Greenhouse, Lever, Taleo) to eliminate parsing failures.",
    },
    {
      icon: Zap,
      title: "Smart Keyword Optimizer",
      description:
        "Extract crucial missing keywords from job postings and automatically integrate them without keyword stuffing.",
    },
    {
      icon: Award,
      title: "Recruiter Feedback Engine",
      description:
        "Receive deep constructive criticism on formatting, bullet point strength, quantified impact, and readability.",
    },
    {
      icon: Star,
      title: "Tailored Bullet Rewriter",
      description:
        "Let our advanced AI rewrite your work experience bullet points into powerful action-driven achievements.",
    },
  ];

  return (
    <section
      id="features"
      style={{ padding: "60px 16px", maxWidth: "1200px", margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span
          style={{
            fontSize: "0.8rem",
            color: "var(--accent-indigo)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 700,
          }}
        >
          Powerful Capabilities
        </span>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "8px" }}>
          Everything You Need to{" "}
          <span className="text-gradient">Land Interviews</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {featuresList.map((feat, idx) => {
          const IconComponent = feat.icon;
          return (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "var(--gradient-brand)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)",
                }}
              >
                <IconComponent size={24} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                {feat.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                {feat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
