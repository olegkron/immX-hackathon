import React from "react";
import colors from "../constants/colors";
import AppCounter from "./AppCounter";

function Sticker({ iconName, text, style }) {
  return (
    <div
      style={{
        borderRadius: 10,
        padding: 6,
        paddingRight: 18,
        paddingLeft: 18,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        ...style,
      }}
    >
      <AppCounter title={text} iconName={iconName} style={{ color: colors.white }} />
    </div>
  );
}

export default Sticker;
