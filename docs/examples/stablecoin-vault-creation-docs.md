# Stablecoin System Vault Creation Documentation

## Overview

This documentation covers the implementation of vault creation in the Zarban Stablecoin System. The SDK provides functionality for creating vaults, handling transactions, and managing collateral using Web3 and the Zarban API.

## Prerequisites

- Node > 16.0.0
- Web3.js
- Zarban SDK
- Ethereum node access (RPC URL)
- Private key with sufficient funds
- Required node packages:
  ```bash
  npm install zarban
  ```

## Core Components

### 1. Collateral Type Management

#### `const getIlksSymbol = async (api: Service.StableCoinSystemApi.StableCoinSystemApi)`

Retrieves available collateral types from the system.

**Parameters:**

- `api (Service.StableCoinSystemApi.StableCoinSystemApi)`: The StableCoinSystem Api instance

**Returns:**

- `Promise<string[]>`: Unique collateral type symbols

**Example:**

```typeScript
const symbols = await getIlksSymbol(api);
```

### 2. Amount Conversion

#### `const toNative = async (api, symbol, amount)`

Converts human-readable amounts to blockchain native format.

**Parameters:**

- `api (Service.StableCoinSystemApi.StableCoinSystemApi)`: The StableCoinSystem Api instance
- `symbol (string)`: Asset symbol (e.g., "ETH", "ZAR")
- `amount (number)`: Human-readable amount

**Returns:**

- `string`: Amount in native blockchain format (wei)

**Example:**

```typeScript
const nativeCollateralAmount = await toNative(api, "ETH", 0.01)
```

### 3. Vault Transaction Processing

#### `const getVaultTxSteps = async (api, ilkName, symbol, walletAddress, collateralAmount , loanAmount)`

Retrieves transaction steps for vault creation.

**Parameters:**

- `api (Service.StableCoinSystemApi.StableCoinSystemApi)`: The StableCoinSystem Api instance
- `ilkName (string)`: Collateral type name
- `symbol (string)`: Asset symbol
- `walletAddress (string)`: User's wallet address
- `collateralAmount (number)`: Collateral amount
- `loanAmount (number)`: Loan amount in stablecoin

**Returns:**

- `Promis`: (numberOfSteps, stepNumber, steps)

### 4. Transaction Management

#### `const waitForTransactionReceipt = async (web3, txHash, maxWaitTime = 120, checkInterval = 15)`

Waits for transaction confirmation.

**Parameters:**

- `w3`: Web3 instance
- `txHash`: Transaction hash
- `maxWaitTime`: Maximum wait time in seconds
- `checkInterval`: Check interval in seconds

**Returns:**

- Transaction receipt or None

### 5. Transaction Logging

#### `const saveTransactionDetails = (tx, txHash, vaultId)`

Saves transaction details to a JSON file.

**Parameters:**

- `tx`: Transaction object
- `txHash`: Transaction hash
- `vaultId`: Vault identifier (can be None)

## Complete Implementation Example

```typeScript
  // Configuration
  const HTTPS_RPC_URL = "Replace with your Ethereum node URL";
  const PRIVATE_KEY = "Replace with your Private key"; // start with "0x"
  const WALLET_ADDRESS = getAddressFromPrivateKey(PRIVATE_KEY);

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
  const COLLATERAL_AMOUNT = 0.001; // Replace with your desired amount
  const LOAN_AMOUNT = 100; // Replace with your desired amount

  const [ChainActivity, error] = await getVaultTxSteps(
    stableCoinSystemApi,
    ILK_NAME,
    SYMBOL,
    WALLET_ADDRESS,
    COLLATERAL_AMOUNT,
    LOAN_AMOUNT
  );
```

## Transaction Flow

1. **Initialization**

   - Set up API client and Web3 connection
   - Configure vault parameters

2. **Transaction Steps**

   - Retrieve vault creation steps
   - Process each step sequentially
   - Handle transaction signing and submission

3. **Transaction Monitoring**

   - Wait for transaction confirmation
   - Log transaction details
   - Verify vault creation

4. **Result Verification**
   - Get transaction logs
   - Extract vault ID
   - Update transaction records

## Error Handling

```typeScript
 const [logs, error] = await getLogs(txHash);
if (error) {
   // handle errors here
   return;
}
```

## Best Practices

1. **Security**

   - Never hardcode private keys
   - Use environment variables for sensitive data
   - Verify all transaction parameters before signing

2. **Transaction Management**

   - Always wait for transaction confirmations
   - Implement proper error handling
   - Log all transactions for audit purposes

3. **Gas Management**
   - Use appropriate gas limits
   - Monitor gas prices
   - Implement retry mechanisms for failed transactions

## Logging and Monitoring

The system maintains a transaction log file (`transaction_log.json`) with the following information:

- Timestamp
- Transaction details
- Transaction hash
- Vault ID (when available)

Example log entry:

```json
{
  "timestamp": "2024-03-13T10:00:00",
  "tx": {
    "from": "0x...",
    "to": "0x...",
    "value": "1000000000000000",
    "gas": 200000
  },
  "txHash": "0x...",
  "vaultId": "123"
}
```

## Limitations and Considerations

1. **Network Dependencies**

   - Requires stable network connection
   - Dependent on Ethereum network status
   - May be affected by network congestion

2. **Resource Requirements**

   - Sufficient ETH for gas fees
   - Adequate collateral for vault creation
   - Valid API access

3. **Transaction Timing**
   - Transaction confirmation times vary
   - Maximum wait time configurable
   - May require multiple steps

## Troubleshooting

1. **Connection Issues**

   ```typeScript
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
   ```

2. **Transaction Failures**

   - Check gas prices and limits
   - Verify account balance
   - Confirm network status

3. **API Errors**
   - Validate API credentials
   - Check request parameters
   - Review error responses

## Support

For additional support or bug reports, please contact the Zarban support team or refer to the API documentation.

## See Also

- [API Reference Documentation](../service/Apis/StableCoinSystemApi.md)
