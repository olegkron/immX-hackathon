// font-style: normal;
// font-weight: 400;
// font-size: 32px;
// line-height: 130%;

import React from "react";
import colors from "../constants/colors";

function TextBigSubtitle({ children, style }) {
  return <h2 style={{ color: colors.white, fontWeight: "normal", fontSize: 28, margin: 0, ...style }}>{children}</h2>;
}

export default TextBigSubtitle;
