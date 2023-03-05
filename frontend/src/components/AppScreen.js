// appScreen.js with padding and background color
import React from "react";
import colors from "../constants/colors";
import AppHeader from "./AppHeader";

function AppScreen({ children }) {
  return (
    <div
      style={{
        // backgroundColor: colors.background,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        flex: 1,
        // overflow: "hidden",/
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{children}</p>
    </div>
  );
}

export default AppScreen;
