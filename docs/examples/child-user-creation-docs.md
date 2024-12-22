# Child User Creation and Management

This example demonstrates how to create and manage child users using the Zarban SDK. It includes the process of authenticating as a superuser, creating a child user, and accessing the child user's profile.

## Prerequisites

Before running this example, ensure you have:

1. Installed the Zarban SDK:

```bash
npm install zarban
```

2. Superuser credentials with appropriate permissions
3. Access to the Zarban API (test environment)

## API Specification

### Endpoint: `/users/children`

- **Method**: POST
- **Description**: Create a child user
- **Authentication**: Required (Bearer Token)

### Request Format

```json
{
  "username": "john"
}
```

#### Required Fields

| Field    | Type   | Description         | Example |
| -------- | ------ | ------------------- | ------- |
| username | string | Child user username | "john"  |

### Response Format

#### Success Response (200 OK)

```json
{
  "username": "john"
  // Additional user properties
}
```

#### Error Responses

- **400 Bad Request**

```json
{
  "msg": "Bad request",
  "reasons": ["Invalid username format"]
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

async function createChildExample() {
  // Create and configure the Configuration object
  let cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
  });

  // Create an instance of the BaseAPI using the Configuration
  const authApi = new Wallet.AuthApi.AuthApi(cfg);

  // Constant superuser email and password
  const SUPERUSER_EMAIL = "user@example.com";
  const SUPERUSER_PASSWORD = "your_secure_password";

  // Superuser login
  const loginRequest: Wallet.LoginRequest = {
    email: SUPERUSER_EMAIL,
    password: SUPERUSER_PASSWORD,
  };

  // Call the login API
  const loginWithHandler = withErrorHandler<Wallet.JwtResponse>(
    "Wallet",
    () => authApi.loginWithEmailAndPassword(loginRequest),
    (_) => {
      console.log("Superuser login successful");
    }
  );

  const [loginResponse, loginError] = await loginWithHandler();
  if (loginError) {
    // you can do some addition works with error here!
    return loginError;
  }

  cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: loginResponse.token,
  });

  // Create a child user
  const childUsername = "child_user_test";
  let userApi = new Wallet.UserApi.UserApi(cfg);

  const createChildUserRequest: Wallet.CreateChildUserRequest = {
    username: childUsername,
  };

  const createChildUserWithHandler = withErrorHandler<Wallet.User>(
    "Wallet",
    () => userApi.createChildUser(createChildUserRequest),
    (response) => {
      console.log(`Child user created. Username: ${response.data.username}`);
    }
  );

  const [childResponse, createChildUserError] =
    await createChildUserWithHandler();
  if (createChildUserError) {
    // you can do some addition works with error here!
    return createChildUserError;
  }

  // Get child user's profile
  // Set the X-Child-User header
  cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: loginResponse.token,
    baseOptions: {
      headers: {
        "X-Child-User": childResponse.username,
      },
    },
  });
  userApi = new Wallet.UserApi.UserApi(cfg);
  // Make the profile request
  const getUserProfileWithHandler = withErrorHandler<Wallet.ProfileResponse>(
    "Wallet",
    () => userApi.getUserProfile(),
    (response) => {
      console.log("Child user profile:");
      console.log(response.data);
    }
  );

  const [UserProfile, UserProfileError] = await getUserProfileWithHandler();
  if (UserProfileError) {
    // you can do some addition works with error here!
    return UserProfileError;
  }

  // Remove the X-Child-User header after use
  cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: loginResponse.token,
  });
}

if (require.main === module) {
  createChildExample()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
```

## Step-by-Step Explanation

1. **Initialize API Client**

   ```typeScript
   let cfg = new Wallet.Configuration({
        basePath: "https://testwapi.zarban.io",
   });
    const authApi = new Wallet.AuthApi.AuthApi(cfg);

    cfg = new Wallet.Configuration({
        basePath: "https://testwapi.zarban.io",
        accessToken: loginResponse.token,
   });
    let userApi = new Wallet.UserApi.UserApi(cfg);
   ```

   Sets up the API client with the test environment endpoint.

