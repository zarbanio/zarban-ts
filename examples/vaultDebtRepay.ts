/*
Note: This script interacts with real blockchain networks and APIs. Use with
caution and ensure you understand the implications of each transaction.
Security Warning: Never hardcode or commit private keys. Use secure methods
for managing sensitive information in production environments.
*/
import * as fs from "fs";
import * as path from "path";
import { Service, ZarbanUtils } from "zarban";
import { Web3, HttpProvider } from "web3";

const { withErrorHandler } = ZarbanUtils;

const toNative = (amount: number) => {
  return (amount * Math.pow(10, 18)).toString();
};

const getVaultTxSteps = async (
  api: Service.StableCoinSystemApi.StableCoinSystemApi,
  walletAddress: string,
  vaultId: number,
  amount: number | undefined
) => {
  let nativeAmount;
  if (amount) {
    nativeAmount = toNative(amount);
  }

  const repayZarTxRequest: Service.StablecoinSystemRepayZarTxRequest = {
    user: walletAddress,
    vaultId,
    amount: nativeAmount,
  };

  const repayZarWithHandler = withErrorHandler<Service.ChainActivity>(
    "Service",
    () => api.repayZarTransaction(repayZarTxRequest)
  );

  return repayZarWithHandler();
};

const getAddressFromPrivateKey = (privateKey: Uint8Array | string): string => {
  // Create a Web3 instance
  const w3 = new Web3();
  // Create an account object from the private key
  const account = w3.eth.accounts.privateKeyToAccount(privateKey);
  // Return the address
  return account.address;
};

const getLogs = async (txHash) => {
  const logsApi = new Service.LogsApi.LogsApi();
  const getLogsWithHandler = withErrorHandler<Service.EventDetailsResponse>(
    "Service",
    () => logsApi.getLogsByTransactionHash(txHash)
  );
  return getLogsWithHandler();
};

const getVaultId = (logs: Service.EventDetailsResponse) => {
  let vaultId = null;
  if (logs) {
    for (const log of logs.data) {
      if (log.name == "NewCdp") {
        vaultId = log.decoded["Cdp"];
      }
    }
  }
  return vaultId;
};

interface TransactionDetails {
  timestamp: string;
  tx: {};
  txHash: string;
  vaultId?: string | null;
}

const saveTransactionDetails = (
  tx: {},
  txHash: string,
  vaultId: string | null
): void => {
  // Create a transaction object with details
  const transactionData: TransactionDetails = {
    timestamp: new Date().toISOString(),
    tx,
    txHash,
    vaultId,
  };

  const filePath = path.join(__dirname, "repay_transaction_log.json");

  // Read existing data from the file
  let existingData: TransactionDetails[] = [];
  try {
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf8");
      existingData = JSON.parse(fileContent);
    }
  } catch (err) {
    console.error("Error reading the transaction log file:", err);
  }

  // Append new transaction data
  existingData.push(transactionData);

  // Write updated data back to the file
  try {
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), "utf8");
    console.log("Transaction details saved to repay_transaction_log.json");
  } catch (err) {
    console.error("Error writing to the transaction log file:", err);
  }
};

// Function to update the last transaction with a vault_id
async function updateLastTransactionWithVaultId(vaultId: string) {
  try {
    // Read the existing transaction log
    const filePath = "repay_transaction_log.json";
    const data = JSON.parse(
      fs.readFileSync(filePath, "utf-8")
    ) as TransactionDetails[];

    // Update the vault_id of the last transaction
    if (data.length > 0) {
      data[data.length - 1].vaultId = vaultId;
    }

    // Write the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    console.log(`Last transaction updated with vault_id: ${vaultId}`);
  } catch (error) {
    console.error("Error updating transaction log:", error);
  }
}

const waitForTransactionReceipt = async (
  web3: Web3,
  txHash: string,
  maxWaitTime: number = 120,
  checkInterval: number = 15
) => {
  const startTime = Date.now();

  while (Date.now() - startTime < maxWaitTime * 1000) {
    try {
      const receipt = await web3.eth.getTransactionReceipt(txHash);
      if (receipt !== null) {
        return receipt; // Transaction receipt found
      }
    } catch (error) {
      console.error(`Error checking transaction receipt: ${error}`);
    }

    console.log(`Waiting for transaction ${txHash} to be mined...`);
    await new Promise((resolve) => setTimeout(resolve, checkInterval * 1000)); // Wait before retrying
  }

  console.log(`Transaction not mined after ${maxWaitTime} seconds`);
  return null; // Return null if receipt was not found within max wait time
};

