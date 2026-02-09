function ModernTemplate({ resume }) {
  return (
    <div style={{ fontFamily: "Arial", padding: "30px" }}>
      <h1 style={{ color: "#2c3e50" }}>{resume.personal.name}</h1>
      <p>
        {resume.personal.email} | {resume.personal.phone}
      </p>

      <h3 style={{ marginTop: "20px" }}>Education</h3>
      {resume.education.map((edu, i) => (
        <div key={i}>
          <strong>{edu.degree}</strong> – {edu.institution} ({edu.year})
        </div>
      ))}

      <h3 style={{ marginTop: "20px" }}>Experience</h3>
      {resume.experience.map((exp, i) => (
        <div key={i}>
          <strong>{exp.role}</strong> – {exp.company} ({exp.duration})
        </div>
      ))}
    </div>
  );
}

export default ModernTemplate;
