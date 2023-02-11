// main screen, displays big title underlined by a gradient line, subtitle

import React from "react";
import AppCard from "../components/AppCard";
import Button from "../components/Button";

import colors from "../constants/colors";
// import colors from "../constants/colors";
// import TextBigSubtitle from "../text/BigSubtitle";
// import TextH1 from "../text/TextH1";

function ProfileScreen() {
  return (
    <div style={{ flexDirection: "row", flex: 1, marginTop: 60, display: "flex" }}>
      <div style={{ flex: 3.4 }}>
        <p style={{ fontWeight: "bold", fontSize: 20 }}>PROFILE</p>
        <div style={{ width: 385, height: 385, marginTop: 30, marginBottom: 30, borderRadius: 17, backgroundColor: colors.darkGrey }} />
        <p style={{ fontWeight: "bold", fontSize: 64 }}>JOHN DOE</p>
        <Button style={{ width: 155, marginTop: 25 }}>
          <p style={{ fontWeight: "regilar", fontSize: 32 }}>Artist</p>
        </Button>
        <div style={{ width: "70%" }}>
          <div style={{ flexDirection: "row", marginTop: 65, justifyContent: "space-between" }}>
            <p style={{ fontWeight: "bold", fontSize: 20, color: colors.lightGrey }}>JOINED</p>
            <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white, marginLeft: 100 }}>12 FEB, 2023</p>
          </div>
          <div style={{ flexDirection: "row", marginTop: 25, justifyContent: "space-between" }}>
            <p style={{ fontWeight: "bold", fontSize: 20, color: colors.lightGrey }}>SUBMISSIONS</p>
            <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white, marginLeft: 100 }}>15</p>
          </div>
          <div style={{ flexDirection: "row", marginTop: 25, justifyContent: "space-between" }}>
            <p style={{ fontWeight: "bold", fontSize: 20, color: colors.lightGrey }}>PRIZES WON</p>
            <p style={{ fontWeight: "bold", fontSize: 20, color: colors.white, marginLeft: 100 }}>3</p>
          </div>
        </div>
      </div>
      <div style={{ flex: 5 }}>
        <p style={{ fontWeight: "bold", fontSize: 20 }}>REWARDS</p>
        <div style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 30 }}>
          <AppCard style={{ marginRight: 20, marginBottom: 30 }} title={"Logo task"} subtitle={"Intel"}>
            <div style={{ width: 385, height: 385, backgroundColor: colors.darkGrey }} />
          </AppCard>
          <AppCard style={{ marginRight: 20, marginBottom: 30 }} title={"Logo task"} subtitle={"Intel"}>
            <div style={{ width: 385, height: 385, backgroundColor: colors.darkGrey }} />
          </AppCard>
          <AppCard style={{ marginRight: 20, marginBottom: 30 }} title={"Logo task"} subtitle={"Intel"}>
            <div style={{ width: 385, height: 385, backgroundColor: colors.darkGrey }} />
          </AppCard>
          <AppCard style={{ marginRight: 20, marginBottom: 30 }} title={"Logo task"} subtitle={"Intel"}>
            <div style={{ width: 385, height: 385, backgroundColor: colors.darkGrey }} />
          </AppCard>
          <AppCard style={{ marginRight: 20, marginBottom: 30 }} title={"Logo task"} subtitle={"Intel"}>
            <div style={{ width: 385, height: 385, backgroundColor: colors.darkGrey }} />
          </AppCard>
          <AppCard style={{ marginRight: 20, marginBottom: 30 }} title={"Logo task"} subtitle={"Intel"}>
            <div style={{ width: 385, height: 385, backgroundColor: colors.darkGrey }} />
          </AppCard>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
