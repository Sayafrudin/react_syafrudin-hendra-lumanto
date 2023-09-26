const WrapInputField = ({ label, type, span, value, name, onChange }) => {
  return (
    <div className="col-12">
      <div className="input-group">
        <label className="form-label">{label}</label>
        <div className="input-group">
          <span className="input-group-text">{span}</span>
          <input
            className="form-control"
            type={type}
            value={value}
            name={name}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default WrapInputField;
