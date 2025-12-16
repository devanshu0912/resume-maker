import React from "react";
import Card from "../../shared/components/Card";
import { useResume } from "./context/ResumeContext";

export default function ResumePreview() {
  const { resume } = useResume();
  const { personal, skills, education } = resume;

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">
        Live Preview
      </h2>

      {/* ===== PERSONAL INFO ===== */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-gray-900">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="text-sm text-gray-600">
          {personal.email || "email@example.com"}
        </p>

        <p className="text-sm text-gray-600">
          {personal.phone || "+91 XXXXXXXXXX"}
        </p>
      </div>

      {/* ===== SKILLS ===== */}
      {skills.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Skills</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="border px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ===== EDUCATION ===== */}
      {education.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Education</h3>

          <div className="space-y-2">
            {education.map((edu, index) => (
              <div key={index}>
                <p className="font-medium">
                  {edu.degree || "Degree"}
                </p>
                <p className="text-sm text-gray-600">
                  {edu.institute}
                  {edu.year && ` • ${edu.year}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
