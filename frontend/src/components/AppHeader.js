//header with button "Create competition" on the left, and "Connect wallet" on the right.

import { LogOut, Plus, UserPlus } from "feather-icons-react";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { navContext } from "../hooks/navContext";

import Button from "./Button";

function AppHeader({ onClickWallet, address, setWalletAddress, balance }) {
  const { selectedScreen, setSelectedScreen } = useContext(navContext);
  return (
    <div onClick={() => setSelectedScreen("main")} style={{ flexDirection: "row", display: "flex", justifyContent: "space-between", paddingHorizontal: 25, alignItems: "center" }}>
      <img style={{ height: 30 }} src={logo} />
      <div style={{ flexDirection: "row", display: "flex", alignItems: "center" }}>
        <Button style={{ marginRight: 15, fontSize: 20, marginTop: 15 }}>
          <Plus size={24} style={{ marginRight: 10 }} />
          <p style={{ fontSize: 20 }}>CREATE COMPETITION</p>
        </Button>
        {/* <Link to="/profile">
          <p style={{ margin: 30, fontSize: 20 }}>PROFILE</p>
        </Link> */}
        <p style={{ margin: 30, fontSize: 20 }}>PROFILE</p>
        <p>|</p>
        <p style={{ margin: 30, fontSize: 20 }}>SUBMISSIONS</p>
        <p>|</p>
        <p style={{ margin: 30, fontSize: 20 }}>HISTORY</p>
      </div>
      <div style={{ flexDirection: "row", display: "flex" }}>
        <Button onClick={address ? () => setWalletAddress(null) : onClickWallet}>
          {address ? <LogOut size={24} style={{ marginRight: 10 }} /> : <UserPlus size={24} style={{ marginRight: 10 }} />}
          <p style={{ fontSize: 20 }}>{address ? address : "CONNECT WALLET"}</p>
        </Button>
      </div>
    </div>
  );
}

export default AppHeader;
