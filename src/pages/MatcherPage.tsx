import React from "react";
import JobMatcher from "../components/JobMatcher";

export const MatcherPage: React.FC = () => {
  return (
    <div
      style={{
        padding: "16px 0",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <JobMatcher />
    </div>
  );
};
