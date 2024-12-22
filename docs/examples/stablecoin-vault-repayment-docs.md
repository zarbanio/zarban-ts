# Stablecoin System Vault Repayment Documentation

## Overview

This documentation covers the implementation of vault repayment in the Zarban Stablecoin System. The SDK provides functionality for repaying existing vaults, handling transactions, and logging repayment details using Web3 and the Zarban API.

## Prerequisites

- Node >= 16.0.0
- Web3.js
- Zarban SDK
- Ethereum node access (RPC URL)
- Private key with sufficient funds
- Required node packages:
  ```bash
  npm install zarban
  ```

## Core Components

### 1. Amount Conversion

#### `const toNative = (amount)`

Converts a human-readable amount to its native blockchain format (wei).

**Parameters:**

- `amount (number)`: The amount to be converted

**Returns:**

- `string`: The amount in native blockchain format

**Example:**

```typeScript
nativeAmount = toNative(1.5)
```

### 2. Vault Repayment Transaction Processing

#### `const getVaultTxSteps = async (api, walletAddress, vaultId, amount)`

Retrieves transaction steps for vault repayment.

**Parameters:**

- `api (Service.StableCoinSystemApi.StableCoinSystemApi)`: The StableCoinSystem Api instance
- `walletAddress (string)`: User's wallet address
- `vaultId (number)`: The ID of the vault to be repaid
- `amount (number | undefined)`: The repayment amount

**Returns:**

- `Promise`: (numberOfSteps, stepNumber, steps)

### 3. Transaction Management

#### `const waitForTransactionReceipt = async (web3, txHash, maxWaitTime = 120, checkInterval = 15)`

Waits for transaction confirmation.

**Parameters:**

- `w3`: Web3 instance
- `txHash`: Transaction hash
- `maxWaitTime`: Maximum wait time in seconds
- `checkInterval`: Check interval in seconds

**Returns:**

- Transaction receipt or None

### 4. Transaction Logging

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
```

## Transaction Flow

1. **Initialization**

   - Set up API client and Web3 connection
   - Configure vault repayment parameters

2. **Transaction Steps**

   - Retrieve vault repayment steps
   - Process each step sequentially
   - Handle transaction signing and submission

3. **Transaction Monitoring**

   - Wait for transaction confirmation
   - Log transaction details

4. **Result Verification**
   - Review transaction logs for successful repayment

## Error Handling

```typeScript
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

The system maintains a transaction log file (`repay_transaction_log.json`) with the following information:

- Timestamp
- Transaction details
- Transaction hash

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
  "vaultId": "ETH#43"
}
```

## Limitations and Considerations

1. **Network Dependencies**

   - Requires stable network connection
   - Dependent on Ethereum network status
   - May be affected by network congestion

2. **Resource Requirements**

   - Sufficient ETH for gas fees
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
