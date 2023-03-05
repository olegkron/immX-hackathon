// font-style: normal;
// font-weight: 700;
// font-size: 64px;
// line-height: 130%;

// Path: frontend/src/text/TextH2.js

import React from "react";
import colors from "../constants/colors";

function TextH1({ children, underline = false, style, medium, bold, id }) {
  return (
    <>
      <h2 id={id} style={{ color: colors.white, fontWeight: medium ? 500 : bold ? 600 : 400, margin: 0, ...style }}>
        {children}
      </h2>
      {underline && <div style={{ background: colors.mainGradient, height: 10, marginTop: -12 }} />}
    </>
  );
}

export default TextH1;
