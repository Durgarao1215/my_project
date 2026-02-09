import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import BuilderLayout from "./layouts/BuilderLayout";

import SelectTemplate from "./pages/SelectTemplate";
import Personal from "./pages/Personal";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Preview from "./pages/Preview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/select-template" />} />

        {/* Template selection (no sidebar) */}
        <Route path="/select-template" element={<SelectTemplate />} />

        {/* ===== BUILDER WITH SIDEBAR ===== */}
        <Route path="/builder" element={<BuilderLayout />}>
          <Route path="personal" element={<Personal />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
          <Route path="preview" element={<Preview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
