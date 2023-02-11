// main screen, displays big title underlined by a gradient line, subtitle

import React from "react";
import AppCard from "../components/AppCard";
import colors from "../constants/colors";
import TextBigSubtitle from "../text/BigSubtitle";
import TextEyebrow from "../text/TextEyebrow";
import TextH1 from "../text/TextH1";

function MainScreen() {
  return (
    <>
      <div style={{ alignItems: "flex-start", marginTop: 100 }}>
        <TextH1 underline>Showcase</TextH1>
        <TextBigSubtitle style={{ marginTop: 20, maxWidth: 550 }}>Brings opportunities to talent and best results to businesses.</TextBigSubtitle>
        <TextEyebrow style={{ marginTop: 80 }}>BROWSE COMPETITIONS</TextEyebrow>
        <div style={{ flexDirection: "row" }}>
          <AppCard style={{ marginRight: 20 }} title={"Logo task"} subtitle={"Intel"} />
          <AppCard style={{ marginRight: 20 }} title={"Logo task"} subtitle={"Intel"} />
          <AppCard style={{ marginRight: 20 }} title={"Logo task"} subtitle={"Intel"} />
        </div>

        <TextEyebrow style={{ marginTop: 80 }}>COMPETITION HISTORY</TextEyebrow>
        <div style={{ flexDirection: "row" }}>
          <AppCard won style={{ marginRight: 20 }} title={"Logo task"} subtitle={"Intel"} />
          <AppCard won style={{ marginRight: 20 }} title={"Logo task"} subtitle={"Intel"} />
          <AppCard lost style={{ marginRight: 20 }} title={"Logo task"} subtitle={"Intel"} />
        </div>
      </div>
    </>
  );
}

export default MainScreen;
