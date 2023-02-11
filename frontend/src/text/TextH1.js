// font-style: normal;
// font-weight: 700;
// font-size: 64px;
// line-height: 130%;

// Path: frontend/src/text/TextH2.js

import React from "react";
import colors from "../constants/colors";

function TextH1({ children, underline = false, style }) {
  return (
    <>
      <div>
        <h2 style={{ color: colors.white, fontWeight: "bold", fontSize: 56, margin: 0, ...style }}>{children}</h2>
        {underline && <div style={{ background: colors.mainGradient, height: 10, marginTop: -12 }} />}
      </div>
    </>
  );
}

export default TextH1;
