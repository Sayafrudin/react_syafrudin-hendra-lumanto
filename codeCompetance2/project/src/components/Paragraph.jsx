import React from "react";

export default function Paragraph({ style, children, id }) {
  return (
    <p style={style} id={id}>
      {children}
    </p>
  );
}
