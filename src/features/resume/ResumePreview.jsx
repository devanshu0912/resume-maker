import React from "react";
import Card from "../../shared/components/Card";
import { useResume } from "./context/ResumeContext";

export default function ResumePreview() {
  const { resume } = useResume();
  const { personal } = resume;

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">
        Live Preview
      </h2>

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
    </Card>
  );
}
