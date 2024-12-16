# Zarban SDK

<p align="center">
  <img src="https://zarban.io/favicon.ico" width="400" alt="Logo">
</p>

[![npm version](https://badge.fury.io/js/zarban.svg)](https://badge.fury.io/js/zarban-ts)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7%2B-blue)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/node/v/zarban)](https://www.npmjs.com/package/zarban-ts)

Zarban SDK is a typeScript interface for interacting with the Zarban DeFi protocol, enabling developers to seamlessly integrate lending and borrowing functionalities into their applications. This SDK simplifies complex DeFi operations by providing easy-to-use methods for lending assets, managing collateral, borrowing funds, and monitoring positions in the Zarban protocol.

## Features

- **Automated API Client Generation**: Built using OpenAPI specification, ensuring type safety and up-to-date API compatibility
- **Lending Operations**: Easily deposit assets, view lending rates, and manage lending positions
- **Borrowing Management**: Streamlined methods for borrowing assets, managing collateral, and monitoring loan health
- **Position Tracking**: Real-time access to user positions, including borrowed amounts, collateral ratios, and liquidation thresholds
- **Market Data**: Simple methods to fetch current interest rates, available liquidity, and market statistics
- **Type Safety**: Full type hints support for typeScript static type checking
- **Error Handling**: Comprehensive error handling with detailed exceptions for DeFi operations
- **Async Support**: Asynchronous methods for improved performance in high-throughput applications

## Environments

Zarban SDK supports two distinct environments:

1. **Mainnet**: The production environment for the Zarban DeFi protocol.

   - Wallet API: `https://wapi.zarban.io`
   - Service API: `https://api.zarban.io`

2. **Testnet**: A separate testing environment for the Zarban protocol.
   - Wallet API: `https://testwapi.zarban.io`
   - Service API: `https://testapi.zarban.io`

Be sure to use the appropriate environment configuration when interacting with the Zarban SDK.

## Installation

```bash
npm install zarban
```

or:

```bash
yarn install zarban
```

## Quick Start

Zarban SDK provides access to two distinct APIs:

### 1. Wallet API (`zarban.wallet`)

The Wallet API handles user authentication and wallet management operations.

### 2. Service API(`zarban.service`)

The Zarban Service API provides access to core DeFi protocol operations.

```typeScript
import { Wallet } from "zarban";

// Initialize the client
const cfg = Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
  });

const authApi = new Wallet.AuthApi.AuthApi(cfg);

// Make a simple API call
response = authApi.someMethod()
console.log(response)
```

## Usage Examples

For detailed usage examples, see our [Examples Documentation](docs).

### Advanced Usage

Here's a simple example to sign up and get started with Zarban:

```typeScript
import { Wallet } from "zarban";

async function signupExample(): Promise<Wallet.SimpleResponse> {
  // Create and configure the Configuration object
  const cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
  });

  // Create an instance of the authApi using the Configuration
  const authApi = new Wallet.AuthApi.AuthApi(cfg);

  // Prepare the signup request data
  const signupRequest = Wallet.SignUpRequestFromJSON({
    email: "user@example.com",
    password: "yourSecuredPassword",
  });

  try {
    // Call the signup API
    const response = await authApi.signupWithEmailAndPassword({
      signUpRequest: signupRequest,
    });
    console.log("Signup successful!");
    console.log("Confirmation link sent.");

    console.log(`Message: ${JSON.stringify(response.messages, null, 2)}`);
    return response;
  } catch (error) {
    const modelError = Wallet.instanceOfModelError(error);
    if (modelError) {
      console.log(
        `Exception when calling authApi->signupWithEmailAndPassword: ${error}`
      );
      console.log(`Error message: ${error.msg}`);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}

// Execute with proper error handling
if (require.main === module) {
  signupExample()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
```

## Configuration

The SDK can be configured with various options to customize its behavior and authentication methods.

### Basic Configuration

```typeScript
import { Wallet } from "zarban";

// Basic configuration with just the host URL
const cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
});
```

### Authentication Options

The SDK supports multiple authentication methods:

1. API Key Authentication:

```typeScript
const cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    apiKey: {"APIKeyAuth": "your-api-key-here"},
});
```

2. Basic Authentication:

```typeScript
const cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    username: "your-username",
    password: "your-password"
});
```

### Configuration Parameters

| **Property**           | **Type**                                                                                           | **Description**                                  |
| ---------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `basePath`             | `string`                                                                                           | Override base path for API requests.             |
| `fetchApi`             | `FetchAPI`                                                                                         | Custom implementation of fetch.                  |
| `middleware`           | `Middleware[]`                                                                                     | Middleware to apply before/after fetch requests. |
| `queryParamsStringify` | `(params: HTTPQuery) => string`                                                                    | Function to stringify query parameters.          |
| `username`             | `string`                                                                                           | Username for basic security.                     |
| `password`             | `string`                                                                                           | Password for basic security.                     |
| `apiKey`               | `string` \| `Promise<string>` \| `(name: string) => string \| Promise<string>`                     | API key for API authentication.                  |
| `accessToken`          | `string` \| `Promise<string>` \| `(name?: string, scopes?: string[]) => string \| Promise<string>` | Access token for OAuth2 security.                |
| `headers`              | `HTTPHeaders`                                                                                      | Headers to include in every request.             |
| `credentials`          | `RequestCredentials`                                                                               | Credentials mode for requests (e.g., "include"). |

## Error Handling

```typeScript
// First define the error handler type
type AsyncFn<T> = (...args: any[]) => Promise<T>;

// Define the error handler function
// Higher-Order Function Pattern
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
```

### Usage example:

```typeScript
import { Service } from "zarban";

const getIlksSymbolBase = async (
  api: Service.StableCoinSystemApi.StableCoinSystemApi
): Promise<Service.Ilk[]> => {
  const ilks = await api.getAllIlks();
  const symbols: Service.Ilk[] = [];
  for (const ilk of ilks.data) {
    symbols.push(ilk);
  }
  return [...new Set(symbols)];
};

// Create the wrapped version with error handling
const getIlksSymbol = withErrorHandler(getIlksSymbolBase);

async function example() {
  const [ilks, error] = await getIlksSymbol(api);
  if (error) {
    // Handle error case
    return;
  }
  // Use ilks safely here
  console.log(ilks);
}
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- Create an issue on GitHub
- Email: info@zarban.io
- Documentation: [https://docs.zarban.io](https://docs.zarban.io)
