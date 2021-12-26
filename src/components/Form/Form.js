import React from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

const Form = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onChangeEducation,
  addExperience,
  deleteExperience,
  addEducation,
  deleteEducation,
}) => {
  return (
    <div className="form wrapper">
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
      <Experience
        experience={cv.experience}
        onChange={onChangeExperience}
        addExperience={addExperience}
        deleteExperience={deleteExperience}
      />
      <Education
        education={cv.education}
        onChange={onChangeEducation}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
      />
    </div>
  );
};

export default Form;
