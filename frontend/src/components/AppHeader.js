//header with button "Create competition" on the left, and "Connect wallet" on the right.

import { LogOut, Plus, UserPlus } from "feather-icons-react";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { navContext } from "../hooks/navContext";

import Button from "./Button";

function AppHeader({ onClickWallet, address, setWalletAddress, balance }) {
  const { selectedScreen, setSelectedScreen } = useContext(navContext);
  return (
    <div style={{ flexDirection: "row", display: "flex", justifyContent: "space-between", paddingHorizontal: 25, alignItems: "center" }}>
      <div style={{ flexDirection: "row", display: "flex", alignItems: "center" }}>
        <button onClick={() => setSelectedScreen("main")} style={{ background: "none", color: "inherit", border: "none" }}>
          <img style={{ height: 40, marginRight: 30 }} src={logo} />
        </button>
        {address && (
          <Button onClick={() => setSelectedScreen("create")} style={{ marginRight: 15, fontSize: 20, marginTop: 15 }}>
            <Plus size={24} style={{ marginRight: 10 }} />
            <p style={{ fontSize: 20 }}>CREATE COMPETITION</p>
          </Button>
        )}
        {/* <Link to="/profile">
          <p style={{ margin: 30, fontSize: 20 }}>PROFILE</p>
        </Link> */}
        <button onClick={() => setSelectedScreen("profile")} style={{ background: "none", color: "inherit", border: "none" }}>
          <p style={{ margin: 30, fontSize: 20 }}>PROFILE</p>
        </button>
        <p>|</p>
        <button onClick={() => setSelectedScreen("profile")} style={{ background: "none", color: "inherit", border: "none" }}>
          <p style={{ margin: 30, fontSize: 20 }}>SUBMISSIONS</p>
        </button>
        <p>|</p>
        <button onClick={() => setSelectedScreen("profile")} style={{ background: "none", color: "inherit", border: "none" }}>
          <p style={{ margin: 30, fontSize: 20 }}>HISTORY</p>
        </button>
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
