// counter with feathericon and text

// Path: frontend/src/components/AppCounter.js

import FeatherIcon from "feather-icons-react";
import React from "react";
import colors from "../constants/colors";
import TextEyebrow from "../text/TextEyebrow";

function AppCounter({ title, iconName, style, color = colors.white }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", ...style }}>
      <FeatherIcon icon={iconName} size={18} color={color} />
      <TextEyebrow style={{ color: color, fontWeight: 500, fontSize: 20, margin: 0, marginLeft: 4 }}>{title}</TextEyebrow>
    </div>
  );
}

export default AppCounter;
