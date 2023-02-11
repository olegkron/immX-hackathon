// appScreen.js with padding and background color
import { Text } from "@mantine/core";
import React from "react";
import colors from "../constants/colors";

function AppScreen({ children }) {
  return (
    <div style={{ backgroundColor: colors.background, padding: 20 }}>
      <Text>{children}</Text>
    </div>
  );
}

export default AppScreen;
