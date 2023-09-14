const SelectInput = ({ label, value1, value2, value3 }) => {
  return (
    <div className="w-auto mb-4">
      <label className="form-label">{label}</label>
      <select
        className="form-select"
        aria-label="Default select example"
        required=""
      >
        <option value={1}>{value1}</option>
        <option value={2}>{value2}</option>
        <option value={3}>{value3}</option>
      </select>
    </div>
  );
};

export default SelectInput;
