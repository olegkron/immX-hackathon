// card with 14px borderRadius, 2px white stroke

import { Card } from "@mantine/core";
import React, { useContext } from "react";
import colors from "../constants/colors";
import { navContext } from "../hooks/navContext";
import TextEyebrow from "../text/TextEyebrow";
import AppCounter from "./AppCounter";
import Sticker from "./Sticker";
function AppCard({ children, title, subtitle, lost = false, won = false, participants, date, prize, competition, onClick, style }) {
  const { selectedScreen, setSelectedScreen, setCompetData } = useContext(navContext);

  return (
    <div onClick={() => [setSelectedScreen("competition"), setCompetData(competition)]} style={{ position: "relative" }}>
      <Card
        shadow="md"
        style={{
          backgroundColor: colors.background,
          borderRadius: 10,
          border: "2px solid white",
          width: 320,
          minHeight: 180,
          maxHeight: 545,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          ...style,
        }}
      >
        {children && <div style={{ width: "100%", marginBottom: 10, height: 300, borderRadius: 17, overflow: "hidden" }}>{children}</div>}
        <div>
          <TextEyebrow style={{ margin: 0 }}>{title}</TextEyebrow>
          <TextEyebrow style={{ color: colors.lightGrey, margin: 0 }}>{subtitle}</TextEyebrow>
        </div>
        <div style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppCounter title={participants} iconName={"users"} />
          <AppCounter title={prize} iconName={"dollar-sign"} />
          <AppCounter title={date ? date.substring(0, date.indexOf(",")) : ""} iconName={"calendar"} />
        </div>
      </Card>
      {lost && (
        <Sticker
          iconName="frown"
          style={{ backgroundColor: colors.darkGrey, position: "absolute", zIndex: 2, top: -10, right: 10, rotate: "-9deg" }}
          text={"LOST"}
        />
      )}
      {won && (
        <Sticker
          iconName="award"
          style={{ background: colors.mainGradient, position: "absolute", zIndex: 2, top: -10, right: 10, rotate: "-9deg" }}
          text={"WON"}
        />
      )}
    </div>
  );
}

export default AppCard;
