require("dotenv").config();
const { ethers } = require("ethers");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://mainnet.optimism.io" // Change depending on where you want to claim
  );
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const contract = new ethers.Contract(
    "0xfedfaf1a10335448b7fa0268f56d2b44dbd357de", // ? Claim contract address
    ["function claim(uint,address,uint,bytes32[])"],
    signer
  );

  const tx = await contract.claim(
    101873, // ? index
    "0xharb", // ? address (does not support ENS)
    0, // ? amount of coins to claim (care with decimals)
    [] // ? merkle proof
  );

  const done = await tx.wait();
  console.log("Done");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
