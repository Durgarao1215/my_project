import { NavLink, Outlet } from "react-router-dom";
import "../styles/BuilderLayout.css";

function BuilderLayout() {
  return (
    <div className="builder-layout">
      {/* ===== SIDEBAR ===== */}
      <aside className="sidebar">
        <h2 className="logo">ResumeBuilder</h2>

        <nav>
          <NavLink to="/builder/personal">Personal</NavLink>
          <NavLink to="/builder/education">Education</NavLink>
          <NavLink to="/builder/experience">Experience</NavLink>
          <NavLink to="/builder/preview">Preview</NavLink>
        </nav>
      </aside>

      {/* ===== RIGHT CONTENT ===== */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default BuilderLayout;
