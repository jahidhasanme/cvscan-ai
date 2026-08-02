import React from "react";
import ATSChecker from "../components/ATSChecker";

export const CheckerPage: React.FC = () => {
  return (
    <div
      style={{
        padding: "16px 0",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <ATSChecker />
    </div>
  );
};
