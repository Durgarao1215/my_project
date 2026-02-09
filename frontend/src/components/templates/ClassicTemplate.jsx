function ClassicTemplate({ resume }) {
  return (
    <div style={{ fontFamily: "Times New Roman", padding: "30px" }}>
      <center>
        <h1>{resume.personal.name}</h1>
        <p>{resume.personal.email} | {resume.personal.phone}</p>
      </center>

      <hr />

      <h3>Education</h3>
      <ul>
        {resume.education.map((edu, i) => (
          <li key={i}>
            {edu.degree}, {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>

      <h3>Experience</h3>
      <ul>
        {resume.experience.map((exp, i) => (
          <li key={i}>
            {exp.role} – {exp.company} ({exp.duration})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClassicTemplate;
