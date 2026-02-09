import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ResumeContext } from "../context/ResumeContext";
import "../styles/Form.css";

function Preview() {
  const navigate = useNavigate();
  const { resume } = useContext(ResumeContext);

  // ✅ DEFINE VARIABLES FIRST (VERY IMPORTANT)
  const personal = resume.personal || {};
  const education = resume.education?.[0] || {};
  const experience = resume.experience?.[0] || {};

  const downloadPDF = async () => {
    const response = await fetch("http://localhost:5000/generate-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resume),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.pdf";
    a.click();
  };

  return (
    <div className="container">
      <h2 className="center">Resume Preview</h2>

      <div className="resume-card">
        {/* ===== HEADER ===== */}
        <div className="resume-header">
          {personal.headshotEnabled && personal.photo && (
            <img
              src={personal.photo}
              alt="Profile"
              className="profile-pic"
            />
          )}

          <div className="header-text">
            <h1 className="name">
              {personal.fullName?.first}{" "}
              {personal.fullName?.middle}{" "}
              {personal.fullName?.last}
            </h1>

            {personal.headline && (
              <p className="headline">{personal.headline}</p>
            )}

            <p className="contact">
              {personal.contact?.email} · {personal.contact?.phone}
            </p>

            <p className="location">
              {personal.contact?.location?.city},{" "}
              {personal.contact?.location?.state},{" "}
              {personal.contact?.location?.country}
            </p>
          </div>
        </div>

        {/* ===== LINKS ===== */}
        {(personal.links?.linkedin || personal.links?.github) && (
          <div className="links">
            {personal.links?.linkedin && (
              <span>LinkedIn: {personal.links.linkedin}</span>
            )}
            {personal.links?.github && (
              <span>Portfolio: {personal.links.github}</span>
            )}
          </div>
        )}

        {/* ===== SUMMARY ===== */}
        {personal.summary && (
          <section>
            <h3>Profile Summary</h3>
            <p>{personal.summary}</p>
          </section>
        )}

        {/* ===== EDUCATION ===== */}
        <section>
          <h3>Education</h3>
          <div className="item">
            <strong>{education.degree}</strong> — {education.field}
            <div className="muted">
              {education.institution}, {education.location}
            </div>
            <div className="muted">
              {education.startDate} –{" "}
              {education.currentlyStudying ? "Present" : education.endDate}
            </div>
          </div>
        </section>

        {/* ===== EXPERIENCE ===== */}
        <section>
          <h3>Experience</h3>
          <div className="item">
            <strong>{experience.jobTitle}</strong> — {experience.company}
            <div className="muted">
              {experience.employmentType} · {experience.workMode} ·{" "}
              {experience.location}
            </div>
            <div className="muted">
              {experience.startDate} –{" "}
              {experience.currentlyWorking ? "Present" : experience.endDate}
              {experience.duration && ` (${experience.duration})`}
            </div>

            {experience.responsibilities && (
              <p>
                <strong>Responsibilities:</strong>{" "}
                {experience.responsibilities}
              </p>
            )}

            {experience.achievements && (
              <p>
                <strong>Achievements:</strong>{" "}
                {experience.achievements}
              </p>
            )}
          </div>
        </section>
      </div>

      <br />

      <div className="flex">
        <button onClick={downloadPDF}>Download PDF</button>

        <button
          className="secondary-btn"
          onClick={() => navigate("/builder/experience")}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default Preview;
