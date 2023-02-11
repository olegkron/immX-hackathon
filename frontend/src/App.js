import { ImmutableXClient, Link } from "@imtbl/imx-sdk";
import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppScreen from "./components/AppScreen";
import CreateScreen from "./screens/CreateScreen";
import MainScreen from "./screens/MainScreen";
function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [starkPublicKey, setStarkPublicKey] = useState("");
  const [walletBalance, setWalletBalance] = useState(null);

  const linkAddress = "https://link.x.immutable.com";
  const apiAddress = "https://api.x.immutable.com/v1";

  function shortenAddress(address) {
    return address.slice(0, 6) + "..." + address.slice(-6);
  }

  const getWalletData = async () => {
    try {
      const link = new Link(linkAddress);
      const client = await ImmutableXClient.build({ publicApiUrl: apiAddress });

      const { address, starkPublicKey } = await link.setup({});
      setWalletAddress(shortenAddress(address));
      const balance = await client.listBalances({ user: address });
      setStarkPublicKey(starkPublicKey);
      setWalletBalance(balance.remaining);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AppScreen>
      <AppHeader onClickWallet={getWalletData} address={walletAddress} setWalletAddress={setWalletAddress} balance={walletBalance} />
      {/* <MainScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <SubmittionScreen /> */}
      <CreateScreen />
    </AppScreen>
  );
}

export default App;
