import React from "react";

const Button = ({
  children,
  style,
  onClick,
  type,
  toggle,
  target,
  className,
}) => {
  return (
    <button
      type={type}
      className="btn"
      style={style}
      onClick={onClick}
      data-bs-toggle={toggle}
      data-bs-target={target}
    >
      {children}
    </button>
  );
};

export default Button;
