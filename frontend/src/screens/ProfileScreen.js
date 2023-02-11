// main screen, displays big title underlined by a gradient line, subtitle

import React from "react";

import colors from "../constants/colors";
// import colors from "../constants/colors";
// import TextBigSubtitle from "../text/BigSubtitle";
// import TextH1 from "../text/TextH1";

function ProfileScreen() {
  <div style={{ display: "flex", flexDirection: "row", backgroundColor: "white", flex: 1 }}>
    <div>
      <p color="red">PROFILE</p>
      <div style={{ height: 385, width: 385, borderRadius: 17, backgroundColor: colors.darkGrey }}></div>
    </div>
  </div>;
}

export default ProfileScreen;