async function main() {
  // Configuration
  const HTTPS_RPC_URL = "Replace with your Ethereum node URL";
  const PRIVATE_KEY = "Replace with your Private key"; // start with "0x"
  const WALLET_ADDRESS = getAddressFromPrivateKey(PRIVATE_KEY);

  // Define vault repayment parameters
  const VAULT_ID: number = "Replace with your vault id";
  const AMOUNT: number = "Replace with your actual repayment value";

  // Setup Zarban API client
  let cfg = new Service.Configuration({
    basePath: "https://testapi.zarban.io",
  });

  const stableCoinSystemApi =
    new Service.StableCoinSystemApi.StableCoinSystemApi(cfg);

  // Setup Web3 connection
  const w3 = new Web3(new HttpProvider(HTTPS_RPC_URL));

  // Verify connection by checking if we can fetch the latest block number
  w3.eth
    .getBlockNumber()
    .then((blockNumber) => {
      console.log(`Successfully connected to ${HTTPS_RPC_URL}`);
      console.log(`Latest block number: ${blockNumber}`);
    })
    .catch((error) => {
      console.error(`Failed to connect to ${HTTPS_RPC_URL}:`, error);
      process.exit(1);
    });

  const account = w3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);

  // Get the chain ID
  let chainId;
  try {
    chainId = await w3.eth.getChainId();
  } catch (error) {
    console.error("Error getting chain ID:", error);
  }

  const [ChainActivity, error] = await getVaultTxSteps(
    stableCoinSystemApi,
    WALLET_ADDRESS,
    VAULT_ID,
    AMOUNT
  );

  if (error) {
    // you can do some addition works with error here!
    return error;
  }

  const { numberOfSteps, stepNumber, steps } = ChainActivity;
  for (let s = stepNumber; s <= numberOfSteps; s++) {
    const [ChainActivity, error] = await getVaultTxSteps(
      stableCoinSystemApi,
      WALLET_ADDRESS,
      VAULT_ID,
      AMOUNT
    );
    if (error) {
      // you can do some addition works with error here!
      return error;
    }
    const { numberOfSteps: numberOf, stepNumber, steps } = ChainActivity;
    let txHash;
    for (const [index, step] of steps.entries()) {
      const data = step["data"];
      const label = data["label"]["en-US"];
      console.log(`steps ${index + 1}: ${label}`);
      if (stepNumber - 1 == index) {
        console.log("processing...");
        const methodParams = data["methodParameters"];
        const addressTo = methodParams["to"];
        const calldata = methodParams["calldata"];
        const value = methodParams["value"];
        let nonce;
        try {
          nonce = await w3.eth.getTransactionCount(account.address);
        } catch (error) {
          console.log("Error while getting nonce");
          console.log(error);
        }
        const gas = data["gasUseEstimate"];
        // Prepare transaction
        let gasPrice: bigint = BigInt(0);
        try {
          const baseFee = (await w3.eth.getBlock("latest")).baseFeePerGas;
          gasPrice = await w3.eth.getGasPrice();
          if (gasPrice < baseFee) {
            gasPrice = (baseFee * BigInt(110)) / BigInt(100); // Increase by 110%
          }
        } catch (error) {
          console.log("Error while getting gasPrice");
          console.log(error);
        }
        const tx = {
          from: WALLET_ADDRESS,
          to: addressTo,
          value: +value,
          gas: gas,
          gasPrice: gasPrice.toString(),
          nonce: nonce,
          chainId: chainId,
          data: calldata,
        };
        // Sign and send transaction
        const signedTxn = await account.signTransaction(tx);
        let send;
        try {
          send = await w3.eth.sendSignedTransaction(signedTxn.rawTransaction);
        } catch (error) {
          console.error("Transaction failed:", error);
        }

        txHash = send.transactionHash;
        // Save transaction details after each transaction
        saveTransactionDetails(tx, txHash, null); // vault_id is None at this point
        // Wait for the transaction to be mined
        const receipt = waitForTransactionReceipt(w3, txHash);
        if (!receipt) {
          console.log(
            `Transaction ${txHash} was not mined within the timeout period.`
          );
          continue; // Skip to the next step if this transaction wasn't mined
        }
        console.log(
          `Transaction ${txHash} was mined in block ${receipt["blockNumber"]}`
        );
      }
    }
  }
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
