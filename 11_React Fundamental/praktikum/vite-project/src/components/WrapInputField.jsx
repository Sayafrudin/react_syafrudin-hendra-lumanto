const WrapInputField = ({ label, type, span }) => {
  return (
    <div className="col-12 mb-4">
      <div className="input-group">
        <label className="form-label">{label}</label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">
            {span}
          </span>
          <input className="form-control" type={type} required />
          <div className="valid-feedback">Good</div>
          <div className="invalid-feedback">Tidak boleh kosong</div>
        </div>
      </div>
    </div>
  );
};

export default WrapInputField;
