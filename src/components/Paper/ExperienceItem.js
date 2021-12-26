const ExperienceItem = ({ expItem }) => {
  return (
    <div className="flex">
      <div className="timeline">
        {expItem.from} - {expItem.to}
      </div>
      <div className="exp-info">
        <h4>{expItem.position}</h4>
        <div>
          {expItem.company},<span> {expItem.city}</span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
