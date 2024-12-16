/*
Vault Creation Script using Web3 and Zarban API

This script demonstrates the process of creating a vault in a stablecoin system
using the Web3 library for Ethereum interactions and the Zarban API for
stablecoin-specific operations.

Key components and functionality:

1. Imports and Setup:
   - Web3 for Ethereum blockchain interactions
   - Zarban API client for stablecoin system operations
   - Custom functions for data conversion and API interactions

2. Helper Functions:
   - getIlksSymbol: Retrieves available collateral types (ilks) from the API
   - tonative: Converts human-readable amounts to blockchain-native amounts
   - getVaultTxSteps: Obtains transaction steps for vault creation

3. Main Execution:
   - Sets up Web3 connection and Zarban API client
   - Defines vault creation parameters (collateral type, amounts)
   - Retrieves vault creation transaction steps
   - Iterates through steps, creating and sending Ethereum transactions

Usage:
1. Replace placeholder values (RPC URL, private key, wallet address)
2. Set desired ILK_NAME, COLLATERAL_AMOUNT, and LOAN_AMOUNT
3. Run the script to create a vault with specified parameters

Note: This script interacts with real blockchain networks and APIs. Use with
caution and ensure you understand the implications of each transaction.

Security Warning: Never hardcode or commit private keys. Use secure methods
for managing sensitive information in production environments.
*/

import * as fs from "fs";
import * as path from "path";
import { Service } from "zarban";
import { Web3, HttpProvider } from "web3";

// define the error handler type
type AsyncFn<T> = (...args: any[]) => Promise<T>;

// Define the error handler function
function withErrorHandler<T>(
  fn: AsyncFn<T>,
  apiName: string,
  methodName: string
) {
  return async (
    ...args: any[]
  ): Promise<[T | null, Error | Service.ModelError | null]> => {
    try {
      const result = await fn(...args);
      return [result, null];
    } catch (error) {
      if (Service.instanceOfModelError(error)) {
        console.log(
          `Exception when calling ${apiName}->${methodName}: ${error}`
        );
        console.log(`Error message: ${error.msg}`);
        console.log(`Reasons: ${error.reasons}`);
        return [null, error as Service.ModelError];
      } else {
        console.error("Unexpected error:", error);
        return [null, error as Error];
      }
    }
  };
}

function createApiMethod<T>(
  fn: AsyncFn<T>,
  apiName: string,
  methodName: string
) {
  return withErrorHandler(fn, apiName, methodName);
}

/**
 * @description Retrieve and return a list of unique collateral type symbols.
 * @param {StableCoinSystemApi} [api] : The Stable CoinSystem Api client instance.
 * @returns {Promise<Service.Ilk[]>} A list of unique collateral type symbols.
 */
const getIlksSymbolBase = async (
  api: Service.StableCoinSystemApi.StableCoinSystemApi
): Promise<string[]> => {
  const ilks = await api.getAllIlks();
  const symbols: string[] = [];
  for (const ilk of ilks.data) {
    symbols.push(ilk.symbol);
  }
  return [...new Set(symbols)];
};

const getIlksSymbol = createApiMethod(
  getIlksSymbolBase,
  "StableCoinSystemApi",
  "getAllIlks"
);

/**
 * @description Convert a human-readable amount to its native blockchain representation.
 * @param  {StableCoinSystemApi} [api] : The Stable CoinSystem Api client instance.
 * @param {string} [symbol] : The symbol of the asset (e.g., "ETH", "ZAR").
 * @param {number} [amount] : The human-readable amount to convert.
 * @returns {Promise<string>} The amount in its native blockchain representation.
 */
const toNative = async (
  api: Service.StableCoinSystemApi.StableCoinSystemApi,
  symbol: string,
  amount: number
) => {
  // 1) get symbols
  const [symbols, error] = await getIlksSymbol(api);
  if (error) {
    throw error;
  }
  // 2) create ratio dict
  const ratio: { [key: string]: number } = {
    ZAR: 18,
  };
  for (const s of symbols!) {
    ratio[s] = 18;
  }

  // Calculate and return the native amount
  const nativeAmount = amount * Math.pow(10, ratio[symbol]);
  return nativeAmount.toString();
};

/**
 *
 * @description Retrieve the transaction steps required to create a vault.
 * @param {StableCoinSystemApi} : [api] The Stable CoinSystem Api client instance.
 * @param {string} [ilkName] : The name of the collateral type.
 * @param {string} [symbol] : The symbol of the asset (e.g., "ETH", "ZAR").
 * @param {string} [walletAddress] : The user's wallet address.
 * @param {number} [collateralAmount] : The amount of collateral to deposit.
 * @param {number} [loanAmount] : The amount of stablecoin to generate.
 */
const getVaultTxStepsBase = async (
  api: Service.StableCoinSystemApi.StableCoinSystemApi,
  ilkName: string,
  symbol: string,
  walletAddress: string,
  collateralAmount: number,
  loanAmount: number
) => {
  const nativeCollateralAmount = await toNative(api, symbol, collateralAmount);
  const nativeLoanAmount = await toNative(api, "ZAR", loanAmount);

  const createVaultTxRequest =
    Service.StablecoinSystemCreateVaultTxRequestFromJSON({
      ilkName,
      walletAddress,
      nativeCollateralAmount,
      nativeLoanAmount,
    });

  const createStableCoinVaultResponse = await api.createStableCoinVault({
    stablecoinSystemCreateVaultTxRequest: createVaultTxRequest,
  });

  return createStableCoinVaultResponse;
};

