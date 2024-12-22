# Loan Creation Documentation

## Overview

This document describes how to use the Zarban SDK to create loans. The SDK provides functionality for creating new loans and monitoring their status through a simple typeScript interface.

## Prerequisites

- Node >= 16.0.0
- Zarban SDK (`zarban.wallet`)
- Valid API access token
- Child user credentials (if applicable)

## Installation

```bash
npm install zarban
```

## Authentication

The SDK requires two forms of authentication:

1. An API access token
2. A child user header (optional, depending on use case)

```typeScript
  let cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: ACCESS_TOKEN,
    baseOptions: {
      headers: {
        "X-Child-User": "child_user_test",
      },
    },
  });

  let loanApi = new Wallet.LoansApi.LoansApi(cfg);
```

## Core Functions

### Creating a Loan

#### `const createLoan = async ( loanApi, planName collateral, debt, symbol, loanToValueOption)`

Creates a new loan using the specified parameters.

**Parameters:**

- `loanApi`: Wallet.LoansApi.LoansApi instance
- `planName`: string - Name of the loan plan (Currently supports "DAIA" and "DAIB")
- `collateral`: string - Amount of collateral
- `debt`: string - Amount of debt
- `symbol`: string - Coin symbol (e.g., "DAI")
- `loanToValueOption`: string - Risk level ("Safe", "Normal", or "Risky")

**Important Notes:**

- Either `collateral` or `debt` must be empty
- Returns the loan ID if successful, None if failed

**Example:**

```typeScript
  const [createLoanResponse, createLoanError] = await createLoan(
    loanApi,
    PLAN_NAME,
    COLLATERAL,
    DEBT,
    SYMBOL,
    LOAN_TO_VALUE_OPTIONS
  );
  if (createLoanError) {
    // you can do some addition works with error here!
    return createLoanError;
  }
```

### Checking Loan Status

#### `const loanStatus = async (loanApi ,loanId)`

Retrieves and displays the current state of a loan.

**Parameters:**

- `loanApi`: Wallet.LoansApi.LoansApi instance
- `loanId`: string - The ID of the loan to check

**Returns:**
Loan details object containing:

- Status
- Collateral amount
- Debt amount
- Interest rate
- Creation date

**Example:**

```typeScript
const [loanDetails, loanDetailsError] = await loanStatus(
    loanApi,
    createLoanResponse.id
);
if (loanDetailsError) {
    // you can do some addition works with error here!
    return loanDetailsError;
}
```

## API Endpoints

### POST /loans/create

Creates a new vault/loan.

**Request Body:**

```json
{
  "intent": "Create",
  "planName": "DAIA",
  "collateral": "1000",
  "debt": "",
  "symbol": "USDT",
  "loanToValueOption": "Safe"
}
```

**Response (200 OK):**

```json
{
  "id": "1234567890"
}
```

### GET /loans/{id}

Retrieves loan details.

**Path Parameters:**

- `id`: Loan identifier

**Response (200 OK):**
Returns loan details including status, collateral, debt, and other relevant information.

## Error Handling

The SDK uses `withErrorHandler` for error handling. Common errors include:

- 400: Bad Request
- 401: Unauthorized
- 500: Internal Server Error

Example error handling:

```typeScript
if (loanDetailsError) {
    // you can do some addition works with error here!
    return loanDetailsError;
}
```

## Complete Usage Example

```typeScript
async function main() {
  // Replace with your actual access token
  const ACCESS_TOKEN = "your_access_token_here";

  // Setup API client
  let cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: ACCESS_TOKEN,
    baseOptions: {
      headers: {
        "X-Child-User": "child_user_test",
      },
    },
  });

  let loanApi = new Wallet.LoansApi.LoansApi(cfg);

  // Loan creation parameters, Replace them with yout actual data
  // *** either collateral or debt must be empty ***
  const PLAN_NAME = "DAIA"; // Only DAIA and DAIB supported
  const COLLATERAL = "1000"; // Amount of collateral
  const DEBT = ""; // Amount of debt
  const SYMBOL = "DAI"; // Coin symbol
  const LOAN_TO_VALUE_OPTIONS = "Safe"; // Risky - Normal - Safe

  // Create loan
  const [createLoanResponse, createLoanError] = await createLoan(
    loanApi,
    PLAN_NAME,
    COLLATERAL,
    DEBT,
    SYMBOL,
    LOAN_TO_VALUE_OPTIONS
  );
  if (createLoanError) {
    // you can do some addition works with error here!
    return createLoanError;
  }

  // Remove the X-Child-User header after use
  cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: ACCESS_TOKEN,
  });

  loanApi = new Wallet.LoansApi.LoansApi(cfg);

  if (createLoanResponse.id) {
    console.log(`Loan created with ID: ${createLoanResponse.id}`);

    // Track loan status
    console.log("\nTracking loan status...");
    const [loanDetails, loanDetailsError] = await loanStatus(
      loanApi,
      createLoanResponse.id
    );
    if (loanDetailsError) {
      // you can do some addition works with error here!
      return loanDetailsError;
    }
    if (loanDetails) {
      // You can add more specific actions based on the loan state
      console.log(`Loan status: ${loanDetails.state}`);
    }
  } else {
    console.log("Failed to create loan");
  }
}
```

## Best Practices

1. Always remove the X-Child-User header after use:
   ```typeScript
   cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: ACCESS_TOKEN,
   });
   ```
2. Implement proper error handling for all API calls
3. Validate input parameters before making API calls
4. Store sensitive information (like access tokens) in environment variables

## Limitations

- Only "DAIA" and "DAIB" plans are currently supported
- Either collateral or debt must be empty when creating a loan
- API access tokens should be kept secure and not hardcoded

## Support

For additional support or bug reports, please contact the Zarban support team.

## See Also

- [API Reference Documentation](../wallet)
