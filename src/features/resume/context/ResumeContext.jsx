import React, { createContext, useContext, useState } from "react";
import { initialResume } from "../resume.schema.js";

const ResumeContext = createContext(null);

export function ResumeProvider({ children }) {
  const [resume, setResume] = useState(initialResume);

  // -------- PERSONAL --------
  const updatePersonal = (field, value) => {
    setResume((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  };

  // -------- SKILLS --------
  const addSkill = (skill) => {
    if (!skill.trim()) return;

    setResume((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));
  };

  const removeSkill = (index) => {
    setResume((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  // -------- EDUCATION --------
  const addEducation = () => {
    setResume((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { degree: "", institute: "", year: "" },
      ],
    }));
  };

  const updateEducation = (index, field, value) => {
    setResume((prev) => {
      const updated = [...prev.education];
      updated[index] = {
        ...updated[index],
        [field]: value,
      };
      return { ...prev, education: updated };
    });
  };

  const removeEducation = (index) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  return (
    <ResumeContext.Provider
      value={{
        resume,
        updatePersonal,
        addSkill,       // ✅ THIS WAS MISSING
        removeSkill,    // ✅ THIS WAS MISSING
        addEducation,
        updateEducation,
        removeEducation,
      }}
    >
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
