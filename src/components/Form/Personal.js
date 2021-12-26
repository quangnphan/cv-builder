import React from "react";

const Personal = ({ personalInfo, onChange }) => {
  return (
    <div className="form-wrapper">
      <h4>Personal Information</h4>
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="firstName"
        placeholder="first name"
        value={personalInfo.firstName}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="lastName"
        placeholder="last name"
        value={personalInfo.lastName}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="title"
        placeholder="title"
        value={personalInfo.title}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="address"
        placeholder="address"
        value={personalInfo.address}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="phoneNumber"
        placeholder="phone number"
        value={personalInfo.phoneNumber}
      />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        name="email"
        placeholder="email"
        value={personalInfo.email}
      />
      <textarea
        onChange={(e) => onChange(e)}
        type="text"
        name="description"
        placeholder="description"
        value={personalInfo.description}
      />
    </div>
  );
};

export default Personal;
