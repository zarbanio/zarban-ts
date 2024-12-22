# User Login Example

This example demonstrates how to implement user authentication using the Zarban SDK. It shows how to log in a user, handle the authentication token.

## Prerequisites

Before running this example, ensure you have:

1. Installed the Zarban SDK:

```bash
npm install zarban
```

2. Access to the Zarban API (test environment)

## API Specification

### Endpoint: `/auth/login`

- **Method**: POST
- **Description**: Login with email and password and get a JWT token.

### Request Format

```json
{
  "email": "example@domain.com",
  "password": "password"
}
```

#### Required Fields

| Field    | Type   | Description     | Example            |
| -------- | ------ | --------------- | ------------------ |
| email    | string | User's email    | example@domain.com |
| password | string | User's password | password           |

### Response Format

#### Success Response (200 OK)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

#### Error Responses

- **400 Bad Request**

```json
{
  "msg": "Bad request",
  "reasons": ["Invalid address"]
}
```

- **401 Unauthorized**

```json
{
  "msg": "Unauthorized",
  "reasons": ["Invalid credentials"]
}
```

- **404 Not Found**

```json
{
  "msg": "Not Found",
  "reasons": ["User not found"]
}
```

- **500 Internal Server Error**

```json
{
  "msg": "Internal Server Error",
  "reasons": ["Server error occurred"]
}
```

## Code Example

```typeScript
import { Wallet, ZarbanUtils } from "zarban";
const { withErrorHandler } = ZarbanUtils;

async function loginExample() {
  // Create and configure the Configuration object
  const cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
  });

  // Create an instance of the BaseAPI using the Configuration
  const authApi = new Wallet.AuthApi.AuthApi(cfg);

  // Prepare the login request data
  const loginRequest: Wallet.LoginRequest = {
    email: "user@example.com",
    password: "your_secure_password",
  };

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
  return response;
}

if (require.main === module) {
  loginExample().then((result) => {
    if (result instanceof Error) {
      process.exit(1);
    }
    process.exit(0);
  });
}
```

## Step-by-Step Explanation

1. **Configure API Client**

   ```typeScript
    const cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
   });
   ```

   Creates and configures the API client with the test environment endpoint.

2. **Initialize API Instance**

   ```typeScript
   const authApi = new Wallet.AuthApi.AuthApi(cfg);
   ```

   Creates an instance of the AuthApi for making API calls.

3. **Prepare Login Request**

   ```typeScript
   const loginRequest: Wallet.LoginRequest = {
    email: "user@example.com",
    password: "your_secure_password",
   };
   ```

   Creates a login request object with user credentials.

4. **Handle Authentication**

   ```typeScript
   const [response, error] = await loginWithHandler();
   if (error) {
        // you can do some addition works with error here!
        return error;
   }

    newCfg = new Wallet.Configuration({
        basePath: "https://testwapi.zarban.io",
        accessToken: response.token,
   });
   ```

   Sends login request and stores the authentication token for future requests.

## Error Handling

The example includes comprehensive error handling based on the API specification:

### Error Status Codes

1. **400 Bad Request**

   - Invalid email format
   - Missing required fields
   - Password format validation failure

2. **401 Unauthorized**

   - Invalid credentials
   - Account locked
   - Too many failed attempts

3. **404 Not Found**

   - User account doesn't exist
   - Account deleted or deactivated

4. **500 Internal Server Error**
   - Database connection issues
   - Server configuration problems
   - Internal service failures

### Error Handling Example

Error Handling is already done by withErrorHandler method but you can do more with error if you want

```typeScript
const [response, error] = await loginWithHandler();
  if (error) {
    // you can do some addition works with error here!
    return error;
  }
```

## Best Practices

1. **Credential Management**

   ```typeScript
   // DON'T store credentials in code
   const email = "user@example.com"  # Incorrect

   // DO use environment variables
   import * as dotenv from 'dotenv';
   // Load environment variables from the `.env` file
   dotenv.config();
   const email =  process.env.ZARBAN_USER_EMAIL
   ```

2. **Token Storage**

   ```typeScript
   // DO store token securely
   const saveToken = (token) => {
       // Use your secure storage method
   }

   // DO clear token on logout
   const logout = () => {
       // Clear stored token
   }
   ```

3. **Security Considerations**
   - Always use HTTPS for API calls
   - Implement rate limiting
   - Monitor for suspicious login attempts
   - Store tokens securely
   - Implement token refresh mechanisms
   - Clear tokens on logout
   - Handle token expiration

## See Also

- [API Reference Documentation](../wallet)
- [Security Best Practices](security-best-practices.md)
