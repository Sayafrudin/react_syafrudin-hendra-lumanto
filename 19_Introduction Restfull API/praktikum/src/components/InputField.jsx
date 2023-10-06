const InputField = ({ label, type, name, onChange, value, maxLength, id }) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        className="form-control"
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        id={id}
      />
    </div>
  );
};

export default InputField;
