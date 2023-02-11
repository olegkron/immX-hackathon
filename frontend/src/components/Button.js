import React from "react";

export default function Button({ children, style, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        ...style,
        background: "transparent",
        border: "2px solid",
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
