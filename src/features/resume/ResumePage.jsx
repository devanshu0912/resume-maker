// import React from "react";
// import { ResumeProvider } from "./context/ResumeContext";
// import ResumeForm from "./ResumeForm";
// import ResumePreview from "./ResumePreview";

// export default function ResumePage() {
//   return (
//     <ResumeProvider>
//       <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//         <ResumeForm />
//         <ResumePreview />
//       </div>
//     </ResumeProvider>
//   );
// }
import React from "react";
import { ResumeProvider } from "./context/ResumeContext";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";

export default function ResumePage() {
  return (
    <ResumeProvider>
      <div className="h-[calc(100vh-4rem)] max-w-7xl mx-auto">
        <div className="h-full grid grid-cols-1 md:grid-cols-2">

          {/* LEFT: FORM (SCROLLABLE) */}
          <div className="overflow-y-auto px-6 py-4">
            <ResumeForm />
          </div>

          {/* RIGHT: PREVIEW (ALWAYS VISIBLE) */}
          <div className="border-l bg-gray-50 h-full">
            <div className="h-full overflow-y-auto px-4 py-4">
              <ResumePreview />
            </div>
          </div>

        </div>
      </div>
    </ResumeProvider>
  );
}
