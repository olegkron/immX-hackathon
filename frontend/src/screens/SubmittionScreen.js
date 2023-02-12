// main screen, displays big title underlined by a gradient line, subtitle

import React, { useContext } from "react";
import Button from "../components/Button";

import colors from "../constants/colors";
import { navContext } from "../hooks/navContext";
import TextH1 from "../text/TextH1";
// import colors from "../constants/colors";
// import TextBigSubtitle from "../text/BigSubtitle";
// import TextH1 from "../text/TextH1";

function SubmittionScreen() {
  const { submissionData } = useContext(navContext);
  return (
    <div style={{ flexDirection: "row", flex: 1, marginTop: 60, display: "flex", marginBottom: 100 }}>
      <div style={{ flex: 1 }}>
        <TextH1 underline>{submissionData.title}</TextH1>
        <p style={{ maxWidth: 750, fontSize: 30, marginTop: 50, marginBottom: 60 }}>{submissionData.description}</p>
        <div style={{ width: 500, height: 1, backgroundColor: colors.darkGrey }} />
        <div style={{ maxWidth: 450 }}>
          <div style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 100 }}>
            <p style={{ fontWeight: "bold", fontSize: 20, color: colors.lightGrey }}>SUBMITTED ON</p>
            <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white, marginLeft: 100 }}>{submissionData.dateSubmitted}</p>
          </div>
          <div style={{ flexDirection: "row", marginTop: 25, justifyContent: "space-between" }}>
            <p style={{ fontWeight: "bold", fontSize: 20, color: colors.lightGrey }}>AUTHOR</p>
            <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white, marginLeft: 100 }}>{submissionData.author}</p>
          </div>
          <Button style={{ marginTop: 120 }}>
            <p style={{ fontWeight: "bold", fontSize: 20 }}>PICK AS A WINNER</p>
          </Button>
        </div>
      </div>

      <div style={{ border: "2px solid white", borderRadius: 10, marginBottom: 40, padding: 0, flex: 1, overflow: "hidden", alignItems: "center" }}>
        <img style={{ flex: 1, top: 0, borderRadius: 5, maxWidth: 900, height: 500, objectFit: "fill" }} src={submissionData.imageUrl} />
      </div>
    </div>
  );
}

export default SubmittionScreen;
