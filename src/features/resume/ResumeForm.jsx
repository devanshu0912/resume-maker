import React from "react";
import Card from "../../shared/components/Card";
import Input from "../../shared/components/Input";
import { useResume } from "./context/ResumeContext";

export default function ResumeForm() {
  const { resume, updatePersonal } = useResume();
  const { personal } = resume;

  return (
    <Card>
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
    </Card>
  );
}
