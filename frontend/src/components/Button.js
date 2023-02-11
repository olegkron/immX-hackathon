import React from "react";
import colors from "../constants/colors";

export default function Button({ children, style, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: colors.background,
        border: "2px solid",
        borderRadius: 14,
        color: "white",
        borderColor: "white",
        display: "flex",
        padding: "15px 30px",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
