// card with 14px borderRadius, 2px white stroke

import { Card } from "@mantine/core";
import React from "react";
import colors from "../constants/colors";
import TextEyebrow from "../text/TextEyebrow";
import AppCounter from "./AppCounter";

function AppCard({ children, title, subtitle, lost = false, won= false style }) {
  return (
    <Card
      shadow="md"
      style={{
        backgroundColor: colors.background,
        borderRadius: 10,
        border: "2px solid white",
        width: 320,
        height: 180,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...style,
      }}
    >
      {children}
      <div>
        <TextEyebrow style={{ margin: 0 }}>{title}</TextEyebrow>
        <TextEyebrow style={{ color: colors.grey, margin: 0 }}>{subtitle}</TextEyebrow>
      </div>
      <div style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <AppCounter title={"12"} iconName={"users"} />
        <AppCounter title={"3000"} iconName={"dollar-sign"} />
        <AppCounter title={"12 FEB"} iconName={"calendar"} />
      </div>
    </Card>
  );
}

export default AppCard;
