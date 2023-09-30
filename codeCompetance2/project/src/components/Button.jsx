import React from "react";

export default function Button({ type, style, children, id, onClick }) {
  return (
    <button type={type} style={style} id={id} onClick={onClick} className="btn">
      {children}
    </button>
  );
}
