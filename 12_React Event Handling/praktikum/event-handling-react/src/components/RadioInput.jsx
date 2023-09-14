const RadioInput = ({ label, value1, value2, value3 }) => {
  return (
    <div className="col-6 mb-3">
      <label className="mb-2">{label}</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="prodcut-freshness"
        />
        <label className="form-check-label">{value1}</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="prodcut-freshness"
        />
        <label className="form-check-label">{value2}</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="prodcut-freshness"
        />
        <label className="form-check-label">{value3}</label>
      </div>
    </div>
  );
};

export default RadioInput;
