# Zarban SDK

<p align="center">
  <img src="https://zarban.io/favicon.ico" width="400" alt="Logo">
</p>

[![npm version](https://badge.fury.io/js/zarban.svg)](https://badge.fury.io/js/zarban)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7%2B-blue)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/node/v/zarban)](https://www.npmjs.com/package/zarban)

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
try{
  response = await authApi.someMethod()
  console.log(response)
}catch(error){
  console.log(error)
}
```

## Usage Examples

For detailed usage examples, see our [Examples Documentation](docs/examples).

### Advanced Usage

Here's a simple example to sign up and get started with Zarban:

```typeScript
import { Wallet, ZarbanUtils } from "zarban";
const { withErrorHandler } = ZarbanUtils;

async function signupExample() {
  // Create and configure the Configuration object
  const cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
  });

  // Create an instance of the authApi using the Configuration
  const authApi = new Wallet.AuthApi.AuthApi(cfg);

  // Prepare the signup request data
  const signupRequest: Wallet.SignUpRequest = {
    email: "user@example.com",
    password: "yourSecurePassword",
  };

  const signupWithHandler = withErrorHandler<Wallet.SimpleResponse>(
    "Wallet",
    () => authApi.signupWithEmailAndPassword(signupRequest),
    (response) => {
      console.log("Signup successful!");
      console.log("Confirmation link sent.");
      console.log(
        `Message: ${JSON.stringify(response.data.messages, null, 2)}`
      );
    }
  );

  const [result, error] = await signupWithHandler();
  if (error) {
    // You can do some extra work with errors here!
    return error;
  }
  return result;
}

// Execute with proper error handling
if (require.main === module) {
  signupExample().then((result) => {
    if (result instanceof Error) {
      process.exit(1);
    }
    process.exit(0);
  });
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

| Parameter    | Type                                                                                                                                     | Description                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| apiKey       | `string \| Promise<string> \| ((name: string) => string) \| ((name: string) => Promise<string>)`                                         | Parameter for apiKey security. Can be a string, Promise of string, or function returning string/Promise.        |
| username     | `string`                                                                                                                                 | Parameter for basic security authentication username.                                                           |
| password     | `string`                                                                                                                                 | Parameter for basic security authentication password.                                                           |
| accessToken  | `string \| Promise<string> \| ((name?: string, scopes?: string[]) => string) \| ((name?: string, scopes?: string[]) => Promise<string>)` | Parameter for OAuth2 security. Can be a string, Promise of string, or function taking optional name and scopes. |
| basePath     | `string`                                                                                                                                 | Override the default base path for API requests.                                                                |
| serverIndex  | `number`                                                                                                                                 | Override the default server index for API requests.                                                             |
| baseOptions  | `any`                                                                                                                                    | Base options to be applied to all axios calls.                                                                  |
| formDataCtor | `new () => any`                                                                                                                          | Custom FormData constructor for environments that don't support the native FormData class.                      |

## Error Handling

To make error handling easier, we provide a utility function named withErrorHandler. This function simplifies the process of managing errors and helps avoid repetitive try/catch blocks in your code.

While using withErrorHandler is not mandatory, we highly recommend it for cleaner and more maintainable code. If you prefer, you can always handle errors manually using traditional try/catch blocks.

### Usage example:

Using withErrorHandler

```typeScript
import { ZarbanUtils } from "zarban";
const { withErrorHandler } = ZarbanUtils;

const loginWithHandler = withErrorHandler<Wallet.JwtResponse>(
    "Wallet",
    () => authApi.loginWithEmailAndPassword(loginRequest),
    (response) => {
      console.log("Login successful!");
      console.log(`Token: ${response.data.token}`);
    }
  );

  const [response, error] = await loginWithHandler();
  if (error) {
    // you can do some addition works with error here!
    return error;
  }
```

Manual Error Handling

```typeScript
  try{
    const response = await authApi.loginWithEmailAndPassword(loginRequest)
    console.log("Login successful!");
    console.log(`Token: ${response.data.token}`);
  }catch(error){
    // handle different types of error here
    console.log(error)
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
