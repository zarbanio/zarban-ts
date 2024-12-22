# Loan Repayment Documentation

## Overview

This document describes how to use the Zarban SDK to repay loans. The SDK provides functionality for previewing repayments, executing repayments, and monitoring their status through a simple typeScript interface.

## Prerequisites

- Node >= 16.0.0
- Zarban SDK (`zarban.wallet`)
- Valid API access token
- Child user credentials (if applicable)

## Installation

```bash
pip install zarban
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
        "X-Child-User": "your_child_username",
      },
    },
  })
```

## Core Functions

### Repaying a Loan

#### `const repayLoan = async (loanApi, loanId, intent = "Repay")`

Handles loan repayment operations, including preview and actual repayment.

**Parameters:**

- `loanApi`: wallet.LoansApi instance
- `loanId`: string - Unique identifier for the loan
- `intent`: string - Either "Preview" or "Repay"

**Returns:**

- API response object containing repayment details if successful
- None if operation fails

**Example:**

```typeScript
// Preview repayment
  const [previewLoanResponse, previewLoanError] = await repayLoan(
    loanApi,
    LOAN_ID,
    "Preview"
  );

// Execute repayment
  const [repaymentLoanResponse, repaymentLoanResponseError] = await repayLoan(
    loanApi,
    LOAN_ID,
    "Repay"
  );
```

### Checking Loan Status

#### `const getLoanStatus = async (loanApi , loanId)`

Retrieves and displays detailed information about a loan.

**Parameters:**

- `loanApi`: Wallet.LoansApi.LoansApi
- `loanId`: string - Unique identifier for the loan

**Returns:**
Loan details object containing:

- Loan status
- User ID
- Liquidation price
- Collateral amount
- Collateralization ratio
- Loan to value
- Debt amount
- Loan plan

**Example:**

```typeScript
const [loanDetails, loanDetailsError] = await getLoanStatus(
  loanApi,
  LOAN_ID
);
if (loanDetailsError) {
  // you can do some addition works with error here!
  return loanDetailsError;
}
```

## API Endpoints

### POST /loans/repay

Previews or executes a loan repayment.

**Request Body:**

```json
{
  "intent": "Preview", // or "Repay"
  "loan_id": "loan123"
}
```

**Response (200 OK):**

```json
{
  "id": "vault123",
  "userId": 12345,
  "liquidationPrice": {
    "USD": "1500.00",
    "ETH": "0.75"
  },
  "collateral": {
    "ETH": "1.0",
    "USD": "2000.00"
  },
  "collateralizationRatio": "1.5",
  "loanToValue": "0.66",
  "debt": {
    "DAI": "1000.00",
    "USD": "1000.00"
  }
  // other fields
}
```

### GET /loans/{id}

Retrieves loan details.

**Path Parameters:**

- `id`: Loan identifier

**Response (200 OK):**
Returns loan details including state, collateral, debt, and other relevant information.

## Error Handling

The SDK uses `withErrorHandler` for error handling. Common errors include:

- 400: Bad Request
- 401: Unauthorized
- 500: Internal Server Error

Example error handling:

```typeScript
if (repaymentLoanError) {
  // you can do some addition works with error here!
  return repaymentLoanError;
}
```

## Complete Usage Example

```typeScript
async function main() {
  // Replace with your actual access token
  const ACCESS_TOKEN = "your_access_token_here";

  // Setup API client
  // Set the X-Child-User header
  let cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: ACCESS_TOKEN,
    baseOptions: {
      headers: {
        "X-Child-User": "your_child_username",
      },
    },
  });

  // Loan ID to repay, replace with actual loan ID
  const LOAN_ID = "DAIA#2825";

  // Preview repayment
  console.log("Previewing loan repayment...");
  let loanApi = new Wallet.LoansApi.LoansApi(cfg);

  const [previewLoanResponse, previewLoanError] = await repayLoan(
    loanApi,
    LOAN_ID,
    "Preview"
  );
  if (previewLoanError) {
    // you can do some addition works with error here!
    return previewLoanError;
  }
  if (previewLoanResponse) {
    console.log("\nRepayment preview details:");
    console.log(`Collateral to be returned: ${previewLoanResponse.collateral}`);
    console.log(`Debt to be repaid: ${previewLoanResponse.debt}`);

    // Ask for user confirmation
    const confirm = await getInput(
      "\nDo you want to proceed with the repayment? (y/n): "
    );
    if (confirm.toLowerCase() == "y") {
      // Proceed with actual repayment
      const [repaymentLoanResponse, repaymentLoanError] = await repayLoan(
        loanApi,
        LOAN_ID
      );
      if (repaymentLoanError) {
        // you can do some addition works with error here!
        return repaymentLoanError;
      }
      if (repaymentLoanResponse) {
        console.log("repayment in progress...");
        while (true) {
          const [loanDetails, loanDetailsError] = await getLoanStatus(
            loanApi,
            LOAN_ID
          );
          if (loanDetailsError) {
            // you can do some addition works with error here!
            return loanDetailsError;
          }
          if (loanDetails.state.LocaleEn == "Loan settled") {
            console.log("\nLoan repayment successful!");
            await getLoanStatus(loanApi, LOAN_ID);
            break;
          } else if (loanDetails.state.LocaleEn == "Loan settlement failed") {
            console.log(loanDetails.state.LocaleEn);
            break;
          }
          await sleep(1000);
        }

        // Get updated loan status
        console.log("\nUpdated loan status:");
        await getLoanStatus(loanApi, LOAN_ID);
      } else {
        console.log("Repayment cancelled.");
      }
    } else {
      console.log("Repayment cancelled.");
    }
  } else {
    console.log("Failed to preview loan repayment");
  }
}
```

## Best Practices

1. Always preview repayment before executing
2. Implement proper error handling for all API calls
3. Monitor repayment status after execution
4. Remove the X-Child-User header after use
5. Store sensitive information (like access tokens) in environment variables
6. Implement proper timeout handling for status monitoring

## Limitations

- Repayment preview is recommended before actual repayment
- Status monitoring may require multiple API calls
- API access tokens should be kept secure and not hardcoded

## Support

For additional support or bug reports, please contact the Zarban support team.

## See Also

- [API Reference Documentation](../wallet)
- [Loan Creation Documentation](./loan-creation-docs.md)
