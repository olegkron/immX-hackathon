// initializing core sdk

import { ImmutableX, Config } from "@imtbl/core-sdk";

const config = Config.SANDBOX; // Or PRODUCTION
const client = new ImmutableX(config);

import { generateWalletConnection } from "./libs/walletConnection";

// creating a signer
import { AlchemyProvider } from "@ethersproject/providers";
import { Wallet } from "@ethersproject/wallet";
import { generateStarkPrivateKey, createStarkSigner } from "@imtbl/core-sdk";

// Create Ethereum signer
const ethNetwork = "goerli"; // Or 'mainnet'
const provider = new AlchemyProvider(
  ethNetwork,
  process.env.ALCHEMY_GOERLI_API_KEY
);
const ethSigner = new Wallet(process.env.DEPLOYER_TESTNET_PRIVATE_KEY).connect(
  provider
);

// Create Stark signer
const starkPrivateKey = generateStarkPrivateKey(); // Or retrieve previously generated key
const starkSigner = createStarkSigner(starkPrivateKey);

// Make the trade

const createTrade = async (wallet: WalletConnection, orderId: number) => {
  const ethAddress = await wallet.ethSigner.getAddress();
  const tradeData = {
    order_id: orderId,
    user: ethAddress,
  } as GetSignableTradeRequest;

  const response = await client.createTrade(wallet, tradeData);
  return response;
};

module.exports = [createTrade];
