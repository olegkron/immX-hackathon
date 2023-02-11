import { Text } from "@mantine/core";
import React from "react";
import colors from "../constants/colors";

function TextEyebrow({ children, style }) {
  return (
    <Text
      style={{
        color: colors.white,
        fontFamily: "JetBrains Mono",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: "155%",
        marginTop: 40,
        marginBottom: 40,

        ...style,
      }}
    >
      {children}
    </Text>
  );
}

export default TextEyebrow;
