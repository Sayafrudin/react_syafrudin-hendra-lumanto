const Button = ({ label, style, onClick, type }) => {
  return (
    <button type={type} className="btn" style={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
