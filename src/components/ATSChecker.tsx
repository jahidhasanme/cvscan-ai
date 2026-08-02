import React, { useState } from "react";
import {
  Upload,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { mockResumes } from "../data/mockResumes";
import type { ResumeData } from "../types/resume";

interface ATSCheckerProps {
  onSelectResume?: (resume: ResumeData) => void;
}

const ATSChecker: React.FC<ATSCheckerProps> = () => {
  const [selectedResumeId, setSelectedResumeId] = useState<string>(
    mockResumes[0]?.id || "1",
  );
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanResult, setScanResult] = useState<{
    score: number;
    matchedKeywords: string[];
    missingKeywords: string[];
    sections: { name: string; score: number; feedback: string }[];
  }>({
    score: 84,
    matchedKeywords: [
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "Agile",
      "CI/CD",
    ],
    missingKeywords: ["GraphQL", "Docker", "Kubernetes", "Jest", "AWS"],
    sections: [
      {
        name: "Contact & Header",
        score: 95,
        feedback:
          "Clean header with professional links and active phone/email.",
      },
      {
        name: "Professional Summary",
        score: 80,
        feedback:
          "Strong intro, but could include more quantifiable impact metrics.",
      },
      {
        name: "Work Experience",
        score: 88,
        feedback:
          "Good action verbs. Add revenue or user scale metrics to bullet points.",
      },
      {
        name: "Skills & Keywords",
        score: 75,
        feedback:
          "Missing key modern stack terms requested by top tech recruiters.",
      },
      {
        name: "Education & Certifications",
        score: 90,
        feedback: "Correctly formatted and easily readable by ATS parsers.",
      },
    ],
  });

  const handleRunScan = (id: string) => {
    setSelectedResumeId(id);
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      const randomScore = Math.floor(Math.random() * 25) + 72; // 72 to 96
      setScanResult({
        score: randomScore,
        matchedKeywords: [
          "React",
          "TypeScript",
          "Node.js",
          "REST APIs",
          "Agile",
          "Git",
          "Problem Solving",
        ],
        missingKeywords: [
          "Docker",
          "AWS",
          "Kubernetes",
          "Microservices",
          "GraphQL",
        ],
        sections: [
          {
            name: "Contact & Header",
            score: 92,
            feedback: "Contact information is complete and properly formatted.",
          },
          {
            name: "Professional Summary",
            score: randomScore - 4,
            feedback:
              "Align summary more closely with target job requirements.",
          },
          {
            name: "Work Experience",
            score: randomScore + 2,
            feedback:
              "Experience bullets are clear. Quantify results with percentages.",
          },
          {
            name: "Skills & Keywords",
            score: randomScore - 8,
            feedback: "Include 4-5 missing industry-standard keywords.",
          },
          {
            name: "Education & Certifications",
            score: 95,
            feedback: "Degree and certifications are clearly parsed.",
          },
        ],
      });
    }, 900);
  };

  const currentResume =
    mockResumes.find((r) => r.id === selectedResumeId) || mockResumes[0];

  return (
    <section
      id="checker"
      style={{
        padding: "24px 12px",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 800,
            marginBottom: "8px",
          }}
        >
          Interactive <span className="text-gradient">ATS CV Scanner</span>
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
            fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
            padding: "0 8px",
          }}
        >
          Test one of our sample professional profiles or upload your own resume
          to see how top ATS systems score your credentials instantly.
        </p>
      </div>

      <div
        className="glass-card"
        style={{
          padding: "clamp(16px, 3vw, 32px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Left Column: Preset Selector & Upload */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            minWidth: 0,
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FileText size={18} style={{ color: "var(--accent-indigo)" }} />{" "}
              Select Sample CV Profile
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {mockResumes.map((resume) => (
                <div
                  key={resume.id}
                  onClick={() => handleRunScan(resume.id)}
                  style={{
                    padding: "12px 14px",
                    borderRadius: "var(--radius-md)",
                    background:
                      selectedResumeId === resume.id
                        ? "rgba(99, 102, 241, 0.15)"
                        : "rgba(255, 255, 255, 0.03)",
                    border:
                      selectedResumeId === resume.id
                        ? "1px solid var(--accent-indigo)"
                        : "1px solid var(--border-color)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.2s",
                    minWidth: 0,
                  }}
                >
                  <div style={{ minWidth: 0, overflow: "hidden" }}>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {resume.personalInfo.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-secondary)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {resume.personalInfo.title}
                    </div>
                  </div>
                  {selectedResumeId === resume.id && (
                    <span
                      className="badge badge-pass"
                      style={{ marginLeft: "8px", flexShrink: 0 }}
                    >
                      Active
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Upload Box Simulator */}
          <div
            style={{
              border: "2px dashed var(--border-color)",
              borderRadius: "var(--radius-lg)",
              padding: "20px 16px",
              textAlign: "center",
              background: "rgba(255, 255, 255, 0.02)",
              cursor: "pointer",
              transition: "border-color 0.2s",
            }}
            onClick={() => handleRunScan(selectedResumeId)}
          >
            <Upload
              size={28}
              style={{ color: "var(--accent-indigo)", marginBottom: "8px" }}
            />
            <div
              style={{
                fontWeight: 600,
                fontSize: "0.9rem",
                marginBottom: "4px",
              }}
            >
              Upload Your Own CV (PDF / DOCX)
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              Click to simulate instant scan & analysis
            </div>
          </div>

          <button
            onClick={() => handleRunScan(selectedResumeId)}
            className="btn-primary"
            style={{
              width: "100%",
              padding: "12px",
              justifyContent: "center",
              borderRadius: "var(--radius-md)",
            }}
            disabled={isScanning}
          >
            {isScanning ? (
              <>
                <RefreshCw size={16} className="animate-spin" /> Analyzing
                ATS...
              </>
            ) : (
              <>
                <Sparkles size={16} /> Re-Scan Current CV
              </>
            )}
          </button>
        </div>

        {/* Right Column: Live ATS Scan Results Dashboard */}
        <div
          style={{
            background: "var(--bg-secondary)",
            borderRadius: "var(--radius-lg)",
            padding: "clamp(16px, 2.5vw, 24px)",
            border: "1px solid var(--border-color)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            minWidth: 0,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                  display: "block",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Scan Report: {currentResume.personalInfo.name}
              </span>
              <h4
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  fontWeight: 700,
                }}
              >
                ATS Compatibility Score
              </h4>
            </div>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background:
                  scanResult.score >= 80
                    ? "rgba(16, 185, 129, 0.15)"
                    : "rgba(245, 158, 11, 0.15)",
                border: `3px solid ${scanResult.score >= 80 ? "#10b981" : "#f59e0b"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "1.1rem",
                color: scanResult.score >= 80 ? "#10b981" : "#f59e0b",
                flexShrink: 0,
              }}
            >
              {scanResult.score}%
            </div>
          </div>

          {/* Section Breakdowns */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
              }}
            >
              Section Breakdown
            </div>
            {scanResult.sections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  padding: "10px 12px",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "2px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      paddingRight: "8px",
                    }}
                  >
                    {sec.name}
                  </span>
                  <span
                    style={{
                      color: sec.score >= 85 ? "#10b981" : "#f59e0b",
                      flexShrink: 0,
                    }}
                  >
                    {sec.score}/100
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  {sec.feedback}
                </div>
              </div>
            ))}
          </div>

          {/* Keywords Found & Missing */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                padding: "12px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--accent-green)",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <CheckCircle2 size={13} /> Matched Keywords (
                {scanResult.matchedKeywords.length})
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {scanResult.matchedKeywords.slice(0, 6).map((kw, i) => (
                  <span
                    key={i}
                    className="badge badge-pass"
                    style={{ fontSize: "0.65rem", padding: "2px 6px" }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                padding: "12px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--accent-red)",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <AlertTriangle size={13} /> Recommended Keywords
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {scanResult.missingKeywords.slice(0, 5).map((kw, i) => (
                  <span
                    key={i}
                    className="badge badge-fail"
                    style={{ fontSize: "0.65rem", padding: "2px 6px" }}
                  >
                    + {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATSChecker;
