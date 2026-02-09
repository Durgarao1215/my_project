import { createContext, useState } from "react";

export const ResumeContext = createContext();

const initialResumeState = {
  personal: {
    fullName: {
      first: "",
      middle: "",
      last: ""
    },
    headline: "",
    summary: "",

    contact: {
      email: "",
      phone: "",
      location: {
        city: "",
        state: "",
        country: "",
        zip: ""
      }
    },

    links: {
      linkedin: "",
      github: ""
    },

    languages: [],
    workAuthorization: "",
    availability: "",
    salaryExpectation: "",
    visibilityControls: {},

    // ✅ HEADSHOT SUPPORT
    headshotEnabled: false,
    photo: null
  },

  education: [
    {
      degree: "",
      field: "",
      institution: "",
      location: "",
      board: "",
      courseType: "",
      startDate: "",
      endDate: "",
      currentlyStudying: false,
      scoreType: "",
      scoreValue: "",
      scoreScale: "",
      coursework: "",
      projects: "",
      honors: "",
      notes: ""
    }
  ],

  experience: [
    {
      jobTitle: "",
      company: "",
      location: "",
      employmentType: "",
      workMode: "",
      industry: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      duration: "",
      responsibilities: "",
      achievements: "",
      tools: "",
      skills: "",
      projects: "",
      reporting: "",
      reasonForLeaving: ""
    }
  ]
};

export const ResumeProvider = ({ children }) => {
  const [resume, setResume] = useState(initialResumeState);

  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
};
