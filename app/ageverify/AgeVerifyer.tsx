"use client";
import { useEffect, useState } from "react";

export default function AgeGateWrapper({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  useEffect(() => {
    setHasMounted(true);
    const verified = localStorage.getItem("age_verified");
    setIsVerified(verified === "true");
  }, []);

  const handleYes = () => {
    localStorage.setItem("age_verified", "true");
    setIsVerified(true);
  };

  const handleNo = () => {
    window.location.reload();
  };

  if (!hasMounted) return null;

  return (
    <>
      {children}
      {(isVerified === false || isVerified === null) && (
        <div style={overlayStyle}>
          <div style={modalBoxStyle}>
            <h2 style={headingStyle}>Are you 18 years or older?</h2>
            <p style={infoboxStyle}>
              This website is for users who are 18 or older. Please confirm your age to continue.
            </p>
            <div style={btnContainerStyle}>
              <button onClick={handleYes} style={yesBtnStyle}>Yes</button>
              <button onClick={handleNo} style={noBtnStyle}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const overlayStyle = {
  position: "fixed" as const,
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  padding: "1rem",
  boxSizing: "border-box" as const,
  backdropFilter: "blur(5px)",
};

const modalBoxStyle = {
  background: "#121212",
  padding: "2rem",
  borderRadius: "12px",
  color: "white",
  textAlign: "center" as const,
  boxShadow: "0 0 20px rgba(0,0,0,0.5)",
  maxWidth: "90vw",
  width: "100%",
  maxHeight: "90vh",
};

const headingStyle = {
  fontSize: "1.5rem",
  marginBottom: "1rem",
};

const infoboxStyle = {
  fontSize: "1rem",
  marginBottom: "1.5rem",
  lineHeight: "1.4",
};

const btnContainerStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap" as const,
  gap: "1rem",
};

const yesBtnStyle = {
  background: "#1976d2",
  border: "none",
  color: "#fff",
  padding: "0.75rem 1.5rem",
  borderRadius: "8px",
  fontSize: "1rem",
  cursor: "pointer",
};

const noBtnStyle = {
  background: "#d32f2f",
  border: "none",
  color: "#fff",
  padding: "0.75rem 1.5rem",
  borderRadius: "8px",
  fontSize: "1rem",
  cursor: "pointer",
};
