import { ImmutableXClient, Link } from "@imtbl/imx-sdk";
import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppScreen from "./components/AppScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SubmittionScreen from "./screens/SubmittionScreen";
function App() {
  const [address, setAddress] = useState("");
  const [starkPublicKey, setStarkPublicKey] = useState("");
  const [balance, setBalance] = useState(0);

  const linkAddress = "https://link.x.immutable.com";
  const apiAddress = "https://api.x.immutable.com/v1";

  const getWalletData = async () => {
    const link = new Link(linkAddress);
    const client = await ImmutableXClient.build({ publicApiUrl: apiAddress });

    const { address, starkPublicKey } = await link.setup({});
    let balance = await client.getBalance({ address, starkPublicKey });
    setAddress(address);
    setStarkPublicKey(starkPublicKey);
    setBalance(balance);
  };
  return (
    <AppScreen>
      <AppHeader />
      {/* <MainScreen /> */}
      {/* <ProfileScreen /> */}
      <SubmittionScreen />
    </AppScreen>
  );
}

export default App;
