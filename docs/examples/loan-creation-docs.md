# Loan Creation Documentation

## Overview

This document describes how to use the Zarban SDK to create loans. The SDK provides functionality for creating new loans and monitoring their status through a simple Python interface.

## Prerequisites

- Python 3.x
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

```python
    cfg = wallet.Configuration(host="https://testwapi.zarban.io")
    cfg.access_token = ACCESS_TOKEN
    api_client = wallet.ApiClient(cfg)
    api_client.default_headers['X-Child-User'] = "your_child_username"
```

## Core Functions

### Creating a Loan

#### `create_loan(api_instance, plan_name, collateral, debt, symbol, loan_to_value_option)`

Creates a new loan using the specified parameters.

**Parameters:**

- `loans_api`: LoansApi instance
- `plan_name`: str - Name of the loan plan (Currently supports "DAIA" and "DAIB")
- `collateral`: str - Amount of collateral
- `debt`: str - Amount of debt
- `symbol`: str - Coin symbol (e.g., "USDT")
- `loan_to_value_option`: str - Risk level ("Safe", "Normal", or "Risky")

**Important Notes:**

- Either `collateral` or `debt` must be empty
- Returns the loan ID if successful, None if failed

**Example:**

```python
loan_id = create_loan(
    loans_api,
    plan_name="DAIA",
    collateral="1000",
    debt="",
    symbol="USDT",
    loan_to_value_option="Safe"
)
```

### Checking Loan Status

#### `loan_Status(loans_api, loan_id)`

Retrieves and displays the current state of a loan.

**Parameters:**

- `loans_api`: LoansApi instance
- `loan_id`: str - The ID of the loan to check

**Returns:**
Loan details object containing:

- State
- Collateral amount
- Debt amount
- Interest rate
- Creation date

**Example:**

```python
loan_details = loan_Status(loans_api, loan_id)
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

The SDK uses `ApiException` for error handling. Common errors include:

- 400: Bad Request
- 401: Unauthorized
- 500: Internal Server Error

Example error handling:

```python
try:
    loan_details = loans_api.get_loan_details(loan_id)
except wallet.ApiException as e:
    print(f"Error: {e}")
```

## Complete Usage Example

```python
def main():
    # Replace with your actual access token
    ACCESS_TOKEN = "your_child_username"

    # Setup API client
    cfg = wallet.Configuration(host="https://testwapi.zarban.io")
    cfg.access_token = ACCESS_TOKEN
    api_client = wallet.ApiClient(cfg)
    loans_api = wallet.LoansApi(api_client)

    # Set the X-Child-User header in the api_client's default headers
    api_client.default_headers['X-Child-User'] = "your_child_username"
    # Create loan
    loan_id = create_loan(
        loans_api,
        "DAIA",    # plan name
        "1000",    # collateral
        "",        # debt
        "USDT",    # symbol
        "Safe"     # loan to value option
    )

    # Check status
    if loan_id:
        loan_details = loan_status(loans_api, loan_id)
```

## Best Practices

1. Always remove the X-Child-User header after use:
   ```python
   api_client.default_headers.pop('X-Child-User', None)
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
