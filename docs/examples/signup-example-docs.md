# User Signup Example

This example demonstrates how to use the Zarban SDK to implement a user signup process. The example shows how to create a new user account by sending a signup request to the Zarban API.

## Prerequisites

Before running this example, make sure you have:

1. Installed the Zarban SDK:

```bash
npm install zarban
```

2. Access to the Zarban API (test environment)

## Code Example

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

## Step-by-Step Explanation

1. **Import Required Modules**

   ```typeScript
   import { Wallet, ZarbanUtils } from "zarban";
   const { withErrorHandler } = ZarbanUtils;
   ```

   These imports provide the necessary classes and functions to interact with the Zarban API.

2. **Configure the API Client**

   ```typeScript
    const cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
   });
   ```

   Creates a configuration object with the API endpoint

3. **Initialize the API Instance**

   ```typeScript
    const authApi = new Wallet.AuthApi.AuthApi(cfg);
   ```

   Creates an instance of the AuthApi class using the configured client.

4. **Prepare Signup Request**

   ```typeScript
    const signupRequest: Wallet.SignUpRequest = {
        email: "user@example.com",
        password: "yourSecurePassword",
   };
   ```

   Creates a signup request object with user credentials.

5. **Make the API Call**
   ```typeScript
    authApi.signupWithEmailAndPassword(signupRequest)
   ```
   Sends the signup request to the API and handles the response.

## Response Handling

The example includes error handling using withErrorHandler:

- On success: Prints a confirmation message and the response messages
- On failure: Catches `error` and prints the error details

## Expected Output

On successful signup:

```
Confirmation link sent successful!
Message: [Confirmation email details...]
```

On error:

```
Exception when calling DefaultApi->auth_signup_post: [Error details]
Error message: [Detailed error message]
```

## Important Notes

1. Replace `"user@example.com"` and `"yourSecuredPassword"` with actual user credentials
2. The example uses the test API endpoint (`testwapi.zarban.io`). For production use, update the host accordingly
3. Ensure proper password security practices when implementing in production
4. The API will send a confirmation email to the provided email address

## Error Handling

Common errors that might occur:

- Invalid email format
- Password doesn't meet security requirements
- Email already registered
- Network connectivity issues
- API server errors

## See Also

- [API Reference Documentation](../wallet)
- [Security Best Practices](security-best-practices.md)
