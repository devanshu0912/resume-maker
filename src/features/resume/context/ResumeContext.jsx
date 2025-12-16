import React, { createContext, useContext, useState } from "react";
import { initialResume } from "../resume.schema";

const ResumeContext = createContext(null);

export function ResumeProvider({ children }) {
  const [resume, setResume] = useState(initialResume);

  const updatePersonal = (field, value) => {
    setResume(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  };

  return (
    <ResumeContext.Provider value={{ resume, updatePersonal }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResume must be used inside ResumeProvider");
  }
  return context;
}
