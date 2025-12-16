import React from "react";

import Card from "../../shared/components/Card";
import Input from "../../shared/components/Input";

export default function ResumeForm() {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Personal Information</h2>

      <div className="grid grid-cols-1 gap-4">
        <Input label="Full Name" placeholder="John Doe" />
        <Input label="Email" placeholder="john@example.com" />
        <Input label="Phone" placeholder="+91 9876543210" />
      </div>
    </Card>
  );
}
