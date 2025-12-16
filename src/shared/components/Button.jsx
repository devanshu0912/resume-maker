import React from "react";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
};

export default function Button({
  children,
  variant = "primary",
  type = "button",   // ✅ IMPORTANT
  className = "",
  ...props
}) {
  return (
    <button
      type={type}     // ✅ IMPORTANT
      className={`px-4 py-2 rounded-md font-medium transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
