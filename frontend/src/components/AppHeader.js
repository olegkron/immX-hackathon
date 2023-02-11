//header with button "Create competition" on the left, and "Connect wallet" on the right.

import { Button, Header, Text } from "@mantine/core";
import React from "react";

function AppHeader() {
  return (
    <Header shadow="sm" style={{ backgroundColor: "white" }} radius="md" padding="md">
      <div style={{ flexDirection: "row", display: "flex" }}>
        <Button variant="outline" style={{ color: "white", borderColor: "white" }} color="#000" radius="md" uppercase>
          Create competition
        </Button>
        <Text>PROFILE</Text>
        <Text>SUBMISSIONS</Text>
        <Text>HISTORY</Text>
      </div>
    </Header>
  );
}

export default AppHeader;
