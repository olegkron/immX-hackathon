// main screen, displays big title underlined by a gradient line, subtitle

import React, { useContext } from "react";
import AppCard from "../components/AppCard";
import AppTextInput from "../components/AppTextInput";
import Button from "../components/Button";

import colors from "../constants/colors";
import TextH1 from "../text/TextH1";
import { TextInput } from "@mantine/core";
import { navContext } from "../hooks/navContext";
import SubmissionCard from "../components/SubmissionCard";
// import colors from "../constants/colors";
// import TextBigSubtitle from "../text/BigSubtitle";
// import TextH1 from "../text/TextH1";

function CompetitionScreen() {
  const { competData } = useContext(navContext);
  console.log(competData);
  return (
    <div style={{ flexDirection: "row", flex: 1, marginTop: 60, display: "flex", marginBottom: 100 }}>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 30 }}>{competData.subtitle}</p>
        <div style={{ flexDirection: "row" }}>
          <div style={{ flex: 1 }}>
            <TextH1 underline>{competData.title}</TextH1>
            <p style={{ maxWidth: 750, fontSize: 30, marginTop: 50, marginBottom: 60 }}>{competData.description}</p>
          </div>
          <div style={{ flex: 1, paddingTop: 20 }}>
            <div style={{ marginLeft: 150, alignSelf: "flex-start" }}>
              <div style={{ flexDirection: "row", marginTop: 5, alignItems: "center" }}>
                <p style={{ fontWeight: "bold", fontSize: 20, color: colors.lightGrey }}>START DATE</p>
                <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white, marginLeft: 40 }}>{competData.date}</p>
              </div>
              <div style={{ flexDirection: "row", marginTop: 35, justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontWeight: "bold", fontSize: 20, color: colors.lightGrey }}>DURATION</p>
                <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white }}>{competData.duration}</p>
              </div>
              <div style={{ flexDirection: "row", marginTop: 35, justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontWeight: "bold", fontSize: 20, color: colors.lightGrey }}>WINNERS</p>
                <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white }}>3</p>
              </div>
              <div style={{ flexDirection: "row", marginTop: 35, justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontWeight: "bold", fontSize: 20, color: colors.lightGrey }}>PRIZE</p>
                <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white }}>4000$</p>
              </div>
              <div style={{ flexDirection: "row", marginTop: 35, justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontWeight: "bold", fontSize: 20, color: colors.lightGrey }}>SUBMISSIONS</p>
                <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white }}>15</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: 1, backgroundColor: colors.mediumGrey, marginTop: 80 }} />
        <div>
          <p style={{ fontSize: 24, marginTop: 60, fontWeight: "bold" }}>SUBMISSIONS</p>
          <div style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 30 }}>
            {competData.submissions.map((submission) => (
              <SubmissionCard
                key={submission.id}
                style={{ marginRight: 20 }}
                title={submission.title}
                imageUri={submission.imageUri}
                date={submission.dateSubmitted}
                description={submission.description}
                author={submission.author}
                uri={submission.imageUri}
                submission={submission}
              />
            ))}
          </div>
        </div>

        {/* <div style={{ flexDirection: "row" }}>
          <div>
            <AppTextInput style={{ width: 400 }} placeholder="Competition name" />
            <AppTextInput
              style={{
                width: 400,
                marginTop: 20,
                height: 200,
                justifyContent: "flex-start",
                textAlign: "top",
              }}
              placeholder="Competition desctiption"
            />
          </div>
          <div style={{ marginLeft: 150 }}>
            <div style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white }}>START DATE</p>
              <AppTextInput style={{ marginLeft: 20, width: 230 }} placeholder="28.03.2023" />
            </div>
            <div style={{ flexDirection: "row", marginTop: 35, justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white }}>END DATE</p>
              <AppTextInput style={{ marginLeft: 20, width: 230 }} placeholder="04.04.2023" />
            </div>
            <div style={{ flexDirection: "row", marginTop: 35, justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white }}>WINNERS</p>
              <AppTextInput style={{ marginLeft: 20, width: 230 }} placeholder="3" />
            </div>
            <div style={{ flexDirection: "row", marginTop: 35, justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white }}>PRIZE</p>
              <AppTextInput style={{ marginLeft: 20, width: 230 }} placeholder="4000$" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CompetitionScreen;
