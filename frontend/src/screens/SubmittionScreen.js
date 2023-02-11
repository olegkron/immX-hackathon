// main screen, displays big title underlined by a gradient line, subtitle

import React from "react";
import Button from "../components/Button";

import colors from "../constants/colors";
import TextH1 from "../text/TextH1";
// import colors from "../constants/colors";
// import TextBigSubtitle from "../text/BigSubtitle";
// import TextH1 from "../text/TextH1";

function SubmittionScreen() {
  return (
    <div style={{ flexDirection: "row", flex: 1, marginTop: 60, display: "flex", marginBottom: 100 }}>
      <div style={{ flex: 1 }}>
        <TextH1 underline>Submission Title</TextH1>
        <p style={{ maxWidth: 750, fontSize: 30, marginTop: 50, marginBottom: 60 }}>
          {`Submission Description Aliquam erat volutpat. Etiam nisi risus, neleifend eget ornare eget, fringilla eget.
             Aliquam erat volutpat. Etiam nisi risus, eleifend eget ornare eget, fringilla eget.`}
        </p>
        <div style={{ width: 500, height: 1, backgroundColor: colors.darkGrey }} />
        <div style={{ maxWidth: 450 }}>
          <div style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 100 }}>
            <p style={{ fontWeight: "bold", fontSize: 20, color: colors.lightGrey }}>SUBMITTED ON</p>
            <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white, marginLeft: 100 }}>12 FEB, 2023</p>
          </div>
          <div style={{ flexDirection: "row", marginTop: 25, justifyContent: "space-between" }}>
            <p style={{ fontWeight: "bold", fontSize: 20, color: colors.lightGrey }}>AUTHOR</p>
            <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white, marginLeft: 100 }}>AUTHOR NAME</p>
          </div>
          <Button style={{ marginTop: 120 }}>
            <p style={{ fontWeight: "bold", fontSize: 20 }}>PICK AS A WINNER</p>
          </Button>
        </div>
      </div>

      <div style={{ border: "2px solid white", backgroundColor: colors.grey, borderRadius: 10, marginBottom: 40, flex: 1 }}></div>
    </div>
  );
}

export default SubmittionScreen;
