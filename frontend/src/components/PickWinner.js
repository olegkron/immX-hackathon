import { ImmutableX, Config } from "@imtbl/core-sdk";
import { generateWalletConnection } from "./libs/walletConnection";

// getting the project

const getProjects = async (ethSigner: EthSigner) => {
  const response = await client.getProjects(ethSigner);
  return response;
};

getProjects(ethSigner)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });

// creating the transfer order to the winner

(async () => {
  const walletConnection = await generateWalletConnection("goerli");

  const imxClient = new ImmutableX(Config.SANDBOX);

  try {
    // Batch Transfer NFT
    const batchTransferResponse = await imxClient.batchNftTransfer(
      walletConnection,
      [
        {
          receiver: "",
          tokenId: "",
          tokenAddress: "",
        },
      ]
    );

    console.log("batchTransferResponse", batchTransferResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
