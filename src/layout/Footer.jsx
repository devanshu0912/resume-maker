import React from "react";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 py-3 text-sm text-gray-500">
        © {new Date().getFullYear()} Resume · Built for ATS-friendly resumes
      </div>
    </footer>
  );
}
