// card with 14px borderRadius, 2px white stroke

import { Card } from "@mantine/core";
import React, { useContext } from "react";
import colors from "../constants/colors";
import { navContext } from "../hooks/navContext";
import TextEyebrow from "../text/TextEyebrow";
import AppCounter from "./AppCounter";
import Sticker from "./Sticker";
function SubmissionCard({
  children,
  title,
  subtitle,
  author,
  lost = false,
  submission,
  won = false,
  participants,
  date,
  uri,
  prize,
  competition,
  onClick,
  style,
}) {
  const { setSelectedScreen, setSubmissionData } = useContext(navContext);

  return (
    <div onClick={() => [setSelectedScreen("submission"), setSubmissionData(submission)]} style={{ position: "relative" }}>
      <Card
        shadow="md"
        style={{
          backgroundColor: colors.background,
          borderRadius: 10,
          border: "2px solid white",
          width: 370,
          // minHeight: 290,
          // maxHeight: 545,
          height: 290,

          display: "flex",
          flexDirection: "column",
          padding: 10,

          ...style,
        }}
      >
        <img style={{ flex: 1, top: 0, borderRadius: 5, objectFit: "cover" }} src={submission.imageUrl} />
      </Card>

      <div style={{ marginTop: 20 }}>
        <TextEyebrow style={{ marginTop: 0 }}>{title}</TextEyebrow>
        <TextEyebrow style={{ color: colors.lightGrey, margin: 0 }}>{subtitle}</TextEyebrow>
      </div>
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 40,
          height: 0,
          marginTop: -10,
          alignItems: "center",
        }}
      >
        <TextEyebrow style={{ color: colors.lightGrey }}>{author}</TextEyebrow>

        <AppCounter color={colors.lightGrey} style={{ marginRight: 20 }} title={date} iconName={"calendar"} />
      </div>
    </div>
  );
}

export default SubmissionCard;
