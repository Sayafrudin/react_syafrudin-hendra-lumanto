const TextArea = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <textarea
        className="form-control"
        rows={3}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
