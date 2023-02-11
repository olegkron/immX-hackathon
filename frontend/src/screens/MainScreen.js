// main screen, displays big title underlined by a gradient line, subtitle

import React from "react";
import colors from "../constants/colors";
import TextBigSubtitle from "../text/BigSubtitle";
import TextH1 from "../text/TextH1";

function MainScreen() {
  return (
    <>
      <div style={{ backgroundColor: colors.main, alignItems: "flex-start" }}>
        <TextH1 underline>Showcase</TextH1>
      </div>
      <TextBigSubtitle style={{ marginTop: 20 }}>Brings opportunities to talent and best results to businesses.</TextBigSubtitle>
    </>
  );
}

export default MainScreen;
