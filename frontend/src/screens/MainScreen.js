// main screen, displays big title underlined by a gradient line, subtitle

import React from "react";
import AppCard from "../components/AppCard";
import { competitionHistory, competitions } from "../constants/competitions";
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
        <div style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {competitions.map((competition) => (
            <AppCard
              key={competition.id}
              style={{ marginRight: 20, marginBottom: 20 }}
              title={competition.title}
              subtitle={competition.subtitle}
              participants={competition.participants}
              date={competition.date}
              prize={competition.prize}
            />
          ))}
        </div>

        <TextEyebrow style={{ marginTop: 80 }}>COMPETITION HISTORY</TextEyebrow>
        <div style={{ flexDirection: "row" }}>
          {competitionHistory.map((competition) => (
            <AppCard
              key={competition.id}
              style={{ marginRight: 20 }}
              title={competition.title}
              subtitle={competition.subtitle}
              participants={competition.participants}
              date={competition.date}
              prize={competition.prize}
              lost={competition.lost}
              won={competition.won}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainScreen;
