import React from "react";

export default function Button({ children, style }) {
  return (
    <button
      style={{
        ...style,
        background: "transparent",
        border: "1px solid",
        borderRadius: 14,
        color: "white",
        borderColor: "white",
        display: "flex",
        padding: "15px 30px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </button>
  );
}
