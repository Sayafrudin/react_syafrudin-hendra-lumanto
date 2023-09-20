const Button = ({ label, style, onClick, children }) => {
  return (
    <button type="submit" className="btn" style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
