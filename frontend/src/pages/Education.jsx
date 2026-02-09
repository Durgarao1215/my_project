import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ResumeContext } from "../context/ResumeContext";
import "../styles/Form.css";


function Education() {
  const { resume, setResume } = useContext(ResumeContext);
  const navigate = useNavigate();

  const education = resume.education[0];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const updatedEducation = {
      ...education,
      [name]: type === "checkbox" ? checked : value
    };

    setResume({
      ...resume,
      education: [updatedEducation]
    });
  };

  return (
    <div className="container">
      <h2>Education Details</h2>

      {/* 1. Degree */}
      <input
        name="degree"
        placeholder="Degree / Qualification"
        value={education.degree}
        onChange={handleChange}
      />

      {/* 2. Field of Study */}
      <input
        name="field"
        placeholder="Field of Study / Specialization"
        value={education.field}
        onChange={handleChange}
      />

      {/* 3. Institution */}
      <input
        name="institution"
        placeholder="Institution / University Name"
        value={education.institution}
        onChange={handleChange}
      />

      {/* 4. Location */}
      <input
        name="location"
        placeholder="Institution Location (City, State, Country)"
        value={education.location}
        onChange={handleChange}
      />

      {/* 5. Board */}
      <input
        name="board"
        placeholder="Board / Affiliation"
        value={education.board}
        onChange={handleChange}
      />

      {/* 6. Course Type */}
      <select name="courseType" value={education.courseType} onChange={handleChange}>
        <option value="">Course Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Distance">Distance</option>
        <option value="Online">Online</option>
      </select>

      {/* 7 & 8. Dates */}
      <div className="grid-3">
        <input
          type="month"
          name="startDate"
          value={education.startDate}
          onChange={handleChange}
        />

        <input
          type="month"
          name="endDate"
          value={education.endDate}
          onChange={handleChange}
          disabled={education.currentlyStudying}
        />

        <label>
          <input
            type="checkbox"
            name="currentlyStudying"
            checked={education.currentlyStudying}
            onChange={handleChange}
          />{" "}
          Currently Studying
        </label>
      </div>

      {/* 9. Score Type */}
      <select name="scoreType" value={education.scoreType} onChange={handleChange}>
        <option value="">Score Type</option>
        <option value="CGPA">CGPA</option>
        <option value="GPA">GPA</option>
        <option value="Percentage">Percentage</option>
      </select>

      {/* 10 & 11. Score */}
      <div className="grid-3">
        <input
          name="scoreValue"
          placeholder="Score Value"
          value={education.scoreValue}
          onChange={handleChange}
        />

        <input
          name="scoreScale"
          placeholder="Score Scale (e.g., 10 / 4)"
          value={education.scoreScale}
          onChange={handleChange}
        />
      </div>

      {/* 12. Coursework */}
      <textarea
        name="coursework"
        placeholder="Key Coursework (comma separated)"
        value={education.coursework}
        onChange={handleChange}
      />

      {/* 13. Projects */}
      <textarea
        name="projects"
        placeholder="Academic Projects"
        value={education.projects}
        onChange={handleChange}
      />

      {/* 14. Honors */}
      <textarea
        name="honors"
        placeholder="Honors / Awards"
        value={education.honors}
        onChange={handleChange}
      />

      {/* 15. Notes */}
      <textarea
        name="notes"
        placeholder="Additional Notes (Thesis, Research, Exchange, etc.)"
        value={education.notes}
        onChange={handleChange}
      />

      <button onClick={() => navigate("/builder/experience")}>
        Next
      </button>
    </div>
  );
}

export default Education;
