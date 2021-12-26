import React from "react";
import ExperienceItemForm from "./ExperienceItemForm";

const Experience = ({ experience, onChange,addExperience,deleteExperience }) => {
  const experienceItems = experience.map((expItem) => (
    <ExperienceItemForm
      key={expItem.id}
      id={expItem.id}
      expItem={expItem}
      onChange={onChange}
      deleteExperience={deleteExperience}
    />
  ));

  return (
    <div>
      <div>{experienceItems}</div>
      <button onClick={addExperience} className="addBtn">Add More Experience</button>
    </div>
  );
};

export default Experience;