const getVaultTxSteps = createApiMethod(
  getVaultTxStepsBase,
  "StableCoinSystemApi",
  "createStableCoinVault"
);

const getAddressFromPrivateKey = (privateKey: Uint8Array | string): string => {
  // Create a Web3 instance
  const w3 = new Web3();
  // Create an account object from the private key
  const account = w3.eth.accounts.privateKeyToAccount(privateKey);
  // Return the address
  return account.address;
};

const getLogsBase = async (txHash) => {
  const logsApi = new Service.LogsApi.LogsApi();
  const getLogsResponse = await logsApi.getLogsByTransactionHash({ txHash });
  return getLogsResponse;
};

const getLogs = createApiMethod(
  getLogsBase,
  "logsApi",
  "getLogsByTransactionHash"
);

const getVaultId = (logs: Service.EventDetailsResponse) => {
  let vaultId: undefined | string = undefined;
  if (logs) {
    for (const log of logs.data) {
      if (log.name == "NewCdp") {
        if (log.decoded) {
          vaultId = log.decoded["Cdp"];
        }
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

  const filePath = path.join(__dirname, "transaction_log.json");

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
    console.log("Transaction details saved to transaction_log.json");
  } catch (err) {
    console.error("Error writing to the transaction log file:", err);
  }
};

// Function to update the last transaction with a vault_id
async function updateLastTransactionWithVaultId(vaultId: string) {
  try {
    // Read the existing transaction log
    const filePath = "transaction_log.json";
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

const beautifyJson = (jsonData: string | object): string => {
  let parsedData: object;

  // Parse the JSON string if it's not already an object
  if (typeof jsonData === "string") {
    try {
      parsedData = JSON.parse(jsonData);
    } catch (error) {
      throw new Error("Invalid JSON string provided");
    }
  } else {
    parsedData = jsonData;
  }

  // Convert the parsed data back to a string with indentation
  const beautified = JSON.stringify(parsedData, null, 2);

  return beautified;
};

async function main() {
  // Configuration
  const HTTPS_RPC_URL = "Replace with your Ethereum node URL";
  const PRIVATE_KEY = "Replace with your Private key";
  const WALLET_ADDRESS = getAddressFromPrivateKey(PRIVATE_KEY);

  // Setup Zarban API client
  let cfg = new Service.Configuration({
    basePath: "https://testwapi.zarban.io",
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

  // Get account from private key
  const account = w3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
  console.log("Account Address:", account.address);

  // Get the chain ID
  let chainId;
  try {
    chainId = await w3.eth.getChainId();
  } catch (error) {
    console.error("Error getting chain ID:", error);
  }

  // Define vault creation parameters
  const ILK_NAME = "ETHA"; // Replace with your desired ilk
  const SYMBOL = "ETH"; // Replace with the symbol associated with your ilk
  const COLLATERAL_AMOUNT = 0.01; // Replace with your desired amount
  const LOAN_AMOUNT = 1000; // Replace with your desired amount

  const [ChainActivity, error] = await getVaultTxSteps(
    stableCoinSystemApi,
    ILK_NAME,
    SYMBOL,
    WALLET_ADDRESS,
    COLLATERAL_AMOUNT,
    LOAN_AMOUNT
  );

  if (!error) {
    const { numberOfSteps, stepNumber, steps } = ChainActivity!;
    if (steps) {
      for (let s = stepNumber; s <= numberOfSteps; s++) {
        const [ChainActivity, error] = await getVaultTxSteps(
          stableCoinSystemApi,
          ILK_NAME,
          SYMBOL,
          WALLET_ADDRESS,
          COLLATERAL_AMOUNT,
          LOAN_AMOUNT
        );
        if (!error) {
          const { numberOfSteps: numberOf, stepNumber, steps } = ChainActivity!;
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
              let gasPrice;
              try {
                gasPrice = await w3.eth.getGasPrice();
              } catch (error) {
                console.log("Error while getting gasPrice");
                console.log(error);
              }
              const tx = {
                from: WALLET_ADDRESS,
                to: addressTo,
                value: +value,
                gas: gas,
                gasPrice: gasPrice,
                nonce: nonce,
                chainId: chainId,
                data: calldata,
              };
              // Sign and send transaction
              const signedTxn = await account.signTransaction(tx);
              let send;
              try {
                send = await w3.eth.sendSignedTransaction(
                  signedTxn.rawTransaction
                );
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

          if (numberOf == stepNumber) {
            const [logs, error] = await getLogs(txHash);
            if (!error) {
              const vaultid = getVaultId(logs!);
              if (vaultid) {
                console.log("vault was created successfully.");
                console.log(`TX HASH: ${txHash}\nVAULT ID: ${vaultid}`);
                // Update the last transaction with the vaultid
                try {
                  await updateLastTransactionWithVaultId(vaultid);
                } catch (error) {
                  console.log(`Error while updating transaction details`);
                }
              }
            }
          }
        }
      }
    } else {
      console.log("\nNo steps found in the response.");
    }
  }
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
