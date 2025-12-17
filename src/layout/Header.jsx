import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Resume", path: "/resume" },
  { label: "Cover Letter", disabled: true },
  { label: "ATS Checker", disabled: true },
  { label: "Suitability", disabled: true },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* LOGO → HOME */}
        <Link
          to="/"
          className="text-xl font-bold text-gray-900"
        >
          Resume
        </Link>

        {/* NAV */}
        <nav className="flex gap-6 text-sm font-medium">
          {navItems.map((item) => {
            if (item.disabled) {
              return (
                <span
                  key={item.label}
                  className="text-gray-400 cursor-not-allowed"
                >
                  {item.label}
                  <span className="ml-1 text-xs">(soon)</span>
                </span>
              );
            }

            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ACCOUNT */}
        <div className="text-sm text-gray-500 cursor-not-allowed">
          My Account
        </div>
      </div>
    </header>
  );
}
