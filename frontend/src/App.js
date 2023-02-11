import { useState } from "react";
import Web3 from "web3";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppScreen from "./components/AppScreen";
import MainScreen from "./screens/MainScreen";

function App() {
  // use immx wallet sdk to connect to wallet

  const web3 = new Web3(window.ethereum);

  const [balance, setBalance] = useState(0);
  const [accounts, setAccounts] = useState([]);

  const handleConnect = async () => {
    try {
      if (typeof window.ethereum === "undefined") {
        window.alert("Please install MetaMask first.");
        return;
      }
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);
      const balance = await web3.eth.getBalance(accounts[0]);
      setBalance(balance);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppScreen>
      <AppHeader onClickWallet={handleConnect} />
      <MainScreen />
    </AppScreen>
  );
}

export default App;
