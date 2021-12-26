import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";

const PaperContent = ({ personalInfo, experience, education }) => {
  const experienceItems = experience.map((expItem) => (
    <ExperienceItem key={expItem.id} expItem={expItem} />
  ));
  const educationItems = education.map((eduItem) => (
    <EducationItem key={eduItem.id} eduItem={eduItem} />
  ));
  return (
    <div className="paper-content">
      <div className="description">
        <h4 className="title">Description</h4>
        {personalInfo.description}
      </div>
      <div className="experience-wrapper">
        <h4 className="title">Experience</h4>
        {experienceItems}
      </div>
      <div className="education-wrapper">
        <h4 className="title">Education</h4>
        {educationItems}
      </div>
    </div>
  );
};

export default PaperContent;
