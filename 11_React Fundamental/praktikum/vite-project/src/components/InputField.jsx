const InputField = ({ label, type }) => {
  return (
    <div className="w-auto mb-3">
      <label className="form-label">{label}</label>
      <input className="form-control" type={type} required />
      <div className="valid-feedback">Good</div>
      <div className="invalid-feedback">Tidak boleh kosong</div>
    </div>
  );
};

export default InputField;
