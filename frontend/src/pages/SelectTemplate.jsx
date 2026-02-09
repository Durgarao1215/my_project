import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import templates from "../data/templates";
import { ResumeContext } from "../context/ResumeContext";
import "../styles/SelectTemplateNew.css";

function SelectTemplate() {
  const navigate = useNavigate();
  const { resume, setResume } = useContext(ResumeContext);

  const [selected, setSelected] = useState(
    localStorage.getItem("selectedTemplate")
  );

  const enableHeadshot = (value) => {
    setResume({
      ...resume,
      personal: {
        ...resume.personal,
        headshotEnabled: value === "yes"
      }
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setResume({
        ...resume,
        personal: {
          ...resume.personal,
          photo: reader.result
        }
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="select-layout">
      {/* ========== LEFT PANEL ========== */}
      <aside className="side-panel">
        <h2>Resume Options</h2>

        <label className="field-label">Include headshot?</label>
        <select
          value={resume.personal.headshotEnabled ? "yes" : "no"}
          onChange={(e) => enableHeadshot(e.target.value)}
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>

        {resume.personal.headshotEnabled && (
          <div className="photo-box">
            {resume.personal.photo ? (
              <img
                src={resume.personal.photo}
                alt="Preview"
                className="photo-preview"
              />
            ) : (
              <div className="photo-placeholder">Upload Photo</div>
            )}

            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </div>
        )}
      </aside>

      {/* ========== MAIN CONTENT ========== */}
      <main className="template-area">
        <h1>Choose a Resume Template</h1>
        <p className="subtitle">
          Pick a design — you can customize everything later
        </p>

        <div className="template-grid">
          {templates.map((t) => (
            <div
              key={t.id}
              className={`template-card ${
                selected === t.id ? "active" : ""
              }`}
              onClick={() => {
                setSelected(t.id);
                localStorage.setItem("selectedTemplate", t.id);
              }}
            >
              <img src={t.image} alt={t.name} />

              {selected === t.id && (
                <div className="selected-badge">✓ Selected</div>
              )}
            </div>
          ))}
        </div>

        <div className="cta-bar">
          <button
            disabled={!selected}
            onClick={() => navigate("/builder/personal")}
          >
            Continue →
          </button>
        </div>
      </main>
    </div>
  );
}

export default SelectTemplate;
