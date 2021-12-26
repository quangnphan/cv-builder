const PaperHeader = ({ personalInfo }) => {
  const { firstName, lastName, title, address, phoneNumber, email } = personalInfo;
  return (
    <div className="paper-header">
      <div className="profile">
        <h1>
          {firstName} {lastName}
        </h1>
        <p>{title}</p>
      </div>
      <div className="contact">
        <p>{address}</p>
        <p>{phoneNumber}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default PaperHeader;
