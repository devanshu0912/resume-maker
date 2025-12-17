import React, { createContext, useContext, useState } from "react";
import { initialResume } from "../resume.schema.js";

const ResumeContext = createContext(null);

export function ResumeProvider({ children }) {
  const [resume, setResume] = useState(initialResume);

  /* ================= PERSONAL ================= */
  const updatePersonal = (field, value) => {
    setResume(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  };

  /* ================= SKILLS ================= */
  const addSkill = (skill) => {
    if (!skill || !skill.trim()) return;

    setResume(prev => ({
      ...prev,
      skills: [...(prev.skills || []), skill],
    }));
  };

  const removeSkill = (index) => {
    setResume(prev => ({
      ...prev,
      skills: (prev.skills || []).filter((_, i) => i !== index),
    }));
  };

  /* ================= EDUCATION ================= */
  const addEducation = () => {
    setResume(prev => ({
      ...prev,
      education: [
        ...(prev.education || []),
        { degree: "", institute: "", year: "" },
      ],
    }));
  };

  const updateEducation = (index, field, value) => {
    setResume(prev => {
      const updated = [...(prev.education || [])];
      if (!updated[index]) return prev;

      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, education: updated };
    });
  };

  const removeEducation = (index) => {
    setResume(prev => ({
      ...prev,
      education: (prev.education || []).filter((_, i) => i !== index),
    }));
  };

  /* ================= PROJECTS ================= */
  const addProject = () => {
    setResume(prev => ({
      ...prev,
      projects: [
        ...(prev.projects || []),
        {
          name: "",
          liveLink: "",
          codeLink: "",
          bullets: [""],
        },
      ],
    }));
  };

  const updateProject = (index, field, value) => {
    setResume(prev => {
      const updated = [...(prev.projects || [])];
      if (!updated[index]) return prev;

      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, projects: updated };
    });
  };

  const removeProject = (index) => {
    setResume(prev => ({
      ...prev,
      projects: (prev.projects || []).filter((_, i) => i !== index),
    }));
  };

  /* ========== PROJECT BULLETS (SAFE) ========== */
  const addProjectBullet = (projectIndex) => {
    setResume(prev => {
      const projects = [...(prev.projects || [])];
      if (!projects[projectIndex]) return prev;

      projects[projectIndex] = {
        ...projects[projectIndex],
        bullets: [...(projects[projectIndex].bullets || []), ""],
      };

      return { ...prev, projects };
    });
  };

  // const updateProjectBullet = (projectIndex, bulletIndex, value) => {
  //   setResume(prev => {
  //     const projects = [...(prev.projects || [])];
  //     const bullets = [...(projects[projectIndex].bullets || [])];
      
  //     if (bullets[bulletIndex] === undefined) return prev;


      
  //     if (!bullets[bulletIndex]) return prev;

  //     bullets[bulletIndex] = value;
  //     projects[projectIndex] = { ...projects[projectIndex], bullets };

  //     return { ...prev, projects };
  //   
  const updateProjectBullet = (projectIndex, bulletIndex, value) => {
  setResume(prev => {
    const projects = [...(prev.projects || [])];
    if (!projects[projectIndex]) return prev;

    const bullets = [...(projects[projectIndex].bullets || [])];
    if (bullets[bulletIndex] === undefined) return prev;

    bullets[bulletIndex] = value;

    projects[projectIndex] = {
      ...projects[projectIndex],
      bullets,
    };

    return { ...prev, projects };
  });
};


  const removeProjectBullet = (projectIndex, bulletIndex) => {
    setResume(prev => {
      const projects = [...(prev.projects || [])];
      if (!projects[projectIndex]) return prev;

      projects[projectIndex] = {
        ...projects[projectIndex],
        bullets: projects[projectIndex].bullets.filter(
          (_, i) => i !== bulletIndex
        ),
      };

      return { ...prev, projects };
    });
  };

  /* ================= PROVIDER ================= */
  return (
    <ResumeContext.Provider
      value={{
        resume,

        // personal
        updatePersonal,

        // skills
        addSkill,
        removeSkill,

        // education
        addEducation,
        updateEducation,
        removeEducation,

        // projects
        addProject,
        updateProject,
        removeProject,

        // project bullets
        addProjectBullet,
        updateProjectBullet,
        removeProjectBullet,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error(
      "useResume must be used inside <ResumeProvider>"
    );
  }
  return context;
}