2. **Superuser Authentication**

   ```typeScript
   const loginRequest: Wallet.LoginRequest = {
    email: SUPERUSER_EMAIL,
    password: SUPERUSER_PASSWORD,
   };

    const loginWithHandler = withErrorHandler<Wallet.JwtResponse>(
        "Wallet",
        () => authApi.loginWithEmailAndPassword(loginRequest),
        (_) => {
            console.log("Superuser login successful");
        }
        );

    const [loginResponse, loginError] = await loginWithHandler();
    if (loginError) {
    // you can do some addition works with error here!
    return loginError;
    }

    cfg = new Wallet.Configuration({
        basePath: "https://testwapi.zarban.io",
        accessToken: loginResponse.token,
    });
   ```

Authenticates the superuser and stores the access token.

3. **Create Child User**

```typeScript
const childUsername = "child_user_test";
  let userApi = new Wallet.UserApi.UserApi(cfg);

  const createChildUserRequest: Wallet.CreateChildUserRequest = {
    username: childUsername,
  };

  const createChildUserWithHandler = withErrorHandler<Wallet.User>(
    "Wallet",
    () => userApi.createChildUser(createChildUserRequest),
    (response) => {
      console.log(`Child user created. Username: ${response.data.username}`);
    }
  );

  const [childResponse, createChildUserError] =
    await createChildUserWithHandler();
  if (createChildUserError) {
    // you can do some addition works with error here!
    return createChildUserError;
  }
```

Creates a new child user account.

4. **Access Child User Profile**

   ```typeScript
   cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: loginResponse.token,
    baseOptions: {
      headers: {
        "X-Child-User": childResponse.username,
      },
    },
   });
   userApi = new Wallet.UserApi.UserApi(cfg);
   // Make the profile request
   const getUserProfileWithHandler = withErrorHandler<Wallet.ProfileResponse>(
    "Wallet",
    () => userApi.getUserProfile(),
    (response) => {
      console.log("Child user profile:");
      console.log(response.data);
    }
   );

    const [UserProfile, UserProfileError] = await getUserProfileWithHandler();
   ```

   Sets the required header and retrieves the child user's profile.

## Important Headers

| Header Name   | Description                     | Example Value    |
| ------------- | ------------------------------- | ---------------- |
| Authorization | Bearer token for authentication | Bearer eyJhbG... |
| X-Child-User  | Username of the child user      | child_user_test  |

## Error Handling

### Common Error Scenarios

1. **400 Bad Request**

   - Invalid username format
   - Username already exists
   - Missing required fields

2. **500 Internal Server Error**
   - Database connection issues
   - Internal service failures

### Error Handling Example

```typeScript
  if (UserProfileError) {
    // you can do some addition works with error here!
    return UserProfileError;
  }
```

## Best Practices

1. **Header Management**

   ```typeScript
   // DO clean up headers after use
   cfg = new Wallet.Configuration({
        basePath: "https://testwapi.zarban.io",
        accessToken: loginResponse.token,
    })

   // DON'T leave sensitive headers in place
   // Incorrect: Not removing headers after use
   ```

2. **Username Generation**

   ```typeScript
    // DO use safe username generation
    import { v4 as uuidv4 } from 'uuid';

    const safeUsername = `child_${uuidv4().replace(/-/g, '').slice(0, 8)}`;

    // DON'T use predictable usernames
    // Incorrect: sequential usernames
    // const username = `child_${sequentialNumber}`; // Avoid using sequential numbers
   ```

3. **Security Considerations**
   - Implement proper authentication checks
   - Use secure random username generation
   - Clean up sensitive headers after use
   - Implement proper error handling
   - Monitor child user creation activities
   - Implement rate limiting for creation requests

## See Also

- [API Reference Documentation](../wallet)
- [Security Best Practices](security-best-practices.md)
