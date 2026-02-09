import { useContext } from "react";
import "../styles/Form.css";

import { ResumeContext } from "../context/ResumeContext";
import { useNavigate } from "react-router-dom";

function Personal() {
  const { resume, setResume } = useContext(ResumeContext);
  const navigate = useNavigate();
  const personal = resume.personal;

  const updatePersonal = (path, value) => {
    const keys = path.split(".");
    const updated = { ...personal };
    let temp = updated;

    for (let i = 0; i < keys.length - 1; i++) {
      temp[keys[i]] = { ...temp[keys[i]] };
      temp = temp[keys[i]];
    }

    temp[keys[keys.length - 1]] = value;

    setResume({ ...resume, personal: updated });
  };

  return (
    <div className="container">
      <h2>Personal Details</h2>
      <p style={{ color: "#666", marginBottom: "20px" }}>
        Recruiters see this first. Keep it accurate and professional.
      </p>

      {/* FULL NAME */}
      <h3>Full Name</h3>
      <div className="flex">
        <input
          placeholder="First Name"
          value={personal.fullName.first}
          onChange={(e) =>
            updatePersonal("fullName.first", e.target.value)
          }
        />
        <input
          placeholder="Middle Name (optional)"
          value={personal.fullName.middle}
          onChange={(e) =>
            updatePersonal("fullName.middle", e.target.value)
          }
        />
        <input
          placeholder="Last Name"
          value={personal.fullName.last}
          onChange={(e) =>
            updatePersonal("fullName.last", e.target.value)
          }
        />
      </div>

      {/* HEADLINE */}
      <h3>Professional Headline</h3>
      <input
        placeholder="e.g. Full Stack Developer"
        value={personal.headline}
        onChange={(e) =>
          updatePersonal("headline", e.target.value)
        }
      />

      <input
        placeholder="Years of Experience (optional)"
        value={personal.experienceYears}
        onChange={(e) =>
          updatePersonal("experienceYears", e.target.value)
        }
      />

      {/* CONTACT */}
      <h3>Contact Information</h3>

      <div className="flex">
        <input
          placeholder="Email"
          value={personal.contact.email}
          onChange={(e) =>
            updatePersonal("contact.email", e.target.value)
          }
        />
        <input
          placeholder="Phone (with country code)"
          value={personal.contact.phone}
          onChange={(e) =>
            updatePersonal("contact.phone", e.target.value)
          }
        />
      </div>

      <div className="flex">
        <input
          placeholder="City"
          value={personal.contact.location.city}
          onChange={(e) =>
            updatePersonal("contact.location.city", e.target.value)
          }
        />
        <input
          placeholder="State"
          value={personal.contact.location.state}
          onChange={(e) =>
            updatePersonal("contact.location.state", e.target.value)
          }
        />
        <input
          placeholder="Country"
          value={personal.contact.location.country}
          onChange={(e) =>
            updatePersonal("contact.location.country", e.target.value)
          }
        />
      </div>

      {/* SUMMARY */}
      <h3>Profile Summary</h3>
      <textarea
        rows="4"
        placeholder="Brief professional summary (2–4 lines)"
        value={personal.summary}
        onChange={(e) =>
          updatePersonal("summary", e.target.value)
        }
        style={{ width: "100%", padding: "10px" }}
      />

      {/* LINKS */}
      <h3>Professional Links</h3>
      <input
        placeholder="LinkedIn URL"
        value={personal.links.linkedin}
        onChange={(e) =>
          updatePersonal("links.linkedin", e.target.value)
        }
      />
      <input
        placeholder="GitHub / Portfolio"
        value={personal.links.github}
        onChange={(e) =>
          updatePersonal("links.github", e.target.value)
        }
      />

      {/* WORK DETAILS */}
      <h3>Work Preferences</h3>

      <select
        value={personal.workAuthorization}
        onChange={(e) =>
          updatePersonal("workAuthorization", e.target.value)
        }
      >
        <option value="">Work Authorization</option>
        <option value="Citizen">Citizen / PR</option>
        <option value="Work Permit">Open Work Permit</option>
        <option value="Student Visa">Student Visa</option>
        <option value="H1B">H1B / OPT / CPT</option>
      </select>

      <select
        value={personal.availability}
        onChange={(e) =>
          updatePersonal("availability", e.target.value)
        }
      >
        <option value="">Availability</option>
        <option value="Immediate">Immediate Joiner</option>
        <option value="15 Days">15 Days</option>
        <option value="30 Days">30 Days</option>
      </select>

      <br /><br />

      <button onClick={() => navigate("/builder/education")}>
        Next: Education
      </button>
    </div>
  );
}

export default Personal;
