import React from "react";
import colors from "../constants/colors";

export default function AppTextInput({ value, onChange, placeholder = "Placeholder", style, ...otherProps }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        borderRadius: "8px",
        placeholderColor: "white",
        border: "1px solid ",
        borderColor: colors.lighterGrey,
        padding: "10px 15px",
        fontSize: "16px",
        backgroundColor: "transparent",
        caretColor: "white",
        WebkitAppearance: "none",
        fontFamily: "JetBrains Mono",
        color: "white",
        outline: "none",
        ...style,
      }}
      {...otherProps}
    />
  );
}
