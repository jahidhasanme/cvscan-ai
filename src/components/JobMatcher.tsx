import React, { useState } from "react";
import { Target, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

const JobMatcher: React.FC = () => {
  const [jobTitle, setJobTitle] = useState("Senior Full Stack Engineer");
  const [jobDescription, setJobDescription] = useState(
    `We are seeking a Senior Full Stack Engineer with 5+ years of experience in React, TypeScript, Node.js, and cloud infrastructure (AWS). Responsibilities include building scalable web applications, mentoring junior engineers, and optimizing backend performance. Experience with GraphQL, Docker, and CI/CD pipelines is a strong plus.`,
  );
  const [matchScore, setMatchScore] = useState(88);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleMatch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setMatchScore(Math.floor(Math.random() * 15) + 82);
    }, 800);
  };

  return (
    <section
      id="matcher"
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
          AI Job Description{" "}
          <span className="text-gradient">Match Analyzer</span>
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
          Paste any job description below to check your resume compatibility and
          get an instant AI-powered optimization checklist.
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
        {/* Form Column */}
        <form
          onSubmit={handleMatch}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            minWidth: 0,
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.9rem",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              Target Job Title
            </label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "var(--radius-md)",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                fontSize: "0.95rem",
                outline: "none",
                boxSizing: "border-box",
              }}
              placeholder="e.g. Senior Frontend Developer"
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.9rem",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              Job Description (Paste requirements & responsibilities)
            </label>
            <textarea
              rows={6}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "var(--radius-md)",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                fontSize: "0.95rem",
                outline: "none",
                resize: "vertical",
                fontFamily: "inherit",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{
              width: "100%",
              padding: "12px",
              justifyContent: "center",
              borderRadius: "var(--radius-md)",
            }}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              "Analyzing Job Requirements..."
            ) : (
              <>
                <Target size={18} /> Calculate Job Match Score
              </>
            )}
          </button>
        </form>

        {/* Results Column */}
        <div
          style={{
            background: "var(--bg-secondary)",
            borderRadius: "var(--radius-lg)",
            padding: "clamp(16px, 2.5vw, 24px)",
            border: "1px solid var(--border-color)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "16px",
            minWidth: 0,
            overflow: "hidden",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
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
                  Match Result for {jobTitle}
                </span>
                <h4
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    fontWeight: 700,
                  }}
                >
                  Compatibility Rating
                </h4>
              </div>
              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color:
                    matchScore >= 80
                      ? "var(--accent-green)"
                      : "var(--accent-yellow)",
                  background:
                    matchScore >= 80
                      ? "rgba(16, 185, 129, 0.15)"
                      : "rgba(245, 158, 11, 0.15)",
                  padding: "6px 12px",
                  borderRadius: "9999px",
                  border: `1px solid ${matchScore >= 80 ? "#10b981" : "#f59e0b"}`,
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {matchScore}% Match
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                }}
              >
                AI Optimization Action Plan
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  fontSize: "0.85rem",
                }}
              >
                <CheckCircle2
                  size={16}
                  style={{
                    color: "var(--accent-green)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                />
                <span>
                  Core languages (React, TypeScript, Node.js) matched
                  successfully.
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  fontSize: "0.85rem",
                }}
              >
                <AlertCircle
                  size={16}
                  style={{
                    color: "var(--accent-yellow)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                />
                <span>
                  Add explicit mentions of "cloud infrastructure (AWS)" and
                  "Docker" in your summary.
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  fontSize: "0.85rem",
                }}
              >
                <CheckCircle2
                  size={16}
                  style={{
                    color: "var(--accent-green)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                />
                <span>
                  Experience level (5+ years) matches recruiter filters.
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "rgba(99, 102, 241, 0.1)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              borderRadius: "var(--radius-md)",
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  marginBottom: "2px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                One-Click AI Rewrite
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
                Automatically tailor bullets for this job.
              </div>
            </div>
            <button
              className="btn-primary"
              style={{
                padding: "8px 12px",
                fontSize: "0.8rem",
                flexShrink: 0,
              }}
            >
              Optimize <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobMatcher;
