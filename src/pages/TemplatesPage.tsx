import React from "react";
import TemplatesSection from "../components/TemplatesSection";

export const TemplatesPage: React.FC = () => {
  return (
    <div
      style={{
        padding: "16px 0",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <TemplatesSection />
    </div>
  );
};
