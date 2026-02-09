import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";

function ResumePreview() {
  const { resume } = useContext(ResumeContext);

  switch (resume.templateId) {
    case "classic_01":
      return <ClassicTemplate resume={resume} />;
    case "modern_01":
    default:
      return <ModernTemplate resume={resume} />;
  }
}

export default ResumePreview;
