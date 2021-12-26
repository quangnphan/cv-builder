const EducationItem = ({ eduItem }) => {
  return (
    <div className="flex">
      <div className="timeline">
        {eduItem.from} - {eduItem.to}
      </div>
      <div className="edu-info">
        <div>
          <h4>
            {eduItem.universityName}, {eduItem.city}
          </h4>
        </div>
        <div>
          <p>Degree: {eduItem.degree}</p>
          <p>Subject: {eduItem.subject}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
