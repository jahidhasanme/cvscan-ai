import React from "react";
import { Sparkles, ArrowRight, Zap, CheckCircle } from "lucide-react";

interface HeroProps {
  onStartScanning: () => void;
  onExploreTemplates: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartScanning, onExploreTemplates }) => {
  return (
    <section
      style={{
        position: "relative",
        padding: "60px 16px 40px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "var(--gradient-glow)",
          filter: "blur(80px)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      {/* Top Pill Badge */}
      <div
        className="glass-pill"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "0.85rem",
          fontWeight: 600,
          color: "var(--text-primary)",
        }}
      >
        <span
          style={{
            background: "var(--gradient-brand)",
            color: "#fff",
            padding: "2px 8px",
            borderRadius: "9999px",
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          AI v3.2
        </span>
        <span>Trusted by 120,000+ Job Seekers & Recruiters</span>
        <Sparkles size={14} style={{ color: "var(--accent-indigo)" }} />
      </div>

      {/* Main Headline */}
      <h1
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          fontWeight: 800,
          lineHeight: 1.15,
          maxWidth: "900px",
          letterSpacing: "-0.03em",
        }}
      >
        Beat the ATS & Land Your Dream Job with{" "}
        <span className="text-gradient">AI Precision</span>
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "clamp(1rem, 2vw, 1.25rem)",
          color: "var(--text-secondary)",
          maxWidth: "680px",
          lineHeight: 1.6,
        }}
      >
        Instantly analyze your CV against Applicant Tracking Systems (ATS),
        match exact job descriptions, discover missing keywords, and get
        tailored AI improvement suggestions in seconds.
      </p>

      {/* Action Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
          marginTop: "12px",
        }}
      >
        <button
          onClick={onStartScanning}
          className="btn-primary"
          style={{
            padding: "16px 32px",
            fontSize: "1.05rem",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <Zap size={20} /> Scan Your CV Free <ArrowRight size={18} />
        </button>

        <button
          onClick={onExploreTemplates}
          style={{
            padding: "16px 32px",
            fontSize: "1.05rem",
            borderRadius: "var(--radius-lg)",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid var(--border-color)",
            color: "var(--text-primary)",
            fontWeight: 600,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            transition: "all 0.2s",
          }}
        >
          Browse ATS Templates
        </button>
      </div>

      {/* Trust Highlights */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "32px",
          justifyContent: "center",
          marginTop: "32px",
          color: "var(--text-secondary)",
          fontSize: "0.9rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CheckCircle size={18} style={{ color: "var(--accent-green)" }} />
          <span>No credit card required</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CheckCircle size={18} style={{ color: "var(--accent-green)" }} />
          <span>98.4% ATS Parsing Accuracy</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CheckCircle size={18} style={{ color: "var(--accent-green)" }} />
          <span>Instant PDF & Docx Report</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
