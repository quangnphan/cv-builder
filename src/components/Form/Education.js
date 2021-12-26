import React from "react";
import EducationItemForm from "./EducationItemForm";

const Education = ({ education, onChange, addEducation, deleteEducation }) => {
  const educationItems = education.map((eduItem) => (
    <EducationItemForm
      key={eduItem.id}
      id={eduItem.id}
      eduItem={eduItem}
      onChange={onChange}
      deleteEducation={deleteEducation}
    />
  ));

  return (
    <div>
      <div>{educationItems}</div>
      <button onClick={addEducation} className="addBtn">
        Add More Education
      </button>
    </div>
  );
};

export default Education;
