import React from "react";
import PaperHeader from "./PaperHeader";
import PaperContent from "./PaperContent"

const Paper = ({cv}) => {
  return (
      <div className="paper wrapper">
        <PaperHeader 
            personalInfo={cv.personalInfo}
        />
        <PaperContent 
            personalInfo={cv.personalInfo}
            experience={cv.experience}
            education={cv.education}
        />
      </div>
  );
};

export default Paper;
