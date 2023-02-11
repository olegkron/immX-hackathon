// main screen, displays big title underlined by a gradient line, subtitle

import React from "react";
import AppCard from "../components/AppCard";
import AppTextInput from "../components/AppTextInput";
import Button from "../components/Button";

import colors from "../constants/colors";
import TextH1 from "../text/TextH1";
import { TextInput } from "@mantine/core";
// import colors from "../constants/colors";
// import TextBigSubtitle from "../text/BigSubtitle";
// import TextH1 from "../text/TextH1";

function CreateScreen() {
  return (
    <div style={{ flexDirection: "row", flex: 1, marginTop: 60, display: "flex", marginBottom: 100 }}>
      <div style={{ flex: 1 }}>
        <TextH1 underline>Create a competition</TextH1>
        <p style={{ maxWidth: 750, fontSize: 30, marginTop: 50, marginBottom: 60 }}>{`Provide description and requirements for your competition.`}</p>
        <div style={{ flexDirection: "row" }}>
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
        </div>

        <Button style={{ marginTop: 120 }}>
          <p style={{ fontWeight: "bold", fontSize: 20 }}>PICK AS A WINNER</p>
        </Button>
      </div>
    </div>
  );
}

export default CreateScreen;
