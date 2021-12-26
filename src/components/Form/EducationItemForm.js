const EducationItemForm = ({ id, eduItem, onChange, deleteEducation }) => {
  return (
    <div className="form-wrapper">
      <h4>Education</h4>
      <input
        type="text"
        name="universityName"
        placeholder="university"
        onChange={(e) => onChange(e, id)}
        value={eduItem.universityName}
      />
      <input
        type="text"
        name="city"
        placeholder="city"
        onChange={(e) => onChange(e, id)}
        value={eduItem.city}
      />
      <input
        type="text"
        name="degree"
        placeholder="degree"
        onChange={(e) => onChange(e, id)}
        value={eduItem.degree}
      />
      <input
        type="text"
        name="subject"
        placeholder="subject"
        onChange={(e) => onChange(e, id)}
        value={eduItem.subject}
      />
      <input
        type="text"
        name="from"
        placeholder="from"
        onChange={(e) => onChange(e, id)}
        value={eduItem.from}
      />
      <input
        type="text"
        name="to"
        placeholder="to"
        onChange={(e) => onChange(e, id)}
        value={eduItem.to}
      />
      <button onClick={() => deleteEducation(id)} className="delBtn">
        Delete
      </button>
    </div>
  );
};

export default EducationItemForm;
