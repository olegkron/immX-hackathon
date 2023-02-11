//header with button "Create competition" on the left, and "Connect wallet" on the right.

import { Header } from "@mantine/core";
import Button from "./Button";
import React from "react";
import colors from "../constants/colors";
import { UserPlus, Plus } from "feather-icons-react";

function AppHeader() {
  return (
    <Header style={{ backgroundColor: colors.background }} radius="md">
      <div style={{ flexDirection: "row", display: "flex", justifyContent: "space-between", paddingHorizontal: 25, alignItems: "center" }}>
        <div style={{ flexDirection: "row", display: "flex", alignItems: "center" }}>
          <Button style={{ marginRight: 15, fontSize: 20 }}>
            <Plus size={24} style={{ marginRight: 10 }} />
            <p style={{ fontSize: 20 }}>Create competition</p>
          </Button>
          <p style={{ margin: 30, fontSize: 20 }}>PROFILE</p>
          <p>|</p>
          <p style={{ margin: 30, fontSize: 20 }}>SUBMISSIONS</p>
          <p>|</p>
          <p style={{ margin: 30, fontSize: 20 }}>HISTORY</p>
        </div>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <Button style={{ borderImage: "linear-gradient(to right, #2560D2, #FF44F8, #FF4487) 1" }}>
            <UserPlus size={24} style={{ marginRight: 10 }} />
            <p style={{ fontSize: 20 }}>Create competition</p>
          </Button>
        </div>
      </div>
    </Header>
  );
}

export default AppHeader;
