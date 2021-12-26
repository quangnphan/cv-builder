const ExperienceItemForm = ({ id, expItem, onChange,deleteExperience }) => {
  return (
    <div className="form-wrapper">
      <h4>Experience</h4>
      <input
        type="text"
        name="position"
        placeholder="position"
        onChange={(e) => onChange(e, id)}
        value={expItem.position}
      />
      <input
        type="text"
        name="company"
        placeholder="company"
        onChange={(e) => onChange(e, id)}
        value={expItem.company}
      />
      <input
        type="text"
        name="city"
        placeholder="city"
        onChange={(e) => onChange(e, id)}
        value={expItem.city}
      />
      <input
        type="text"
        name="from"
        placeholder="from"
        onChange={(e) => onChange(e, id)}
        value={expItem.from}
      />
      <input
        type="text"
        name="to"
        placeholder="to"
        onChange={(e) => onChange(e, id)}
        value={expItem.to}
      />
      <button onClick={()=>deleteExperience(id)} className="delBtn">Delete</button>
    </div>
  );
};

export default ExperienceItemForm;
