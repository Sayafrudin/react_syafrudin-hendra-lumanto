const Button = ({ label, style }) => {
  return (
    <button type="submit" className="btn" style={style}>
      {label}
    </button>
  );
};

export default Button;
