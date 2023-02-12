import { ImmutableXClient, Link } from "@imtbl/imx-sdk";
import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppScreen from "./components/AppScreen";
import { navContext } from "./hooks/navContext";
import CompetitionScreen from "./screens/CompetitionScreen";
import CreateScreen from "./screens/CreateScreen";
import MainScreen from "./screens/MainScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SubmittionScreen from "./screens/SubmittionScreen";
function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [starkPublicKey, setStarkPublicKey] = useState("");
  const [walletBalance, setWalletBalance] = useState(null);

  const [selectedScreen, setSelectedScreen] = useState("main");
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
  async function sendTransaction(toAddress = "0x2170ed0880ac9a755fd29b2688956bd959f933f8", amount = 1000) {
    // Connect to the Immutable X network
    const client = await ImmutableXClient.build({ publicApiUrl: apiAddress });
    const link = new Link(linkAddress);
    // Get the user's wallet address and public key
    const { address, starkPublicKey } = await link.setup({});

    // initiate transfer with dummy address and amount
    const transfer = await client.initiateTransfer({
      user: address,
      starkPublicKey,
      toAddress,
      amount,
    });

    // sign the transfer
    const signature = await link.signTransfer(transfer);

    // submit the transfer
    const result = await client.submitTransfer({
      transfer,
      signature,
    });

    console.log(result);
  }
  return (
    <navContext.Provider value={{ selectedScreen, setSelectedScreen }}>
      <AppScreen>
        <AppHeader onClickWallet={getWalletData} address={walletAddress} setWalletAddress={setWalletAddress} balance={walletBalance} />
        {selectedScreen === "main" && <MainScreen />}
        {selectedScreen === "profile" && <ProfileScreen />}
        {selectedScreen === "submission" && <SubmittionScreen />}
        {selectedScreen === "create" && <CreateScreen sendTransaction={sendTransaction} />}
        {selectedScreen === "competition" && <CompetitionScreen />}
      </AppScreen>
    </navContext.Provider>
  );
}

export default App;
