import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ResumeContext } from "../context/ResumeContext";
import "../styles/Form.css";

function Experience() {
  const { resume, setResume } = useContext(ResumeContext);
  const navigate = useNavigate();

  const experience = resume.experience[0];

  // Auto-calculate duration
  useEffect(() => {
    if (experience.startDate && (experience.endDate || experience.currentlyWorking)) {
      const start = new Date(experience.startDate);
      const end = experience.currentlyWorking
        ? new Date()
        : new Date(experience.endDate);

      const months =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());

      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;

      const duration = `${years} yr ${remainingMonths} mo`;
      updateField("duration", duration);
    }
  }, [experience.startDate, experience.endDate, experience.currentlyWorking]);

  const updateField = (name, value) => {
    setResume({
      ...resume,
      experience: [
        {
          ...experience,
          [name]: value
        }
      ]
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateField(name, type === "checkbox" ? checked : value);
  };

  return (
    <div className="container">
      <h2>Experience Details</h2>

      {/* 1. Job Title */}
      <input
        name="jobTitle"
        placeholder="Job Title / Role"
        value={experience.jobTitle}
        onChange={handleChange}
      />

      {/* 2. Employment Type */}
      <select
        name="employmentType"
        value={experience.employmentType}
        onChange={handleChange}
      >
        <option value="">Employment Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Internship">Internship</option>
        <option value="Contract">Contract / Freelance</option>
      </select>

      {/* 3. Company */}
      <input
        name="company"
        placeholder="Company / Organization Name"
        value={experience.company}
        onChange={handleChange}
      />

      {/* 4. Location */}
      <input
        name="location"
        placeholder="Company Location (City, State, Country)"
        value={experience.location}
        onChange={handleChange}
      />

      {/* Work Mode */}
      <select name="workMode" value={experience.workMode} onChange={handleChange}>
        <option value="">Work Mode</option>
        <option value="Onsite">Onsite</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      {/* 5. Industry */}
      <input
        name="industry"
        placeholder="Industry / Domain"
        value={experience.industry}
        onChange={handleChange}
      />

      {/* 6 & 7. Dates */}
      <div className="grid-3">
        <input
          type="month"
          name="startDate"
          value={experience.startDate}
          onChange={handleChange}
        />

        <input
          type="month"
          name="endDate"
          value={experience.endDate}
          onChange={handleChange}
          disabled={experience.currentlyWorking}
        />

        <label>
          <input
            type="checkbox"
            name="currentlyWorking"
            checked={experience.currentlyWorking}
            onChange={handleChange}
          />{" "}
          Currently Working
        </label>
      </div>

      {/* 8. Duration (Auto) */}
      <input
        name="duration"
        placeholder="Total Duration"
        value={experience.duration}
        disabled
      />

      {/* 9. Responsibilities */}
      <textarea
        name="responsibilities"
        placeholder="Job Description / Responsibilities"
        value={experience.responsibilities}
        onChange={handleChange}
      />

      {/* 10. Achievements */}
      <textarea
        name="achievements"
        placeholder="Key Achievements (metrics, impact)"
        value={experience.achievements}
        onChange={handleChange}
      />

      {/* 11. Tools */}
      <input
        name="tools"
        placeholder="Tools & Technologies Used"
        value={experience.tools}
        onChange={handleChange}
      />

      {/* 12. Skills */}
      <input
        name="skills"
        placeholder="Skills Gained"
        value={experience.skills}
        onChange={handleChange}
      />

      {/* 13. Projects */}
      <textarea
        name="projects"
        placeholder="Projects / Work Samples"
        value={experience.projects}
        onChange={handleChange}
      />

      {/* 14. Reporting */}
      <input
        name="reporting"
        placeholder="Reporting Manager / Team Size (Optional)"
        value={experience.reporting}
        onChange={handleChange}
      />

      {/* 15. Reason for Leaving */}
      <textarea
        name="reasonForLeaving"
        placeholder="Reason for Leaving (Optional)"
        value={experience.reasonForLeaving}
        onChange={handleChange}
      />

      <button onClick={() => navigate("/preview")}>
        Preview Resume
      </button>
    </div>
  );
}

export default Experience;
