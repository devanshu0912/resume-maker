import React, { useState } from "react";
import Card from "../../shared/components/Card";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import { useResume } from "./context/ResumeContext";

export default function ResumeForm() {
  const {
    resume,
    updatePersonal,
    addSkill,
    removeSkill,
    addEducation,
    updateEducation,
    removeEducation,
  } = useResume();

  const { personal, skills, education } = resume;
  const [skillInput, setSkillInput] = useState("");

  return (
    <Card>
      {/* ================= PERSONAL INFO ================= */}
      <h2 className="text-lg font-semibold mb-4">
        Personal Information
      </h2>

      <div className="space-y-4">
        <Input
          label="Full Name"
          value={personal.fullName}
          onChange={(e) =>
            updatePersonal("fullName", e.target.value)
          }
        />

        <Input
          label="Email"
          value={personal.email}
          onChange={(e) =>
            updatePersonal("email", e.target.value)
          }
        />

        <Input
          label="Phone"
          value={personal.phone}
          onChange={(e) =>
            updatePersonal("phone", e.target.value)
          }
        />
      </div>

      {/* ================= SKILLS ================= */}
      <h2 className="text-lg font-semibold mt-6 mb-2">
        Skills
      </h2>

      <div className="flex gap-2 mb-3">
        <Input
          placeholder="e.g. React"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
        />
        <Button
          onClick={() => {
            addSkill(skillInput);
            setSkillInput("");
          }}
        >
          Add
        </Button>
      </div>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-full text-sm"
          >
            {skill}
            <button
              onClick={() => removeSkill(index)}
              className="text-red-500 font-bold"
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      {/* ================= EDUCATION ================= */}
      <h2 className="text-lg font-semibold mt-6 mb-3">
        Education
      </h2>

      {education.map((edu, index) => (
        <div
          key={index}
          className="border rounded-md p-4 mb-4 space-y-3"
        >
          <Input
            label="Degree"
            value={edu.degree}
            onChange={(e) =>
              updateEducation(index, "degree", e.target.value)
            }
          />

          <Input
            label="Institute"
            value={edu.institute}
            onChange={(e) =>
              updateEducation(index, "institute", e.target.value)
            }
          />

          <Input
            label="Year"
            value={edu.year}
            onChange={(e) =>
              updateEducation(index, "year", e.target.value)
            }
          />

          {education.length > 1 && (
            <Button
              variant="outline"
              onClick={() => removeEducation(index)}
            >
              Remove
            </Button>
          )}
        </div>
      ))}

      <Button onClick={addEducation}>
        Add Education
      </Button>
    </Card>
  );
}
