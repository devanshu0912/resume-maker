import React from "react";

import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";

export default function ResumePage() {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <ResumeForm />
      <ResumePreview />
    </div>
  );
}
