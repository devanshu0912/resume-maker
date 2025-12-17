import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../shared/components/Button";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Build an ATS-Friendly Resume That Gets Interviews
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Create professional resumes in minutes.  
          Designed to pass Applicant Tracking Systems and impress recruiters.
        </p>

        <div className="mt-8">
          <Button
            className="text-lg px-8 py-3"
            onClick={() => navigate("/resume")}
          >
            Build My Resume
          </Button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-lg">1. Enter Details</h3>
              <p className="text-gray-600 mt-2">
                Fill in your education, skills, and projects.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">2. Live Preview</h3>
              <p className="text-gray-600 mt-2">
                See your resume update instantly as you type.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">3. Export PDF</h3>
              <p className="text-gray-600 mt-2">
                Download a clean, ATS-optimized PDF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ATS */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">
            Built for ATS Compatibility
          </h2>

          <p className="mt-4 text-gray-600">
            Our resumes follow industry-approved formatting rules so your
            application doesn’t get rejected by automated systems.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h2 className="text-2xl font-semibold">
          Start Building Your Resume Today
        </h2>

        <div className="mt-6">
          <Button
            variant="outline"
            className="bg-white text-blue-600"
            onClick={() => navigate("/resume")}
          >
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  );
}
