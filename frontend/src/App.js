import { Config, ImmutableX } from "@imtbl/core-sdk";
import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppScreen from "./components/AppScreen";
import MainScreen from "./screens/MainScreen";
import ProfileScreen from "./screens/ProfileScreen";
function App() {
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState(null);

  const handleConnect = async () => {
    const config = new Config({
      network: "testnet",
      rpcUrl: "https://rpc.testnet.immutable.com",
      chainId: "testnet",
    });
    const immutableX = new ImmutableX(config);
    const accounts = await immutableX.getAccounts();
    const account = accounts[0];
    setAccount(account);
    const balance = await immutableX.getBalance(account);
    setBalance(balance);
  };

  return (
    <AppScreen>
      <AppHeader />
      {/* <MainScreen /> */}
      <ProfileScreen />
    </AppScreen>
  );
}

export default App;
