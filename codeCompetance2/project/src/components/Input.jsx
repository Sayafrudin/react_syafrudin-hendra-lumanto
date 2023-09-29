import React from "react";

export default function Input({
  type,
  placeholder,
  children,
  id,
  name,
  value,
  onChange,
}) {
  return (
    <>
      <label className="form-label">{children}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
