/**
 * @dev script to run locally when we are running "yarn hardhat node"
 */

const { ethers } = require("hardhat");

async function createCompetition() {
  const competition = await ethers.getContract("ArtCompetition");
  const prizePool = 100;
  const endTime = now + 1000;
  await competition.createCompetition(endTime, prizePool);
  console.log("Created a competition");
}

createCompetition()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
